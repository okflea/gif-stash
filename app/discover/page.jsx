import SearchBar from "../components/SearchBar"

const page = () => {
  return (
    <div className='flex  justify-center items-center absolute top-1/3 w-full'>
      <div className='bg-slate-300 bg-opacity-50 backdrop-blur-lg border border-slate-200 rounded-lg border-opacity-50 max-w-5xl mx-auto p-8 md:p-16 '>

        <SearchBar/>
      </div>
    </div>
  )
}

export default page
