import {
  FcAddRow,
  FcComboChart,
  FcDocument,
  FcList,
  FcSettings,
} from 'react-icons/fc'
import { GiHoneypot } from 'react-icons/gi'
import { SiGlassdoor, SiIndeed, SiMonster } from 'react-icons/si'

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
    text: 'profile',
    path: 'profile',
    icon: <FcDocument />,
  },
  {
    text: 'settings',
    path: 'settings',
    icon: <FcSettings />,
  },
]

export const externalLinks = [
  {
    id: 1,
    text: 'indeed',
    url: 'https://de.indeed.com/',
    icon: <SiIndeed />,
  },
  {
    id: 2,
    text: 'glassdoor',
    url: 'https://www.glassdoor.de/index.htm',
    icon: <SiGlassdoor />,
  },
  // {
  //   id: 3,
  //   text: 'honeypot',
  //   url: 'https://www.honeypot.io/en/',
  //   icon: <GiHoneypot />,
  // },
  // {
  //   id: 4,
  //   text: 'monster',
  //   url: 'https://www.monster.de/',
  //   icon: <SiMonster />,
  // },
]
