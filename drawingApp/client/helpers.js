Meteor.subscribe("points");
Meteor.subscribe("colors");

Template.start.helpers({

	selectedColors:function(){
		if(!Colors.findOne()){
			return;
		}
		return Colors.find({});
	}

});


