import react from 'react'

// import { useEffect, useState } from 'react';

// export const useGetGenres = () => {
//     const [tags, setTags] = useState<any>([]);

//   useEffect(() => {
//     fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/albums/musicinfo?client_id=${process.env.NEXT_PUBLIC_ID}&format=jsonpretty`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setTags(data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);

//   return tags;
// }