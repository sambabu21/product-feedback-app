import arrowUp from "../../../starter-code/assets/shared/icon-arrow-up.svg"
import cmntIcon from "../../../starter-code/assets/shared/icon-comments.svg"

export default function Suggestions({ suggestions }){
    console.log(suggestions)
    return (
        <div className="flex flex-col gap-5 mt-5"> 
            {
                suggestions.map((item)=>{
                    return (
                        <div key={item.id} className="w-[90vw] mx-auto sm:w-full bg-white rounded-[10px] h-[200px] sm:h-[150px] flex justify-between items-center px-10 hover:cursor-pointer">
                            <div className="flex gap-10">
                                <button className="flex flex-col justify-center items-center w-[40px] h-[53px] bg-[#F2F4FE] hover:bg-[#CFD7FF] rounded-[10px] gap-2">
                                    <img src={arrowUp}/>
                                    <p className="font-bold text-[13px]">{item.upvotes}</p> 
                                </button>
                                <div className="flex flex-col justify-center items-start gap-2">
                                    <h1 className="font-bold text-[18px]">{item.title}</h1>
                                    <p className="text-[#647196]">{item.description}</p>
                                    <span className="h-[30px] px-5 py-3 bg-[#F2F4FF] font-semibold text-[13px] text-[#4661E6] rounded-[10px] flex justify-center items-center">{item.category}</span>
                                </div>
                            </div>
                            
                            <div className="flex justify-center items-center gap-2">
                                <img src={cmntIcon}/>
                               <p className="font-bold">{item.comments?item.comments.length : 0}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}