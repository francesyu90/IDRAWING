Template.colorModal.events({

	"click .js-add-color":function(event){
		var value = $("#colorpicker").val();
		var color = {
			value:value
		}
		var selectedColors;
		// if(!Session.get("selectedColors")){
		// 	selectedColors = [];
		// }else{
		// 	selectedColors = Session.get("selectedColors");
		// 	for(var i = 0; i < selectedColors.length; i++){
		// 		if(selectedColors[i].name == value){
		// 			return;
		// 		}
		// 	}
		// }
		// selectedColors.push(color);
		// Session.set("selectedColors", selectedColors);
		if(!Colors.findOne()){
			Meteor.call("addColor", color);
			return;
		}
		var target = Colors.findOne({value:value});
		if(target){
			return;
		}
		Meteor.call("addColor", color);
	}

});