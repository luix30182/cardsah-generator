import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey: 'AIzaSyDh2ewCoAlZ1SVfS7Qbik70lRZbGCk1leU',
	authDomain: 'cards-generator-3d25a.firebaseapp.com',
	databaseURL: 'https://cards-generator-3d25a.firebaseio.com',
	projectId: 'cards-generator-3d25a',
	storageBucket: '',
	messagingSenderId: '343651674854',
	appId: '1:343651674854:web:d229f87edfd64c1c66a927'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
