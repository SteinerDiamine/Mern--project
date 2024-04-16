/*import {FaSearch} from 'react-icons/fa';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Real</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        <form  className='bg-slate-100 p-3 rounded-lg'>
            <input type='text' placeholder='Search..' className='bg-transparent'/>
            <FaSearch className='text-slate-500'/>
        </form>


        </div>
        
    </header>
  )
}  
 */
import { FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-gradient-to-r from-purple-500 to-indigo-600 shadow-2xl rounded-b-3xl'>
      <div className='flex justify-between items-center max-w-6xl mx-auto px-4 py-6'>
        <Link to='/'>
        <h1 className='font-bold text-2xl text-white'>
          <span className='text-slate-700'>Real</span>
          <span className='text-slate-900'>Estate</span>
        </h1>
        </Link>
        <form className='bg-white bg-opacity-75 rounded-full px-4 py-2 flex  shadow-md items-center'>
          <input type='text' placeholder='Search..' className='bg-transparent focus:outline-none w-40 sm:w-64 text-gray-800 placeholder-gray-500'/>
          <button type='submit' className='text-gray-800 ml-2 focus:outline-none'>
            <FaSearch />
          </button>
        </form>
        <ul className='flex gap-4'>
        <Link to ='/'>  <li className='hidden sm:inline text-slate-950 hover:underline'>Home</li></Link>
         <Link to='/about'> <li className='hidden sm:inline text-slate-950 hover:underline'>About</li></Link>
          <Link to ='/sign-in'> <li className=' text-slate-950 hover:underline'>Sign in</li></Link>
          

        </ul>


      </div>
    </header>
  );
}  
commit





