import react from "react";
import { useEffect, useState } from "react";

export const useGetArtists = () => {
  const [artists, setArtists] = useState<any>([]);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/artists/?client_id=${process.env.NEXT_PUBLIC_ID}&order=popularity_week`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArtists(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return artists;
};
