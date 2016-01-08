Meteor.methods({

	clear:function(){
		Points.remove({});
	},

	/*	for colors	*/
	addColor:function(color){
		Colors.insert(color);
	}

});