Canvas = function(){
	var self = this;
	var svg;
	var createSVG = function(){
		svg = d3.select("#canvas").append("svg")
			.attr("width", 800)
			.attr("height", 600);
	}
	createSVG();
	self.clear = function(){
		d3.select("svg").remove();
		createSVG();
	}
	self.drawLine = function(data){
		if(data.length < 1){
			self.clear();
			return;
		}
		if(svg){
			svg.selectAll("line").data(data, function(d){
				console.log(d);
				return d._id;
			})
			.enter().append("line")
			.attr("x1", function(d){
				return d.x;
			})
			.attr("y1", function(d){
				return d.y;
			})
			.attr("x2", function(d){
				return d.x1;
			})
			.attr("y2", function(d){
				return d.y1;
			})
			.attr("stroke-width", function (d) { 
				return d.w; 
			})
      		.attr("stroke", function (d) { 
      			return d.c; 
      		})
      		.attr("stroke-linejoin", "round");
		}
	}
}

Session.set("CanvasClass", Canvas);