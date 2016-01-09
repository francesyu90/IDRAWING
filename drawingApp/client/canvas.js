Canvas = function(){
	var self = this;
	var svg;
	var createSVG = function(){
		svg = d3.select("#canvas").append("svg")
			.attr("width", 1300)
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
      		.attr("type", function (d) { 
      			return d.l; 
      		})
      		// .attr("stroke-linejoin", "round");
      		.attr("stroke-linejoin",function(d){
      			return d.sv;
      		});
		}
	}
	self.drawCircle = function(data){
		if(data.length < 1){
			self.clear();
			return;
		}
		if(svg){
			svg.selectAll('circle').data(data, function(d) { return d._id; })
	        .enter().append('circle')
	        .attr('r', 10)
	        .attr('cx', function (d) { return d.x; })
	        .attr('cy', function (d) { return d.y; })
	        .style("fill", function (d) { 
      			return d.c; 
      		});
		}
	}
}

