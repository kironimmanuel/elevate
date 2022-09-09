import {
  FcAbout,
  FcAddRow,
  FcComboChart,
  FcDocument,
  FcList,
  FcSettings,
} from "react-icons/fc";

export const links = [
  {
    text: "stats",
    path: "/",
    icon: <FcComboChart />,
    category: "main",
  },
  {
    text: "add job",
    path: "add-job",
    icon: <FcAddRow />,
    category: "main",
  },
  {
    text: "all jobs",
    path: "all-jobs",
    icon: <FcList />,
    category: "lists",
  },
  {
    text: "profile",
    path: "profile",
    icon: <FcAbout />,
    category: "user",
  },
  {
    text: "settings",
    path: "settings",
    icon: <FcSettings />,
    category: "user",
  },
];
