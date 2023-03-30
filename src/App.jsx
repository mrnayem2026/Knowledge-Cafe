import './App.css'
import Header from './components/Header/Header'
import LeftSide from './components/LeftSide/LeftSide'
import Main from './components/Main/Main'



function App() {

  return (
    <div className="App">
      <Header></Header>
      <div className='container mx-auto grid lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <Main></Main>
        </div>
        <div className='lg:col-span-4'>
          <LeftSide></LeftSide>
        </div>
      </div>
    </div>
  )
}




export default App
