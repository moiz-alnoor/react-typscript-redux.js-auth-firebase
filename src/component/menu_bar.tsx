import { AiFillSetting, AiOutlineDashboard, AiOutlineLogout } from "react-icons/ai"
import { Link } from "react-router-dom"
import { logout } from "../features/user"
import { useDispatch } from "react-redux"

export default function MenuBar() {
   const dispatch = useDispatch()

   const sinOut = () => {
    dispatch(logout())
    // redirct out
    window.location.href = "/"
  } 
  return (
    <>
      <div className="border-r-2 border-white p-5 h-screen  flex justify-center">
        <ul>
          <li className="flex items-center  text-sm font-medium tracking-wider  p-1 "> <AiOutlineDashboard size={25} /><Link to="/dashboard"> Dashboard</Link></li>
          <li className="flex items-center   text-sm font-medium tracking-wider  p-1"> <AiFillSetting size={25} /> <Link to="/setting"> Setting</Link>   </li>
          <li className="flex items-center  text-sm font-medium tracking-wider  p-1 mt-96"> <AiOutlineLogout size={25} /> <p onClick={sinOut} className="hover:cursor-pointer"> Log Out </p>  </li>
        </ul>
      </div>
    </>
  )
}