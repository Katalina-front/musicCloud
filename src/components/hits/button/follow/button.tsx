import { Checkbox } from "@mui/material";
import {
  SFavoriteOutlinedIcon,
  SFavoriteBorderOutlinedIcon,
} from "../../hits.styles";

export const ButtonFollow = () => {
  return (
    <div>
      <Checkbox
        icon={<SFavoriteBorderOutlinedIcon />}
        checkedIcon={<SFavoriteOutlinedIcon />}
      />
    </div>
  );
};

export default ButtonFollow;
