// this is just a container that Wraps both connect and withSpinnet arond the component


//Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

//withSppiner is a HOC that handels loading sspinner
import WithSpinner from "../../components/with-spinner/with-spinner.component";

//components
import collectionComponent from "./collection.component";




// mapStateToProps gets data from redux store or selectors
const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
})

//compose is a HOC that composes multiple HOC together, it reads from right to left. so in the following code it goes like this: wraps collection... with WithSpinner then wraps that with  connect
 const CollectionPageContainer =compose(
    connect(mapStateToProps),
    WithSpinner
    )(collectionComponent);

export default CollectionPageContainer;