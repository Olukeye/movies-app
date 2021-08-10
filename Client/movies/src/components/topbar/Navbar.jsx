import './navbar.scss'
import {Notifications, Search} from '@material-ui/icons';
import ArrowDropdown from '@material-ui/icons/ArrowDropDown';
import { useState } from "react";
import { Link } from 'react-router-dom'


const Navbar = () => {
      const [isScrolled, setIsScrolled] = useState(false)

    //   perform a function when scrolled
      window.onscroll = () => {
          setIsScrolled(window.pageYOffset === 0 ? false : true);
          return () => (window.onscroll = null);
      };
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
           <div className="container">
               <div className="left">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt=""/>
                   <Link to="/" className="Link"><span>Home</span></Link>
                   <Link to="series" className="Link">
                   <span>Series</span>
                   </Link>
                   <Link to="movies" className="Link">
                   <span>Movies</span>
                   </Link>
                   <span>Latest & Popular</span>
                   <span>My List</span>
               </div>
               <div className="right">
                   <Search className="icons"/>
                   <Notifications className="icons"/>
                   <img src="https://wiki.projecttopics.org/wp-content/uploads/2021/05/09c989ff0224244443f60993c47e18.jpg" alt=""/>
                  <div className="profile">
                  <ArrowDropdown className="icons"/>
                  <div className="options">
                      <span>Settings</span>
                      <span>Leave</span>
                  </div>
                  </div>
               </div>
           </div>
        </div>
    )
}

export default Navbar
