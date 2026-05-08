package com.example.meetmates.event.repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.meetmates.event.model.EventUser;
import com.example.meetmates.event.model.EventUser.ParticipantRole;

public interface EventUserRepository extends JpaRepository<EventUser, UUID> {

    Optional<EventUser> findByEventIdAndUserId(UUID eventId, UUID userId);

    List<EventUser> findAllByUserId(UUID userId);

    List<EventUser> findAllByUserIdAndRole(UUID userId, ParticipantRole role);

@Query("""
    SELECT eu
    FROM EventUser eu
    JOIN FETCH eu.event e
    JOIN FETCH eu.user u
    LEFT JOIN FETCH e.address
    LEFT JOIN FETCH e.activity
    LEFT JOIN FETCH e.participants p
    LEFT JOIN FETCH p.user
    WHERE u.id = :userId
    AND eu.role = :role
    AND eu.participationStatus NOT IN :excludedStatuses
    AND e.deletedAt IS NULL
""")
List<EventUser> findAllActiveByUserIdAndRoleWithEvent(
        UUID userId,
        ParticipantRole role,
        List<EventUser.ParticipationStatus> excludedStatuses
);

    // ✅ IMPORTANT : récupérer les participants d’un event (remplace JOIN FETCH)
    List<EventUser> findAllByEventId(UUID eventId);

    // ✅ version avec user chargé (si besoin)
    @Query("""
        SELECT eu FROM EventUser eu
        JOIN FETCH eu.user
        WHERE eu.event.id = :eventId
        """)
    List<EventUser> findAllByEventIdWithUser(UUID eventId);

    @Query("""
        SELECT eu
        FROM EventUser eu
        JOIN FETCH eu.event e
        JOIN FETCH eu.user u
        LEFT JOIN FETCH e.address
        LEFT JOIN FETCH e.activity
        WHERE eu.user.id = :userId
        AND eu.role = :role
        AND e.deletedAt IS NULL
        """)
    List<EventUser> findActiveByUserIdAndRole(
            UUID userId,
            ParticipantRole role
    );
}
