/****************************************************************************************
*  WEB TECHNOLOGIES LAB – ALL QUESTIONS WITH INPUT
*  (Based on KMIT WT LAB RECORD – KR23) 
****************************************************************************************/

/*==============================================================================
    QUESTION 1(a)
    Write a JavaScript program which accepts a string as input and swap the case
    of each character.
    Filename: q1a_swapcase.js
==============================================================================*/
const readline = require('readline');

function q1a_swapCase() {
    const rl = readline.createInterface(process.stdin, process.stdout);
    rl.question('Enter text to swap case: ', (name) => {
        let x = name;
        let y = "";
        for (let i = 0; i < x.length; i++) {
            if (x.charAt(i) >= 'A' && x.charAt(i) <= 'Z')
                y += x.charAt(i).toLowerCase();
            else if (x.charAt(i) >= 'a' && x.charAt(i) <= 'z')
                y += x.charAt(i).toUpperCase();
            else
                y += x.charAt(i);
        }
        console.log(`Output is ${y}`);
        rl.close();
    });
}
// q1a_swapCase();


/*==============================================================================
    QUESTION 1(b)
    Write a JavaScript program to find the most frequent item of an array.
    Filename: q1b_most_frequent.js
==============================================================================*/
function q1b_mostFrequent() {
    const rl = readline.createInterface(process.stdin, process.stdout);
    rl.question('Enter array elements separated by space: ', (line) => {
        let arr1 = line.trim().split(/\s+/);
        let mf = 1;
        let m = 0;
        let item = arr1[0];

        for (let i = 0; i < arr1.length - 1; i++) {
            for (let j = i; j < arr1.length; j++) {
                if (arr1[i] == arr1[j]) m++;
                if (mf < m) {
                    mf = m;
                    item = arr1[i];
                }
            }
            m = 0;
        }
        console.log(item + " ( " + mf + " times ) ");
        rl.close();
    });
}
// q1b_mostFrequent();


/*==============================================================================
    QUESTION 1(c)
    Write a JavaScript program to remove duplicate items from an array.
    Filename: q1c_remove_duplicates.js
==============================================================================*/
function removeDuplicates(num) {
    let uniqueChars = [];
    num.forEach((c) => {
        if (!uniqueChars.includes(c)) {
            uniqueChars.push(c);
        }
    });
    return uniqueChars;
}

function q1c_run() {
    const rl = readline.createInterface(process.stdin, process.stdout);
    rl.question('Enter numbers separated by space: ', (line) => {
        let arr = line.trim().split(/\s+/);
        let result = removeDuplicates(arr);
        console.log("Original List: " + arr);
        console.log("Unique List: " + result);
        rl.close();
    });
}
// q1c_run();


/*==============================================================================
    QUESTION 1(d)
    Write a JavaScript program to perform a binary search.
    Filename: q1d_binary_search.js
==============================================================================*/
let q1d_iterativeFunction = function (arr, x) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === x) return true;
        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return false;
}

function q1d_run() {
    const rl = readline.createInterface(process.stdin, process.stdout);
    rl.question('Enter sorted array elements (space separated): ', (line) => {
        let arr = line.trim().split(/\s+/).map(Number);
        rl.question('Enter element to search: ', (x) => {
            let num = Number(x);
            console.log(q1d_iterativeFunction(arr, num));
            rl.close();
        });
    });
}
// q1d_run();


/*==============================================================================
    QUESTION 1(e)
    Write a JavaScript program to list the properties of a JavaScript object.
    Filename: q1e_list_properties.js
==============================================================================*/
let object_q1e = {
    name: 'Jack',
    age: 25,
    college: 'KMIT',
    year: 3,
    sem: 1
};
let properties_q1e = Object.keys(object_q1e);
console.log("Q1(e) properties:", properties_q1e);


/*==============================================================================
    QUESTION 1(f)
    Write a JavaScript function to check whether an object contains given property.
    Filename: q1f_check_property.js
==============================================================================*/
// Using hasOwnProperty()
let object_q1f = {
    name: 'Jack',
    age: 25,
    college: 'KMIT',
    year: 3,
    sem: 1
};
console.log("Q1(f) hasOwnProperty('name'):", object_q1f.hasOwnProperty('name'));

// Using 'in' operator
console.log("'name' in object_q1f:", 'name' in object_q1f);

// Comparing with undefined
console.log("object_q1f.name:", object_q1f.name);
console.log("object_q1f.fee:", object_q1f.fee);  // undefined


