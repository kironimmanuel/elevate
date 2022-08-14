import axios from 'axios'
import React, { useContext, useReducer, useState } from 'react'
import { toast } from 'react-toastify'
import {
  CHANGE_PAGE,
  CLEAR_FILTERS,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_ERROR,
  CREATE_JOB_SUCCESS,
  DELETE_JOB_BEGIN,
  DELETE_JOB_ERROR,
  EDIT_JOB_BEGIN,
  EDIT_JOB_ERROR,
  EDIT_JOB_SUCCESS,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  HANDLE_CHANGE,
  LOGOUT_USER,
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
  SET_EDIT_JOB,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  TOGGLE_SIDEBAR,
  UPDATE_USER_BEGIN,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
} from './actions'
import reducer from './reducer'

const user = localStorage.getItem('user')
const token = localStorage.getItem('token')
const userLocation = localStorage.getItem('location')
const userPhoneNumber = localStorage.getItem('phoneNumber')
const themeSetting = localStorage.getItem('themeSetting')

export const initialState = {
  isLoading: false,
  showSidebar: false,
  user: user ? JSON.parse(user) : null,
  userLocation: userLocation || '',
  token: token,
  userPhoneNumber: userPhoneNumber || '',
  stats: {},
  monthlyApplications: [],
  isEditing: false,
  editJobId: '',
  position: '',
  company: '',
  jobLocation: userLocation || '',
  jobTypeOptions: [
    'full-time',
    'part-time',
    'remote',
    'internship',
    'freelance',
  ],
  jobType: 'full-time',
  statusOptions: ['pending', 'interview', 'declined'],
  status: 'pending',
  jobs: [],
  totalJobs: 0,
  page: 1,
  numOfPages: 1,
  numOfEntries: 10,
  numOfEntriesOptions: [10, 20, 50],
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
  themeSetting: themeSetting || 'light-theme',
  themeSettingOptions: ['light-theme', 'dark-theme'],
  customId: 'custom-id-yes',
}

const AppContext = React.createContext()

