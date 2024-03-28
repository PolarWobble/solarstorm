import React from 'react';

import './home.styles.scss';

const Home = () => {
  return (
    <div className='Home-Container'>
        <div className='Welcome-Message'>
            <div className='Welcome-Message-Title'>
                <div>WWW.SOLARSTORM.SE</div>
            </div>
            <div className='Welcome-Message-Body'>
                <div>Bild här</div>
                <h3>Välkommen ut ur kylan</h3>
                <span>Du har kommit till en plats som avsaknar fiender och tystnad, och brister i likgiltighet och tråkigheter - inte bara stundvis. Varje vecka samlas en godtyckling mängd människor på Sveriges nyaste och kanske minst populära mötesplats för att undvika isolering, celibat och att inte bli hörda.</span>
            </div>
        </div>
        <div className='Login-Container'>
            <div className='Login-Container-Title'>Inloggning</div>
            <div className='Login-Container-Body'>
                <h3>Smeknamn</h3>
                <input type="text" placeholder='Smeknamn...' className='Input-Smeknamn'/>
                <h3>Lösenord</h3>
                <input type="password" placeholder='Lösenord...' className='Input-Password'/>
                <h3>Humör</h3>
                <select name="Humör" id="Humör">
                    <option value="sunshine">Glad som en solstråle</option>
                    <option value="cloudy">Ledsen som ett regnmoln</option>
                    <option value="steppedon">Trampad på likt en skosula</option>
                    <option value="fullthrottle">Plattan i mattan</option>
                    <option value="apathy">Sugen på apati</option>
                    <option value="springtimefeelings">Krokusar överallt - VÅRKÄNSLOR!</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Home;
