import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        <>
            <div className="navbar">
                <div className='wrapper'>
                    <div className='nav__container'>
                        <nav>
                            <ul>
                                <Link to="/">Home</Link>
                                <Link to="/msgs">Messages</Link>
                                <Link to="/newmsg">+</Link>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        </>

    )
}

