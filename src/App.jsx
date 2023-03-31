import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import LeftSide from './components/LeftSide/LeftSide'
import Main from './components/Main/Main'
import Blog from './components/Blog/Blog'



function App() {



  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Blog></Blog>


      {/*     
 // Prviues 
      <div className='container mx-auto grid lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <Main totalReadTime={totalReadTime} handleBlogTitle={handleBlogTitle}></Main>
        </div>
        <div className='lg:col-span-4'>
          <LeftSide readTime={readTime} arr={arr}></LeftSide>
        </div>
      </div> */}


    </div>
  )
}




export default App
