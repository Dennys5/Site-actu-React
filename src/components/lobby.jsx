import { Link } from 'react-router-dom';
import './lobby.css'

function Loby() {    
    return (
        <>
        <div>
            <nav>
                <Link to="/">Acceuil</Link>
                <Link to="/News">News</Link>
            </nav>
        </div>
        <div className='folie'>
        <h1>Accueil</h1>
        <h2>Restez au courant ! <br /> Cliquez sur 'News' pour avoir les infos sur le BitCoins.</h2>
        </div>
        <div className='foot'>
        <footer>
            <p>&copy; 2023 Actualités</p>
        </footer>
        </div>
        </>
      );
}

export default Loby;