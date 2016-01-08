if(!Colors.findOne()) {
	console.log("inserting default color sets ...");
	var creator = "system";
	var colors = [
		{value:"pink"},
		{value:"red"},
		{value:"yellow"},
		{value: "lightblue"},
		{value:"blue"},
		{value:"purple"},
		{value:"lightgreen"},
		{value:"green"}
	];
	Colors.insert({
		createdBy:creator,
		colors:colors
	});
	console.log("done insertion!");
}

