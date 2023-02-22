import { Key, useEffect, useState } from "react";
import { GenresCell, GenresWrapper } from "./genre.styles";

export const Genres = () => {
  const [tags, setTags] = useState<any>([]);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/albums/musicinfo?client_id=${process.env.NEXT_PUBLIC_ID}&format=jsonpretty`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTags(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const result =
    tags.results &&
    tags.results.map(
      (item: { id: number; musicinfo: { description: any; tags: any } }) =>
        item.musicinfo.tags
    );

  const arrTag = result && result.flat();

  const uniqueTag =
    arrTag &&
    arrTag.filter(
      (item: any, i: any, ar: string | any[]) => ar.indexOf(item) === i
    );

  console.log(uniqueTag);

  return (
    <GenresWrapper>
      {uniqueTag &&
        uniqueTag.map((item: Key | null | undefined) => (
          <GenresCell href="#" key={item}>
            <p>{"#" + item}</p>
          </GenresCell>
        ))}
    </GenresWrapper>
  );
};

export default Genres;
