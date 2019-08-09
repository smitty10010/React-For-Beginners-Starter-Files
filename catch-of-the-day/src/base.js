import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAmUgczFoeLCyMjh1V3qRTm9-hx4d2SvhA",
        authDomain: "catch-of-the-day-79f6b.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-79f6b.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;