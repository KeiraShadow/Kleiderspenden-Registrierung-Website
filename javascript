import React, { useState } from 'react';
import axios from 'axios';

function KleiderspendeRegistrierung() {
  const [kleiderArt, setKleiderArt] = useState('');
  const [krisenRegion, setKrisenRegion] = useState('');
  const [abholung, setAbholung] = useState(false);
  const [abholAdresse, setAbholAdresse] = useState('');
  const [registrierungsBestaetigung, setRegistrierungsBestaetigung] = useState('');

  const handleKleiderArtChange = (event) => {
    setKleiderArt(event.target.value);
  };

  const handleKrisenRegionChange = (event) => {
    setKrisenRegion(event.target.value);
  };

  const handleAbholungChange = (event) => {
    setAbholung(event.target.checked);
  };

  const handleAbholAdresseChange = (event) => {
    setAbholAdresse(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validierung der Formulardaten
    if (!kleiderArt || !krisenRegion) {
      alert('Bitte geben Sie die Art der Kleidung und eine Krisenregion an.');
      return;
    }

    if (abholung && !abholAdresse) {
      alert('Bitte geben Sie eine Abholadresse an.');
      return;
    }

    // Daten an den Server senden
    const data = {
      kleiderArt,
      krisenRegion,
      abholung,
      abholAdresse,
    };

    axios.post('/api/kleiderspende-registrierung', data)
      .then((response) => {
        setRegistrierungsBestaetigung(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Kleiderspende-Registrierung</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="kleiderArt">Art der Kleidung:</label>
          <input type="text" className="form-control" id="kleiderArt" value={kleiderArt} onChange={handleKleiderArtChange} />
        </div>
        <div className="form-group">
          <label htmlFor="krisenRegion">Krisenregion:</label>
          <select className="form-control" id="krisenRegion" value={krisenRegion} onChange={handleKrisenRegionChange}>
            <option value="">Bitte auswählen</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Jemen">Jemen</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Syrien">Syrien</option>
            <option value="Ukraine">Ukraine</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="abholung">Abholung:</label>
          <input type="checkbox" id="abholung" checked={abholung} onChange={handleAbholungChange} />
        </div>
        {abholung && (
          <div className="form-group">
            <label htmlFor="abholAdresse">Abholadresse:</label>
            <input type="text" className="form-control" id
         </div>
    </div>
    
