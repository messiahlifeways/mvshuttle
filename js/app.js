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
        latitude: 40.184228,
        longitude: -76.978736
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/3.png"
      },
      name: "Shuttle Stop 3",
      description: "Back corner of 531 Dogwood Drive"
    };
    $scope.stop4 = {
      id: 4,
      coords: {
        latitude: 40.183977,
        longitude: -76.980155
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/4.png"
      },
      name: "Shuttle Stop 4",
      description: "Corner of 558 Dogwood Drive"
    };
    $scope.stop5 = {
      id: 5,
      coords: {
        latitude: 40.185411,
        longitude: -76.978703
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/5.png"
      },
      name: "Shuttle Stop 5",
      description: "Bailey Street"
    };
    $scope.stop6 = {
      id: 6,
      coords: {
        latitude: 40.185292,
        longitude: -76.980324
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/6.png"
      },
      name: "Shuttle Stop 6",
      description: "Between 584 and 586 Locust Lane"
    };
    $scope.stop7 = {
      id: 7,
      coords: {
        latitude: 40.182983,
        longitude: -76.982276
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/7.png"
      },
      name: "Shuttle Stop 7",
      description: "Door 7 at Village Commons"
    };
    $scope.stop8 = {
      id: 8,
      coords: {
        latitude: 40.183292,
        longitude: -76.98304
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/8.png"
      },
      name: "Shuttle Stop 8",
      description: "Terrace Entrance"
    };
    $scope.stop9 = {
      id: 9,
      coords: {
        latitude: 40.182733,
        longitude: -76.983393
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/9.png"
      },
      name: "Shuttle Stop 9",
      description: "Maple Mall"
    };
    $scope.stop10 = {
      id: 10,
      coords: {
        latitude: 40.182181,
        longitude: -76.98333
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/10.png"
      },
      name: "Shuttle Stop 10",
      description: "Redwood Road (near Aspen Avenue)"
    };
    $scope.stop11 = {
      id: 11,
      coords: {
        latitude: 40.181684,
        longitude: -76.983871
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/11.png"
      },
      name: "Shuttle Stop 11",
      description: "Redwood Road"
    };
    $scope.stop12 = {
      id: 12,
      coords: {
        latitude: 40.182116,
        longitude: -76.982557
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/12.png"
      },
      name: "Shuttle Stop 12",
      description: "Ginko Grove"
    };
    $scope.stop13 = {
      id: 13,
      coords: {
        latitude: 40.184325,
        longitude: -76.980904
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/13.png"
      },
      name: "Shuttle Stop 13",
      description: "Locust Lane next to the Gardens"
    };
    $scope.stop14 = {
      id: 14,
      coords: {
        latitude: 40.186669,
        longitude: -76.980273
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/14.png"
      },
      name: "Shuttle Stop 14",
      description: "The Y on Willow Way"
    };
    $scope.stop15 = {
      id: 15,
      coords: {
        latitude: 40.187545,
        longitude: -76.978541
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/15.png"
      },
      name: "Shuttle Stop 15",
      description: "Across from 670 on Willow Way"
    };
    $scope.stop16 = {
      id: 16,
      coords: {
        latitude: 40.187698,
        longitude: -76.979093
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/16.png"
      },
      name: "Shuttle Stop 16",
      description: "Across from 663 Willow Way"
    };
    $scope.stop17 = {
      id: 17,
      coords: {
        latitude: 40.185786,
        longitude: -76.980072
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/17.png"
      },
      name: "Shuttle Stop 17",
      description: "Gazebo on Willow Way and Messiah Circle"
    };
    $scope.stop18 = {
      id: 18,
      coords: {
        latitude: 40.186719,
        longitude: -76.978606
      },
      options: {
        draggable: false,
        icon: "../img/map-icons/18.png"
      },
      name: "Shuttle Stop 18",
      description: "Door 54 Chapel Entrance"
    };

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
          url:
            "https://cors-anywhere.herokuapp.com/https://api.clearpathgps.com/events/Data.json?user=mlstorage@messiahlifeways.info&password=hcQWVhpp&group=tracking&limit=1",
          method: "GET"
        });
      }
    };
  });
