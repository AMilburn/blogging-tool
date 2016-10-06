import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
// Import Action Creator
import { createPost } from '../actions/index';

class PostsNew extends Component {
	render() {

		// Accessing handleSubmit props from reduxForm
		const handleSubmit = this.props.handleSubmit;
		// Accessing helpers to manage inputs from reduxForm
		const title = this.props.fields.title;
		const categories = this.props.fields.categories;
		const content = this.props.fields.content;

		return (
			// on submit, call action creator with form contents
			<form onSubmit={handleSubmit(this.props.createPost)}>
				<h3>Create A New Post</h3>
				<div className="form-group">
					<label>Title</label>
					{/* Pass configuration object into input tag as a property */}
					<input type="text" className="form-control" {...title} />
				</div>
				<div className="form-group">
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
				</div>				
				<div className="form-group">
					<label>Content</label>
					<input type="textarea" className="form-control" {...content} />
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

/* reduxForm has the same behaviour as connect.
connect: first arg is mapStateToProps, second is mapDispatchToProps
reduxForm: first arg is form config, second is mapStateToProps, third is mapDispatchToProps */
export default reduxForm({
	// Form name needs to be unique
	form: 'PostsNewForm',
	// Unique inputs that the form will contain
	fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);