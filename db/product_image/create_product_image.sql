INSERT INTO product_images (product_id, url)
values (${product_id}, ${url}) RETURNING *;