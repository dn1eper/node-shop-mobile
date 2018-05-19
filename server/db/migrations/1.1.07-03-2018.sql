CREATE OR REPLACE TABLE booking (
	   booking_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	   name VARCHAR(40) NOT NULL UNIQUE,
	   description TEXT,
	   price DECIMAL(6,2) UNSIGNED NOT NULL
) ENGINE=INNODB;

CREATE OR REPLACE TABLE booking_image (
	   booking_id INT UNSIGNED,
	   src VARCHAR(100) NOT NULL,
	   FOREIGN KEY (booking_id)
	   REFERENCES booking(booking_id)
) ENGINE=INNODB;

CREATE OR REPLACE TABLE booking_tag (
	   booking_id INT UNSIGNED NOT NULL,
	   tag_name VARCHAR(30) NOT NULL,
	   FOREIGN KEY (booking_id)
	   REFERENCES booking(booking_id)
) ENGINE=INNODB;
