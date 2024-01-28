import React, { useEffect, useRef, useState } from "react";
import styles from "../style.module.css"
import logo from "../logo.svg"
import { FaBars } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import {links,social} from "../data";
const Navbar = () => {
  const[showLinks,setShowLinks] = useState(false)
  const linkcontainerRef =  useRef(null)
  const linkRef = useRef(null)
  useEffect(()=>{
      const linksheight = linkRef.current.getBoundingClientRect().height
      if(showLinks){
        linkcontainerRef.current.style.height = `${linksheight}px`
      }
      else{
        linkcontainerRef.current.style.height = '0px'
      }
  },[showLinks])
    return (
        <nav>
            <div className={styles.navcenter}>
                <div className={styles.navheader}>
                <img src={logo} alt="logo" />
                <button className={styles.navtoggle} onClick={()=>setShowLinks(!showLinks)}  >
                    <FaBars />
                </button>
                </div>
                <div className={styles.linkscontainer} ref={linkcontainerRef}>
                    <ul className={styles.links} ref={linkRef}>
                      {links.map((link)=>{
                        const{id,url,text} = link
                        return <li key={id} >
                            <a href={url}>{text}</a>
                        </li>
                      })}
                    </ul>
                </div>
                <ul className={styles.socialicons}>
                  {social.map((socials)=>{
                    const {id,url,icon}= socials;
                    return <li key={id} >
                        <a href={url}>{icon}</a>
                    </li>
                  })}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar