import React, { useState } from 'react';
import './style.css';
import Notes from './components/Notes.jsx';
import { Pedrito, Numero } from './components/Pepito.jsx';
import Juanito from './components/Juanito.jsx';

const Number = Numero();

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
];

export default function App() {
  if (typeof notes === 'undefined' || notes.length === 0) {
    return 'No tenemos notas que mostrar';
  }
  const [not, setNot] = useState(notes);
  const [newNote, setNewNote] = useState('');

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleClick = (event) => {
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };
    console.log(noteToAddToState);
    const addNote = not.concat(noteToAddToState);
    setNot(addNote);
    setNewNote('')
  };

  return (
    <div>
      <h1>El numero de la clase es {Number}</h1>
      <ol>
        {not.map((notes) => (
          <Notes {...notes} />
        ))}
      </ol>
      {/* Modulo Nombrado, Tratar de usar esto siempre */}
      <Pedrito />
      {/* Modulo por defecto */}
      <Juanito />
      <div>
        <input type="text" onChange={handleChange} value={newNote} />
        <button onClick={handleClick}>Crear Nota</button>
      </div>
    </div>
  );
}
