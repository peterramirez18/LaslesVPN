import React from 'react';
import './info.scss';

import user from '../../assets/icon-user.png';
import location from '../../assets/icon-location.png';
import server from '../../assets/icon-server.png';

const Info = () => {
  return (
    <div className="info">
      <div className="info__item">
        <div className="info__item__icon">
          <img src={user} alt="" />
        </div>
        <div className="info__item__text">
          <div className="info__item__text__number">90+</div>
          <div className="info__item__text__type">User</div>
        </div>
      </div>

      <div className="info__item">
        <div className="info__item__icon">
          <img src={location} alt="" />
        </div>
        <div className="info__item__text">
          <div className="info__item__text__number">30+</div>
          <div className="info__item__text__type">Locations</div>
        </div>
      </div>

      <div className="info__item">
        <div className="info__item__icon">
          <img src={server} alt="" />
        </div>
        <div className="info__item__text">
          <div className="info__item__text__number">50+</div>
          <div className="info__item__text__type">Servers</div>
        </div>
      </div>
    </div>
  )
}

export default Info