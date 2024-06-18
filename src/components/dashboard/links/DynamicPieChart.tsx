import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { type Data } from '../../../Types';

// Define una lista de colores para los segmentos del gráfico
const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042',
  '#AF19FF', '#FF007A', '#FF0067', '#4CFF00'
];

interface Props {
  data: Data[]
}

const DynamicPieChart = ({ data }: Props) => {
  // Genera los colores de los segmentos de forma dinámica
  const dynamicColors = COLORS.concat(COLORS);

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <>
            {entry}
            <Cell key={`cell-${index}`} fill={dynamicColors[index % dynamicColors.length]} />
          </>
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default DynamicPieChart;
