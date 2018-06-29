// src/client.js
//firebase config

const firebase = require('firebase')

const { FIREBASE_KEY, FIREBASE_DOMAIN, FIREBASE_URL, FIREBASE_ID, FIREBASE_BUCKET, FIREBASE_SENDER_ID } = process.env;

// var config = {
//     apiKey: "AIzaSyBVeOnEW8ePWFckfTPchwPOUsxNEWT5JFs",
//     authDomain: "peoples-protest.firebaseapp.com",
//     databaseURL: "https://peoples-protest.firebaseio.com",
//     projectId: "peoples-protest",
//     storageBucket: "peoples-protest.appspot.com",
//     messagingSenderId: "1086259355557"
//   };
var config = {
  apiKey: FIREBASE_KEY,
  authDomain: FIREBASE_DOMAIN,
  databaseURL: FIREBASE_URL,
  projectId: FIREBASE_ID,
  storageBucket: FIREBASE_BUCKET,
  messagingSenderId: FIREBASE_SENDER_ID
};

firebase.initializeApp(config);

module.exports.database = firebase.database();
module.exports.ref = firebase.database().ref();
module.exports.auth = firebase.auth;
module.exports.provider = new firebase.auth.FacebookAuthProvider();
