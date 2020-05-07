import { MenuItem } from "./model/MenuItem";
import PublicIcon from "@material-ui/icons/Public";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import React from "react";
import { Link } from "react-router-dom";

class Constants {
  withLink = (to: string, children: Object) => (
    <Link to={to} style={{ color: "inherit", textDecoration: "inherit" }}>
      {children}
    </Link>
  );

  welcomeLink = "/welcome";
  locationLink = "/location";
  aboutLink = "/about";

  readonly menuItemsList: MenuItem[] = [
    {
      iconWithLink: this.withLink(this.welcomeLink, <HomeIcon />),
      icon: <HomeIcon />,
      key: 1,
      displayName: "Home",
      location: this.welcomeLink,
    },
    {
      iconWithLink: this.withLink(this.locationLink, <PublicIcon />),
      icon: <PublicIcon />,
      key: 2,
      displayName: "Locate My IP",
      location: this.locationLink,
    },
    {
      iconWithLink: this.withLink(this.aboutLink, <InfoIcon />),
      icon: <InfoIcon />,
      key: 2,
      displayName: "About",
      location: this.aboutLink,
    },
  ];

  getMenuItems(): MenuItem[] {
    return this.menuItemsList;
  }
}

export default Constants;
