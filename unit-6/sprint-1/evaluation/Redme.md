-The project was about the management of an healhcare appoinment system this project includes the functionality of getting the data about the doctors and patients and the appoinmetns each of the doctor having.
-
- packages should be installed by running npm install
- use node index.js or nodemon index.js
- server will be started
- test the API using tools like Thunerclient and postman


the workflow of an project in such a way that if the testing clients or the frontend is sending the request to the backend then it will just get the data from the file (we are using the files as a database)

firstly the user will signup the credentials will be saved in the backend database with token, and at the time of the login the data will be compared that i stored in the backend and the user entered in the fiels if the data is matched the user is going the be logged in otherwise the user will get an pop up of invalif credentials

the request will be forwarded to the routes folder and then the routes sends the request to the controllers

controllers get the schema from the model and get the data to the routes and the forward to the frontend.

