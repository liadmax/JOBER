//firebase config key
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
apiKey: "AIzaSyBbSudik36dlILs4GeB69dlKttirTRfMc0",
authDomain: "fir-aute-e590a.firebaseapp.com",
projectId: "fir-aute-e590a",
storageBucket: "fir-aute-e590a.appspot.com",
messagingSenderId: "5589528928",
appId: "1:5589528928:web:772409aa5c2c0d7b77ee05"
};

if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
};

export { firebase };



