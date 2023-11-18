import { useState } from 'react'
import { quizData } from './Components/Quizdata'
import Result from './Components/Result/Result' 


function App() {
  const [questionCount, setQuestionCount] = useState(0)
  const [checkOption, setCheckOption]=useState(null)
  const [score, scoreCount]=useState(0)
  const [result, setResult]=useState(false)
 

  const changeQuestion=()=>{
    scoreUpdate();  

if(questionCount<=quizData.length-2){
  if(checkOption==null){
    alert('Please Select The Answer')

  }
  else{
    setQuestionCount(questionCount+1)
    setCheckOption(null)

  }
  
  

 }
else{
  console.log("result")
  setResult(true)
  

   }
    
}

// reset ALLs
const resetAll=()=>{
  setResult(false)
  setQuestionCount(0)
  setCheckOption(null)
  scoreCount(0)


  }
if(result){
  return(
    <>
       <Result userScore={score} totalScore={quizData.length} tryAgain={ resetAll} />
    
    </>
   
    
  )
}
 

  const scoreUpdate=()=>{
    if(checkOption===quizData[questionCount].correctIndex){
      scoreCount(score+1)
    }
    


  }
  

  
 

const option = quizData[questionCount].answers.map((option,index)=>{
    return(
      
      <button className='flex m-5 p-5 w-80 text-center justify-center border-4 border-sky-800 rounded-lg hover:bg-blue-300 focus:outline-none  focus:bg-green-500'   key={index} 
      onClick={()=>setCheckOption(index+1) }>
        {option}
      
        
        

      </button>
    )
  })
 
 
  

  return (
    <>
      <div className='flex text-center justify-center mt-4 flex-col px-3 mx-1'> 
      <h1 className='text-2xl font-medium my-5 pb-5 text-center'>Quiz App</h1>

       
        
      <div className='flex gap-2 justify-center'>
      <span className='text-2xl font-medium'>{questionCount+1}.</span>
        <h2  className='text-2xl'>{quizData[questionCount].question}</h2>
      </div>
      <div className='my-5 flex justify-center flex-col items-center'>
      
    
{option}
     
      <br />


      <input className='my-5 px-10 py-3 cursor-pointer
       bg-sky-600 rounded-md
        text-white hover:bg-sky-700'
         type="button" value='Next ' onClick={changeQuestion}  />
      

      </div>


      </div>
      

    </>
  )
}

export default App
