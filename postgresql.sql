CREATE TABLE hmo (
  id serial,
  hmo_name VARCHAR(25) NOT NULL,

  PRIMARY KEY (id)
);

CREATE TABLE manufacturer (
  id serial,
  manufacturer_name VARCHAR(25) NOT NULL,

  PRIMARY KEY (id)
);





CREATE TABLE vaccination (
  id serial,	
  manufacturer_id int NOT NULL,
  vacc_date timestamp NOT NULL,

  PRIMARY KEY (id),
  CONSTRAINT fk_manufacturer_id FOREIGN KEY (manufacturer_id) REFERENCES manufacturer (id)
);

CREATE TABLE users (
  id serial,
  hmo_id int NOT NULL,
  first_name VARCHAR(25) NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  born_date timestamp NOT NULL,
  phone VARCHAR(9) NOT NULL,
  per_phone VARCHAR(9) NOT NULL,
	
  PRIMARY KEY (id),
  FOREIGN KEY (hmo_id) REFERENCES hmo (id)
);

CREATE TABLE addresses (
  user_id int NOT NULL,
  street VARCHAR(30) NOT NULL,
  city VARCHAR(30) NOT NULL,
  number_house int NOT NULL,
  PRIMARY KEY (user_id),
  CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE user_sick_details (
  user_id int NOT NULL,
  sick_date timestamp NOT NULL,
  recover_date timestamp NOT NULL,
  PRIMARY KEY (user_id),
  CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE users_vaccination (
  user_id int NOT NULL,
  vaccination_id int NOT NULL,
  PRIMARY KEY (user_id, vaccination_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE,
  FOREIGN KEY (vaccination_id) REFERENCES vaccination(id) ON UPDATE CASCADE
);