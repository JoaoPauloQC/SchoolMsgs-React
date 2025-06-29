import { use, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export default function Nav(props){
    let locate = useLocation()
    console.log("the locate is " + locate.pathname)
    console.log(locate.pathname === '/')
    console.log(props)
    function handleClick(){
        console.log("click")
        props.reset()
    }
    

    return(
        <>
            <div className="navbar">
                <div className='wrapper'>
                    <div className='nav__container'>
                        <nav>
                            <ul>
                                <Link  to="/" id='/home' className={locate.pathname === '/'? 'nav-active' : ''} >Home</Link>
                                <Link onClick={handleClick} to="/msgs" id='/msgs' className={locate.pathname === '/msgs'? 'nav-active' : ''} >Messages</Link>
                                <Link onClick={handleClick} to="/newmsg" id='/newmsg'className={locate.pathname === '/newmsg'? 'nav-active' : ''} >+</Link>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        </>

    )
}

