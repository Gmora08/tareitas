import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Task = (props) => (
  <div className="task alert alert-primary">
    <button
      className="btn btn-primary"
      onClick={() => (props.completeTask(props.id))}
    >
      Completar
    </button>
    <p>{props.name}</p>
  </div>
);

Task.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Task;
