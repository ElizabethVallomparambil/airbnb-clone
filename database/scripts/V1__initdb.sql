create schema if not exists airbnb;
grant usage on schema airbnb to "postgresql";

create type airbnb.user_roles AS ENUM ('USER', 'ADMIN');
create type airbnb.booking_status AS ENUM ('CONFIRMED', 'PENDING', 'CANCELLED');

CREATE TABLE airbnb.user_data (
	id serial PRIMARY KEY,
    first_name varchar(96) not null,
	last_name varchar(96) not null,
	email varchar(255),
	phone text,
	user_role airbnb.user_roles
);

CREATE TABLE airbnb.listings
(
    id SERIAL PRIMARY KEY,
    name varchar(96) not null ,
    description text,
	address text,
    guests bigint,
	price NUMERIC (5, 2)
);

CREATE TABLE airbnb.bookings
(
    id SERIAL PRIMARY KEY,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
	booked_by bigint,
	listing bigint,
    status airbnb.booking_status,
    FOREIGN KEY(booked_by) REFERENCES airbnb.user_data(id),
    FOREIGN KEY(listing) REFERENCES airbnb.listings(id)

);

grant select,insert,update on airbnb.user_data to "postgresql";
grant select,insert,update on airbnb.bookings to "postgresql";
grant select,insert,update on airbnb.listings to "postgresql";