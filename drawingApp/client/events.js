Template.colorModal.events({

	"click .js-add-color":function(){
		var value = $("#colorpicker").val();
		var color = {
			value:value
		}
		var selectedColors;
		if(!Session.get("selectedColors")){
			selectedColors = [];
			selectedColors.push(color);
			Session.set("selectedColors", selectedColors);
		}else{
			selectedColors = Session.get("selectedColors");
			for(var i = 0; i < selectedColors.length; i++){
				if(selectedColors[i].value == value){
					return;
				}
			}
			var colUser = Colors.findOne({createdBy:Meteor.user()._id});
			if(!colUser){
				return;
			}
			selectedColors = colUser.colors;
			for(var i = 0; i < selectedColors.length; i++){
				if(selectedColors[i].value == value){
					return;
				}
			}
			selectedColors.push(color);
			Session.set("selectedColors", selectedColors);
		}
	},
	"click .js-restore-colors":function(){
		var colUser = Colors.findOne({createdBy:Meteor.user()._id});
		if(!colUser){
			return;
		}
		Session.set("selectedColors", colUser.colors);
	},
	"click .js-save-colors":function(){
		var selectedColors = Session.get("selectedColors");
		if(!selectedColors){
			return;
		}
		Meteor.call("updateColors", selectedColors);
	}

});

