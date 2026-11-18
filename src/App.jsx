import React from'react'
import ThemeSwap from './components/ThemeSwap';
import Counter from './components/Counter';


const  App= () => {
    return <div >
        <h1>Hello React</h1>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
  Login with Email
</button>

    <div>
        <Counter/>
        <div className='p-5'>
        <ThemeSwap/>
    </div>
    </div>
    </div>
    
};
 
export default App