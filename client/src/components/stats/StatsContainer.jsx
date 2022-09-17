import { nanoid } from "nanoid";
import { FcBusiness, FcCalendar, FcCancel, FcClock } from "react-icons/fc";
import Wrapper from "../../assets/wrappers/StatsContainer";
import { useAppContext } from "../../context/appContext";
import StatItem from "./StatItem";

const StatsContainer = () => {
  const { stats } = useAppContext();

  const defaultStats = [
    {
      // Color will be passed as prop to StatItem -> styled component
      title: "pending applications",
      count: stats.pending || 0,
      icon: <FcClock />,
      bcg: "#ffd977",
      color: "#e6b536",
      status: "pending",
    },
    {
      title: "scheduled interviews",
      count: stats.interview || 0,
      icon: <FcCalendar />,
      color: "#2A507E",
      bcg: "#6C98CE",
      status: "interview",
    },
    {
      title: "declined jobs",
      count: stats.declined || 0,
      icon: <FcCancel />,
      color: "#7E2323",
      bcg: "#D76F6F",
      status: "declined",
    },
    {
      title: "total applications",
      count:
        (stats.pending || 0) + (stats.interview || 0) + (stats.declined || 0),
      icon: <FcBusiness />,
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
