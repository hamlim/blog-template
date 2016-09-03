var css = require("!style!css!sass!./assets/css/src/main.scss");
// css.use();

import React from 'react'
import ReactDOM from 'react-dom'

var CommentBox= React.createClass({
	render: function() {
		return (
			<div className="commentBox">
				Hello World!
			</div>
		);
	}
});

ReactDOM.render(<CommentBox />, document.getElementById('test'));
