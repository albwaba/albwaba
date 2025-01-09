// import L from "leaflet";
// import "leaflet-control-geocoder/dist/Control.Geocoder.js";
// import "leaflet-control-geocoder/dist/Control.Geocoder.css";

// import { useMap } from "react-leaflet";
// import { useEffect } from "react";

// export default function LeafletGeocoder() {
//   const map = useMap();
//   useEffect(() => {
//     if (!map) return;

//     const geocoder = L.Control.geocoder({
//       defaultMarkGeocode: false,
//     })
//       .on("markgeocode", function (e) {
//         console.log(e);
//         map.fitBounds(e.geocode.bbox);
//       })
//       .addTo(map);

//     return () => {
//       map.removeControl(geocoder);
//     };
//   }, [map]);

//   return null;
// }
