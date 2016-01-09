Meteor.startup(function(){

	canvas = new Canvas();
	Deps.autorun( function() {
    	var data = Points.find({}).fetch();
    	if(canvas){
    		var obj = data[0];
    		if(obj){
    			var type = obj.l;
	    		if(type != "line"){
	    			canvas.drawCircle(data);
	    		}else{
	    			canvas.drawLine(data);
	    		}
    		}
    	}
  	});

});