/*==============================================================================
    QUESTION 1(g)
    Write a JavaScript program to sort a list of elements using Quick sort.
    Filename: q1g_quick_sort.js
==============================================================================*/
function quick_Sort(origArray) {
    if (origArray.length <= 1) {
        return origArray;
    } else {
        var left = [];
        var right = [];
        var newArray = [];
        var pivot = origArray.pop();
        var length = origArray.length;
        for (var i = 0; i < length; i++) {
            if (origArray[i] <= pivot) {
                left.push(origArray[i]);
            } else {
                right.push(origArray[i]);
            }
        }
        return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
    }
}

function q1g_run() {
    const rl = readline.createInterface(process.stdin, process.stdout);
    rl.question("Enter numbers for quick sort (space separated): ", (line) => {
        let myArray = line.trim().split(/\s+/).map(Number);
        console.log("Original array: " + myArray);
        var sortedArray = quick_Sort(myArray);
        console.log("Sorted array: " + sortedArray);
        rl.close();
    });
}
// q1g_run();


/*==============================================================================
    QUESTION 1(h)
    Write a JavaScript program to implement Bubble Sort.
    Filename: q1h_bubble_sort.js
==============================================================================*/
function swap(arr, first_Index, second_Index) {
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}
function bubble_Sort(arr) {
    var len = arr.length, i, j, stop;
    for (i = 0; i < len; i++) {
        for (j = 0, stop = len - i; j < stop; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

function q1h_run() {
    const rl = readline.createInterface(process.stdin, process.stdout);
    rl.question("Enter numbers for bubble sort (space separated): ", (line) => {
        let myArray = line.trim().split(/\s+/).map(Number);
        console.log("Original array: " + myArray);
        var sortedArray = bubble_Sort(myArray);
        console.log("Sorted array: " + sortedArray);
        rl.close();
    });
}
// q1h_run();


/*==============================================================================
    QUESTION 1(i)
    Write a JS program to read from a JSON object and display the data in a table.
    Files: s1.json, index.html
==============================================================================*/

/*** File: s1.json ***/
{
  "student": [
    { "name": "Bhavana", "age": 20, "college": "KMIT", "year": 3, "sem": 1 },
    { "name": "Ram", "age": 21, "college": "JNTU", "year": 4, "sem": 2 },
    { "name": "John", "age": 26, "college": "KMEC", "year": 1, "sem": 1 },
    { "name": "Reena", "age": 19, "college": "NGIT", "year": 3, "sem": 1 }
  ]
}

/*** File: index.html (Q1(i)) ***/
<!DOCTYPE html>
<html>
<head>
  <title>Convert JSON Data to HTML Table</title>
  <style>
    th, td, p, input { font:14px Verdana; }
    table, th, td {
      border: solid 2px #DDD;
      border-collapse: collapse;
      padding: 2px 3px;
      text-align: center;
    }
    th { font-weight:bold; }
  </style>
</head>
<body>
  <input type="button" onclick="CreateTableFromJSON()" value="Create Table From JSON" />
  <p id="showData"></p>

  <script>
    function CreateTableFromJSON() {
      fetch("s1.json")
        .then(response => response.json())
        .then(data => {
          var col = [];
          for (var i = 0; i < data.student.length; i++) {
            for (var key in data.student[i]) {
              if (col.indexOf(key) === -1) {
                col.push(key);
              }
            }
          }

          var table = document.createElement("table");
          var tr = table.insertRow(-1);
          for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");
            th.innerHTML = col[i];
            tr.appendChild(th);
          }

          for (var i = 0; i < data.student.length; i++) {
            tr = table.insertRow(-1);
            for (var j = 0; j < col.length; j++) {
              var tabCell = tr.insertCell(-1);
              tabCell.innerHTML = data.student[i][col[j]];
            }
          }

          var divContainer = document.getElementById("showData");
          divContainer.innerHTML = "";
          divContainer.appendChild(table);
        });
    }
  </script>
</body>
</html>


/*==============================================================================
    QUESTION 1(j)
    Create a JS application that accepts student's details & marks and displays
    them like a mark sheet (with GPA display place).
    File: q1j_marksheet.html
==============================================================================*/
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student-Marks-Sheet</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div id="mydata"></div>

  <div id="myformdiv">
    <h3> Enter Student Details and Marks</h3>
    <form id="myForm" method="post">
      <label>Student name:</label>
      <input type="text" id="sname"><br><br>

      <label>Roll number:</label>
      <input type="text" id="rollno"><br><br>

      <label>Subject1 Marks:</label>
      <input type="text" id="sub1name" placeholder="sub1">
      <input type="number" id="marks1"><br><br>

      <label>Subject2 Marks:</label>
      <input type="text" id="sub2name" placeholder="sub2">
      <input type="number" id="marks2"><br><br>

      <label>Subject3 Marks:</label>
      <input type="text" id="sub3name" placeholder="sub3">
      <input type="number" id="marks3"><br><br>

      <input type="button" onclick="myFunction()" value="Submit">
    </form>
  </div>

  <script>
    function myFunction() {
      document.getElementById('myformdiv').style.display = 'none';

      let m1 = Number(document.getElementById('marks1').value);
      let m2 = Number(document.getElementById('marks2').value);
      let m3 = Number(document.getElementById('marks3').value);
      let total = m1 + m2 + m3;
      let gpa = (total / 30).toFixed(2); // simple GPA assumption

      let myInfo = `
      <div class='sdetails'>
      <h3> Student Details and Marks</h3>
      <table class="table-bordered table-primary">
        <tr>
          <td class="bg-primary"> Name</td>
          <td>${document.getElementById('sname').value}</td>
        </tr>
        <tr>
          <td class="bg-primary"> Hallticket Number: </td>
          <td>${document.getElementById('rollno').value}</td>
        </tr>
        <tr>
          <td>${document.getElementById('sub1name').value} Marks</td>
          <td>${m1}</td>
        </tr>
        <tr>
          <td>${document.getElementById('sub2name').value} Marks</td>
          <td>${m2}</td>
        </tr>
        <tr>
          <td>${document.getElementById('sub3name').value} Marks</td>
          <td>${m3}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>${total}</td>
        </tr>
        <tr>
          <td>GPA</td>
          <td>${gpa}</td>
        </tr>
      </table>
      </div>`;
      document.getElementById('mydata').innerHTML = myInfo;
    }
  </script>
</body>
</html>


/*==============================================================================
    QUESTION 2
    Write JS code in an HTML page such that based on location selected by user
    an AJAX request is made and weather details are fetched and displayed.
    File: weather.html
==============================================================================*/
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Weather App</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <style>
    #weather {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 50%;
      margin-left:25%;
      margin-right:15%;
    }
    #weather td, #weather th {
      border: 1px solid #ddd;
      padding: 8px;
    }
    #weather tr:nth-child(even){background-color: #f2f2f2;}
    #weather tr:hover {background-color: #ddd;}
    #weather th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #04AA6D;
      color: white;
    }
  </style>
  <script>
    function getWeather() {
      let request = new XMLHttpRequest();
      let zip = document.getElementById('tb1').value;
      request.open('GET',
        'https://api.openweathermap.org/data/2.5/weather?q=' +
        zip +
        '&appid=93f26e3c57081a6210de53b8dcfdfea4',
        true);
      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          let data = JSON.parse(request.responseText);
          document.getElementById('temp').innerHTML = data.main.temp + ' F';
          document.getElementById('country').innerHTML = data.sys.country;
          document.getElementById('city').innerHTML = data.name;
          let tim = new Date(data.sys.sunrise * 1000);
          document.getElementById('sunrise').innerHTML = tim;
          let tim1 = new Date(data.sys.sunset * 1000);
          document.getElementById('sunset').innerHTML = tim1;
          document.getElementById('windspeed').innerHTML = data.wind.speed;
          document.getElementById('humid').innerHTML = data.main.humidity;
        } else {
          console.log('failed connecting');
        }
      }
      request.onerror = function () {
        console.log("Error");
      }
      request.send();
    }
  </script>
