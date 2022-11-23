//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCbG3QweGb23PzKKZgoNnvu_MluDTM0V6M",
      authDomain: "kwitter-f58be.firebaseapp.com",
      databaseURL: "https://kwitter-f58be-default-rtdb.firebaseio.com",
      projectId: "kwitter-f58be",
      storageBucket: "kwitter-f58be.appspot.com",
      messagingSenderId: "83897536316",
      appId: "1:83897536316:web:717d68647ac6684c535839"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  function send() {
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
  });
  document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }