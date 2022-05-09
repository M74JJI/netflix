import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { seedDatabase } from '../seed';
const firebaseConfig = {
    apiKey: 'AIzaSyC4SFi2P34o52vybBxNHZLfY1AgpDMeBcg',
    authDomain: 'netflix-b475d.firebaseapp.com',
    projectId: 'netflix-b475d',
    storageBucket: 'netflix-b475d.appspot.com',
    messagingSenderId: '81737567325',
    appId: '1:81737567325:web:d569f414204c3ba0b811b4',
};

const firebase = Firebase.initializeApp(firebaseConfig);
//seedDatabase(firebase);
export { firebase };
