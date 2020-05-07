import React, { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import PublicIcon from "@material-ui/icons/Public";
import Constants from "../../utils/Constants";

interface Props {
  clickMenuItem: (item: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      transform: "translateZ(0px)",
      flexGrow: 1,
    },
    speedDial: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);

const actions = new Constants().getMenuItems();

const FloatingMenu: FC<Props> = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Backdrop open={open} />
      <SpeedDial
        style={{ textDecoration: "none" }}
        ariaLabel="menu speed dial"
        className={classes.speedDial}
        icon={<PublicIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}>
        {actions.map((action) => (
          <SpeedDialAction
            style={{ textDecoration: "none" }}
            key={action.displayName}
            icon={action.iconWithLink}
            tooltipTitle={action.displayName}
            tooltipOpen
          />
        ))}
      </SpeedDial>
    </div>
  );
};

export default FloatingMenu;
