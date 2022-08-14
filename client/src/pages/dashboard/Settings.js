import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { FormRowSelect } from '../../components'
import { useAppContext } from '../../context/appContext'
const Settings = () => {
  const {
    isLoading,
    theme,
    setTheme,
    themeSetting,
    themeSettingOptions,
    handleChange,
    alertSuccess,
  } = useAppContext()

  const handleSelect = e => {
    handleChange({ name: e.target.name, value: e.target.value })
    if (e.target.value === 'light-theme') {
      setTheme('light-theme')
    }
    if (e.target.value === 'dark-theme') {
      setTheme('dark-theme')
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    document.documentElement.className = theme
    alertSuccess('Changes have been saved')
  }

  return (
    <Wrapper>
      <form className="form">
        <h3>Settings</h3>
        <div className="form-center">
          <FormRowSelect
            labelText="Theme"
            name="themeSetting"
            value={themeSetting}
            handleChange={handleSelect}
            list={themeSettingOptions}
          />

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
