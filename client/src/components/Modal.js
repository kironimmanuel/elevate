import Wrapper from '../assets/wrappers/Modal'
import { useAppContext } from '../context/appContext'

const Modal = () => {
  const { deleteJob, toggleModal, deleteJobId: id } = useAppContext()

  const closeModal = arg => {
    deleteJob(id)
    toggleModal()
  }
  return (
    <Wrapper>
      <aside className="modal-container">
        <div className="modal">
          <h4>Are you sure you want to remove the Job entry?</h4>
          <div className="btn-container">
            <button type="button" className="btn" onClick={closeModal}>
              confirm
            </button>
            <button
              type="button"
              className="btn cancel-btn"
              onClick={toggleModal}>
              cancel
            </button>
          </div>
        </div>
      </aside>
    </Wrapper>
  )
}
export default Modal
