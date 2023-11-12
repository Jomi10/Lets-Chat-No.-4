const firebaseConfig = {
      apiKey: "AIzaSyAgDXctlZScp7amgWkBCJJvRwyAvNeRF48",
      authDomain: "class-test-70a55.firebaseapp.com",
      databaseURL: "https://class-test-70a55-default-rtdb.firebaseio.com",
      projectId: "class-test-70a55",
      storageBucket: "class-test-70a55.appspot.com",
      messagingSenderId: "340203235878",
      appId: "1:340203235878:web:2ceaec6cbccdc374c054e7"
    };
    
    
  // Initialize Firebase
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}