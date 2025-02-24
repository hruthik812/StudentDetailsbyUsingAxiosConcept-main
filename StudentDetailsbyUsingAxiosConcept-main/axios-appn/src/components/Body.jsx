import { Routes, Route } from "react-router-dom";
import Insert from "../insert";
import Update from "../Update";
import DeleteOperation from "../DeleteOperation";
import GetEx2 from "../GetEx2";
const Body=()=>{
  return(<>
  
  <div> 
    <Routes>
      <Route path="/" element={<Insert/>}></Route>
      <Route path="/update" element={<Update/>}></Route>
      <Route path="/delete" element={<DeleteOperation/>}></Route>
      <Route path="/viewall" element={<GetEx2/>}></Route>
    </Routes>
  </div>
    </>)
}
 export default Body;