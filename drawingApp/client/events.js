Template.colorModal.events({

	"click .js-add-color":function(){
		//	only allow logged in users to add new color
		if(!Meteor.user()){
			return;
		}
		var value = $("#colorpicker").val();
		var color = {
			value:value
		}
		var selectedColors;
		var createdBy = Meteor.user()._id;
		var colHistory = Colors.findOne({createdBy:createdBy});
		if(!colHistory && !Session.get("selectedColors")){
			selectedColors = [];
		}else if(Session.get("selectedColors")){
			selectedColors = Session.get("selectedColors");
			for(var i = 0; i < selectedColors.length; i++){
				if(selectedColors[i].value == value){
					return;
				}
			}
		}else{
			selectedColors = colHistory.colors;
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
		if(!Session.get("selectedColors")){
			return;
		}
		var selectedColors = Session.get("selectedColors");
		Meteor.call("updateColors", selectedColors);
	}

});



