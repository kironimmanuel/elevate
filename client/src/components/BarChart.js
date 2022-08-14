import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" fill="#000" />
        <YAxis allowDecimals={false} />
        <Legend
          width={100}
          wrapperStyle={{
            top: 40,
            right: 0,
            backgroundColor: '#f5f5f5',
            border: '1px solid #d5d5d5',
            borderRadius: 3,
            lineHeight: '40px',
          }}
        />
        <Tooltip
          wrapperStyle={{
            width: 100,
            color: 'black',
          }}
        />
        <Bar dataKey="count" fill="#3b82f6" barSize={50} />
      </BarChart>
    </ResponsiveContainer>
  )
}
export default BarChartComponent
