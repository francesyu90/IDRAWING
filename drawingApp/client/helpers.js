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

Template.drawPanel.helpers({

	brushSizes:function(){
		var brushSizes = [];
		for(var i = 0; i < 10; i++){
			brushSizes.push({
				size:i+1
			});
		}
		return brushSizes;
	},
	strokeLinejoinValues:function(){
		return [
			{name:"round"},
			{name:"miter"},
			{name:"bevel"},
			{name:"inherit"}
		];
	},
	drawingTypes:function(){
		return [
			{type:"line"},
			{type: "circle"}
		];
	}

});




