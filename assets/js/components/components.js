import React from 'react'

// import CommentBox from '/assets/js/components/test.js'

class CommentBox extends React.Component {
	render () {
		return (
			<div className="test">
				<h1>Testing!</h1>
			</div>
		);
	}
};

export default class App extends React.Component {
	render() {
		return (
			<CommentBox/>
		)
	}
}