</head>
<body>
  <div class="container">
    <div class="jumbotron text-center">
      <h1>Please enter City name/Zip code to get weather report.</h1>
      <input type="text" placeholder="enter city or zip code" id="tb1"><br><br>
      <button type="submit" value="Click for weather" onclick="getWeather()">Click me</button>
    </div>
    <table class="table-bordered table-striped" id="weather">
      <thead>
        <tr><th>Key</th><th>Value</th></tr>
      </thead>
      <tbody>
        <tr><td>Country</td><td><label id="country"></label></td></tr>
        <tr><td>City</td><td><label id="city"></label></td></tr>
        <tr><td>Temperature</td><td><label id="temp"></label></td></tr>
        <tr><td>Humidity</td><td><label id="humid"></label></td></tr>
        <tr><td>Sunrise</td><td><label id="sunrise"></label></td></tr>
        <tr><td>Sunset</td><td><label id="sunset"></label></td></tr>
        <tr><td>WindSpeed</td><td><label id="windspeed"></label></td></tr>
      </tbody>
    </table>
  </div>
</body>
</html>


/*==============================================================================
    QUESTION 3
    Write a Node JS program that accepts a port from the user and runs a node
    server at that port.
    File: server.js
==============================================================================*/
const http = require('http');

function runServerWithInputPort() {
    const rl = readline.createInterface(process.stdin, process.stdout);
    rl.question("Enter port number to run server: ", (p) => {
        const port = Number(p) || 8000;
        var server = http.createServer(function (req, res) {
            if (req.url == '/') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<html><body><p>This is home Page.</p></body></html>');
                res.end();
            } else if (req.url == "/student") {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<html><body><p>This is student Page.</p></body></html>');
                res.end();
            } else if (req.url == "/admin") {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<html><body><p>This is admin Page.</p></body></html>');
                res.end();
            } else res.end('Invalid Request!');
        });
        server.listen(port);
        console.log('Node.js web server at port ' + port + ' is running..');
        rl.close();
    });
}
// runServerWithInputPort();


