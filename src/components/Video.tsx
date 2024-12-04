import ReactPlayer from "react-player";


const Video = () => {
    return (
        <div className="mt-[100px]">
            <h2 className="text-[#000000] text-[56px] bold-500 font-GT leading-tight content-center mb-[50px] ">Одно из решений данных проблем – это открытие или релокация бизнеса в Турцию</h2>
        <div className="rounded-3xl overflow-hidden">
            
            <ReactPlayer width='1622px' height='640px' url='https://www.youtube.com/watch?v=z7yqtW4Isec'/>
        </div>
        </div>
    )
}


export default Video;