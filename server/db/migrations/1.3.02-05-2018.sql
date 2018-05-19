CREATE OR REPLACE TABLE orders (
	   order_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	   user_id INT UNSIGNED NOT NULL,
       FOREIGN KEY (user_id)
	   		   REFERENCES admin(amin_id)
) ENGINE=INNODB;

CREATE OR REPLACE TABLE order_posts (
	   order_id INT UNSIGNED NOT NULL,
	   post_id INT UNSIGNED NOT NULL,
       count INT UNSIGNED NOT NULL DEFAULT 1,
       FOREIGN KEY (order_id)
	   		   REFERENCES orders(order_id),
       FOREIGN KEY (post_id)
	   		   REFERENCES post(post_id)
) ENGINE=INNODB;

