import React, {Component} from 'react'
import MainLayout from '../components/MainLayout'
import withData from '../lib/withData'
import {deepOrange500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

//window.localStorage.setItem('token', "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OGZkMmE1NTllZmQzNzJkNWMyNWQ0NmUiLCJpYXQiOjE0OTM3NTU0NTk3NzR9.Qrk2pbSP_-_WZXC_CgbKm1PZ2BAeWxj7Ujxvv8X9HWQ")

try {
  if (typeof window !== 'undefined') {
    injectTapEventPlugin()
  }
} catch (e) {
  // do nothing
}

const _muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
})


class Prices extends Component {
  static getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    const isServer = !!req
    return { isServer, userAgent }
  }

  constructor(props, context) {
    super(props, context)
  }


  render() {

    const { userAgent } = this.props
    const muiTheme = getMuiTheme(getMuiTheme({ userAgent: userAgent }), _muiTheme)

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <MainLayout pathname={this.props.url.pathname}>
          Prices
        </MainLayout>
      </MuiThemeProvider>
    )
  }
}

export default withData(Prices)