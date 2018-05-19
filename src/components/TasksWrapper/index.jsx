import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';

import './styles.css';

const TasksWrapper = (props) => (
  <div id="tasks-wrapper">
    {
      props.tasks.map((task) => (
        <Task key={task.id} id={task.id} name={task.name} completeTask={props.completeTask} />
      ))
    }
  </div>
)

TasksWrapper.propTypes = {
  tasks: PropTypes.array,
}

export default TasksWrapper;
