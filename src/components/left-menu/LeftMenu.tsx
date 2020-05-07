import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Constants from "../../utils/Constants";
import { Link } from "react-router-dom";

interface Props {
  toggleDrawer: (open: boolean) => void;
  clickMenuItem: (item: string) => void;
  toggled: boolean;
}

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const actions = new Constants().getMenuItems();

const LeftMenu: FC<Props> = (props) => {
  const classes = useStyles();

  const menuItems = () => (
    <div role="presentation">
      <List className={classes.list}>
        {actions.map((action) => (
          <ListItem button key={action.displayName} component={Link} to={action.location}>
            <ListItemIcon onClick={() => props.clickMenuItem(action.displayName)}>{action.icon}</ListItemIcon>
            <ListItemText primary={action.displayName} onClick={() => props.clickMenuItem(action.displayName)} />
          </ListItem>
        ))}
        <Divider />
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer open={props.toggled} onClose={() => props.toggleDrawer(false)}>
          {menuItems()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default LeftMenu;
