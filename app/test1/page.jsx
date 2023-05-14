
// import SearchBar from "../components/SearchBar"
import Image from 'next/image'
import data from '../data.json'
import GifContainer from '../components/GifContainer';
const page = () => {

  const url = "https://media3.giphy.com/media/I0xA1atOOea0E/200w.webp?cid=a5a58d70wgkmz7lhsliiffo990uwu3u3fww2jwgnr8pb76s2&ep=v1_gifs_search&rid=200w.webp&ct=g"

  // let query=""
  // let response=[]
  async function handleSubmit(e) {
    "use server";
    const query = e.get("search");
    // let response=data.data
    // console.log(response)
    console.log(query);
  }
  return (
    <div className='flex justify-center items-center absolute top-1/3 w-screen'>
      <div className='glass rounded-lg max-w-5xl mx-auto p-5 md:p-16 w-screen'>
        {/* < SearchBar/> */}

          <form action={handleSubmit} className="flex flex-col justify-center items-center">
            <input 
              type="text" 
              name="search" 
              className="p-4 bg-slate-800 text-slate-300 rounded-lg border border-slate-400  focus:border-slate-500 " />
            <button 
              type="submit" 
              className="hover:bg-slate-800 bg-slate-400 rounded-lg border text-slate-300 m-3 transform hover:scale-110 transition-all duration-500 border-slate-400 p-3 ">
              Search</button>
          </form>


        <div 
          className={`w-full flex flex-wrap gap-2 justify-center rounded-lg max-w-5xl mx-auto p-5 md:p-16 `}>

          {data.data.map((gif) => (
            <GifContainer key={gif.id} id={gif.id} name={gif.title} url={gif.images.fixed_width_downsampled.webp} />
          ))} 

        </div>

      </div>
    </div>
  )
}
// https://media3.giphy.com/media/I0xA1atOOea0E/200w.webp?cid=a5a58d70wgkmz7lhsliiffo990uwu3u3fww2jwgnr8pb76s2&ep=v1_gifs_search&rid=200w.webp&ct=g
export default page
