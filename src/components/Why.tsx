import why_1 from './../images/why_1.png'
import why_2 from './../images/why_2.png'
import why_3 from './../images/why_3.png'
import WhyCards from './WhyCards'
const WhyArray = [
   {id:1, Custom: ' bg-[#EEEDF0]', title:'Зоны Технологического Развития (ЗТР)', main:'Поддержка научно-исследовательской деятельности, готовая инфраструктура для производства технически сложных и IT продуктов', image:why_1},
   {id:2,  Custom: ' bg-gradient-to-r from-[#D5D2FF] via-[#E3DFFF] from-[#FFEEF7]', title:'Свободные зоны Free zone', main:'Ваш бизнес будет работать с нулевой % налоговой ставкой с возможностью выйти на рынки ЕС, США, Африки и Азии', image:why_2},
   {id:3, Custom: ' bg-[#EEEDF0]', title:'Организованные Промышленные Зоны (ОПЗ)', main:'Отсутствует НДС при покупке земельного участка, нет налога на недвижимость в течение 5 лет с момента постройки предприятия', image:why_3}
]

const Why = () => {
    return(
        <div>
            <h2 className='mt-[100px] text-[56px] font-GT text-[#000000] bold-500'>Почему Турция?</h2>
            <span className='mt-[20px] text-[24px] text-[#000000] bold-400 mb-[50px]'>Предприниматель из РФ может открыть здесь свой бизнес и получить благоприятные условия под любой вид деятельности, благодаря наличию специальных экономичеких зон</span>
            <div className='flex flex-row justify-between mt-[50px]'>
                {WhyArray.map(i=>{
                return(<WhyCards key={i.id} image={i.image} title={i.title} main={i.main} Custom={i.Custom}/>)
            })}
            </div>
        </div>
    )
}

export default Why