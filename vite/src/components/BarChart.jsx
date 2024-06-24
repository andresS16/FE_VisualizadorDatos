
import {  Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { InitDataContext } from '../context/InitDataContext';
import { useContext } from 'react';

function  BarChart() {
  const {products} = useContext(InitDataContext);
console.log(products);
  // Datos del gráfico
  const data = {
    labels: products.map(product => product.productName),
    datasets: [
      {
        label: 'Tn vs productos',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        data:  products.map(product => product.amount),
      },
    ],
  };

  // Opciones del gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '300px', height: '200px' }}>
   
      < Bar data={data} options={options} />
    </div>
  );
}

export default  BarChart;