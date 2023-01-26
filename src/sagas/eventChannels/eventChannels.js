import { eventChannel } from 'redux-saga';
import * as fb from '../../firebase/init';
import * as actions from './actions';
import constants from '../../firebase/constants';

export function chatMessagesEventChannel() {
    const listener = eventChannel(
        emmiter => {
            fb.firebase.firestore().collection(constants.MESSAGES).orderBy('createdAt')
                .onSnapshot({ includeMetadataChanges: true }, snapshot => {

                    const messages = snapshot.docChanges().map( message => message.doc.data());

                    emmiter(actions.setUserMessage(messages));
                });

            fb.firebase.firestore().collection(constants.QUESTIONS)
                .onSnapshot({ includeMetadataChanges: true }, snapshot => {

                    const questions = snapshot.docChanges().map(question => question.doc.data());
                    const changes = snapshot.docChanges().map(change => change.type);

                    if (changes[0] === 'added') {
                        emmiter(actions.setQuestions(questions.length && questions[0]?.questions));
                    }
                });

            fb.firebase.firestore().collection(constants.USERS_RESULTS)
                .onSnapshot({ includeMetadataChanges: true }, snapshot => {

                    const usersResults = snapshot.docChanges().map(question => question.doc.data());
                    const changes = snapshot.docChanges().map(change => change.type);

                    if (changes[0] === 'added') {
                        emmiter(actions.setUserResults(usersResults));
                    }
                });

            const listeners = [
                fb.firebase.database().ref(constants.MESSAGES),
                fb.firebase.database().ref(constants.QUESTIONS),
                fb.firebase.database().ref(constants.USERS_RESULTS),
            ];

            return () => listeners.forEach(listener => listener.off(listener));
        }
    );

    return listener;
}
