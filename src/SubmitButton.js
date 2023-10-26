import React from 'react';

function SubmitButton({ onSubmit }) {
  return <button className="submit-button" onClick={onSubmit}>Submit</button>;
}

export default SubmitButton;