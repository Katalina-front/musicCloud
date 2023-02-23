import react from "react";

// import { useEffect, useState } from "react";

// export const useGetHits = () => {
//   const [hits, setHits] = useState<any>([]);

//   useEffect(() => {
//     fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/tracks/?client_id=${process.env.NEXT_PUBLIC_ID}&format=jsonpretty&oreder=[jenum:{listens_week}]`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         // console.log(data);
//         setHits(data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);

//   return hits;
// };
