var firebaseConfig = {
  apiKey: "AIzaSyAZO2kxIV0VYL-IZh738ndyGhwei9-DIUU",
  authDomain: "chitter-84aa0.firebaseapp.com",
  databaseURL: "https://chitter-84aa0-default-rtdb.firebaseio.com",
  projectId: "chitter-84aa0",
  storageBucket: "chitter-84aa0.appspot.com",
  messagingSenderId: "842920923889",
  appId: "1:842920923889:web:2bf710becc8724782a0f50"
};
firebase.initializeApp(firebaseConfig);


username = localStorage.getItem("user");
    document.getElementById("welcome").innerHTML = "Welcome " + username + "!";

function addRoom() {
      room_name = document.getElementById("room_input").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      }) ;
localStorage.setItem("room_name", room_name);
window.location = "ChitterPage.html";
}
function getData() { 
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("room-name" + Room_names);
      row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'> # " + Room_names + "</div> <hr>";
     document.getElementById("output").innerHTML += row;
      
      });});}
getData();

function redirectToRoomName(name) {
      console.log(room_name);
      localStorage.setItem("Room Name" , room_name);
      window.location = "ChitterPage.html";
}

function logout() {
      window.location = "index.html";
      localStorage.removeItem("user");
      localStorage.removeItem("RoomName");
}