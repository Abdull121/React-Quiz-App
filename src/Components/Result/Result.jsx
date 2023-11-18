import React from 'react'

    function Result({userScore,totalScore,tryAgain}) {
  return ( 
    <div className='flex justify-center flex-row'>
        <div className='text-center py-10 flex flex-col'>
            <h2 className='text-xl  my-5'>
             Your Score : {userScore}
            </h2>
            <h2 className='text-xl'>
             Total Score : {totalScore}
            </h2>
            <div className='m-3 p-3'>
                <button className='bg-sky-500 rounded-md p-3 text-white' onClick={tryAgain}>
                    Try Again
                </button>

            </div>

        </div>
      
     
    </div>
  )
}

export default Result
