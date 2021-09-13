# Ecommerce Project

## Full Stack (REST API)

#### FrontEnd:

- React
  - Redux
  - Roputer (react-router-dom)
  - React Bootstrap

#### BackEnd:

- Node.js

#### DataBase (SQL):

- PostgreSQL

<br />

**I have similar project in my Github repo using the same frontend but using Django (Python) in backend.**

<br />

## Link to live verison [here](https://www.onlineshopsample.ca/)

<br />

![alt text](./resources/images/Preview.png)

## How to run?

- clone the project from github
- install requrements in virtual env
- Frontend is at eCommerce-React-Django\backend\frontend
- CD to Frontend and type "npm install" to intall fronend requreiments.
- Run the project by typing "python manage.py runserver". You can access to the local run on http://localhost:8000/#/. However this is using already built frontend.
- if you are interested in live frontend CD to the frontEnd folder and type "npm run". Now a new window will open to http://localhost:3000/#/
- if you make any change in frontend, cd to frontend and type "npm run build"

- Also you need to have set up Config Vars (AWS for images and database, DB for database) on setting.py:
  - AWS_ACCESS_KEY_ID
  - AWS_SECRET_ACCESS_KEY
  - DB_USERNAME
  - DB_PASS

Note that database is PostgreSQL hosted on AWS. Also images are hosted on AWS S3 Bucket.

Contact Info:
| Name | Email |
|---------------|--------------------|
|Ross Ghazi |Ross.ghazi@gmail.com|
