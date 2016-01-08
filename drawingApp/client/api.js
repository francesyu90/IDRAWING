Router.route("/",function (){

	this.render("navbar",{
		to:"navbar"
	});
	this.render("home",{
		to:"main"
	});
	this.render("footer",{
		to:"footer"
	});

});

Router.route("/start",function (){
	var system;
	if(!Session.get("system")) {
		system = Colors.findOne({createdBy:"system"});
		Session.set("system", system);
	}
	if(Meteor.user()){
		var colUser = Colors.findOne({createdBy:Meteor.user()._id});
		if(!colUser){
			if(!Session.get("system")){
				return;
			}
			system = Session.get("system");
			var colObj = {
				createdBy:Meteor.user()._id,
				colors:system.colors
			};
			Meteor.call("createUserForColors", colObj);
		}
	}
	this.render("startHeader",{
		to:"navbar"
	});
	this.render("start",{
		to:"main"
	});
	this.render("footer",{
		to:"footer"
	});

});