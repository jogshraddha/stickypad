var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');


var Note = React.createClass({
	render: function(){
		console.log("Note render....");
		return(<div className="column">
      <div onDoubleClick={this.removeNote.bind(this, this.props.note._id)} className="sticky"><p>{this.props.note.text}</p></div>
			</div>);
	},
	removeNote: function(i, j){
		AppActions.removeNote(i.$oid);
	}
});

module.exports = Note;
