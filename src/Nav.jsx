import { use, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export default function Nav(){
    let locate = useLocation()
    console.log(locate)
    
    

    return(
        <>
            <div className="navbar">
                <div className='wrapper'>
                    <div className='nav__container'>
                        <nav>
                            <ul>
                                <Link to="/" id='/home' className={locate.pathname === '/'? 'active' : ''} >Home</Link>
                                <Link to="/msgs" id='/msgs' className={locate.pathname === '/msgs'? 'active' : ''} >Messages</Link>
                                <Link to="/newmsg" id='/newmsg'className={locate.pathname === '/newmsg'? 'active' : ''} >+</Link>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        </>

    )
}

