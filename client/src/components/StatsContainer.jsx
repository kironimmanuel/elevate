import { nanoid } from "nanoid";
import {
  BsCalendarCheck,
  BsEnvelopeOpen,
  BsHourglassSplit,
} from "react-icons/bs";
import { MdCancelPresentation } from "react-icons/md";
import Wrapper from "../assets/wrappers/StatsContainer";
import { useAppContext } from "../context/appContext";
import StatItem from "./StatItem";

const StatsContainer = () => {
  const { stats } = useAppContext();

  const defaultStats = [
    {
      // Color will be passed as prop to StatItem -> styled component
      title: "pending applications",
      count: stats.pending || 0,
      icon: <BsHourglassSplit />,
      bcg: "#ffd977",
      color: "#e6b536",
      status: "pending",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <BsCalendarCheck />,
      color: "#2A507E",
      bcg: "#6C98CE",
      status: "interview",
    },
    {
      title: "declined jobs",
      count: stats.declined || 0,
      icon: <MdCancelPresentation />,
      color: "#7E2323",
      bcg: "#D76F6F",
      status: "declined",
    },
    {
      title: "total applications",
      count:
        (stats.pending || 0) + (stats.interview || 0) + (stats.declined || 0),
      icon: <BsEnvelopeOpen />,
      color: "#575756",
      bcg: "#d9dad7",
      status: "all",
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((stats) => {
        return <StatItem key={nanoid()} {...stats} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
