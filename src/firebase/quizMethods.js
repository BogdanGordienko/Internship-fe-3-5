import * as fb from './init';
import firebaseCollectionTypes from './constants';

export const sendAddQuestionsRequest = async questions => {
    let questionsDocId = '';

    const fireBaseRef = fb.firestore.collection(firebaseCollectionTypes.QUESTIONS);
    const query = await fireBaseRef
        .get();
    if (query.docs.length === 0) {
        await fireBaseRef.add({ questions: questions })
            .then(docRef => questionsDocId = docRef.id);
    }

    return questionsDocId;
};

export const sendAddUserReadinessRequest = async () => {
    const user = fb.auth.currentUser;

    let userReadinessDocId = '';

    const fireBaseRef = fb.firestore.collection(firebaseCollectionTypes.USERS_READINESS);
    const query = await fireBaseRef
        .where('uid', '==', user.uid)
        .get();
    if (query.docs.length === 0) {
        await fb.firestore.collection(firebaseCollectionTypes.USERS_READINESS).add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
        })
            .then(docRef => userReadinessDocId = docRef.id);
    }

    return { uid: user.uid, userReadinessDocId };
};

export const sendAddUserResultsRequest = async correctAnswersCount => {
    const user = fb.auth.currentUser;
    const {
        uid,
        photoURL,
        displayName,
    } = user;

    let correctAnswersCountDocId = '';

    const fireBaseRef = fb.firestore.collection(firebaseCollectionTypes.USERS_RESULTS);
    const query = await fireBaseRef
        .where('uid', '==', uid)
        .get();
    if (query.docs.length === 0) {
        await fb.firestore.collection(firebaseCollectionTypes.USERS_RESULTS).add({
            uid,
            displayName,
            photoURL,
            correctAnswersCount,
        })
            .then(docRef => correctAnswersCountDocId = docRef.id);
    }

    return correctAnswersCountDocId;
};

export const deleteFromCollectionByDocIdRequest = async ({ type, docId }) => {
    const fireBaseUserRef = fb.firestore.collection(type);

    await fireBaseUserRef.doc(docId).delete();
};

export const checkIsUsersReadyToStartQuiz = async () => {
    const firebaseUsersRef = fb.firestore.collection(firebaseCollectionTypes.USERS);
    const firebaseUsersReadinessRef = fb.firestore.collection(firebaseCollectionTypes.USERS_READINESS);

    try {
        const userQuery = await firebaseUsersRef.get();
        const userReadinessQuery = await firebaseUsersReadinessRef.get();

        return (userQuery.docs.length && userQuery.docs.length === userReadinessQuery.docs.length);
    } catch (error) {
        console.error('error', error);
    }
};
