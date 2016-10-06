import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
// Import Action Creator
import { createPost } from '../actions/index';
// Import link component to link to another route
import { Link } from 'react-router';

class PostsNew extends Component {
	
	/* To navigate around app programatically, use react-router
	available to components through context property */
	static contextTypes = {
		// this.context.router
		router: PropTypes.object
	};

	onSubmit(props) {
		this.props.createPost(props)
			// Runs when post is successfully created
			.then(() => {
				/* Blog post has been created.
				Navigate the user to the index by calling this.context.router.push
				with the new router */
				this.context.router.push('/');
			});
	}

	render() {
		// Accessing handleSubmit props from reduxForm
		const handleSubmit = this.props.handleSubmit;
		// Accessing helpers to manage inputs from reduxForm
		const title = this.props.fields.title;
		const categories = this.props.fields.categories;
		const content = this.props.fields.content;

		return (
			// on submit, call action creator with form contents
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create A New Post</h3>

				{/* Check if field is valid, using 'invalid' prop from reduxForm */}
				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>
					{/* Pass configuration object into input tag as a property */}
					<input type="text" className="form-control" {...title} />
					<div className="text-danger">
						{/* Touched is prop from reduxForm, will check if user has touched input */}
						{ title.touched ? title.error : '' }
					</div>
				</div>

				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
					<div className="text-danger">
						{ categories.touched ? categories.error : '' }
					</div>
				</div>

				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<input type="textarea" className="form-control" {...content} />
					<div className="text-danger">
						{ content.touched ? content.error : '' }
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

// Function to be called whenever form needs to be validated
function validate(values) {
	// Empty object for storing error messages
	const errors = {};

	if (!values.title) {
		// Add property to errors object
		errors.title = "Enter a username";
	}
	if (!values.categories) {
		// Add property to errors object
		errors.categories = "Enter categories";
	}
	if (!values.content) {
		// Add property to errors object
		errors.content = "Enter post content";
	}
	return errors;
} 

/* reduxForm has the same behaviour as connect.
connect: first arg is mapStateToProps, second is mapDispatchToProps
reduxForm: first arg is form config, second is mapStateToProps, third is mapDispatchToProps */
export default reduxForm({
	// Form name needs to be unique
	form: 'PostsNewForm',
	// Unique inputs that the form will contain
	fields: ['title', 'categories', 'content'],
	// Pass in validation function 
	validate
}, null, { createPost })(PostsNew);