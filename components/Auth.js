import React, { Component } from 'react';
import { RaisedButton, FlatButton, Dialog, TextField } from 'material-ui';
import { connect } from 'react-redux';
import * as actions from '../lib/actions/auth';

const styles = {
  dialogStyle: { width: '50%', maxWidth: 500, textAlign: 'center' },
  action: { marginTop: 30, textAlign: 'center' },
};

class Auth extends Component {

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
    return null;
  }

  renderContent() {
    if (!this.props.sent) {
      return (
        <form onSubmit={(event) => { event.preventDefault(); this.props.login({ email: 'test@test.com' }); }}>
          <h4>To sign up or log in, fill out your email below.</h4>
          <TextField hintText="you@youremail.com" floatingLabelText="Email" fullWidth name="email" />
          <div style={styles.action}>
            {this.renderAlert()}
            <FlatButton key={'CancelButton'} type="button" label="Cancel" onTouchTap={() => this.props.authModal({ open: false })} secondary style={{ marginRight: 10 }} />
            <RaisedButton key={'SubmitButton'} type="submit" label="Submit" primary />
          </div>
        </form>
      );
    }
    return (
      <div className="confirm">
        <p>We sent an email to: <span>{this.props.email}</span>.</p>
        <p>Please log in to your email, verify that the security code matches
          <span>{this.props.phrase}</span> and follow the link.</p>
        <style jsx>{`
                        .confirm p span {
                            font-weight: bold;
                        }
                    `}
        </style>
      </div>
    );
  }

  render() {
    return (
      <div>
        <RaisedButton label="SIGNUP/LOGIN" primary onTouchTap={() => this.props.authModal({ open: true })} />
        <Dialog title={!this.props.sent ? 'Authenticate' : 'Authenticated'} contentStyle={styles.dialogStyle} modal={false} open={this.props.open} onRequestClose={() => this.props.authModal({ open: false })} >
          <div>
            {this.renderContent()}
          </div>
        </Dialog>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    open: state.auth.open,
    sent: state.auth.sent,
    email: state.auth.email,
    phrase: state.auth.phrase,
  };
}

export default connect(mapStateToProps, actions)(Auth);
