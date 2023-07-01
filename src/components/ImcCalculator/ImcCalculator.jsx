import React, { useState } from 'react';
import './ImcCalculator.css'

function IMCCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');


  const calculateBMI = () => {
    const heightInMeters = height / 100; // Convertir altura de centímetros a metros
    const bmi = weight / (heightInMeters * heightInMeters); // Calcular el IMC
  
    setResult(bmi.toFixed(0)); 
  };

  return (
    <div className="calculadora-imc">
      <h2>Calculadora IMC</h2>
      <input
        type="text"
        placeholder="Peso (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="text"
        placeholder="Altura (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calcular</button>
      <div className="resultado">
        <p>Resultado:</p>
        <p className="categoria">Categoría:</p>
        <p className="valor">{result}</p>
      </div>
    </div>
  );
}  

export default IMCCalculator;
