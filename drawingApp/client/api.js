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




