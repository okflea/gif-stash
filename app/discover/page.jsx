import SearchBar from "../components/SearchBar"

const page = () => {
  return (
    <div className='flex  justify-center items-center absolute top-1/3 w-full'>
      <div className='glass rounded-lg  max-w-5xl mx-auto p-8 md:p-16 '>

        <SearchBar/>
      </div>
    </div>
  )
}

export default page