/*==============================================================================
    QUESTION 4
    Write a NodeJS program to read from a file and display the content on screen.
    File: readfile.js
==============================================================================*/
function readFileWithInput() {
    const rl = readline.createInterface(process.stdin, process.stdout);
    rl.question("Enter filename to read: ", (fname) => {
        const fs = require('fs');
        try {
            var data = fs.readFileSync(fname, 'utf8');
            console.log(data);
        } catch (e) {
            console.log('Error:', e.stack);
        }
        rl.close();
    });
}
// readFileWithInput();


/*==============================================================================
    QUESTION 5
    Create a NodeJS programme that allows users to submit text and a file name,
    and if the file already exists, appends the text. Else creates a new file.
    File: appendfile.js
==============================================================================*/
function appendToFileWithInput() {
    const rl = readline.createInterface(process.stdin, process.stdout);
    rl.question("Enter file name: ", (fname) => {
        rl.question("Enter text to append: ", (text) => {
            var fs = require('fs');
            fs.appendFile(fname, text + "\r\n", function (err) {
                if (err) throw err;
                console.log('File is Appended successfully.');
                rl.close();
            });
        });
    });
}
// appendToFileWithInput();


/*==============================================================================
    QUESTION 6
    Create a student database in MongoDB with all the details of students of a class
    (Mongo shell commands)
    File: mongo_commands_q6.txt
==============================================================================*/
show dbs;
use student;
db.studentinfo.insert({name:"john", id:"20bd1a05051", course:"b.tech", branch:"cse"});
db.studentinfo.insert({name:"reena", id:"20bd1a0502", course:"M.tech", branch:"it"});
db.studentinfo.insert({name:"ram", id:"20bd1a0503", course:"b.tech", branch:"cse"});
db.studentinfo.find({});


/*==============================================================================
    QUESTION 7
    Create a form such that, based on student roll number provided by user, the 
    student details should be fetched (using ExpressJS).
    Files: app.js, controller/searchStudent.js, controller/searchdb.js,
           model/student.js, view/search.ejs
==============================================================================*/

/*** File: app.js (Q7) ***/
var express = require('express');
var app = express();
const html = require('ejs');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/student', function (error) {
    if (error) console.log(error);
    console.log("connection successful");
});

const searchStudentController = require('./controller/searchStudent');
const fetchController = require('./controller/searchdb');

app.get('/search', searchStudentController);
app.post('/student/fetch', fetchController);

app.listen(3000, () => console.log("App listening on port 3000!"));


/*** File: controller/searchdb.js ***/
const Student = require('../model/student.js');
module.exports = (req, res) => {
    Student.find({ id: req.body.rollno }, (error, student) => {
        if (error) {
            console.log(error);
            res.render('search', { stuData: [], view: false });
        } else {
            console.log(student);
            res.render('search', { stuData: student, view: true });
        }
    });
}


/*** File: controller/searchStudent.js ***/
module.exports = (req, res) => {
    student = [];
    res.render('search', { stuData: student, view: false });
}


