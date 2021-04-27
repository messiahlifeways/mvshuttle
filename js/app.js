var app = angular
  .module("mvShuttle", ["uiGmapgoogle-maps"])
  //angular-google-maps configuration
  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      //Google Maps API Key
      key: "AIzaSyCG4ccx6v-NKxWDVjXWswuOMitEzvT4gb4",
      libraries: "weather,geometry,visualization"
    });
  })
  //Main Controller
  .controller("mainCtrl", function($scope, $http, GetData, $timeout) {
    
    //Initializes the map
    $scope.map = {
      center: { latitude: 40.1843022, longitude: -76.9804179 },
      zoom: 16
    };

    //Place marker for shuttle bus
    $scope.shuttleBus = {
      id: 19,
      coords: {
        latitude: $scope.shuttleLat,
        longitude: $scope.shuttleLong
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/MVShuttle.png"
      },
      name: "MV Shuttle",
      description: "Messiah Lifeways Shuttle Bus"
    };

    //Initializes the Shuttle Stop Markers
    //Will be refactored for use in ng-repeat
    $scope.stop1 = {
      id: 1,
      coords: {
        latitude: 40.184917,
        longitude: -76.97737
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/1.png"
      },
      name: "Shuttle Stop 1",
      description: "Village Square Main Entrance"
    };
    $scope.stop2 = {
      id: 2,
      coords: {
        latitude: 40.185444,
        longitude: -76.97761
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/2.png"
      },
      name: "Shuttle Stop 2",
      description: "Door 1 at Village Center"
    };
    
    $scope.stop3 = {
      id: 3,
      coords: {
        latitude: 40.182983,
        longitude: -76.982276
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/3.png"
      },
      name: "Shuttle Stop 3",
      description: "Door 7 at Village Commons"
    };
    
    $scope.stop4 = {
      id: 4,
      coords: {
        latitude: 40.183292,
        longitude: -76.98304
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/4.png"
      },
      name: "Shuttle Stop 4",
      description: "Terrace Entrance"
    };
    //Pre 4/27/2021
    //EDIT stops 3 and 6 removed, 4 becomes stop 3, 5 becomes stop 4
    /*
    $scope.stop3 = {
      id: 3,
      coords: {
        latitude: 40.185411,
        longitude: -76.978703
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/3.png"
      },
      name: "Shuttle Stop 3",
      description: "Bailey Street"
    };
    
    $scope.stop4 = {
      id: 4,
      coords: {
        latitude: 40.182983,
        longitude: -76.982276
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/4.png"
      },
      name: "Shuttle Stop 4",
      description: "Door 7 at Village Commons"
    };
    $scope.stop5 = {
      id: 5,
      coords: {
        latitude: 40.183292,
        longitude: -76.98304
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/5.png"
      },
      name: "Shuttle Stop 5",
      description: "Terrace Entrance"
    };
    
    $scope.stop6 = {
      id: 6,
      coords: {
        latitude: 40.186719,
        longitude: -76.978606
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/6.png"
      },
      name: "Shuttle Stop 6",
      description: "Door 54 Chapel Entrance"
    };
    */
    
    //Load JSON Data
    GetData.get().then(function(gpsData) {
      //Pulls the data needed out of JSON and stores in variable
      $scope.shuttleLat = gpsData.data.DeviceList[0].EventData[0].GPSPoint_lat;
      $scope.shuttleLong = gpsData.data.DeviceList[0].EventData[0].GPSPoint_lon;

      //Debug, displays GPS coordinates to console
      console.log($scope.shuttleLat + ", " + $scope.shuttleLong);

      //Place marker for shuttle bus
      $scope.shuttleBus = {
        id: 0,
        coords: {
          latitude: $scope.shuttleLat,
          longitude: $scope.shuttleLong
        },
        options: {
          draggable: false,
          icon: "../img/map-icons/MVShuttle.png"
        }
      };

      //Function to open/close marker infowindow
      $scope.onClick = function() {
        $scope.windowOptions.visible = !$scope.windowOptions.visible;
      };
      $scope.closeClick = function() {
        $scope.windowOptions.visible = false;
      };
    });
  })
  //Factoy to pull data from JSON API
  .factory("GetData", function($http) {
    return {
      get: function(data) {
        return $http({
          //This URL is a combo of a CORS proxy url and the ClearPathGPS API URL
          //Due JS secures measures, I could not easily do cross domain scripting, CORS corrects that via proxy
          //url:"https://cors-anywhere.herokuapp.com/https://api.clearpathgps.com/events/Data.json?user=mlstorage@messiahlifeways.info&password=hcQWVhpp&group=tracking&limit=1",
          //url:"https://galvanize-cors-proxy.herokuapp.com/https://api.clearpathgps.com/events/Data.json?user=mlstorage@messiahlifeways.info&password=hcQWVhpp&group=tracking&limit=1",
          url:"https://vast-citadel-13407.herokuapp.com/https://api.clearpathgps.com/events/Data.json?user=mlstorage@messiahlifeways.info&password=hcQWVhpp&group=tracking&limit=1",
          method: "GET"
        });
      }
    };
  });
