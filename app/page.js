import Image from 'next/image'

export default function Home() {
  return (
      // <div className='flex justify-center items-center min-h-screen'>
    <>
      <div className='flex w-screen justify-center items-center absolute top-1/3 '>
        <div className='bg-slate-300 bg-opacity-50 backdrop-blur-lg rounded-lg border border-slate-200 border-opacity-50 max-w-5xl mx-auto p-8 md:p-16'>
          <h1 className="text-3xl font-bold text-left bg-gradient-to-r from-indigo-400 to-purple-800 bg-clip-text text-transparent md:text-5xl">GifStash!</h1>
          <h3 className="text-lg font-thin text-center text-slate-700 pt-8 pl-1 md:text-xl ">Discover and bookmark your favorite GIFs</h3>
        </div>
      </div>
    </>
  )
}

