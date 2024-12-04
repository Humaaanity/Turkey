import { Component } from "react"
import People from './../images/people.png'
import book from './../images/book.png'



export default class Ref extends Component{
    render() {
        return (
         <>
         
         <div className="bg-gradient-to-r from-[#423D8A] to-[#413D8A] rounded-[40px] max-w-[1645px] h-[450px] block  shadow-2xl">
            <h1 className="text-[#FFFFFF] text-[56px] font-[500] font-GT leading-[65px] mt-[30px] pt-[20px] ml-[60px] max-w-[826px] relative">Откроем компанию в Турции
            «под ключ» с выгодой 30%</h1>
            <span className="text-[#FFFFFF] text-[18px] font-[400] ml-[60px] w-[635px] block linear-none relative mt-[20px]">Запишитесь на бесплатную консультацию, ответив на 5 вопросов и получите справочник по адаптации гражданина РФ в Турции</span>
            <img src={People} alt="" className="absolute translate-x-[930px] translate-y-[-237px]"/>
            <button className="px-[40px] bg-gradient-to-r from-[#E1A72B] to-[#F9D706] rounded-[16px] py-[19px] ml-[64px] mt-[57px] hover:scale-[1.1] ease-in-out duration-300">
              <span className="relative font-GT text-[18px] text-[#000000] bold-[500] ">ПОЛУЧИТЬ СПРАВОЧНИК</span>
              <img src={book} alt="" className="absolute translate-x-[243px] translate-y-[-40px]"/>
              </button>
         </div>
         
         </>
        )
      }
    }
