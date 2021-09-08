//importing needed  effects from saga
import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import ShopActionTypes from "./shop.types";

import { fetchCollectionsFailure, fetchCollectionSuccess } from "./shop.actions";

import { firestore, converCollectionSnapshotToMap } from "../../firebase/firebase.utils";
export function* fetchCollectionAsync() {
    try{
        
        const collectionRef = firestore.collection('collections');
        
    const snapshot = yield collectionRef.get();
    // call is the effect inside the generator funtion that invokes methos. we can simply use it without call too, but we want to yield this in case this call takes longer than we expect. first argument is function or method and the second one is the parameter we want to pass to method or function
    const collectionsMap = yield call(converCollectionSnapshotToMap, snapshot)
    
    // put is saga effect for creating actions. it is like dispatch but we need it use it with yield
    yield put(fetchCollectionSuccess(collectionsMap)
    )    
    
    } catch(error){
        yield put(fetchCollectionsFailure(error))
    }
    
}

export function* fetchCollectionStart() {
    //this takeEvery effect creaes a non blocking call in order to not stop the flow of application. to act asyncronous
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}

export function* shopSagas () {
    yield all([
        call(fetchCollectionStart)
    ])
}