import {
  FcAbout,
  FcAddRow,
  FcComboChart,
  FcDocument,
  FcList,
  FcSettings,
} from 'react-icons/fc'

export const links = [
  {
    text: 'stats',
    path: '/',
    icon: <FcComboChart />,
  },
  {
    text: 'all jobs',
    path: 'all-jobs',
    icon: <FcList />,
  },
  {
    text: 'add job',
    path: 'add-job',
    icon: <FcAddRow />,
  },
  {
    text: 'archive',
    path: 'archive',
    icon: <FcDocument />,
  },
  {
    text: 'profile',
    path: 'profile',
    icon: <FcAbout />,
  },
  {
    text: 'settings',
    path: 'settings',
    icon: <FcSettings />,
  },
]
