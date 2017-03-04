/**
 * Created by taimoortariqdev on 3/4/2017.
 */


var config = {
    apiKey: "AIzaSyD1iokl1Lu0sWNMHa-oyMo5HH8NNtHC5MQ",
    authDomain: "iba-pro.firebaseapp.com",
    databaseURL: "https://iba-pro.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "1022078293016"
};

var mainApp = firebase.initializeApp(config);
var referenceFirebase = mainApp.database().ref();
