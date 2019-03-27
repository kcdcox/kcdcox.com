<template>
  <div>
    <gmap-map
      class="google-map"
      :center="center"
      :zoom="8"
      :options="mapStyle"
      style="width:100%; height: calc(100vh - 55px); top:55px;"
    > </gmap-map>
    <div class="fit"></div>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: {lat: 49.2, lng: -122.36},
      mapStyle: {styles: [
          {
            "featureType": "administrative",
            "elementType": "labels.icon",
            "stylers": [
              {
                "color": "#000"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "weight": 8
              }
            ]
          },
          {
            "featureType": "landscape.man_made",
            "stylers": [
              {
                "color": "CFA8D6"
              }
            ]
          },
          {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#D2B4D6"
              }
            ]
          },
          {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "CFA8D6"
              },
              {
                "weight": 3.5
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "stylers": [
              {
                "color": "#45EE9C"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#7AE0A8"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#45EE9C"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#EEE980"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "stylers": [
              {
                "color": "CFB8D6"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#EA894A"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#EA564A"
              }
            ]
          },
          {
            "featureType": "road.local",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#8080EE"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#8F89F2"
              }
            ]
          }
        ]}
      
    };
  }
};
</script>

<style scoped>
.fit{
  height: 55px;
}
google-map{
  width: 100%;
  height: 100vh !important;
}
</style>
