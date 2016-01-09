Meteor.subscribe("points");
Meteor.subscribe("colors");

Template.toolbox.helpers({

	selectedColors:function(){
		var system = Session.get("system");
		if(!Meteor.user()){
			if(!system){
				return;
			}
			return system.colors;
		}
		var sessCols = Session.get("selectedColors");
		var colUser = Colors.findOne({createdBy:Meteor.user()._id});
		if(sessCols){
			return sessCols;
		}else{
			if(colUser){
				return colUser.colors;
			}
		}
	}

});

Template.toolboxI.helpers({

	selectedColors:function(){
		var system = Session.get("system");
		if(!Meteor.user()){
			if(!system){
				return;
			}
			return system.colors;
		}
		var sessCols = Session.get("selectedColors");
		var colUser = Colors.findOne({createdBy:Meteor.user()._id});
		if(sessCols){
			return sessCols;
		}else{
			return colUser.colors;
		}
	}

});




