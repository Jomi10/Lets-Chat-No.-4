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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);


    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);


    window.location = "chat_room.html";
}



