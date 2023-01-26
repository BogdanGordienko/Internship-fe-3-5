import * as fb from './init';
import firebaseCollectionTypes from './constants';

export const sendMessageRequest = async value => {
    const user = fb.auth.currentUser;

    await fb.firestore.collection(firebaseCollectionTypes.MESSAGES).add({
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: value,
        createdAt: fb.firebase.firestore.FieldValue.serverTimestamp(),
    });
}
