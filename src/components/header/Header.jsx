import React from 'react';
import './header.scss';

import headerimg from '../../assets/Illustration1.png';
import ejemplo from '../../assets/Landingpage.png';

const Header = () => {
  return (
    <div className="header col2">
      <div className="ejemplo">
        <img src={ejemplo} alt="" />
      </div>
      <div className="header__info">
        <h1 className="header__info__title">
          Want anything to be easy with <span>LaslesVPN.</span> 
        </h1>
        <p className="header__info__paragraph">
        Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.
        </p>
        <button className='btn--normal'>Get Started</button>
      </div>
      <div className='header__image'><img src={headerimg} alt=""/></div>
    </div>
  )
}

export default Header