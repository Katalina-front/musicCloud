import React from "react";
import { Key } from "react";
import { ITEMS_GENRES } from "./genres.constants";
import { useGetGenres } from "./genres.request";
import { SGenresCell, SGenresWrapper } from "./genres.styles";

export const Genres = () => {
  const tags = useGetGenres();

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

  // const result =
  //   ITEMS_GENRES.results &&
  //   ITEMS_GENRES.results.map((item) => item.musicinfo.tags);

  // const arrTag = result && result.flat();

  // const uniqueTag =
  //   arrTag &&
  //   arrTag.filter(
  //     (item: any, i: any, ar: string | any[]) => ar.indexOf(item) === i
  //   );

  console.log(uniqueTag);

  return (
    <SGenresWrapper>
      {uniqueTag &&
        uniqueTag.map((item: Key | null | undefined) => (
          <SGenresCell href="" key={item}>
            <p>{"#" + item}</p>
          </SGenresCell>
        ))}
    </SGenresWrapper>
  );
};

export default Genres;
