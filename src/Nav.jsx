import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        <>
            <div className="navbar">
                <div className='wrapper'>
                    <div className='nav__container'>
                        <nav>
                            <Link to="/">Home</Link>

                        </nav>
                    </div>
                </div>

            </div>
        </>

    )
}

