import React from 'react';
import { Card } from 'react-bootstrap';

function TokenInfo({ credits }) {
  return (
    <div className="token-card mb-4">
      <h4>$DVSN Credits</h4>
      <div className="token-value">{credits}</div>
      <p className="mt-2">
        Credits are used for code generation. Each code generation consumes 10 credits.
      </p>
      <hr className="my-3" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
      <div>
        <small>
          Total Supply: 1 billion tokens
          <br />
          Learn more about our token economics in the whitepaper.
        </small>
      </div>
    </div>
  );
}

export default TokenInfo; 