# backend


## Rent-Tech API Guide


## Schema

Users

Field    |   Type    |  Notes
------   |   -----   | -------
id       | integer   | primary Key and autoincrements
username | string    | required and unique
password | string    | required
role     | integer   | Renter == 1, Lender == 2 (when creating an account on the frontend side this will be a checkbox)

Items

Field    |   Type    |  Notes
------   |   -----   | -------
id       | integer   | primary Key and autoincrements
name     | string    | required 
image_url | string   | required item image (copy image address )
price     | string   | required
description | string | required
location    | string | required
type        | string  | required
deposit     | string  | required
renter      | string  | required, if renter type the your username 



## API


BASE URL :

