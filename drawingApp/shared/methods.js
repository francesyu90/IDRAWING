Meteor.methods({

	clear:function(){
		Points.remove({});
	},
	addPoint:function(point){
		Points.insert(point);
	},

	/**	colors	*/
	createUserForColors:function(colObj){
		Colors.insert(colObj);
	},
	updateColors:function(selectedColors){
		Colors.update(
			{createdBy:this.userId},
			{$set:
				{colors:selectedColors}
			}
	)}

});

