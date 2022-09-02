import { useState } from 'react'
import { TbSwitchHorizontal } from 'react-icons/tb'
import Wrapper from '../assets/wrappers/ChartsContainer'
import { useAppContext } from '../context/appContext'
import AreaChart from './AreaChart'
import BarChart from './BarChart'

const ChartsContainer = () => {
  const { monthlyApplications: data } = useAppContext()
  const [areaChart, setAreaChart] = useState(true)

  return (
    <Wrapper>
      <h4>monthly applications</h4>
      <button
        className="charts-btn"
        type="button"
        onClick={() => setAreaChart(!areaChart)}>
        {areaChart ? 'bar chart' : 'area chart'}
        <span>
          <TbSwitchHorizontal />
        </span>
      </button>
      {areaChart ? <AreaChart data={data} /> : <BarChart data={data} />}
    </Wrapper>
  )
}
export default ChartsContainer
