import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
	render() {

		// Accessing handleSubmit props from reduxForm
		const handleSubmit = this.props.handleSubmit;

		return (
			<form onSubmit={handleSubmit}>
				<h3>Create A New Post</h3>
				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" />
				</div>
				<div className="form-group">
					<label>Categories</label>
					<input type="text" className="form-control" />
				</div>				
				<div className="form-group">
					<label>Content</label>
					<input type="textarea" className="form-control" />
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

export default reduxForm({
	// Form name needs to be unique
	form: 'PostsNewForm',
	// Unique inputs that the form will contain
	fields: ['title', 'categories', 'content']
})(PostsNew);