import { JobsContainer, SearchContainer } from '../../components'
import Modal from '../../components/Modal'
import ModalArchive from '../../components/ModalArchive'
import { useAppContext } from '../../context/appContext'

const AllJobs = () => {
  const { showModal, showArchiveModal } = useAppContext()

  return (
    <>
      {showModal && <Modal />}
      {showArchiveModal && <ModalArchive />}
      <SearchContainer />
      <JobsContainer />
    </>
  )
}
export default AllJobs
