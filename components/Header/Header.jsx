import { CiLight } from "react-icons/ci";
import Styles from "./Header.module.css";
const Header = () => {
  return (
     <nav className="flex items-center justify-between text-white bg-slate-700  py-2 px-10 gap-5">
      {/* Logo */}
        <div>
        <h2 className="font-bold text-2xl">IATT</h2></div>        
        {/* Theme button */}
      <div className={Styles.header__aline}>
          <CiLight className="cursor-pointer text-2xl"/>
        </div>        
    </nav>
  )
}

export default Header