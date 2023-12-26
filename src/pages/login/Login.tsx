import { useFormik } from 'formik'
import { InputText } from 'primereact/inputtext'
import { useContext } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../hooks/globalContext'
import { login } from '../../services/api/loginService'

const Login = () => {
  const navigate = useNavigate()
  const { setCurrentUser } = useContext(GlobalContext)

  const formik = useFormik({
    initialValues: {
      userId: 'balaji',
      password: 'test@123',
    },
    onSubmit: async (data) => {
      const user = await login(data)
      if (user) {
        setCurrentUser(data)
        navigate('/contents')
      }
    },
  })

  return (
    <div className="w-full h-full bg-transparent flex justify-center items-center">
      <div className="text-center bg-transparent">
        <span className="text-cyan-600 text-xl font-bold"> Content Craft Pro</span>
        <form
          className="bg-white border-2 border-cyan-300shadow-lg rounded-lg mt-3 p-4"
          onSubmit={formik.handleSubmit}
        >
          <img src="src/assets/logo.png" className="mx-auto" width={100} height={40} />
          <div className="p-float-label bg-transparent mt-5">
            <InputText
              id="userId"
              value={formik.values.userId}
              className="border-2 border-cyan-100 rounded focus:border-cyan-200 focus:shadow"
              onChange={formik.handleChange}
              autoFocus
            />
            <label htmlFor="userId font-semibold">Username</label>
          </div>
          <div className="p-float-label bg-transparent mt-10">
            <InputText
              id="password"
              type="password"
              value={formik.values.password}
              className="border-2 border-cyan-50 rounded focus:border-cyan-200 focus:shadow"
              onChange={formik.handleChange}
            />
            <label htmlFor="password font-semibold">Password</label>
          </div>
          <button
            type="submit"
            className="p-2 mt-4 rounded-full border bg-cyan-50 border-cyan-400 cursor-pointer font-semibold  text-cyan-600"
          >
            <FaArrowRight size={15} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
