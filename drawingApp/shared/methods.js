Meteor.methods({

	clear:function(){
		Points.remove({});
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