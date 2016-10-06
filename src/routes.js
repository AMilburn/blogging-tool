import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Import all components
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

/* React Router defines mappings between url/path and components
Below is route mapping between route and component shown
Route components are nestable */
export default (
	/* App is kept as route container of application, is always shown
	If route is "/", show App and IndexRoute
	If route matches another path, show App and that path */
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
		<Route path="posts/new" component={PostsNew} />
		{/* react router will read ':id' is param */}
		<Route path="posts/:id" component={PostsShow} />
	</Route>
);
