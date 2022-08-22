import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { FormRow, FormRowSelect } from '../../components'
import Modal from '../../components/Modal'
import ModalArchive from '../../components/ModalArchive'
import { useAppContext } from '../../context/appContext'

const Archive = () => {
  const {
    isLoading,
    search,
    searchType,
    sort,
    sortOptions,
    jobTypeOptions,
    handleChange,
    clearFilters,
    numOfEntries,
    numOfEntriesOptions,
    // alertSuccess,
    showModal,
    showArchiveModal,
    searchStatus,
    statusOptions,
  } = useAppContext()

  const handleSearch = e => {
    handleChange({ name: e.target.name, value: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    clearFilters()
  }

  // CLEAR ARCHIVE 🚧
  // const handleClearArchive = e => {
  //   e.preventDefault()
  //   alertSuccess('Archived has been cleared')
  // }

  return (
    <Wrapper>
      <form className="from">
        <h3>archived jobs</h3>
        <div className="form-center">
          {showModal && <Modal />}
          {showArchiveModal && <ModalArchive />}
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />
          <FormRowSelect
            labelText="job type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
          />
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <FormRowSelect
            labelText="results per page"
            name="numOfEntries"
            value={numOfEntries}
            handleChange={handleSearch}
            list={numOfEntriesOptions}
          />
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          />

          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}>
            clear filters
          </button>
          {/* CLEAR ARCHIVE 🚧 */}
        </div>
      </form>
    </Wrapper>
  )
}
export default Archive
