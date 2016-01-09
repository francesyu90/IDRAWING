Template.colorModal.events({

	"click .js-add-color":function(){
		var value = $("#colorpicker").val();
		var color = {
			value:value
		}
		var selectedColors;
		var userId = Meteor.user()._id;
		var colUser = Colors.findOne({createdBy:userId});
		if(!Session.get("selectedColors")){
			if(!colUser){
				selectedColors = [];
			}else{
				selectedColors = colUser.colors;
			}
		}else{
			selectedColors = Session.get("selectedColors");
			for(var i = 0; i < selectedColors.length; i++){
				if(selectedColors[i].value == value){
					return;
				}
			}
		}
		selectedColors.push(color);
		Session.set("selectedColors", selectedColors);
		$("#colorpicker").val("");
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



