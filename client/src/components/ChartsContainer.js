import { useState } from 'react'
import { TbSwitchHorizontal } from 'react-icons/tb'
import Wrapper from '../assets/wrappers/ChartsContainer'
import { useAppContext } from '../context/appContext'
import AreaChart from './AreaChart'
import BarChart from './BarChart'

const ChartsContainer = () => {
  const { monthlyApplications: data } = useAppContext()
  const [barChart, setBarChart] = useState(true)

  return (
    <Wrapper>
      <h4>monthly applications</h4>
      <button
        className="charts-btn"
        type="button"
        onClick={() => setBarChart(!barChart)}>
        {barChart ? 'area chart' : 'bar chart'}
        <span>
          <TbSwitchHorizontal />
        </span>
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  )
}
export default ChartsContainer
