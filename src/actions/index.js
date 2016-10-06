import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=jfsszz08437xxji9';

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	// return an action with request on the payload.
	return {
		type: FETCH_POSTS,
		payload: request
	};
}

// createPost is called with keys (title, content, categories) as arg
export function createPost(props) {
	// when we post to URL, pass along props as second arg
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

	return {
		type: CREATE_POST,
		payload: request
	};
}