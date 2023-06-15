import React from 'react';
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

  return (
    <div>
      <h1>El numero de la clase es {Number}</h1>
      {notes.map((notes) => (
        <Notes {...notes} />
      ))}
      {/* Modulo Nombrado, Tratar de usar esto siempre */}
      <Pedrito />
      {/* Modulo por defecto */}
      <Juanito />
    </div>
  );
}
