import ShopActionTypes from "./shop.types";
import { firestore, converCollectionSnapshotToMap } from "../../firebase/firebase.utils";


export const fetchCollectionStart =()=>({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
    
});

export const fetchCollectionSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage =>({
    type: ShopActionTypes.FETCH_CULLECTION_FAILURE,
    payload: errorMessage
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart())   ;

        collectionRef.get().then(async snapshot=>{
         
              const collectionsMap = converCollectionSnapshotToMap(snapshot);
              dispatch(fetchCollectionSuccess(collectionsMap));
       }).catch(error=>dispatch(fetchCollectionsFailure(error.message)))
    }
}


