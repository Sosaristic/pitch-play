import React, { useEffect, useState } from 'react';
import BgImage from '../../assets/images/background.png';

const Payment = ({ token }) => {
  const [clientToken, setClientToken] = useState('');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const clientToken = queryParams.get('token');
    setClientToken(clientToken);
  }, []);

  useEffect(() => {
    if (!clientToken) {
      console.error('Missing Braintree token');
      sendToReactNative({
        type: 'INIT_ERROR',
        error: 'Missing Braintree token',
      });
      return;
    }

    const script = document.createElement('script');
    script.src =
      'https://js.braintreegateway.com/web/dropin/1.44.1/js/dropin.min.js';
    script.onload = () => initializeDropin(clientToken);
    document.body.appendChild(script);
  }, [clientToken]);

  const initializeDropin = (token) => {
    const submitButton = document.getElementById('submit-button');

    braintree.dropin.create(
      {
        authorization: token,
        selector: '#dropin-container',
      },
      function (err, dropinInstance) {
        if (err) {
          console.error('Drop-in creation error:', err);
          sendToReactNative({
            type: 'INIT_ERROR',
            error: err.message || 'Drop-in failed',
          });
          return;
        }

        setIsReady(true);

        submitButton.addEventListener('click', function () {
          dropinInstance.requestPaymentMethod(function (err, payload) {
            const message = {
              type: 'PAYMENT_METHOD_RESULT',
              error: err ? err.message || 'Tokenization error' : null,
              data: payload ? { nonce: payload.nonce } : null,
            };

            sendToReactNative(message);
          });
        });
      }
    );
  };

  const sendToReactNative = (data) => {
    if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
      window.ReactNativeWebView.postMessage(JSON.stringify(data));
    } else {
      console.log('WebView not detected. Logging:', data);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Complete Payment</h2>
      <div id="dropin-container" style={styles.dropin}></div>

      <button
        disabled={!isReady}
        id="submit-button"
        style={{
          ...styles.button,
          ...(isReady ? {} : styles.disabledButton),
        }}
      >
        Pay Now
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: 16,
    maxWidth: 400,
    margin: 'auto',
    fontFamily: 'sans-serif',
    backgroundColor: 'transparent',
    height: '100vh',
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  header: {
    textAlign: 'center',
  },
  dropin: {
    marginBottom: 16,
  },
  button: {
    width: '100%',
    padding: 12,
    fontSize: 16,
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },
  disabledButton: {
    backgroundColor: '#cccccc',
    cursor: 'not-allowed',
    opacity: 0.6,
  },
};

export default Payment;
