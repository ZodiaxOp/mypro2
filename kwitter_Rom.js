var firebaseConfig = {
    apiKey: "AIzaSyAL7oJ6npHQzKLvaXnOiX2ku93v8jmYvjE",
    authDomain: "mypro2-6ec2.firebaseapp.com",
    databaseURL: "https://mypro2-6ec2.firebaseio.com",
    projectId: "mypro2-6ec2",
    storageBucket: "mypro2-6ec2.appspot.com",
    messagingSenderId: "321690875571",
    appId: "1:321690875571:web:5bebd84d8fe59443f2e2c6",
    measurementId: "G-KXF333HD1V"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}



function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}


function redrictToRoomName(name) {
    console.log(name)
    localStorage.setItem("room_name", name)
    window.location = "kwitter_page.html"

}