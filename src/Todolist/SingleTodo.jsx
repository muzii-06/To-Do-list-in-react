import React from 'react';
import moment from 'moment';
const SingleTodo = ({todo,date}) => {
  return (
    <>
      <div className="col-md-3">
        <div className="card border-0 my-1 shadow p-4">
          <h4>{todo}</h4>
          <p className="text-secondary">{moment(date).fromNow()}</p>
        </div>
      </div>
    </>
  );
};

export default SingleTodo;
