import "../App.css";
import "typeface-roboto";
import TitleBar from "../components/title-bar/TitleBar";
import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import LeftMenu from "../components/left-menu/LeftMenu";
import FloatingMenu from "../components/floating-menu/FloatingMenu";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LocationView from "./LocationView";
import AboutView from "./AboutView";
import Welcome from "../components/welcome/Welcome";

interface Props {}

interface State {
  openMenu: boolean;
}

class App extends Component<Props, State> {
  timeout!: NodeJS.Timeout;

  constructor(props: Props) {
    super(props);
    this.state = {
      openMenu: false,
    };
  }

  clickMenuItem = (item: string) => {
    this.toggleDrawer(false);
  };

  toggleDrawer = (open: boolean) => {
    this.setState({ openMenu: open });
  };

  componentDidMount() {}

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
            <TitleBar toggleDrawer={this.toggleDrawer} />
            <LeftMenu
              clickMenuItem={this.clickMenuItem}
              toggleDrawer={this.toggleDrawer}
              toggled={this.state.openMenu}
            />
            <React.Fragment>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: "90vh" }}>
                <Route path="/welcome" render={(props) => <Welcome />} />
                <Route path="/location" render={(props) => <LocationView />} />
                <Route path="/about" render={(props) => <AboutView />} />
                <Redirect to="/welcome" />
              </Grid>
              <Grid>
                <FloatingMenu clickMenuItem={this.clickMenuItem} />
              </Grid>
            </React.Fragment>
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
