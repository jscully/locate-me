import "../App.css";
import "typeface-roboto";
import React, { Component } from "react";

interface Props {}

interface State {}

class AboutView extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return <div>Simple about page</div>;
  }
}
export default AboutView;
