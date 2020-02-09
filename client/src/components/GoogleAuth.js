import React from "react";

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        // load and initialize google oauth library
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '186590377943-bosjhaii78pcdqv7t74nvig6f32nr6t7.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <button className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui red google button">
                    <i className="google icon" />
                    Sign In With Google
                </button>
            );
        }
    }

    render() {
        return <div>{ this.renderAuthButton() }</div>;
    }
}

export default GoogleAuth;