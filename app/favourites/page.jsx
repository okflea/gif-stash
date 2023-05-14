"use client"

import { useAuth } from "@clerk/nextjs";
import GifContainer from "../components/GifContainer";
import useLocalStorage from "../utils/useLocalStorage";


const page = () => {

  const {userId,isLoaded} = useAuth()
  const [favourites, setfavourites] = useLocalStorage(`${userId}`,localStorage.getItem(userId) ?JSON.parse(localStorage.getItem(userId)): [])

  console.log(favourites)

  return (
    <div>
      <div
        className={`glass mt-4 w-full flex flex-wrap gap-2 justify-center rounded-lg max-w-5xl mx-auto p-5 md:p-16 `}>
        {favourites.map((gif) => (
          <GifContainer key={gif.id} id={gif.id} name={gif.title} url={gif.url} isFav={gif.isFav} userId={userId} isLoaded={isLoaded} favourites={favourites} setfavourites={setfavourites}/>
        ))}
      </div>
    </div>
  )
}

export default page
