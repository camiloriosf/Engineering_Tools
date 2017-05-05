import React, { Component } from 'react';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MainLayout from '../components/MainLayout';
import withData from '../lib/withData';

try {
  if (typeof window !== 'undefined') {
    injectTapEventPlugin();
  }
} catch (e) {
  // do nothing
}

const customMuiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});


class Features extends Component {
  static getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    const isServer = !!req;
    return { isServer, userAgent };
  }

  render() {
    const { userAgent } = this.props;
    const muiTheme = getMuiTheme(getMuiTheme({ userAgent }), customMuiTheme);

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <MainLayout pathname={this.props.url.pathname} title="E-SaaS - Features">
          Features
        </MainLayout>
      </MuiThemeProvider>
    );
  }
}

export default withData(Features);
