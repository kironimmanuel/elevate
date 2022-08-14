import { nanoid } from 'nanoid'
import { FcBriefcase, FcCalendar, FcClock } from 'react-icons/fc'
import { GiCancel } from 'react-icons/gi'
import Wrapper from '../assets/wrappers/StatsContainer'
import { useAppContext } from '../context/appContext'
import StatItem from './StatItem'

const StatsContainer = () => {
  const { stats } = useAppContext()

  const defaultStats = [
    {
      // Color will be passed as prop to StatItem -> styled component
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FcClock />,

      bcg: '#EABD52',
      color: '#ffc93c',
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon: <FcCalendar />,
      color: '#2A507E',
      bcg: '#6C98CE',
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <GiCancel />,
      color: '#7E2323',
      bcg: '#D76F6F',
    },
    {
      title: 'total applications',
      count:
        (stats.pending || 0) + (stats.interview || 0) + (stats.declined || 0),
      icon: <FcBriefcase />,
      color: '#575756',
      bcg: '#d9dad7',
    },
  ]

  return (
    <Wrapper>
      {defaultStats.map(stats => {
        return <StatItem key={nanoid()} {...stats} />
      })}
    </Wrapper>
  )
}
export default StatsContainer
