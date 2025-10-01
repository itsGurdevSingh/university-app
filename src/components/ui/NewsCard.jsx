import HoverImage from "./HoverImage";

const NewsCard = ({newsData}) => {

    const {type, image, headline, description, tags} = newsData

    const isPrimary = type === 'primary' ;

  return (
    <div className={isPrimary ? '':'flex flex-col md:flex-row gap-6 lg:-mt-2'}>

         <HoverImage src={image} alt="event-image" className={isPrimary? 'w-full':'w-full md:w-3/5 object-cover'} />

        
        {/* <img src={image} alt="" className={isPrimary? 'w-full':'w-full md:w-2/5 object-cover'}/> */}

        <div className='py-6 felx flex-col space-y-4 items-center md:items-start'>
            <h3 className='text-xl font-semibold pr-12'>
                {headline}
            </h3>
            <p className={isPrimary ?'hidden' :' hidden md:block text-gray-800 font-medium'}>
                {description}
            </p>

            {/* tags */}

            <ul className='flex space-x-4 text-gray-700'>
                {tags.map(tag=> 
                    <li className=' text-sm px-4 py-1 border border-black/25 rounded-full w-fit '>{tag}</li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default NewsCard