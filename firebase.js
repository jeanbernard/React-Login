import * from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBFPT2GBmhaXlxnI_B7u-3-Bk9I-2CXyvU",
  authDomain: "willisproject-cbd8a.firebaseapp.com",
  databaseURL: "https://willisproject-cbd8a.firebaseio.com/",
  storageBucket: "willisproject-cbd8a.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

module.exports.firebaseApp = firebaseApp;
