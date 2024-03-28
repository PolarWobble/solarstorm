import {Fragment} from 'react';
import {Outlet, Link} from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
        <div className='Navigation-Container'>
            <div className='Navigation-Main'>
                <div className='Main-Top'>
                    <div className='Logo'>Navigation Logo</div>
                    <div className='Online-Count'>
                        <div className='Online-Count-Number'>1 2 9 3 9</div>
                        <div className='Online-Count-Text'>ONLINE JUST NU</div>
                    </div>
                </div>
                <div className='Main-Bot'>
                    <div className='Bot-Links'>
                        <div>Nyheter</div>
                        <div>Gästbok</div>
                        <div>Flaskpost</div>
                        <div>Pinne</div>
                        <div>Vänner</div>
                        <div>Kub..</div>
                        <input type="text" placeholder='Snabbsök...' />
                    </div>
                </div>
            </div>
            
        </div>
        <Outlet/>
    </Fragment>
  )
}

export default Navigation;
