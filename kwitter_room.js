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
    get_name=localStorage.getItem("username");
    document.getElementById("welcome").innerHTML="Welcome " +get_name + "!";
    function add_roomname() {
          input_value=document.getElementById("room_name").value;
   firebase.database().ref("/").child(input_value).update({
         purpose:"adding room name"
   });
     localStorage.setItem("roomname",input_value);
    window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
//<div id="Room_names">#Room_names</div><hr>
output_things="<div id=" +Room_names + "onclick='to_otherooms(this.id)'>#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML += output_things;
      });});}
getData();
function to_otherooms(name) {
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitter.paage.html"
}
function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
