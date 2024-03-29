import react from "react";
import { useEffect, useState } from "react";

export const useGetRadio = () => {
  const [radio, setRadio] = useState<any>([]);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/radios/?client_id=${process.env.NEXT_PUBLIC_ID}&format=jsonpretty`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRadio(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return radio;
};