import React, { useEffect, useState } from 'react';
import './style.css';
import Notes from './components/Notes.jsx';
import { Pedrito, Numero } from './components/Pepito.jsx';
import Juanito from './components/Juanito.jsx';

const Number = Numero();

export default function App() {
  const [not, setNot] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          setNot(json);
          setLoading(false);
        });
    }, 2000);
  }, [newNote]);

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

  return (
    <div>
      <h1>El numero de la clase es {Number}</h1>
      {loading ? 'Cargando..' : ''}
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
