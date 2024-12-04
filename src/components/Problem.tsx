import quest from './../images/quest.png'
import Lists from './Lists'

const listArray = [
    { id: 1, num: 1, text: 'Санкции ударили по бизнесу и доходу?' },
    { id: 2, num: 2, text: 'Нет возможности вести бизнес с иностранными партнерами?' },
    { id: 3, num: 3, text: 'Боитесь заморозки своих валютных активов в РФ?' },
    { id: 4, num: 4, text: 'Хотите продолжить рост своего бизнеса и выйти на международный рынок?' },

]
const Problem= () => {
    return (
    <div className='flex flex-row items-center justify-between shadow-2xl rounded-xl mt-[100px]'>
        <img src={quest} alt="" className='translate-y-[8px]'/>
        <div className='ml-[200px]'>
            <div>
             <h2 className='font-GT text-[#000000] text-[56px] bold-500 leading-none text-end mt-[50px] mr-[100px]'>Вам знакомы эти</h2>
             <h2 className=' font-GT text-[#000000] text-[56px] bold-500 text-end mr-[100px] mb-[50px]'>проблемы?</h2>
            </div>
            <div className='flex flex-row justify-around flex-wrap items-center'>
              {listArray.map(i=> {
              return(
                <Lists key={i.id} text={i.text} num={i.num}/>
              )
              })}
            </div>
        </div>

    </div>
    )   
}

export default Problem;