// The component
const AppProvider = ({ children }) => {
  // Light & dark theme
  const [theme, setTheme] = useState('light-theme')
  // Reducer approach, instead of useState()
  const [state, dispatch] = useReducer(reducer, initialState)

  // Axios instance 🗯
  const authFetch = axios.create({
    baseURL: '/api/v1',
  })
  // Axios interceptors - kinda like a middleware
  // Request interceptor ➡
  authFetch.interceptors.request.use(
    config => {
      config.headers.common['Authorization'] = `Bearer ${state.token}`
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )
  // Response interceptor ⬅
  // Let's us use one error response logic for multiple requests
  authFetch.interceptors.response.use(
    response => {
      return response
    },
    error => {
      if (error.response.status === 401) {
        logoutUser()
      }
      return Promise.reject(error)
    }
  )

  // useReducer
  // In appContext.js we dispatch the actions an we must pass in the type property
  // Optionally we can provide other properties

  // Alerts 🗯
  const alertSuccess = msg => {
    toast.success(msg, {
      theme: 'colored',
    })
  }
  const alertWarn = msg => {
    toast.warn(msg, {
      theme: 'colored',
    })
  }
  const alertDanger = msg => {
    toast.error(msg, {
      theme: 'colored',
    })
  }
  const alertInfo = msg => {
    toast.info(msg, {
      theme: 'colored',
    })
  }

  // Sidebar 🗯
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }

  // Handle change 🗯
  const handleChange = ({ name, value }) => {
    // In reducer we are dynamically setting the name/key values
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
  }

  // Clear values 🗯
  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES })
  }

  // Clear filters 🗯
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  // Change page 🗯
  const changePage = page => {
    dispatch({ type: CHANGE_PAGE, payload: { page } })
  }
  // Show stats 🗯
  const showStats = async () => {
    dispatch({ type: SHOW_STATS_BEGIN })
    try {
      const { data } = await authFetch('/jobs/stats')

      dispatch({
        type: SHOW_STATS_SUCCESS,
        payload: {
          stats: data.defaultStats,
          monthlyApplications: data.monthlyApplications,
        },
      })
    } catch (error) {
      alertDanger('Authentication attempt has failed, you will be logged out!')
      logoutUser()
    }
  }

  // Get jobs 🗯
  const getJobs = async () => {
    const { search, searchStatus, searchType, sort, numOfEntries, page } = state
    let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}&limit=${numOfEntries}`
    // Conditionally add search if not empty
    if (search) {
      url = url + `&search=${search}`
    }
    dispatch({ type: GET_JOBS_BEGIN })
    try {
      // Default is always GET, so we can leave it away for get requests
      const { data } = await authFetch(url)
      const { jobs, totalJobs, numOfPages } = data
      dispatch({
        type: GET_JOBS_SUCCESS,
        payload: { jobs, totalJobs, numOfPages },
      })
    } catch (error) {
      alertDanger('Authentication attempt has failed, you will be logged out!')
      logoutUser()
    }
  }

  // Create job 🗯
  const createJob = async () => {
    dispatch({ type: CREATE_JOB_BEGIN })
    try {
      const { position, company, jobLocation, jobType, status } = state
      await authFetch.post('/jobs', {
        position,
        company,
        jobLocation,
        jobType,
        status,
      })
      dispatch({ type: CREATE_JOB_SUCCESS })
      alertSuccess('Job added!')
      clearValues()
    } catch (error) {
      alertDanger(error.response.data.msg)
      if (error.response.status === 401) return
      dispatch({
        type: CREATE_JOB_ERROR,
      })
    }
  }
  // Set edit job 🗯
  const setEditJob = id => {
    dispatch({ type: SET_EDIT_JOB, payload: { id } })
  }
  // Edit job 🗯
  const editJob = async () => {
    dispatch({ type: EDIT_JOB_BEGIN })
    try {
      const { position, company, jobLocation, jobType, status, editJobId } =
        state
      await authFetch.patch(`/jobs/${editJobId}`, {
        position,
        company,
        jobLocation,
        jobType,
        status,
      })
      dispatch({ type: EDIT_JOB_SUCCESS })
      alertSuccess('Job updated!')
      clearValues()
    } catch (error) {
      if (error.response.status === 401) return
      alertDanger(error.response.data.msg)
      dispatch({
        type: EDIT_JOB_ERROR,
      })
    }
  }

  // Delete job 🗯
  const deleteJob = async jobId => {
    dispatch({ type: DELETE_JOB_BEGIN })
    try {
      await authFetch.delete(`/jobs/${jobId}`)
      getJobs()
      alertSuccess('Job removed!')
    } catch (error) {
      alertDanger(error.response.data.msg)
      dispatch({ type: DELETE_JOB_ERROR })
      // Test user authorization conflict ❕
      // alertDanger('Authentication attempt has failed, you will be logged out!')
      // logoutUser()
    }
  }

  // Login/Register user 🗯
  const setupUser = async ({ currentUser, endPoint }) => {
    dispatch({ type: SETUP_USER_BEGIN })
    try {
      const { data } = await axios.post(`/api/v1/auth/${endPoint}`, currentUser)
      // response.data
      const { user, token, location } = data
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, location, token },
      })
      alertSuccess(`Welcome, ${user.name} 👋`)
      addUserToLocalStorage({ user, location, token })
    } catch (error) {
      // With axios log error.response
      // data.msg coming from backend
      alertDanger(error.response.data.msg)
      dispatch({
        type: SETUP_USER_ERROR,
      })
    }
  }

  // Logout user 🗯
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER })
    alertSuccess('Logged out successfully!')
    removeUserFromLocalStorage()
  }

  // Update user 🗯
  const updateUser = async currentUser => {
    dispatch({ type: UPDATE_USER_BEGIN })
    try {
      const { data } = await authFetch.patch('/auth/updateUser', currentUser)
      const { user, location, phoneNumber, token } = data
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location, phoneNumber, token },
      })
      addUserToLocalStorage({ user, location, phoneNumber, token })
      alertSuccess('Profile updated!')
    } catch (error) {
      alertDanger(error.response.data.msg)
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
        })
      }
    }
  }

  // Settings 🗯
  // const updateSettings = async () => {
  //   alertSuccess('Settings updated!')
  // }

  // Local storage 🗯
  const addUserToLocalStorage = ({
    user,
    token,
    location,
    phoneNumber,
    themeSetting,
  }) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    localStorage.setItem('location', location)
    localStorage.setItem('phoneNumber', phoneNumber)
    localStorage.setItem('themeSetting', themeSetting)
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('location')
    localStorage.removeItem('phoneNumber')
    localStorage.removeItem('themeSetting')
  }

  // Children important, that's our application we render
  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleSidebar,
        clearValues,
        setEditJob,
        setupUser,
        updateUser,
        logoutUser,
        handleChange,
        showStats,
        createJob,
        getJobs,
        deleteJob,
        editJob,
        clearFilters,
        changePage,
        theme,
        setTheme,
        alertSuccess,
        alertWarn,
        alertDanger,
        alertInfo,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }