import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '269970306630-h2ab5k8uq6ofddnfcc1s6qp9dacv5nru.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render(){
    return (
      <div>
        Goodle Auth
      </div>
    )
  }
}

export default GoogleAuth;