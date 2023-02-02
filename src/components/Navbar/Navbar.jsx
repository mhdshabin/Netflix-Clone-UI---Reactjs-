import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import Noc from '@mui/icons-material/Notifications';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";
const Navbar = () => {
  const [isScrolled, setIsScrolled]=useState(false);

  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset  === 0? false : true);
    return ()=> (window.onscroll=null);
  };
  return (
    <div className={isScrolled?"navbar scrolled":"navbar"}>
        <div className="container">
            <div className="left"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New&Popular</span>
            <span>Mylist</span>
            </div>
            <div className="right">
                <SearchIcon className="icons"/>
                <span>KID</span>
                <Noc className="icons"/>
                <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg" alt="" />
                <div className="profile">
                  <ArrowDropDown className="icons"/>
                  <div className="options">
                    <span>settings</span>
                    <span>logout</span>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar