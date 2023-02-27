import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { ITEMS_RADIO } from "./radio.constants";
import { useGetRadio } from "./radio.requests";
import { SCarousel, SCell, SScrollableContainer } from "./radio.styles";

export const Radio = () => {
  const radio = useGetRadio();

  return (
    <SCarousel>
      <SScrollableContainer>
        <ul className="list">
          {radio.results &&
            radio.results.map(
              (item: { id: number; image: string; dispname: string }) => (
                <SCell>
                  <li className="item" key={item.id}>
                    <img src={item.image} />
                  </li>
                  <p>{item.dispname}</p>
                </SCell>
              )
            )}
        </ul>
      </SScrollableContainer>
    </SCarousel>
  );
};

export default Radio;
