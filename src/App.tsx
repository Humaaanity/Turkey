
import Ref from './components/ref'
import Header from './components/Header'
import card_1 from './images/card1.png'
import card_2 from './images/card2.png'
import card_3 from './images/card3.png'
import card_4 from './images/card4.png'
import Card from './components/Card'
import Problem from './components/Problem'
import Video from './components/Video'
import Why from './components/Why'


const Array = [
  { id: 1, text:'Регистрация компаний от 3 дней', image:card_1 },
  { id: 2, text:'Сопровождение компании под ключ за рубежом', image:card_2 },
  { id: 3, text:'Возможность дистанционного открытия компании', image:card_3 },
  { id: 4, text:'Каждые 3 дня информируемо ходе дел', image:card_4 },
  
]


function App() {
 

  return (
    <>
    <div className='font-sans mt-[20px] mx-[240px] w-100'>
      <Header/>
      <Ref/>
      <div className='flex flex-row justify-between mt-[43px] '>
      {Array.map(i => {
        return (<Card key= {i.id} src={i.image} text={i.text} />)
      }) 
      }
      </div>
      <Problem/>
      <div >
      <Video/>
      <Why/>
      </div>
    </div>
      
    </>
  )
}

export default App
