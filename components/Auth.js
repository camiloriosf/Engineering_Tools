import React, { Component } from 'react';
import { RaisedButton, FlatButton, Dialog, TextField } from 'material-ui';
import { connect } from 'react-redux';
import * as actions from '../lib/actions/auth'

const styles = {
    dialogStyle: { width: '50%', maxWidth:330 },
    action: { marginTop: 10, textAlign: 'center' }
}

class Auth extends Component {
    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            )
        }
    }

    renderSubmitButton() {
        return ([
            <FlatButton key={"CancelButton"} type="button" label="Cancel" secondary={true} style={{ marginRight: 10 }} />,
            <RaisedButton key={"SubmitButton"} type="submit" label="Submit" primary={true} />
        ])
    }

    renderLogin() {
        return (
            <form>
                <TextField hintText="Email" floatingLabelText="Email" fullWidth={true} />
                <div style={styles.action}>
                    {this.renderAlert()}
                    {this.renderSubmitButton()}
                </div>
            </form>
        )
    }

    render() {
        return (
            <div>
                <RaisedButton label="LOGIN" primary={true} onTouchTap={() => this.props.authModal({open:true})}/>
                <Dialog title="Login" contentStyle={styles.dialogStyle} modal={false} open={this.props.open} onRequestClose={() => this.props.authModal({open:false})} >
                    <div>
                        {this.renderLogin()}
                    </div>
                </Dialog>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        open: state.auth.open,
    }
}

Auth = connect(mapStateToProps, actions)(Auth);

export default Auth;