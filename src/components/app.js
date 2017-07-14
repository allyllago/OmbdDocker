import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actionCreators from "../redux/actions/actioncreators.js";
import Main from "../containers/main.jsx"

function mapsStateToProps (state){
	return {
		movie: {
			movie: state.movie.movie,
			isFetching: state.movie.isFetching,
		},
		movies: {
			movies: state.movies.movies,
			isFetching: state.movies.isFetching,
		},
		user: {
			username: state.user.username,
			favorites: state.user.favorites,
			isFetching: state.user.isFetching,
			isLoggedIn: state.user.isLoggedIn,
		}
	}
};

function mapDispachToProps (dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

const App= connect(mapsStateToProps, mapDispachToProps)(Main);

export default App;