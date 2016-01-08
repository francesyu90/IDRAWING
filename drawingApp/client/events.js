Template.colorModal.events({

	"click .js-add-color":function(event){
		var value = $("#colorpicker").val();
		Session.set("selectedColor", value);
	}

});