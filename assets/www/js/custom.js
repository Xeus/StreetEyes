var onDeviceReady = function() {
        	document.getElementById("devready").innerHTML = "OnDeviceReady fired.";
        	pictureSource=navigator.camera.PictureSourceType;
        	destinationType=navigator.camera.DestinationType;
   		};
    	function init() {
            document.addEventListener("deviceready", onDeviceReady, false);
            $.mobile.loadPage("http://benturner.com/streeteyes/postgeoloc.php?lat=" + lat + "&lon=" + lon + "&id=1", {
            	reloadPage : true
            }); 
            $("#requestsDiv").load("http://benturner.com/streeteyes/requests.php");
            $.mobile.loadPage("http://benturner.com/streeteyes/requests.php",
            		{
            			pageContainer: $("#requestsDiv")
            		}
            );
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }   
        function initialize(lat, lon) {
        	
        	var myLatlng = new google.maps.LatLng(lat, lon);
            var myOptions = {
              center: myLatlng,
              zoom: 16,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
            var map2 = new google.maps.Map(document.getElementById("map_canvas2"),
                    myOptions);
            
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map2,
                title:"NYU-ITP"
            });
        }
        function loadScript() {
      	  var script = document.createElement("script");
      	  script.type = "text/javascript";
      	  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDHwAJbB8jkEMvSkZpGBDxSB1fK5MpGfNQ&sensor=false&callback=initialize";
      	  document.body.appendChild(script);
      	}
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = '<img src="http://maps.google.com/maps/api/staticmap?center='
            + position.coords.latitude+ ',' +position.coords.longitude +
            '&zoom=14&size=100x100&maptype=roadmap&markers=color:blue%7Clabel:U%7C' +
            position.coords.latitude+ ',' +position.coords.longitude +
            '&key=AIzaSyBxSfRY29fktTa2m21a9vKumb3UfUo-4eI&sensor=true" height="100" width="100" align="left" border="1" />' +
            'Latitude: '           + position.coords.latitude              + '<br />' +
            'Longitude: '          + position.coords.longitude             + '<br />' +
			'Altitude: '           + position.coords.altitude              + '<br />' +
			'Accuracy: '           + position.coords.accuracy              + '<br />' +
			'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
			'Heading: '            + position.coords.heading               + '<br />' +
			'Speed: '              + position.coords.speed                 + '<br />' +
			'Timestamp: '          + new Date(position.timestamp)          + '<br />';
        }

        // onError Callback receives a PositionError object
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }

        var lat = 40.729367;
    	var lon = -73.993902;
        
        
        //window.onload = loadScript;

    	var pictureSource;   // picture source
    	var destinationType; // sets the format of returned value 

    	// Wait for PhoneGap to connect with the device
    	//document.addEventListener("deviceready",onDeviceReady,false);

    	// Called when a photo is successfully retrieved
    	function onPhotoDataSuccess(imageData) {
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
      		// Take picture using device camera and retrieve image as base64-encoded string
      		navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
    	}

    	// A button will call this function
    	function capturePhotoEdit() {
      		// Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
      		navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true }); 
    	}

    	// A button will call this function
    	function getPhoto(source) {
      		// Retrieve image file location from specified source
      		navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        		destinationType: destinationType.FILE_URI,
        		sourceType: source });
    	}

    	// Called if something bad happens. 
    	function onFail(message) {
      		alert('Failed because: ' + message);
    	}