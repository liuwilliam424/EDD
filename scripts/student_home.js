import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUcuvOpLrA0L0tj1pE82YVwZIeBZcSfDI",
    authDomain: "parrot-cac27.firebaseapp.com",
    databaseURL: "https://parrot-cac27-default-rtdb.firebaseio.com",
    projectId: "parrot-cac27",
    storageBucket: "parrot-cac27.appspot.com",
    messagingSenderId: "40805265769",
    appId: "1:40805265769:web:53eeeede473a2680ce4df8",
    measurementId: "G-96J2CZKLYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

//initialize HTML elements as variables
let session_code_box = document.querySelector('#code_enter')
let session_button = document.querySelector('#code_button')

//helper function to write user data quickly
function writeUserData(UID, name, role) {
    console.log("writing user data")
    set(ref(db, 'Users/' + UID), {
        name: name,
        role: role,
    });
}

//user helper function to write profiles for each student to be stored in firebase
writeUserData(localStorage.getItem("UID"), localStorage.getItem("Name"), localStorage.getItem("Role"))

//button that brings to page with relevant session code with alert protection
session_button.onclick = () => {
    console.log("SessionID: " + session_code_box.value)
    localStorage.setItem("SessionID", session_code_box.value)
    let code = session_code_box.value
    if (code) {
        location.href = "../html/student_session_main.html"
    }
    else{
        alert("Please enter session code.")
    }
}

