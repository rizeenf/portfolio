// import React from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Annotation,
//   ZoomableGroup,
// } from "react-simple-maps";

// const MapChart = () => {
//   return (
//     <ComposableMap
//       projection="geoAzimuthalEqualArea"
//       projectionConfig={{
//         rotate: [965.0, 0.0, 0],
//         center: [-5, -3],
//         scale: 1500,
//       }}
//     >
//       <Geographies
//         geography="./featuresMap.json"
//         fill="#EAB308"
//         stroke="#F53"
//         strokeWidth={2}
//       >
//         {({ geographies }) =>
//           geographies.map((geo) => (
//             <Geography key={geo.rsmKey} geography={geo} />
//           ))
//         }
//       </Geographies>
//       <Annotation
//         subject={[965, 0]}
//         dx={-90}
//         dy={-30}
//         connectorProps={{
//           stroke: "#FF5533",
//           strokeWidth: 3,
//           strokeLinecap: "round",
//         }}
//       >
//         <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
//           {"Bekasi"}
//         </text>
//       </Annotation>
//     </ComposableMap>
//   );
// };

// export default MapChart;
