import './IntroTable.css'

import React from 'react';

const IntroTable = () => {
  return (
    <table className='tabla'>
      <thead>
        <tr>
          <th>Categoría</th>
          <th>Rango de IMC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='insuficiencia-ponderal'>Insuficiencia Ponderal</td>
          <td>-18.5</td>
        </tr>
        <tr>
          <td className='peso-normal'>Peso Normal</td>
          <td>18.5 - 24.9</td>
        </tr>
        <tr>
          <td className='sobrepeso'>Sobrepeso</td>
          <td>25 - 29.9</td>
        </tr>
        <tr>
          <td className='obesidad-tipo1'>Obesidad Tipo 1</td>
          <td>30 - 34.9</td>
        </tr>
        <tr>
          <td className='obesidad-tipo2'>Obesidad Tipo 2</td>
          <td>35 - 39.9</td>
        </tr>
        <tr>
          <td className='obesidad-tipo3'>Obesidad Tipo 3</td>
          <td>+40</td>
        </tr>
      </tbody>
    </table>
  );
};



export default IntroTable;

