import React, { useEffect, useState } from 'react';
import './style.css';
import Notes from './components/Notes.jsx';
import { Pedrito, Numero } from './components/Pepito.jsx';
import Juanito from './components/Juanito.jsx';

const Number = Numero();

export default function App() {
  const [not, setNot] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    console.log('useEffect');
    setTimeout(() => {
      console.log('Ahora');
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          console.log('seteando las notas de la API');
          setNot(json);
        });
    }, 2000);
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      id: not.length + 1,
      title: newNote,
      body: newNote,
    };
    console.log(noteToAddToState);
    /* const addNote = not.concat(noteToAddToState); */
    setNot([...not, noteToAddToState]);
    setNewNote('');
  };

  console.log('render');
  if (not.length === 0) return 'Hola';

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
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear Nota</button>
      </form>
    </div>
  );
}
