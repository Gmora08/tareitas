import React from 'react';

const Input = () => (
  <form id="input">
    <div className="form-group">
      <label htmlFor="task-input">Add to-do</label>
      <input type="text" className="form-control" id="task-input" aria-describedby="emailHelp" placeholder="Add a to-do..." />
    </div>
  </form>
);

export default Input;
