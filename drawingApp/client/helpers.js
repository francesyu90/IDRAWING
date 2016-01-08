Meteor.subscribe("points");

Template.start.helpers({

	selectedColor:function(){
		if(!Session.get("selectedColor"))
			return;
		return Session.get("selectedColor");
	}

});


