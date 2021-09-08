import {takeLatest, put, call, all} from 'redux-saga/effects';

import userActionTypes from './user.types';
import {auth, googleProvider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils'
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure } from './user.actions';

export function* getSnapshotFromUserAuth (userAuth) {
    try{
        const userRef = yield call(createUserProfileDocument,userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch(error) {
        yield put(signInFailure(error));
    }
}
export function* signInWithGoogle () {
    try{
        const {user}= yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch(error){
        yield put(signInFailure(error));
    }
}

export function* onGoogleSignInStart () {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* signInWithEmail ({payload: {email, password}}) {
    try{
        const {user}= yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch(error){
        yield put(signInFailure(error));
    }
} 

export function* onEmailSignInStatrt () {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* isUserAuthenticated () {
    try{
        const userAuth =yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    }catch(error){
        yield put(signInFailure(error))
    }
}

export function* onCheckUserSession (){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOut() {
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(error) {
        yield put(signOutFailure(error))
    }
}

export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START,signOut)
}

export function* signUp({payload: {email, password, displayName}}) {
    try {
        console.log('email: ',email, ' pass: ', password,'dis ',displayName);
        const {user}= yield auth.createUserWithEmailAndPassword(email,password);
        console.log('user:',user);
        yield createUserProfileDocument(user,displayName);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* onSignUpStart() {
    console.log('signup started');
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas () {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStatrt),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart)
    ])
}