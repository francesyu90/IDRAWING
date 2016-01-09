var lastX=0;
var lastY=0;
var strokeWidth = 1;
var thickness=1;
var strokeColor = "black";
var strokeLinejoinValue = "round";
var drawingType = "line";

var markPoint = function(){
	var offset = $('#canvas').offset();
	if (lastX == 0){// check that x was something not top-left. should probably set this to -1
    	lastX = (event.pageX - offset.left);
        lastY = (event.pageY - offset.top);
    }
    var point = {
    	x: (event.pageX - offset.left),
        y: (event.pageY - offset.top),
        x1: lastX,
        y1: lastY,
        w: thickness,
        c: strokeColor,
        sv: strokeLinejoinValue,
        l: drawingType
    }
    Meteor.call("addPoint", point);
    lastX = (event.pageX - offset.left);
    lastY = (event.pageY - offset.top);

}

Template.toolboxI.events({

	"click .js-clear-points":function(event){
		Meteor.call("clear", function(){
			canvas.clear();
		})
	},
	"click .js-set-color":function(event){
		var color = event.currentTarget.id;
		lastX = 0;
		lastY = 0;
		strokeColor = color;
	}

});

Template.drawPanel.events({

	"click":function(event){
    	markPoint();
  	},
  	"mousedown":function(event){
    	Session.set("draw", true);
  	},
  	"mouseup":function(event){
    	Session.set('draw', false);
    	lastX=0;
    	lastY=0;
  	},
  	"mousemove":function(event){
	    if (Session.get("draw")){
	    	markPoint();
	    }
  	},
    "change .js-select-brush-size":function(event){
      lastX = 0;
      lastY = 0;
      thickness = event.currentTarget.value;
    },
    "change .js-select-stroke-linejoin":function(event){
      lastX = 0;
      lastY = 0;
      strokeLinejoinValue = event.currentTarget.value;
    },

    "change .js-select-drawing-type":function(event){
      lastX = 0;
      lastY = 0;
      drawingType = event.currentTarget.value;
    }

});


