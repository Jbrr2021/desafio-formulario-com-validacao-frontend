// ErrorMessage.js
import React from 'react';

const ErrorMessage = ({ message }) => (
    <div className="text-red-600 text-sm mt-1" role="alert">
        {message}
    </div>
);

export default ErrorMessage;
