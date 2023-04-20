import React from 'react'
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div className='w-full bg-black py-[10rem] px-4 text-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  border-2 solid border-white'>
      <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://m.media-amazon.com/images/I/C1qmG3fnRpS.png" alt="/"/>
      <h2 className='text-4xl font-bold text-center pt-8 '>Bollywood Movies</h2>
       <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Validity-1 year </p>
                  <p className='py-2 border-b mx-8'>Rs. 300</p>
                  </div>
      <button className='bg-red-700 w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-white'><Link to='/signup'>Sign Up</Link></button>
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  border-2 solid border-white'>
      <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://bingeddata.s3.amazonaws.com/uploads/2021/06/Best-50-Hollywood-Movies-For-You-To-Stream-On-SonyLIV.jpg" alt="/"/>
      <h2 className='text-4xl font-bold text-center pt-8 '>Hollywood Movies</h2>
       <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Validity-1 year </p>
                  <p className='py-2 border-b mx-8'>Rs. 300</p>
                  </div>
      <button className='bg-red-700 w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-white'><a href = 'https://www.jio.com/mobile.html#fiber'>Buy now</a></button>
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  border-2 solid border-white'>
      <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://hips.hearstapps.com/hmg-prod/images/korean-drama-series-1654114746.png?crop=1.00xw:1.00xh;0,0&resize=1200:*" alt="/"/>
      <h2 className='text-4xl font-bold text-center pt-8 '>Korean Drama</h2>
       <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Validity-1 year </p>
                  <p className='py-2 border-b mx-8'>Rs. 300</p>
                  </div>
      <button className='bg-red-700 w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-white'><a href = 'https://www.jio.com/mobile.html#fiber'>Buy now</a></button>
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  border-2 solid border-white'>
      <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.freekaamaal.com/post_images/1646999378.webp" alt="/"/>
      <h2 className='text-4xl font-bold text-center pt-8 '>News</h2>
       <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Validity-1 year </p>
                  <p className='py-2 border-b mx-8'>Rs. 300</p>
                  </div>
      <button className='bg-red-700 w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-white'><a href = 'https://www.jio.com/mobile.html#fiber'>Buy now</a></button>
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  border-2 solid border-white'>
      <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://i.pinimg.com/474x/8b/ea/8b/8bea8b6a9cd953a8fa88b4b1eee6b4a1.jpg" alt="/"/>
      <h2 className='text-4xl font-bold text-center pt-8 '>Sports</h2>
       <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Validity-1 year </p>
                  <p className='py-2 border-b mx-8'>Rs. 300</p>
                  </div>
      <button className='bg-red-700 w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-white'><a href = 'https://www.jio.com/mobile.html#fiber'>Buy now</a></button>
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  border-2 solid border-white'>
      <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://www.animationxpress.com/wp-content/uploads/2021/01/kids-channels.jpg" alt="/"/>
      <h2 className='text-4xl font-bold text-center pt-8 '>Cartoons</h2>
       <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Validity-1 year </p>
                  <p className='py-2 border-b mx-8'>Rs. 300</p>
                  </div>
      <button className='bg-red-700 w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-white'><a href = 'https://www.jio.com/mobile.html#fiber'>Buy now</a></button>
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  border-2 solid border-white'>
      <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://lh6.googleusercontent.com/nW71R5Df6cRa8ssO52C8rlDNlxNbDdSLItaPVT1w-V-Ng94_eu1d1ImAnc0zci15vuNbNM7s8_Jr4e8b5ik1Hyzk_70GojxQ7NNulupqd9VzS_0YWqPzDD-EjrF-4RBVJTQfmArW" alt="/"/>
      <h2 className='text-4xl font-bold text-center pt-8 '>Anime</h2>
       <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Validity-1 year </p>
                  <p className='py-2 border-b mx-8'>Rs. 300</p>
                  </div>
      <button className='bg-red-700 w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-white'><a href = 'https://www.jio.com/mobile.html#fiber'>Buy now</a></button>
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  border-2 solid border-white'>
      <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://3.bp.blogspot.com/-ch6TpqFWs4w/VtW42Rw6RzI/AAAAAAAASpo/OfFKeIT24E4/s1600/Hindi%2BTV%2BSerials%2Bon%2BSisters.jpg" alt="/"/>
      <h2 className='text-4xl font-bold text-center pt-8 '>TV Serials</h2>
       <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Validity-1 year </p>
                  <p className='py-2 border-b mx-8'>Rs. 300</p>
                  </div>
      <button className='bg-red-700 w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-white'><a href = 'https://www.jio.com/mobile.html#fiber'>Buy now</a></button>
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  border-2 solid border-white'>
      <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://hips.hearstapps.com/hmg-prod/images/lead-image-movie-tv-show-templates2-03-1657744447.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*" alt="/"/>
      <h2 className='text-4xl font-bold text-center pt-8 '>Series</h2>
       <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Validity-1 year </p>
                  <p className='py-2 border-b mx-8'>Rs. 300</p>
                  </div>
      <button className='bg-red-700 w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-white'><a href = 'https://www.jio.com/mobile.html#fiber'>Buy now</a></button>
      </div>

   
      </div>
    </div>
  )
}

export default Cards