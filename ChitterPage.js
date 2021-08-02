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

  room_name = localStorage.getItem("room_name")
  username = localStorage.getItem("user")

function getData() { {firebase_message_id = childKey;
       messageData = childData;
       console.log(firebase_message_id);
       console.log(messageData);
       name = messageData['name'];
       message = messageData['message'];
       like = messageData['like'];
       nameWithTag = "<h3>" + name + " </h3>";
       message_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
       buttonTag = "<button class = 'btn btn-warning' id = " + firebase_message_id + " value = " + like +  " onclick = 'updateLike(this.id)'> " ; ""

       spanTag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like : " +  like + "</span> </button> <hr> "
       row = nameWithTag + message_tag + buttonTag + spanTag;  
       document.getElementById("output").innerHTML += row;
    } ;  ; 

getData();

function updateLike(messageId) {
buttonId = messageId
Likes = document.getElementById(buttonId).value;
updatelikes = Number(Likes) + 1;
console.log(updatelikes);
firebase.database().ref(room_name).child(messageId).update({
     like : updatelikes
});
}
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}


function send() {
    Message = document.getElementById("messageInput").value;
    firebase.database().ref(RoomName).push({
          like: 0,
          message: msg,
          name:  username
    });
    document.getElementById("messageInput").value = "";
} }