/*** File: model/student.js (used in Q7,8,9) ***/
const mongoose_q = require('mongoose');
const Schema = mongoose_q.Schema;
const StudentSchema = new Schema({
    name: { type: String, required: true, unique: true },
    id: { type: String, required: true },
    course: { type: String, required: true },
    branch: { type: String, required: true }
});
const Student = mongoose_q.model('studentinfo', StudentSchema);
module.exports = Student;


/*** File: view/search.ejs (Q7 & reused later) ***/
<html>
<head>
  <title>Student Portal</title>
  <link rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarExample01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item active">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item"><a class="nav-link" href="#">Add new Student</a></li>
        <li class="nav-item"><a class="nav-link" href="./search.ejs">Search for an Student</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Update Student details</a></li>
      </ul>
    </div>
  </div>
</nav>
<br><br><br>
<h3 style="text-align: center;">Student Details </h3>
<form action="/student/fetch" method="POST">
  <input type="text" placeholder="Search by rollno" id="rollno" name="rollno"><br><br>
  <button type="submit">Fetch</button>
</form>
<br><br><br><br>
<% if(view){ %>
<table border="1" id="table">
  <tr>
    <th>Sl.No</th>
    <th>Name</th>
    <th>Roll No</th>
    <th>Course</th>
    <th>Branch</th>
  </tr>
  <% if(stuData.length!=0){ var i=1; stuData.forEach(function(data){ %>
  <tr>
    <td><%= i; %></td>
    <td><%= data.name %></td>
    <td><%= data.id %></td>
    <td><%= data.course %></td>
    <td><%= data.branch %></td>
  </tr>
  <% i++; }) %>
  <% } else { %>
  <tr><td colspan="5">No Data Found</td></tr>
  <% } %>
</table>
<% } %>
</body>
</html>


/*==============================================================================
    QUESTION 8
    Create a form with ExpressJS that enables CRUD operations on the student DB.
    (Uses same Student model; separate EJS pages for home, register, search, update)
    Files: home.ejs, register.ejs, search.ejs, update.ejs, plus Express routes
==============================================================================*/

/*** File: views/home.ejs (Q8 & 9) ***/
<html>
<head>
  <title>Student Portal</title>
  <link rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarExample01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item active"><a class="nav-link" aria-current="page" href="/">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="/page/register">Add new Student</a></li>
        <li class="nav-item"><a class="nav-link" href="/page/search">Search for an Student</a></li>
        <li class="nav-item"><a class="nav-link" href="/page/update">Update Student details</a></li>
      </ul>
    </div>
  </div>
</nav>
<br><br><br>
<h3 style="text-align: center;">Welcome to Student CRUD Application Portal </h3>
</body>
</html>


/*** File: views/register.ejs ***/
<html>
<head>
  <title>Student Portal</title>
  <link rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarExample01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item active"><a class="nav-link" aria-current="page" href="/">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="/page/register">Add new Student</a></li>
        <li class="nav-item"><a class="nav-link" href="/page/search">Search for a Student </a></li>
        <li class="nav-item"><a class="nav-link" href="/page/update">Update Student details</a></li>
      </ul>
    </div>
  </div>
</nav>
<br><br><br>
<h3 style="text-align: center;">Welcome to Student CRUD Application Portal </h3>
<form action="/customer/register" method="POST">
  <label for="sname">Student Name:</label>
  <input type="text" placeholder="Student Name" id="name" name="name"><br><br>
  <label for="id">Student Roll No:</label>
  <input type="text" placeholder="Roll No" id="id" name="id"><br><br>
  <label for="course">Course:</label>
  <input type="text" placeholder="Course" id="course" name="course"><br><br>
  <label for="branch">Branch:</label>
  <input type="text" placeholder="Branch" id="branch" name="branch"><br><br>
  <button type="submit">Add</button>
</form>
<h1><%= status %></h1>
</body>
</html>


/*** File: views/search.ejs (CRUD version – same structure as Q7 but nav links differ) ***/
/* (Code already shown above; reused here for CRUD search) */


/*** File: views/update.ejs ***/
<html>
<head>
  <title>Student Portal</title>
  <link rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarExample01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item active"><a class="nav-link" aria-current="page" href="/">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="/page/register">Add new Student</a></li>
        <li class="nav-item"><a class="nav-link" href="/page/search">Search for a Student </a></li>
        <li class="nav-item"><a class="nav-link" href="/page/update">Update Student details</a></li>
      </ul>
    </div>
  </div>
