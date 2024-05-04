import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const Selector = () =>{
    const [open,setOpen] = useState(false)
    const [filter,setFilter] = useState("Most Upvotes")

    const changeFilter = (selection) =>{
        setFilter(selection)
    }

    return (
        <div className="absolute top-0 left-16">
            <div className="w-[140px] flex justify-between items-center sm:gap-2">
                <h1 className="font-bold text-[#F2F4FE] text-[14px] ">{filter}</h1>
                {!open && <FontAwesomeIcon icon={faChevronDown} className="text-white w-3" onClick={()=>setOpen(!open)}/>}
                {open && <FontAwesomeIcon icon={faChevronUp} className="text-white w-3" onClick={()=>setOpen(!open)}/>}
            </div>
            {
                open? <div className="h-[192px] w-[255px] bg-white mt-10 rounded-[10px] shadow-2xl">
                <ul className="w-full h-full flex flex-col justify-around items-start">
                    <li className="border-b w-full p-2 pl-5 hover:text-[#AD1FEA] hover:cursor-pointer"  onClick={()=>changeFilter("Most Upvotes")}>Most Upvotes</li>
                    <li className="border-b w-full p-2 pl-5 hover:text-[#AD1FEA] hover:cursor-pointer"  onClick={()=>changeFilter("Least Upvotes")}>Least Upvotes</li>
                    <li className="border-b w-full p-2 pl-5 hover:text-[#AD1FEA] hover:cursor-pointer"  onClick={()=>changeFilter("Most Comments")}>Most Comments</li>
                    <li className=" w-full p-2 pl-5 hover:text-[#AD1FEA] hover:cursor-pointer"  onClick={()=>changeFilter("Least Comments")}>Least Comments</li>
                </ul>
            </div> : null
            }
        </div>
    )
} 

export default Selector