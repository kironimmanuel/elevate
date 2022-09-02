import { FormRow, FormRowSelect } from '.'
import Wrapper from '../assets/wrappers/SearchContainer'
import { useAppContext } from '../context/appContext'

const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    jobTypeOptions,
    handleChange,
    clearFilters,
    numOfEntries,
    numOfEntriesOptions,
  } = useAppContext()

  const handleSearch = e => {
    handleChange({ name: e.target.name, value: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    clearFilters()
  }

  return (
    <Wrapper>
      <form className="search-form form">
        <h4>search jobs</h4>
        <div className="form-center">
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
        </div>
      </form>
    </Wrapper>
  )
}
export default SearchContainer
