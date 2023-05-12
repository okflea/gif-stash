const page = () => {
  return (
        <div className="flex flex-col justify-center items-center absolute top-1/3 glass w-full p-5">
          <h1 className="text-3xl font-bold mb-6 text-slate-600 transform hover:scale-110 transition-all duration-500">
        Login</h1>
          <form className="bg-white rounded-lg p-8 shadow-md">
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-thin mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-slate-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-thin mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-slate-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform hover:scale-110 transition-all duration-500"
            >
              Login
            </button>
          </form>
          <p className="text-gray-700 text-sm mt-4">
            Don't have an account?{' '}
            <a href="#" className="text-slate-800 hover:text-slate-600 ">
              Sign up
            </a>
          </p>
        </div>
  )
}

export default page
