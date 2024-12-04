interface ListProps {
    text: string;
    num: number;

}

const Lists =({num, text}: ListProps) => {
    return (
        <div className="font-GT flex flex-row items-center mb-[25px]">
            <div className="text-[#000000] bold-700 font-GT text-[20px] bg-[#F9D706] rounded-full p-[4px] w-[40px] text-center mr-[6px]">{num}</div>
            <div className="text-[#75757E] text-[18px] max-w-[230px] ">{text}</div>
        </div>
    )
} 

export default Lists;