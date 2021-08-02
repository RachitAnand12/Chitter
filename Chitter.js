function signin() {
    username = document.getElementById("userInput").value
    localStorage.setItem("user" , username)
    window.location = "AddRoom.html"
}