import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import LeftSide from './components/LeftSide/LeftSide'
import Main from './components/Main/Main'



function App() {
const [readTime,setReadTime] = useState(0);
const totalReadTime =(time)=>{
  const previousreadTime = JSON.parse(localStorage.getItem("readTime"));
  if (previousreadTime) {
    const sum = previousreadTime + time;
    localStorage.setItem("readTime", sum);
    setReadTime(sum);
  } else {
    localStorage.setItem("readTime", time);
    setReadTime(time);
  }
}



  return (
    <div className="App">
      <Header></Header>
    
      <div className='container mx-auto grid lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <Main totalReadTime={totalReadTime}></Main>
        </div>
        <div className='lg:col-span-4'>
          <LeftSide readTime={readTime} ></LeftSide>
        </div>
      </div>
    </div>
  )
}




export default App
