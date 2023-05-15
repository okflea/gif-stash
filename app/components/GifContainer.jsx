'use client'
import Image from 'next/image'
import { useState } from 'react'

const GifContainer = (props) => {
  const { id, url, name, userId, isLoaded, favourites, isFav, setFavourites } = props
  const [isFavourite, setIsFavourite] = useState(isFav)

  const handleFavourite = () => {
    if (!(isLoaded && userId)) {
      alert("Please Login")
      return
    }
    if (isFavourite === null) {
      for (let fav of favourites){
        if (fav.id === id)
          setIsFavourite(true)
      }
      setIsFavourite(false)
    }
    if (isFavourite === true) {
      setFavourites(favourites.filter((fav) => fav.id !== id))
    } else if (isFavourite === false) {
      setFavourites([...favourites, { id: id, name: name, url: url  }])
    }
  }

  return (

    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 glass rounded-lg m-1">
      <Image alt={name} priority="false" src={url} width={200} height={200} className="w-full h-auto rounded-lg" />
      <div className='flex flex-row justify-between m-2'>
        <div className='font-thin'>{name}</div>
        <div onClick={handleFavourite}>
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill={isFavourite ? 'gold' : 'none'} xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9584 11.0416L15.4235 12.5765C14.9507 13.0493 14.7454 13.7272 14.8766 14.3829L15.2 16L15.2456 16.2281C15.3422 16.7111 14.8159 17.0765 14.3971 16.8173L13.0527 15.985C12.4077 15.5857 11.5923 15.5857 10.9473 15.985L9.60287 16.8173C9.18409 17.0765 8.65779 16.7111 8.75438 16.2281L8.8 16L9.12342 14.3829C9.25456 13.7272 9.04932 13.0493 8.57647 12.5765L7 11C6.63098 10.631 6.89233 10 7.41421 10H7.5H8.94131C9.77797 10 10.5262 9.47921 10.8168 8.69463L11.4444 7C11.6354 6.48443 12.3646 6.48443 12.5556 7L13.1832 8.69463C13.4738 9.47921 14.222 10 15.0587 10L16.5 10H16.527C17.0705 10 17.3428 10.6572 16.9584 11.0416Z" stroke="#323232" strokeWidth="2" strokeLinejoin="round" />
            <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="#323232" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default GifContainer
