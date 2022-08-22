import Wrapper from '../assets/wrappers/Modal'
import { useAppContext } from '../context/appContext'

const ModalArchive = () => {
  const { alertDanger, toggleArchiveModal } = useAppContext()

  const closeModal = arg => {
    toggleArchiveModal()
    alertDanger('Test user, no touchy only looky ☝')
  }
  return (
    <Wrapper>
      <aside className="modal-container">
        <div className="modal">
          <h4>Are you sure you want to archive this job?</h4>
          <div className="btn-container">
            <button type="button" className="btn" onClick={closeModal}>
              confirm
            </button>
            <button
              type="button"
              className="btn cancel-btn"
              onClick={toggleArchiveModal}>
              cancel
            </button>
          </div>
        </div>
      </aside>
    </Wrapper>
  )
}
export default ModalArchive