</nav>
<br><br><br>
<h3 style="text-align: center;">Welcome to the Express mongo connection Portal </h3>
<form action="/customer/update" method="POST">
  <input type="text" placeholder="Student Name to be updated" id="cname" name="cname"><br><br>
  <input type="text" placeholder="Student Name" id="name" name="name"><br><br>
  <input type="text" placeholder="Roll No" id="id" name="id"><br><br>
  <input type="text" placeholder="Course" id="course" name="course"><br><br>
  <input type="text" placeholder="Branch" id="branch" name="branch"><br><br>
  <button type="submit">Update</button>
</form>
<h1><%= status %></h1>
</body>
</html>


/*==============================================================================
    QUESTION 9
    Create a simple website for the CRUD operations on student DB and apply
    Express Routing.
    Files: controller/index.js, controller/newCustomer.js, controller/searchdb.js,
           controller/searchStudent.js, controller/storeCustomer.js,
           controller/updateCustomer.js (updatedoc.js), model/student.js,
           views/home.ejs, register.ejs, search.ejs, update.ejs, app.js
==============================================================================*/

/*** File: controller/index.js ***/
module.exports = (req, res) => {
    res.render('home');
}

/*** File: controller/newCustomer.js ***/
module.exports = (req, res) => {
    data = ' ';
    res.render('register', { status: data });
}

/*** File: controller/searchdb.js ***/  // (same as Q7 version)
const Student_c9 = require('../model/student.js');
module.exports = (req, res) => {
    Student_c9.find({ id: req.body.rollno }, (error, student) => {
        if (error) {
            console.log(error);
            res.render('search', { stuData: [], view: false });
        } else {
            console.log(student);
            res.render('search', { stuData: student, view: true });
        }
    });
}

/*** File: controller/searchStudent.js ***/
module.exports = (req, res) => {
    student = [];
    res.render('search', { stuData: student, view: false });
}

/*** File: controller/storeCustomer.js ***/
const Student_store = require('../model/student.js');
module.exports = (req, res) => {
    console.log(req.body);
    Student_store.create(req.body, (error, student) => {
        if (error) {
            console.log(error);
            data = 'Can Not Insert Student Details Please Try Again';
            res.render('register', { status: data });
        } else {
            data = 'Student Details Inserted Successfully';
            res.render('register', { status: data });
        }
    });
}

/*** File: controller/updateCustomer.js (updatedoc.js) ***/
const Student_upd = require('../model/student.js');
module.exports = (req, res) => {
    var test = {};
    if (req.body.name) test.name = req.body.name;
    if (req.body.id) test.id = req.body.id;
    if (req.body.course) test.course = req.body.course;
    if (req.body.branch) test.branch = req.body.branch;

    Student_upd.updateOne({ name: req.body.cname }, { $set: test }, (error, student) => {
        if (error) {
            console.log(error);
            data = 'Can Not Update Student Details Please Try Again';
            res.render('update', { status: data });
        } else {
            data = 'Student Details Updated Successfully';
            res.render('update', { status: data });
        }
    });
}

/*** File: app.js (main Express routing for Q9) ***/
const express9 = require('express');
const app9 = express9();
const path9 = require('path');
const mongoose9 = require('mongoose');

app9.use(express9.json());
app9.use(express9.urlencoded({ extended: true }));
app9.set('views', path9.join(__dirname, 'views'));
app9.set('view engine', 'ejs');

mongoose9.connect('mongodb://localhost/student', function (error) {
    if (error) console.log(error);
    console.log("connection successful");
});

const homeController = require('./controller/index');
const newCustomerController = require('./controller/newCustomer');
const searchStudentController9 = require('./controller/searchStudent');
const searchdbController9 = require('./controller/searchdb');
const storeCustomerController = require('./controller/storeCustomer');
const updateCustomerController = require('./controller/updateCustomer');

app9.get('/', homeController);
app9.get('/page/register', newCustomerController);
app9.get('/page/search', searchStudentController9);
app9.get('/page/update', (req,res)=> res.render('update',{status:' '}));

app9.post('/customer/register', storeCustomerController);
app9.post('/student/fetch', searchdbController9);
app9.post('/customer/update', updateCustomerController);

app9.listen(3000, () => console.log("Student CRUD App running on port 3000"));

/*** Views home.ejs, register.ejs, search.ejs, update.ejs 
     are the same as already listed in Question 8 section. ***/

/****************************************************************************************
* END OF ALL LAB PROGRAMS
****************************************************************************************/
