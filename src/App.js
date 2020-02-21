import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './App.css';

function App() {
  const [techs, setTechs] = useState(['ReactJS']);
  const [newTechs, setNewTechs] = useState('');

  const handleTech = useCallback(() => {
    setTechs([...techs, newTechs]);
    setNewTechs('');
  }, [techs, newTechs]);

  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');

    if (storageTechs) {
      setTechs(JSON.parse(storageTechs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <input value={newTechs} onChange={e => setNewTechs(e.target.value)} />
      <button type="button" onClick={handleTech}>
        Adicionar
      </button>
      <br />
      <strong>Você tem {techSize} tecnologias:</strong>
      {techs.map(tech => (
        <>
          <li key={tech}>{tech}</li>
        </>
      ))}
    </>
  );
}

export default App;
