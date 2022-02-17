import React from 'react';
import './plans.scss';

import iconPlanFree from '../../assets/illustration-free.png'
import iconPlanStandard from '../../assets/illustration-standard.png'
import iconPlanPremium from '../../assets/illustration-premium.png'
import iconCheck from '../../assets/icon-check.png'

const Plans = () => {
  return (
    <div className="plans">
      <div className="plans__title"><h2>Choose Your Plan</h2></div>
      <div className="plans__paragraph"><p>Let's choose the package that is best for you and explore it happily and <br />cheerfully.</p></div>
      <div className="options">
        <div className="option">
          <div className="option__icon">
            <img src={iconPlanFree} alt="" />
          </div>
          <div className="option__title">Free Plan</div>
          <div className="option__list">
            <div className="option__list__item">
              <img src={iconCheck} alt="iconcheck" />Unlimited Bandwitch
            </div>

            <div className="option__list__item">
              <img src={iconCheck} alt="iconcheck" />Encrypted Connection
            </div>

            <div className="option__list__item">
              <img src={iconCheck} alt="iconcheck" />No Traffic Logs
            </div>

            <div className="option__list__item">
              <img src={iconCheck} alt="iconcheck" />Works on All Devices
            </div>
          </div>
          <div className="priceandbtn">
            <div className="priceandbtn__text">Free</div>
            <div className="btn--rounded">Select</div>
          </div>
        </div>

        <div className="option">
          <div className="option__icon">
            <img src={iconPlanStandard} alt="" />
          </div>
          <div className="option__title">Standard Plan</div>
          <div className="option__list">
            <div className="option__list__item">
              <img src={iconCheck} alt="iconcheck" />Unlimited Bandwitch
            </div>

            <div className="option__list__item">
              <img src={iconCheck} alt="iconcheck" />Encrypted Connection
            </div>

            <div className="option__list__item">
              <img src={iconCheck} alt="iconcheck" />Yes Traffic Logs
            </div>

            <div className="option__list__item">
              <img src={iconCheck} alt="iconcheck" />Works on All Devices
            </div>

            <div className="option__list__item">
              <img src={iconCheck} alt="iconcheck" />Connect Anyware
            </div>
          </div>
          <div className="priceandbtn">
            <div className="priceandbtn__text">$9 <span>/ mo</span></div>
            <div className="btn--rounded">Select</div>
          </div>
        </div>

        <div className="option--selected">
          <div className="option__icon">
            <img src={iconPlanPremium} alt="" />
          </div>
          <div className="option__title">Premium Plan</div>
          <div className="option__list">
            <div className="option__list__item">
              <img src={iconCheck} alt="iconcheck" />Unlimited Bandwitch
            </div>

            <div className="option__list__item">
              <img src={iconCheck} alt="iconcheck" />Encrypted Connection
            </div>

            <div className="option__list__item">
              <img src={iconCheck} alt="iconcheck" />Yes Traffic Logs
            </div>

            <div className="option__list__item">
              <img src={iconCheck} alt="iconcheck" />Works on All Devices
            </div>

            <div className="option__list__item">
              <img src={iconCheck} alt="iconcheck" />Connect Anyware
            </div>

            <div className="option__list__item">
              <img src={iconCheck} alt="iconcheck" />Get New Features
            </div>
          </div>
          <div className="priceandbtn">
            <div className="priceandbtn__text">$12 <span>/ mo</span></div>
            <div className="btn--rounded">Select</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Plans