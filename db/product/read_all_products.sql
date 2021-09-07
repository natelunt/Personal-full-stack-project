SELECT trails.*, trail_images.*
FROM trails LEFT JOIN trail_images
ON trails.trail_id = trail_images.trail_id