import './App.css'
import Counter from './Counter'
import Friends from './Friends'

function App() {
  return (
    <div>
      <div className='flex flex-col gap-10'>
        <div className='bg-gradient-to-r from-slate-500 to-fuchsia-500'>
         <h4 className='text-center font-semibold text-white text-5xl p-10 m-5'>My First Day With React</h4>
        </div>
        <div>
          <Counter></Counter> 
        </div>
        <div>
        <Friends></Friends>
        </div>
      </div>
    </div>
  )
}

export default App
