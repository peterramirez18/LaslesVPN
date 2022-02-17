import React from 'react';
import './features.scss';

import featuresImage from '../../assets/illustration-features.png';
import featuresIcon from '../../assets/features-icon.png';

const Features = () => {
  return (
    <div className="features col2">
      <div className="features__image">
        <img src={featuresImage} alt="" />
      </div>

      <div className="features__info">
        <div className="features__info__title">
          <h2>We Provide Many<br /> Features You Can Use</h2>
        </div>

        <div className="features__info__paragraph">
          <p>You can explore the features that we provide with fun<br/> and have their own functions each feature.</p>
        </div>

        <div className="features__info__list">
          <div><img src={featuresIcon} alt="" />Powerfull online protection.</div>
          <div><img src={featuresIcon} alt="" />Internet without borders.</div>
          <div><img src={featuresIcon} alt="" />Supercharged VPN.</div>
          <div><img src={featuresIcon} alt="" />No specific time limits.</div>
        </div>

      </div>


    </div>
  )
}

export default Features