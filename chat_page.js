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


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  function send()
  {
    user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
    msg = document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0  
    });
    document.getElementById("msg").value = "" ; 

  }




  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
//End code
    } });  }); }
getData();
