var firebaseConfig = {
  apiKey: "AIzaSyA4tYQ4FcSuXkAvzzvl1SCqEZLUoDB6EH0",
  authDomain: "tampa-athletic-club.firebaseapp.com",
  databaseURL: "https://tampa-athletic-club.firebaseio.com",
  projectId: "tampa-athletic-club",
  storageBucket: "tampa-athletic-club.appspot.com",
  messagingSenderId: "731010712869",
  appId: "1:731010712869:web:e296407c8db17b77a7c6cc",
  measurementId: "G-2LTDBMQNRK",
};

firebase.initializeApp(firebaseConfig);
// // firebase.analytics();
// // Get a reference to the database service
// const database = getDatabase(app);

const auth = firebase.auth();

function signUp() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  const promise = firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);

  promise.catch((e) => alert(e.message));

  alert("Signed Up");
}

function signIn() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  const promise = firebase.auth().signInWithEmailAndPassword(email, password);

  promise.catch((e) => alert(e.message));

  alert("Signed In" + email);

  // would need a fetch or get request to get the token from backend
  //localStorage.setItem("Token", token)

  //Take user to different page
  // changing window location
  const token = localStorage.getItem("Token");
  window.location.href = "https://rowingevolved.web.app/UserProfile.html";
}

function signOut() {
  auth.signOut();
  alert("Signed Out");
}

auth.onAuthStateChanged(function (user) {
  if (user) {
    //is signed in
    var email = user.email;
    alert("Active User " + email);
    window.location.href = "https://rowingevolved.web.app/UserProfile.html";
  } else {
    //no user is signed in
    alert("No active user");
  }
});

function fetchUser() {
  fireb;
}
