import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const clientId = '1038507303205-speksnf4bv1qhan7f3pjtho4t4ln7iom.apps.googleusercontent.com'; // Replace with your Google OAuth client ID

function GoogleLoginButton({ onLoginSuccess }) {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={credentialResponse => {
          onLoginSuccess(credentialResponse);
        }}
        onError={() => {
          alert('Google Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
}

export default GoogleLoginButton;
