import moment from 'moment'
import { BsCalendarCheck, BsClock } from 'react-icons/bs'
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from 'react-icons/fa'
import { GiCancel } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Job'
import { useAppContext } from '../context/appContext'
import JobInfo from './JobInfo'

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  status,
  createdAt,
}) => {
  const { setEditJob, deleteJob } = useAppContext()
  const date = moment(createdAt).format('LLL')

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        {/* <div className="main-icon">
          <FcGoogle />
        </div> */}
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={position} />
          <div className={`status ${status}`}>
            {status === 'interview' && (
              <span>
                <BsCalendarCheck />
                interview
              </span>
            )}
            {status === 'pending' && (
              <span>
                <BsClock />
                pending
              </span>
            )}
            {status === 'declined' && (
              <span>
                <GiCancel />
                declined
              </span>
            )}
          </div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() => setEditJob(_id)}>
              edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => deleteJob(_id)}>
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  )
}
export default Job
