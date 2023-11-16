<div align="center"><h1># L5MissionOne</h1>
<br />
Mission One for Level 5 Advanced Software Developer</div>

<h3>ABOUT THE PROJECT:</h3>

-->I struggled a lot with this Mission despite watching and reading all required and relevant recommended resources. I especially struggled with comprehending testing and the TDD environment and implementation.

-->But, as per all Missions at Mission Ready HQ, I learned a lot as well.

-->This is the first Mission where I haven't completed all of the tasks provided, but I will be meeting the Trainer (Andrew) one-one within the next few days for help to complete all tasks (remaining tasks are completing functional and passing tests, and editing the API to look more professional)

__________________________________

<h3>BUILT WITH:</h3>
1. JavaScript (Vanilla)
<br />-->I was considering using TypeScript, but after our TDD session, it seemed like you can show a larger array of errors in your testing with JS
<br />-->I was tossing up, but considering that I struggled a lot with this mission, it was probably just as well

2. Node JS

3. (the help of) Postman

<h3>DEPENDENCIES:</h3>

1. Express JS
2. Mocha (npm test)
3. Chai
4. Nodemon (npm run dev)

<h3>GETTING STARTED:</h3>

1. Create Folder in VS Code (e.g. L5MissionOne)
2. Open Integrated Terminal from that folder
3. In terminal: git clone https://github.com/Jaxeus/L5MissionOne.git
4. In terminal: npm install (to install node_modules)
5. In terminal: npm run dev (to run nodemon server.js) OR node server.js

______________________________________

<h3>MISSION TASKS:</h3>

Mission tasks 1, 2, and 3 are in the Word Document attached to submission. <strong style="color: red;">Also attached to the end of this README file are images of tasks 1, 2, and 3 in order.</strong> 

Task 4 is learning about TDD (video - watched)

From task 5, I chose to work with the 1st API:

API 1. Convert "Model" and "Year" of a car to a suggested "Car Value"

This API takes 2 parameters as input in JSON format that includes - the "model" (e.g. "Civic") and a numeric "year" of a car (e.g. 2014).  And the output is a JSON format with the suggested value for the car, such as "$6,614".  Here are the example specifications and business rules of conversion:

INPUT	OUTPUT	ERROR OUTPUT
{ model: "Civic"; year: 2014 }	{ car_value: 6614 }	{ error: "there is an error"}
 

BUSINESS RULES

Car_value is calculated by adding up the positions of alphabets of the letters in the name, times a hundred, and add the year value.  Position of alphabet means the letter in the order of alphabets (e.g. A is the first letter, so it is 1.  Z is the last letter, so it is 26).  Space and any other signs are ignored.   For example, a "Civic" in year 2014 will be worth (3 + 9 + 22 + 9 + 3) * 100 + 2014 = $6,614.  If input values are not valid, return an error.

______________________________________

Server.js in the git repository contains the API I created and the variables and functions etc. associated. There are many comments illustrating choices I made and why I made them. 

api.test.js contains the tests, incomplete (but will endeavour to complete them with Andrew's help)

The practise folder can be ignored. I just used a practise.js file to try out a few ideas while trying to figure out how to create a function to turn the car model into a value, given the specifics of the business rules above. As well as including the year of the car, which influences the value of the car for the purposes of Turners Car Insurance.

Thank you for reading,
<br />Jason 😊

________________________________________

<h4>Task 1. Identify Stakeholders</h4>
<br />
<img width="500" alt="Identifying Stakeholders Matrix image" src="https://github.com/Jaxeus/L5MissionOne/assets/140988744/ec8970c8-e796-45dc-bd4b-55a5923e1563">

___________________________

<h4>Task 2. Understand Context of a Project</h4>
<br />
<img width="500" alt="Project-Start Considerations image" src="https://github.com/Jaxeus/L5MissionOne/assets/140988744/cb7e3f4e-4450-4c78-9a8d-0ed0354e2a32">

___________________________

<h4>Task 3. Familiarise with tool for Task Management</h4>
<br />
<img width="500" alt="Jira Kanban Board image" src="https://github.com/Jaxeus/L5MissionOne/assets/140988744/1e842ed7-6e11-4709-82f2-609f77d0905e">
