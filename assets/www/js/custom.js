var pictureSource;   // picture source
var destinationType; // sets the format of returned value 
var watchID = null;
var map = null;
// var map2 = null;
var position = null;

// onError Callback receives a PositionError object
    function onError(error) {
			console.log("onError() called.");
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
    }
    
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
        $("#streamContainer").load("http://benturner.com/streeteyes/stream.php");
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
                title:"Ben Turner"
            });
            
         // info box on pin
            var contentString = '<div class="mapProfile">'+
            '<img src="http://benturner.com/streeteyes/img/profiles/1.jpg" align="left" width="40px" height="40px" />'+
            '<h3 class="mapHeading">Ben Turner</h3><BR />'+
            '<span class="mapContent">'+
            '3 hrs ago: At ITP, not too crowded<BR />'+
            '<button type="button" onclick="#" CLASS="markerButton">Request Eyes</button>'+
            '</span>'+
            '</div>'; //
         
        	var infowindow = new google.maps.InfoWindow({
            	content: contentString
        		});
        	// info box on pin
        	
        	google.maps.event.addListener(marker, 'click', function() {
            	infowindow.open(map,marker);
            	});
        	
        	// info box on pin2

        	myLatlng_map2 = new google.maps.LatLng(40.734283, -73.99498);
        	var marker2 = new google.maps.Marker({
        		position: myLatlng_map2,
        		map: map,
        		title: "Walter Cronkite"
        	});

        	var contentString2 = '<div class="mapProfile">'+
        	'<img src="http://www.bing.com/getimage?q=FCLB_fb725d31-f311-f42f-671b-00cb100f7891_1&wf=Genimage" align="left" width="40px" height="40px"/>'+
        	'<h3 class="mapHeading">Walter Cronkite</h3><BR />'+
        	'<span class="mapContent">'+
        	'1 hr ago: Getting drunk on 5th Ave. Struggling to see straight.<BR />'+
        	'<button type="button" onclick="#" CLASS="markerButton">Request Eyes</button>'+
        	'</span>'+
        	'</div>'; //

        	var infowindow2 = new google.maps.InfoWindow({
        		content: contentString2
        	});

        	google.maps.event.addListener(marker2, 'click', function() {
        		infowindow2.open(map,marker2);
        	});

        	// info box on pin3

        	myLatlng_map3 = new google.maps.LatLng(40.72738, -73.988585);
        	var marker3 = new google.maps.Marker({
        		position: myLatlng_map3,
        		map: map,
        		title: "Lara Logan"
        	});

        	var contentString3 = '<div class="mapProfile">'+
        	'<img src="http://ia.media-imdb.com/images/M/MV5BMTk5NjUxNDc3MV5BMl5BanBnXkFtZTcwNTA4NDIzMQ@@._V1._CR46,0,278,278_SS100_.jpg" align="left" width="40px" height="40px"/>'+
        	'<h3 class="mapHeading">Lara Logan</h3><BR />'+
        	'<span class="mapContent">'+
        	'1 hr ago: Occupy is taking over the East Village.<BR />'+
        	'<button type="button" onclick="#" CLASS="markerButton">Request Eyes</button>'+
        	'</span>'+
        	'</div>'; //

        	var infowindow3 = new google.maps.InfoWindow({
        		content: contentString3
        	});

        	google.maps.event.addListener(marker3, 'click', function() {
        		infowindow3.open(map,marker3);
        	});
        	
        	// info box on pin4

        	myLatlng_map4 = new google.maps.LatLng(40.735275, -73.991075);
        	var marker4 = new google.maps.Marker({
        		position: myLatlng_map4,
        		map: map,
        		title: "Ricki S."
        	});

        	var contentString4 = '<div class="mapProfile">'+
        	'<img src="http://fitsnews.com/wp-content/uploads/2012/02/rick-santorum-frontrunner-100x100.jpg" align="left" width="40px" height="40px"/>'+
        	'<h3 class="mapHeading">Ricki S.</h3><BR />'+
        	'<span class="mapContent">'+
        	'1 hr ago: Chilling in Union Sq. Check out this street juggler.<BR />'+
        	'<button type="button" onclick="#" CLASS="markerButton">Request Eyes</button>'+
        	'</span>'+
        	'</div>'; //

        	var infowindow4 = new google.maps.InfoWindow({
        		content: contentString4
        	});

        	google.maps.event.addListener(marker4, 'click', function() {
        		infowindow4.open(map,marker4);
        	});
        	
        	// info box on pin5

        	myLatlng_map5 = new google.maps.LatLng(40.735275, -73.991075);
        	var marker5 = new google.maps.Marker({
        		position: myLatlng_map5,
        		map: map,
        		title: "Phil Groman"
        	});

        	var contentString5 = '<div class="mapProfile">'+
        	'<img src="http://benturner.com/img/profiles/0.jpg">Phil Groman</h3><BR />'+
        	'<span class="mapContent">'+
        	'1 hr ago: Heading to Manhattan from BK.<BR />'+
        	'<button type="button" onclick="#" CLASS="markerButton">Request Eyes</button>'+
        	'</span>'+
        	'</div>'; //

        	var infowindow5 = new google.maps.InfoWindow({
        		content: contentString5
        	});

        	google.maps.event.addListener(marker5, 'click', function() {
        		infowindow5.open(map,marker5);
        	});
            
        }
   		
    	var init = function() {
			console.log("init() called.");
            document.addEventListener("deviceready", onDeviceReady, false);
        };
        
        var onSuccess = function(position) {
			console.log("onSuccess() called.");
            var element = document.getElementById('geolocation');
            element.innerHTML = '<center><img src="http://maps.google.com/maps/api/staticmap?center='
            + position.coords.latitude+ ',' +position.coords.longitude +
            '&zoom=14&size=300x100&maptype=roadmap&markers=color:blue%7Clabel:U%7C' +
            position.coords.latitude+ ',' +position.coords.longitude +
            '&key=AIzaSyBxSfRY29fktTa2m21a9vKumb3UfUo-4eI&sensor=true" height="100" width="300" align="left" border="1" /></center>';
            
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
        };
        
        var onSuccessWatch = function(position) {
        	console.log("onSuccessWatch() called.");
        	google.maps.event.trigger(map_canvas, 'resize');
        	// google.maps.event.trigger(map_canvas2, 'resize');
        	var myLatlng_map = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        	map.setCenter(myLatlng_map);
        	// map2.setCenter(myLatlng_map);
        };

        if (lat == '') {
        	var lat = 40.729367;
        	var lon = -73.993902;
        }
        
       

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
      		//document.getElementById('updatePhoto').value = "data:image/jpeg;base64," + imageData;
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
      		//document.getElementById('updatePhoto').value = imageURI;
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
        
    	function uploadPhoto(imageURI) {
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";
 
            var params = new Object();
            params.value1 = "test";
            params.value2 = "param";
 
            options.params = params;
            options.chunkedMode = false;
 
            var ft = new FileTransfer();
            ft.upload(imageURI, "http://benturner.com/streeteyes/img/upload/", win, fail, options);
        }
 
        function win(r) {
            console.log("Code = " + r.responseCode);
            console.log("Response = " + r.response);
            console.log("Sent = " + r.bytesSent);
            alert(r.response);
        }
 
        function fail(error) {
            alert("An error has occurred: Code = " + error.code);
        }