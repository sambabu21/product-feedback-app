import Home from "./Components/Home/Index"
import feedbackData from "../data.js"
import { useState } from "react"

function App() {
  const [data,setData] = useState(feedbackData)


  return (
    <div>
      <Home suggestions={data.productRequests}/>
    </div>
      
  )
}

export default App
