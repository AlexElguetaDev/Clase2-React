import React from 'react';

const Notes = ({ userId, id, title, body }) => {
  return (
    <ol>
      {userId}
      <h1>{title}</h1>
      <p>{body}</p>
    </ol>
  );
};

export default Notes;
