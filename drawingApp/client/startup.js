Meteor.startup(function(){

	canvas = new Canvas();
	Deps.autorun( function() {
    	var data = Points.find({}).fetch();
    	if(canvas){
      		canvas.drawLine(data);
    	}
  	});

});