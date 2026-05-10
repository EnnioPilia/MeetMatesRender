-- Supprime les lignes orphelines
DELETE FROM event_user eu
WHERE NOT EXISTS (
    SELECT 1
    FROM users u
    WHERE u.user_id = eu.user_id
);

-- Ajoute la FK avec cascade
ALTER TABLE event_user
ADD CONSTRAINT fk_event_user_user
FOREIGN KEY (user_id)
REFERENCES users(user_id)
ON DELETE CASCADE;