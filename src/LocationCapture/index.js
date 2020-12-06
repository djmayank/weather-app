import React from "react"

export default class LocationCapture  extends React.Component {
	
	componentDidMount(){
			const {onLocationSuccess , onError} = this.props;
			

		if (navigator.geolocation) {
			console.log("jjnjnjhello");

			//navigator.geolocation.getCurrentPosition(show);

			navigator.geolocation.getCurrentPosition((coords) => { 
			// onIsfetching(false)
			console.log(coords);
			onLocationSuccess(coords)
	        
			}, (error) => {
				
				console.log("hello world");
  					switch(error.code) {
    					case error.PERMISSION_DENIED:
      						onError("User denied the request for Geolocation.")
      						break;
    
    					case error.POSITION_UNAVAILABLE:
      						onError("Location information is unavailable.")
      						break;
   
   						case error.TIMEOUT:
      						onError("The request to get user location timed out.")
      						break;
    
    					case error.UNKNOWN_ERROR:
      						onError("An unknown error occurred.")
      						break;
      				
      					default : 
      						onError(error.toString())
  					}
			});
    	} 
    	else {
    	    onError("Geolocation is not supported by this browser.")
    	}
	}
	render(){
		return null
	}
} 

// function show(pos){
// 	console.log(pos.latitude);
// }