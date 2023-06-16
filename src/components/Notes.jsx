import React from 'react';

const Notes = (props) => {
  console.log({ props });
  debugger;
  const { content, date } = props;
  return (
    <ol>
      <h1>{content}</h1>
      <p>{date}</p>
    </ol>
  );
};

export default Notes;
