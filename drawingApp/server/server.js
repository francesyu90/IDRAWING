Meteor.publish("points", function(){

	return Points.find({});

});

Meteor.publish("colors", function(){

	return Colors.find({});

});

