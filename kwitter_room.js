
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdbuLkRjWTAA85RNyXgJTxUefcLS-WNOU",
    authDomain: "kwitter-c0860.firebaseapp.com",
    projectId: "kwitter-c0860",
    storageBucket: "kwitter-c0860.appspot.com",
    messagingSenderId: "179801080849",
    appId: "1:179801080849:web:1d874b64abdde6fd991db0"
  };
   firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("Username");
   document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

   function addroom() {
          room_name = document.getElementById("room_name").value;
 
         localStorage.setItem("Roomname",room_name);
     
         window.location = "kwitter_page.html";

         firebase.database().ref("/").child(room_name).update({
               purpose: "Adding Room Name"
         });
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   });});}
getData();