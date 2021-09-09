// this container is combiing  HOCs(connect and withSpinner) to colectionOverview component.

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";


//components
import collectionsOverviewComponent from "./collections-overview.component";

// this custom HOC is in charg of adding loading spinner to a component
import WithSpinner from "../with-spinner/with-spinner.component";



// mapDispatchToProps dispatches data to redux store 
const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

//compose is a HOC that composes multiple HOC together, it reads from right to left. so in the following code it goes like this: wraps collection... with WithSpinner then wraps that with  connect
 const CollectionsOverviewContainer =compose(
    connect(mapStateToProps),
    WithSpinner
    )(collectionsOverviewComponent);

export default CollectionsOverviewContainer;