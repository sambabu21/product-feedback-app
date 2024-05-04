import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Header(){

    const categories=["All","UI","UX","Enhancement","Bug","Feature"]
    const [open,setOpen] = useState(false)

    const handleNavBtnClick = () =>{
        setOpen(!open)
    }

    return (
        <>
        <div className="w-full lg:w-[20%] flex flex-col sm:flex-row lg:flex-col gap-3 lg:gap-8 ">
            <div className="w-full sm:w-1/3 lg:w-full md:rounded-[10px] h-[72px] md:h-[20vh] bg-gradient-to-tr from-[#28A7ED] via-[#A337F6] to-[#E84D70] flex  justify-between items-center sm:justify-start sm:items-end px-8 sm:p-5">
                <div className="">
                    <h1 className="text-white font-bold text-[15px] sm:text-[20px]">Back Feed</h1>
                    <p className="text-white font-normal text-[13px] sm:text-[15px]">Feedback Board</p>
                </div>
                <div className="sm:hidden">
                <FontAwesomeIcon icon={faXmark} className={open?"text-white w-[16px] h-[16px]":"hidden"} onClick={handleNavBtnClick}/>
                <FontAwesomeIcon icon={faBars} className={open?"hidden":"text-white w-[16px] h-[16px]"} onClick={handleNavBtnClick}/>
                </div>
                
            </div>
            {/* desktop view navigation */}
            <div className="w-full sm:w-2/3 lg:w-full flex flex-col sm:flex-row lg:flex-col gap-3 lg:gap-8 hidden sm:flex">
                <div className="w-full sm:w-1/2 lg:w-full bg-white p-5 flex flex-wrap gap-3 rounded-[10px]">
                    {
                        categories.map((cat)=>{
                            return <button key={cat} className="h-[30px] py-2 px-5 bg-[#F2F4FF] font-semibold text-[13px] text-[#4661E6] rounded-[10px] flex justify-center items-center hover:bg-[#CFD7FF]">{cat}</button>
                        })
                    }
                </div>
                <div className="w-full sm:w-1/2 lg:w-full bg-white p-5 flex flex-wrap gap-3 rounded-[10px]">
                    <div className="w-full flex justify-between items-center">
                        <h1 className="font-bold text-[18px]">Roadmap</h1>
                        <a className="font-semibold text-[13px] text-[#4661E6] underline">View</a>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between w-full ">
                            <div className=" flex justify-between items-center gap-3">
                                <div className="w-[8px] h-[8px] bg-[#F49F85] rounded-full"></div>
                                <p>Planned</p>
                            </div>
                            <p className="font-bold">2</p>
                        </div>
                        <div className="flex justify-between w-full ">
                            <div className=" flex justify-between items-center gap-3">
                                <div className="w-[8px] h-[8px] bg-[#AD1FEA] rounded-full"></div>
                                <p>In-Progress</p>
                            </div>
                            <p className="font-bold">3</p>
                        </div>
                        <div className="flex justify-between w-full ">
                            <div className=" flex justify-between items-center gap-3">
                                <div className="w-[8px] h-[8px] bg-[#62BCFA] rounded-full"></div>
                                <p>Planned</p>
                            </div>
                            <p className="font-bold">1</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
         {/* mobile view navigation */}

        {open ? <div className="h-screen w-screen ">
            <div className="h-full w-full bg-transparent bg-opacity-30 absolute inset-0 -z-10"></div>
            <div className="fixed top-[72px] right-[0] flex flex-col gap-8 w-[80vw] sm:hidden border h-full bg-[#F7F8FD] p-5">
            <div className="bg-white p-5 flex flex-wrap gap-3 rounded-[10px]">
                {
                    categories.map((cat)=>{
                        return <button key={cat} className="h-[30px] p-5 bg-[#F2F4FF] font-semibold text-[13px] text-[#4661E6] rounded-[10px] flex justify-center items-center hover:bg-[#CFD7FF]">{cat}</button>
                    })
                }
            </div>
                <div className="bg-white p-5 flex flex-wrap gap-3 rounded-[10px]">
                    <div className="w-full flex justify-between items-center">
                        <h1 className="font-bold text-[18px]">Roadmap</h1>
                        <a className="font-semibold text-[13px] text-[#4661E6] underline">View</a>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between w-full ">
                            <div className=" flex justify-between items-center gap-3">
                                <div className="w-[8px] h-[8px] bg-[#F49F85] rounded-full"></div>
                                <p>Planned</p>
                            </div>
                            <p className="font-bold">2</p>
                        </div>
                        <div className="flex justify-between w-full ">
                            <div className=" flex justify-between items-center gap-3">
                                <div className="w-[8px] h-[8px] bg-[#AD1FEA] rounded-full"></div>
                                <p>In-Progress</p>
                            </div>
                            <p className="font-bold">3</p>
                        </div>
                        <div className="flex justify-between w-full ">
                            <div className=" flex justify-between items-center gap-3">
                                <div className="w-[8px] h-[8px] bg-[#62BCFA] rounded-full"></div>
                                <p>Planned</p>
                            </div>
                            <p className="font-bold">1</p>
                        </div>
                        
                    </div>
                </div>
            </div>
     </div>: null}
     </>
    )
}