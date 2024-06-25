import PropTypes from 'prop-types';
import {  Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { InitDataContext } from '../context/InitDataContext';
import { useContext } from 'react';

function  BarChart(datosx) {
  const {products} = useContext(InitDataContext);
console.log(products);
  // Datos del gráfico
  const data = {
    labels: datosx.datosx.map(x => x) ,
    datasets: [
      {
        label: `${datosx.labelName} vs productos`,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        data: datosx.datosy.map(y => y) ,
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
BarChart.propTypes = {
  datosx: PropTypes.array.isRequired,
  datosy: PropTypes.array.isRequired,
  labelName: PropTypes.string
};

BarChart.defaultProps = {
  datosx: [],
  datosy: [],
  labelName: PropTypes.string
}

export default  BarChart;