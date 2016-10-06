import React, { Component } from 'react';
// Promoting this component to container because it needs to call an action creator
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
// Import link component to link to another route
import { Link } from 'react-router';

class PostsIndex extends Component {
	
	/* This is called automatically when component
	is about to be rendered to the DOM for the first time */
	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>
				<div className="text-xs-right">
					{/* Link to PostsNew component */}
					<Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
				</div>
				List of blog posts
			</div>
		);
	}
}

/* Passing in fetchPosts object, gives access to this.props.fetchPosts
Instead of importing bindActionCreators and running mapDispatchToProps */
export default connect(null, { fetchPosts })(PostsIndex);