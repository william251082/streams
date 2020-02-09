import React from "react";

class GoogleAuth extends React.Component {
    componentDidMount() {
        // load and initialize google oauth library
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '186590377943-bosjhaii78pcdqv7t74nvig6f32nr6t7.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    render() {
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;

// // type on browser
// gapi
// // request stuff we need
// gapi.load('client:auth2')
// gapi