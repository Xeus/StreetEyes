	// onError Callback receives a PositionError object
    function onError(error) {
			console.log("onError() called.");
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
    }

	var watchID = null;
	var map = null;
	// var map2 = null;
	var position = null;
   		
    var onDeviceReady = function() {
		console.log("onDeviceReady() called.");
		navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout:10000});
    	pictureSource=navigator.camera.PictureSourceType;
    	destinationType=navigator.camera.DestinationType;
    	var elementDeviceProperties =
    		'Device Name: '     + device.name     + ', ' + 
            'Device PhoneGap: ' + device.phonegap + ', ' + 
            'Device Platform: ' + device.platform + ', ' + 
            'Device UUID: '     + device.uuid     + ', ' + 
            'Device Version: '  + device.version  + ', '; //
    	console.log(elementDeviceProperties);
        $("#requestsDiv").load("http://benturner.com/streeteyes/requests.php");
        $("#lastUpdate").load("http://benturner.com/streeteyes/lastupdate.php");
        /*$.mobile.loadPage("http://benturner.com/streeteyes/requests.php",
        		{
        			pageContainer: $("#requestsDiv")
        		}
        );*/
        //var options = { frequency: 5000, timeout: 10000 };
        //navigator.geolocation.watchPosition(onSuccessWatch, onError, options);
	};
		
        function initialize(lat_map, lon_map) {
			console.log("initialize() called.");
        	myLatlng_map = new google.maps.LatLng(lat_map, lon_map);
            var myOptions = {
              center: myLatlng_map,
              zoom: 16,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            /* map2 = new google.maps.Map(document.getElementById("map_canvas2"), myOptions);
            var marker2 = new google.maps.Marker({
                position: myLatlng_map,
                map: map2,
                title:"NYU-ITP"
            }); */
            
            map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
            var marker = new google.maps.Marker({
                position: myLatlng_map,
                map: map,
                title:"NYU-ITP"
            });
        }
   		
    	function init() {
			console.log("init() called.");
            document.addEventListener("deviceready", onDeviceReady, false);
        }   
        
        function onSuccess(position) {
			console.log("onSuccess() called.");
            var element = document.getElementById('geolocation');
            element.innerHTML = '<img src="http://maps.google.com/maps/api/staticmap?center='
            + position.coords.latitude+ ',' +position.coords.longitude +
            '&zoom=14&size=200x100&maptype=roadmap&markers=color:blue%7Clabel:U%7C' +
            position.coords.latitude+ ',' +position.coords.longitude +
            '&key=AIzaSyBxSfRY29fktTa2m21a9vKumb3UfUo-4eI&sensor=true" height="100" width="200" align="left" border="1" />';
            
            console.log('Latitude: '           + position.coords.latitude              + '<br />' +
            'Longitude: '          + position.coords.longitude             + '<br />' +
			'Altitude: '           + position.coords.altitude              + '<br />' +
			'Accuracy: '           + position.coords.accuracy              + '<br />' +
			'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
			'Heading: '            + position.coords.heading               + '<br />' +
			'Speed: '              + position.coords.speed                 + '<br />' +
			'Timestamp: '          + new Date(position.timestamp)          + '<br />');
            initialize(position.coords.latitude, position.coords.longitude);
            
            $.mobile.loadPage("http://benturner.com/streeteyes/postgeoloc.php?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&id=1", {
            	reloadPage : true
            }); 
        }
        
        function onSuccessWatch(position) {
        	console.log("onSuccessWatch() called.");
        	google.maps.event.trigger(map_canvas, 'resize');
        	// google.maps.event.trigger(map_canvas2, 'resize');
        	var myLatlng_map = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        	map.setCenter(myLatlng_map);
        	// map2.setCenter(myLatlng_map);
        }

        if (lat == '') {
        	var lat = 40.729367;
        	var lon = -73.993902;
        }

        // info box on pin
        var contentString = '<div id="mapProfile">'+
        '<img src="img/profiles/1.jpg" img align="left" width="40px" heigh="40px"/>'+
        '<h3 id="mapHeading">Ben Turner</h3>'+
        '<div id="mapContent">'+
        '<p>3 hrs ago: At ITP, not too crowded</p>'+
        '<button type="button" onclick="#">Request Eyes</button>'+
        '</div>'+
        '</div>';
     
    	var infowindow = new google.maps.InfoWindow({
        	content: contentString
    		});
    	// info box on pin
        
        google.maps.event.addListener(marker, 'click', function() {
        	infowindow.open(map,marker);
        	});
        
        
        
        
    	var pictureSource;   // picture source
    	var destinationType; // sets the format of returned value 

    	// Wait for PhoneGap to connect with the device
    	//document.addEventListener("deviceready",onDeviceReady,false);

    	// Called when a photo is successfully retrieved
    	function onPhotoDataSuccess(imageData) {
			console.log("onPhotoDataSuccess() called.");
      		// Uncomment to view the base64 encoded image data
      		// console.log(imageData);

      		// Get image handle
      		var smallImage = document.getElementById('smallImage');

      		// Unhide image elements
      		smallImage.style.display = 'block';

      		// Show the captured photo
      		// The inline CSS rules are used to resize the image
      		smallImage.src = "data:image/jpeg;base64," + imageData;
    	}

    	// Called when a photo is successfully retrieved
    	function onPhotoURISuccess(imageURI) {
			console.log("onPhotoURISuccess() called.");
      		// Uncomment to view the image file URI 
      		// console.log(imageURI);

      		// Get image handle
      		var largeImage = document.getElementById('largeImage');

     		// Unhide image elements
      		largeImage.style.display = 'block';

      		// Show the captured photo
      		// The inline CSS rules are used to resize the image
      		largeImage.src = imageURI;
    	}

    	// A button will call this function
    	function capturePhoto() {
			console.log("capturePhoto() called.");
      		// Take picture using device camera and retrieve image as base64-encoded string
      		navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
    	}

    	// A button will call this function
    	function capturePhotoEdit() {
			console.log("capturePhotoEdit() called.");
      		// Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
      		navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true }); 
    	}

    	// A button will call this function
    	function getPhoto(source) {
			console.log("getPhoto() called.");
      		// Retrieve image file location from specified source
      		navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        		destinationType: destinationType.FILE_URI,
        		sourceType: source });
    	}

    	// Called if something bad happens. 
    	function onFail(message) {
			console.log("onFail() called.");
      		alert('Failed because: ' + message);
    	}
        