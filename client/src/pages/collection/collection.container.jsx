import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import collectionComponent from "./collection.component";


const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
})

//compose is a HOC that composes multiple HOC together, it reads from right to left. so in the following code it goes like this: wraps collection... with WithSpinner then wraps that with  connect
 const CollectionPageContainer =compose(
    connect(mapStateToProps),
    WithSpinner
    )(collectionComponent);

export default CollectionPageContainer;