import { FETCH_POSTS, FETCH_POST } from '../actions/index';
/* Properties:
'all' will be the list of blog posts on the index page
'post' will be the individual post */
const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case FETCH_POST:
		return {...state, post: action.payload.data};	
	/* In the case of FETCH_POSTS action
	return application state that includes list of blog posts */
	case FETCH_POSTS:
	// with Redux-Promise & Axois, data will be avail on action.payload.data
		return { ...state, all: action.payload.data }; 
	default:
		return state;
	}
}