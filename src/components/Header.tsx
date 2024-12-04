
import { Component } from 'react'
import logo from '../images/logo.png'
import mark from '../images/mark.png'

export default class Header extends Component {
  render() {
    return (
     <>
     <div className='flex flex-row justify-between items-center '>
        <img src={logo} alt="logo" />
        <div className='flex flex-row items-center '>
            <div className='mr-[50px] flex flex-row items-center'>
                <img src={mark} alt="" className='mr-[19px]' />    
                <div className='text-[#000000]-400 text-[18px] font-GT bold-400 '>Москва, ул. Бауманская, д. 7 стр. 1</div>
            </div>
        <a href="" className='border-0 font-GT bold-[500] text-[24px] no-underline hover:scale-10 ease-out text-[#000000] font-bold ml-50px'>8 (499) 681-92-84</a>
        </div>


     </div>
     
     
     </>
    )
  }
}

