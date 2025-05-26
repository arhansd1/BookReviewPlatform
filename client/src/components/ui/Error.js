// client/src/components/ui/Error.js
import React from 'react';

const Error = ({ message }) => (
  <div className="error-message">
    <p>Error: {message}</p>
  </div>
);

export default Error;