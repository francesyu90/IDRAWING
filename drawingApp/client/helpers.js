Meteor.subscribe("points");
Meteor.subscribe("colors");

Template.toolbox.helpers({

	selectedColors:function(){
		if(!Meteor.user()){
			return Colors.findOne({createdBy:"system"}).colors;
		}
		if(!Session.get("selectedColors") && !Colors.findOne({createdBy:Meteor.user()._id})){
			return;
		}
		if(!Session.get("selectedColors")){
			return Colors.findOne({createdBy:Meteor.user()._id}).colors;
		}
		return Session.get("selectedColors");
	}

});

Template.toolboxI.helpers({

	selectedColors:function(){
		
	}

});




