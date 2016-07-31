var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');


var Note = React.createClass({
	render: function(){
		console.log("Note render....");
		return(<div className="column">
      <div className="sticky"><p>{this.props.note.text}</p></div>
			</div>);
	}
});

module.exports = Note;
