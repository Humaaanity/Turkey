
interface WhyProps {
    title: string;
    main: string;
    image: string
    Custom: string;
}

const WhyCards = ({title, main, image, Custom} : WhyProps) => {
    return(
       <div className={`rounded-2xl shadow-lg max-w-[450px]  px-[39px] flex flex-col items-center justify-between  ${Custom}`}>
        <h3 className="mt-[38px] font-GT text-[24px] text-[#000000] bold-500 text-center mb-[20px] ">{title}</h3>
        <div className="font-GT bold-400 text-[#000000] text-[18px] text-center">{main}</div>
        <img src={image} alt="" />
       </div> 
    )
}

export default WhyCards