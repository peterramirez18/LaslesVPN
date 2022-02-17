import React from 'react';
import './globalnetwork.scss';

import globalNetwork from '../../assets/globalnetwork-image.png';
import amazon from '../../assets/amazon.svg';
import reddit from '../../assets/reddit.svg';
import spotify from '../../assets/spotify.svg';
import discord from '../../assets/discord.svg';
import netflix from '../../assets/netflix.svg';

const GlobalNetwork = () => {
  return (
    <>
    <div className="global-network">
      <div className="global-network__title"><h2>Huge Global Network<br/> of Fast VPN</h2></div>
      <div className="global-network__paragraph"><p>See LaslesVPN everywhere to make it easier for you when you move<br/> locations.</p></div>
      <div className="global-network__image">
       <img src={globalNetwork} alt="" />
      </div>
    </div>
    <div className="logos">
      <img src={netflix} alt="" />
      <img src={reddit} alt="" />
      <img src={amazon} alt="" />
      <img src={discord} alt="" />
      <img src={spotify} alt="" />
    </div>
    </>
  )
}

export default GlobalNetwork