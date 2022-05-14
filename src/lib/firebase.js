/* eslint-disable no-console */
/* eslint-disable indent */

import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import seed file

// import { seedDatabase } from '../seed';

const config = {
    apiKey: 'AIzaSyDfUdcynqHxDz9dpyvXWkZvOxXdU4ExIC0',
    authDomain: 'instaclone-9b3e4.firebaseapp.com',
    projectId: 'instaclone-9b3e4',
    storageBucket: 'instaclone-9b3e4.appspot.com',
    messagingSenderId: '835464344656',
    appId: '1:835464344656:web:f64cfc063cedc2f1030d55',
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = firebase.firestore;

// call seed file
// seedDatabase(firebase);

export { firebase, FieldValue };
