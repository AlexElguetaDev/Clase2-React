import React from 'react';

const Notes = ({ id, content, date }) => {
  console.log(id, content, date);
  return (
    <ol>
      <h1>{content}</h1>
      <p>{date}</p>
    </ol>
  );
};

export default Notes;
