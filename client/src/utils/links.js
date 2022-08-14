import {
  FcBusiness,
  FcBusinessContact,
  FcComboChart,
  FcPlus,
  FcSettings,
} from 'react-icons/fc'

const links = [
  {
    text: 'stats',
    path: '/',
    icon: <FcComboChart />,
  },
  {
    text: 'all jobs',
    path: 'all-jobs',
    icon: <FcBusiness />,
  },
  {
    text: 'add job',
    path: 'add-job',
    icon: <FcPlus />,
  },
  {
    text: 'profile',
    path: 'profile',
    icon: <FcBusinessContact />,
  },
  {
    text: 'settings',
    path: 'settings',
    icon: <FcSettings />,
  },
]

export default links
