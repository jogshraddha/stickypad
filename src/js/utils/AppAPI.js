var AppActions = require('../actions/AppActions');

module.exports = {
	addNote: function(note){
		$.ajax({
			url: "https://api.mongolab.com/api/1/databases/stickypad/collections/notes?apiKey=HHN07iguF03PcB8w54i79fnd7HupjVsr",
			data: JSON.stringify(note),
			type: "POST",
			contentType: "application/json"
		});
	},
	getNotes: function(){
		$.ajax({
			url: "https://api.mongolab.com/api/1/databases/stickypad/collections/notes?apiKey=HHN07iguF03PcB8w54i79fnd7HupjVsr",
			dataType: 'json',
			cache: false,
			success: function(data){
				AppActions.receiveNotes(data);
			}.bind(this),
			error: function(xhr, status, error) {
				console.log(error);
			}.bind(this)
		});
	},

	removeNote: function(noteId){
		$.ajax({
			url: "https://api.mongolab.com/api/1/databases/stickypad/collections/notes/"+noteId+"?apiKey=HHN07iguF03PcB8w54i79fnd7HupjVsr",
			type: "DELETE",
			async: true,
			timeout: 300000,
			success: function(data){
				console.log('Note deleted');
			}.bind(this),
			error: function(xhr, status, err){
				console.log(err);
			}.bind(this)
		});
	}
}
