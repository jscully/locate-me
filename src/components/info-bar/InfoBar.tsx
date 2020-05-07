import React, { FC } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";

interface Props {
  open: boolean;
  handleClose: () => void;
  infoMessage: string;
}

const InfoBar: FC<Props> = (props) => {
  return (
    <div>
      <Snackbar open={props.open} onClose={props.handleClose} TransitionComponent={Slide} message={props.infoMessage} />
    </div>
  );
};

export default InfoBar;
