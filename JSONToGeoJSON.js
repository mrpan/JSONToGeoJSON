var JSONToGeoJSON= function(){
	var geojson = {};
	geojson['type'] = 'FeatureCollection';
	geojson['features'] = [];
	for (var k in data) {
		if(data[k].LON&&data[k].LAT){
			  var newFeature = {
			    "type": "Feature",
			    "geometry": {
			      "type": "Point",
			      "coordinates": [data[k].LON,data[k].LAT]
			    },
			    "properties": {
			      
			    }
			  }
			  geojson['features'].push(newFeature);
		}
	 
	}
	return geojson;
}