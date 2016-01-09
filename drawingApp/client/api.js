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
		var colUser = Colors.find({createdBy:Meteor.user()._id});
		if(!colUser){
			if(!Session.get("system")){
				return;
			}
			var colors = [];
			var colObj = {
				createdBy:Meteor.user()._id,
				colors:[]
			};
			Meteor.call("createUserForColors", colObj);
		}else{
			Session.set("selectedColors", colUser.colors);
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

Router.route("/draw",function (){
	this.render("startHeader",{
		to:"navbar"
	});
	this.render("draw",{
		to:"main"
	});
	this.render("footer",{
		to:"footer"
	});
});




