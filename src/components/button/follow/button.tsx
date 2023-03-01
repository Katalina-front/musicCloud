import { Checkbox } from "@mui/material";
import { SDislikeIcon, SLikeIcon } from "./button styles";

export const ButtonFollow = () => {
  return (
    <div>
      <Checkbox icon={<SDislikeIcon />} checkedIcon={<SLikeIcon />} />
    </div>
  );
};

export default ButtonFollow;
