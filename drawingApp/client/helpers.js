Meteor.subscribe("points");
Meteor.subscribe("colors");

Template.toolbox.helpers({

	selectedColors:function(){
		if(!Colors.findOne()){
			return;
		}
		return Colors.find({});
	}

});


