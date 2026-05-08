package com.example.meetmates.event.repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.meetmates.activity.model.Activity;
import com.example.meetmates.event.model.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, UUID> {

    // =========================
    // BASIC
    // =========================

    List<Event> findByDeletedAtIsNull();

    Page<Event> findByDeletedAtIsNull(Pageable pageable);

    List<Event> findByActivity(Activity activity);

    // =========================
    // SAFE FETCH (NO COLLECTION)
    // =========================

@Query("""
  SELECT DISTINCT e FROM Event e
  LEFT JOIN FETCH e.activity
  LEFT JOIN FETCH e.address
  LEFT JOIN FETCH e.participants p
  LEFT JOIN FETCH p.user
  WHERE e.id = :id
    AND e.deletedAt IS NULL
""")
Optional<Event> findByIdWithBasicDetails(UUID id);

@Query("""
  SELECT DISTINCT e FROM Event e
  LEFT JOIN FETCH e.activity a
  LEFT JOIN FETCH e.address addr
  LEFT JOIN FETCH e.participants p
  LEFT JOIN FETCH p.user
  WHERE a.id = :activityId
    AND e.deletedAt IS NULL
""")
List<Event> findActiveByActivityIdWithDetails(UUID activityId);

    // =========================
    // SEARCH (SAFE)
    // =========================

@Query("""
  SELECT DISTINCT e FROM Event e
  JOIN FETCH e.activity a
  LEFT JOIN FETCH e.address addr
  LEFT JOIN FETCH e.participants p
  LEFT JOIN FETCH p.user
  WHERE e.deletedAt IS NULL
    AND (
      LOWER(e.title) LIKE LOWER(CONCAT('%', :query, '%'))
      OR LOWER(a.name) LIKE LOWER(CONCAT('%', :query, '%'))
      OR LOWER(CONCAT(
        COALESCE(addr.street, ''), ' ',
        COALESCE(addr.postalCode, ''), ' ',
        COALESCE(addr.city, '')
      )) LIKE LOWER(CONCAT('%', :query, '%'))
    )
""")
List<Event> searchActiveEvents(String query);

}