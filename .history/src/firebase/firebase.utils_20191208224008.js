import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDGeF8pWkh_Z5yuyPwiDutJjDAO0G3ys2s',
  authDomain: 'commerce-store.firebaseapp.com',
  databaseURL: 'https://commerce-store.firebaseio.com',
  projectId: 'commerce-store',
  storageBucket: 'commerce-store.appspot.com',
  messagingSenderId: '750363815853',
  appId: '1:750363815853:web:5808c37a971be43a773b24'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
