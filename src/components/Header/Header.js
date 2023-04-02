import React from 'react'
import SearchBar from './SearchBar'
import { useDispatch } from 'react-redux'
// import Store from '../../utils/Store'
import {toggleIt} from '../../utils/sideToggle'

const Header = () => {
  // const toggleDetails = useSelector(Store => Store.toggle.isMenuOpen);
  const dispatch = useDispatch();
  function handleOnClick(){
  // console.log(toggleDetails);

    dispatch(toggleIt());
    // console.log(toggleDetails);
    
  }
  return (
    <div className='border-solid shadow-lg h-14 overflow-hidden border-gray-300 pl-4 pr-4 mr-4 mb-4 ml-4 flex items-center justify-between '>
      <div className=' flex items-center '>

        <img alt='button' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEX///8AAABtbW2UlJROTk6Ojo5JSUmgoKD8/PzT09OIiIiYmJidnZ3BwcFzc3O1tbUODg4yMjIcHBxUVFQiIiKlpaXW1tbHx8fm5ua7u7uvr6+BgYFZWVn09PRqamolSUV7AAABZ0lEQVR4nO3c7U7bQBCG0WwMOKmxA6VOIHzc/2VCWiTa/sbzStY5d/DI8a4jjWazAQAAAAAAAAAAAAAAAP6274duSUO/j/aN921592MucC7ou+hTgWNRYGtPocKKn+gfP3eRwH1ZYGuZV7EvLPwRKRwKCx8ihbeFhdtI4amwMHNf7O7qCh8jhZtzWWDmoPnwXBT4kgqs+myLPcGL1/P0cLWoaQ69gwAAAAAAAAD/2Y3DtF3SNIyZia9Ph4pxjLtDLrAr6Lu4TgU+FQW2ds4E7n6VFbb1T19mRmgrpy+fI4Xrn76sfIZTpLDyPZwjhZVnaWjyq+4+HDKBdd80b6nAou/SdpsLLPhvse0Or8lAAAAAAAAAgC/HubteUjcfo32nkt2Xp1zg6ndf1i1sS20wXf3uy2NZoN2XS1n/9KXdl9/J7suF2H35bTLnzG81F0Z69+XVzaK2vd2XAAAAAAAAAAAAAAAA8I93D28fr0e8asYAAAAASUVORK5CYII=' className='w-9 cursor-pointer h-7 ' onClick={()=>{
          handleOnClick()
        }}></img>
        <img alt='logo' src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png' className='w-28 pl-4 '></img>
      </div>

      <SearchBar/>
      <div className='flex items-center'>
        <img alt='video-logo' src='https://cdn0.iconfinder.com/data/icons/photo-and-video-3/24/116-512.png' className='w-6 cursor-pointer h-6'></img>
        <img alt='bell-icon' src='https://static.vecteezy.com/system/resources/thumbnails/010/366/166/small/bell-icon-transparent-notification-free-png.png'className='w-9 cursor-pointer h-9 mr-1 ml-4'></img>
        <img alt='profile' src='https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg'className='w-12 cursor-pointer mr-2 '></img>
      </div>
    </div>
  )
}

export default Header