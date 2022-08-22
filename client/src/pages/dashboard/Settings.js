import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { FormRowSelect } from '../../components'
import { useAppContext } from '../../context/appContext'
const Settings = () => {
  const {
    isLoading,
    handleChange,

    alertInfo,
    language,
    languageOptions,
  } = useAppContext()

  const handleSelect = e => {
    handleChange({ name: e.target.name, value: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    alertInfo('Button under construction 🚧')
  }

  return (
    <Wrapper>
      <form className="form">
        <h3>Settings</h3>
        <div className="form-center">
          <FormRowSelect
            labelText="Language"
            name="language"
            value={language}
            handleChange={handleSelect}
            list={languageOptions}
          />
          <button
            className="btn btn-block"
            type="button"
            disabled={isLoading}
            onClick={() => alertInfo('Button under construction 🚧')}>
            change password
          </button>
          <button
            className="btn btn-block"
            type="submit"
            disabled={isLoading}
            onClick={handleSubmit}>
            {isLoading ? 'Please wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}
export default Settings
