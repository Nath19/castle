var fs = require('fs');

var json1 = require('./restauHotel.json');
var json2 = require('./starredRestaurants.json'); 
var json3=[];
	// now compare their keys and values
	for(var i=0;i<json1.length;i++){
		for(var j=0; j<json2.length; j++) {
			if(json1[i].name ===json2[j].name) {
				json3.push({"hotel Name ": json1[i].name,"Chef Name":json2[j].chef})
		}

	}
}

fs.writeFileSync("combinedJson.json",JSON.stringify(json3));
console.log(json3);