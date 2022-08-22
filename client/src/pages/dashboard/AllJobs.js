import { JobsContainer, SearchContainer } from '../../components'
import Modal from '../../components/Modal'
import { useAppContext } from '../../context/appContext'

const AllJobs = () => {
  const { showModal } = useAppContext()

  return (
    <>
      {showModal && <Modal />}
      <SearchContainer />
      <JobsContainer />
    </>
  )
}
export default AllJobs
