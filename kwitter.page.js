var firebaseConfig = {
    apiKey: "AIzaSyDIjwjL8_YZaNFKgpYwPnEaKvsylroMivE",
    authDomain: "kwitter-practice-779e3.firebaseapp.com",
    databaseURL: "https://kwitter-practice-779e3-default-rtdb.firebaseio.com",
    projectId: "kwitter-practice-779e3",
    storageBucket: "kwitter-practice-779e3.appspot.com",
    messagingSenderId: "40641214886",
    appId: "1:40641214886:web:cf4540147e95465b573767",
    measurementId: "G-1FKXVQTCG7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username=localStorage.getItem("username");
  roomname=localStorage.getItem("roomname");
  
function send() {
    mg_input_value=document.getElementById("mg_input").value;
firebase.database().ref(roomname).push({
    name:usernanme,
    message:mg_input_value,
    like:0
});
document.getElementById("mg_input").value=" ";
}
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
//<h4> name <img id="tickamrk" src="tick.png"> </h4>
name_thing="<h4>"+name+"<img id='tickmark'src='tick.png'></h4>";
//<h4 id="output_mg">message</h4>
mg_thing="<h4 id='output_mg'>"+message+"</h4>";
button_thing="<button class='like_button' id='"+firebase_message_id+"' value="+like;
span_thing="<span> Like:"+like+"</span></button><hr>";
row=name_thing+mg_thing+button_thing+span_thing;
document.getElementById("output").innerHTML+=row;
//End code
 } });  }); }
getData();
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
