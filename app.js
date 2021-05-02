
const dbRef = firebase.database().ref();
const usersRef = dbRef.child('users');
var config = {
    apiKey: "cAIzaSyBnSrCl0UvzIq1yrDMJ3zsdummy",
    authDomain: "asdfadsf-a56e7.firebaseapp.com",
    databaseURL: "httpss://asdfadsf-a56e7.firebaseio.com",
    projectId:  "uniband-c7c84",
    storageBucket: "asdfadsf-a56e7.appspot.com",
    messagingSenderId: "104313484945"
  };
  
  firebase.initializeApp(config);

  const userListUI = document.getElementById("userList");
usersRef.on("child_added", snap => {
    let user = snap.val();
    let $li = document.createElement("li");
    $li.innerHTML = user.name;
    $li.setAttribute("child-key", snap.key);
    $li.addEventListener("click", userClicked);
    userListUI.append($li);
});
