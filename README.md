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

Field       |   Type    |  Notes
------      |   -----   | -------
id          | integer   | primary Key and autoincrements
name        | string    | required 
image_url   | string    | required item image (copy image address )
price       | string    | required
description | string    | required
location    | string    | required
type        | string    | required
deposit     | string    | required
renter      | string    | required, if renter type the your username 



## API


BASE URL :


Table of Contents

Type       |   Path     |  Notes
------      |   -----   | -------
POST         |  /api/auth/register  | register a new user
POST        |  /api/auth/login       | login an user
GET         |  /api/items            | gets list of all Items
POST        |  /api/items     | (Renter only) creates a new item post
GET         |  /api/items/:id    | returns the item with matching id
PUT         |  /api/items/:id     | (Renter only) updates item
DELETE      |  /api/items/:id      | (Renter only) Deletes item


# Examples

## POST/api/auth/register

request data:

```bash
{
    "username": "test",
    "password": "password",
    "role"    :  1
}
```
response data:

```bash
{
    "data": {
        "id": 3,
        "username": "renter1",
        "password": "$2a$08$muRLXzBLBgv3VxN6Nn2jg.bKtjkgKUig3OOeip4vf4337hKqdiVDi",
        "role": 1
    }
}
```
## POST/api/auth/login

request data:

```bash
{
   

    "username": "test",
    "password": "password",
   
}
```
response data:

```bash
{
    "message": "welcome test!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6InJlbnRlcjEiLCJyb2xlIjoxLCJpYXQiOjE1OTI1MjUyMzksImV4cCI6MTU5MjUzMjQzOX0.bHrUDHPzPKClKMVh-Swo3wz_rNMyviOJdtAvsOwn04A"
}
```

## GET/api/items

request data:

```bash
 
{
    "only if logged in"

    "username": "test",
    "password": "password",
   
}
```
response data:

```bash
{
   "list of all items"
}
```
## POST/api/items

request data:

```bash
 
{
    "only if logged in as RENTER "
    
    "name": "item name",
   "image_url": "image link address",
   "price": "item price",
   "description": "item description",
   "location": "renter location",
   "type": "type of item",
   "deposit": 'deposit',
   "renter": "renter name"

   
}
```
response data:

```bash
{
   "item created message"
}
```

## GET/api/items/:id

request data:

```bash
 
{
    "only if logged in "
    "Add the id of the item you want at the end of the url /1"
    
  

   
}
```
response data:

```bash
{
    "one item returned "

     "name": "item name",
   "image_url": "image link address",
   "price": "item price",
   "description": "item description",
   "location": "renter location",
   "type": "type of item",
   "deposit": 'deposit',
   "renter": "renter name"
}
```

## PUT/api/items/:id

request data:

```bash
 
{
    "only if logged in as RENTER "
    "Add the id of the item you want at the end of the url /1"
    "change data fields" 
    
    "name": "item name (changed)",
   "image_url": "image link address",
   "price": "item price (changed)",
   "description": "item description",
   "location": "renter location",
   "type": "type of item",
   "deposit": 'deposit (changed)',
   "renter": "renter name"

   
}
```
response data:

```bash
{
    "updated item"
    
     "name": "item name ",
   "image_url": "image link address",
   "price": "item price",
   "description": "item description",
   "location": "renter location",
   "type": "type of item",
   "deposit": 'deposit',
   "renter": "renter name"
}
```

## DELETE/api/items/:id

request data:

```bash
 
{
    "only if logged in as RENTER "
    "Add the id of the item you want at the end of the url /1"
   
    
    "name": "item name ",
   "image_url": "image link address",
   "price": "item price ",
   "description": "item description",
   "location": "renter location",
   "type": "type of item",
   "deposit": 'deposit ',
   "renter": "renter name"

   
}
```
response data:

```bash
{
    "item deleted"
    
}
```