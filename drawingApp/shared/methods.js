Meteor.methods({

	clear:function(){
		Points.remove({});
	},
	addPoint:function(point){
		Points.insert(point);
	},

	/**	colors	*/
	updateColors:function(selectedColors){
		if(!this.userId){
			return;
		}
		var colUser = Colors.findOne({createdBy:this.userId});
		if(!colUser){
			var newColUser = {
				createdBy:this.userId,
				colors:selectedColors
			};
			Colors.insert(newColUser);
		}else{
			Colors.update({createdBy:this.userId}, {$set: {colors:selectedColors}});
		}
	}

});

