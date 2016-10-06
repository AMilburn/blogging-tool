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

	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={"posts/" + post.id}>
						<span className="pull-xs-right">{post.categories}</span>
						<strong>{post.title}</strong>
					</Link>
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<div className="text-xs-right">
					{/* Link to PostsNew component */}
					<Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts.all };
}

/* Passing in fetchPosts object, gives access to this.props.fetchPosts
Instead of importing bindActionCreators and running mapDispatchToProps */
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);