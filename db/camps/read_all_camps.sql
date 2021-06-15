SELECT campgrounds.*, campground_images.*
FROM campgrounds LEFT JOIN campground_images
ON campgrounds.campground_id = campground_images.campground_id