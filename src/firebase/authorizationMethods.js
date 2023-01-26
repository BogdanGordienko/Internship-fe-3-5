import * as fb from '../firebase/init';
import firebaseCollectionTypes from './constants';

export const getFirebaseSignInRequest = async () => {
    try {
        let docId = '';

        const provider = new fb.firebase.auth.GoogleAuthProvider();
        const response = await fb.auth.signInWithPopup(provider);
        const user = response.user;
        const fireBaseRef = fb.firestore.collection(firebaseCollectionTypes.USERS);

        const query = await fireBaseRef
            .where('uid', '==', user.uid)
            .get();
        if (query.docs.length === 0) {
            await fireBaseRef.add({
                uid: user.uid,
                name: user.displayName,
                photoURL: user.photoURL,
                authProvider: 'google',
                email: user.email,
            })
                .then(docRef => docId = docRef.id);
        }

        return { uid: user.uid, docId }
    } catch (err) {
        console.error(err);
    }
};

export const firebaseSignOut = async docId => {
    if (docId) {
        const fireBaseUserRef = fb.firestore.collection(firebaseCollectionTypes.USERS);

        await fireBaseUserRef.doc(docId).delete();
    }

    await fb.auth.signOut();
};
