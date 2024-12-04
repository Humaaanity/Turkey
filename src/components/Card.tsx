
interface CardProps {
    src: string 
    text: string;
}


const Card = ({src, text} : CardProps) => {
    return (
        <div className="flex flex-row bg-gradient-to-r from-[#EAE4FF] via-[#EAE4FF] to-[#FFE3F2] rounded-[32px] max-w-[321px] shadow-lg  items-center">
            <span className="font-GT text-[18px] bold-400 text-[#000000] ml-[20px] ">{text}</span>
            <img src={src} alt=""  className="translate-y-[12px] scale-[1.3] mr-[10px]"/>

        </div>
    )

    
}

export default Card;