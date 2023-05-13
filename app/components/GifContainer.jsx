import Image from 'next/image'

const GifContainer = (props) => {
  const {url,name} = props
  return (
      
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 glass rounded-lg m-1">
            <Image alt={name} src={url} width={200} height={200} className="w-full h-auto rounded-lg" />
            <div className='flex flex-row justify-between m-2'>
              <div >{name}</div>
              <div >star</div>
            </div>
          </div>            
  )
}

export default GifContainer
