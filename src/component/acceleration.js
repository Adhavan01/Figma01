import React from 'react';
import robo from '../image/Group 1006-3.png';
import robo2 from '../image/Group 1006-4.png';
import robo3 from '../image/Group 1006-5.png';
import '../sass/home.scss';
import '../sass/acceleration.scss';

function Acceleration() {
  return (
  <>
  <div className='acc_head'>
  <h1 className='h11'>CRM Acceleration</h1>
  <p className='para'>Everything CRM integrations was supposed to be,And more.</p>
  </div>
  <section className='card2'>
    <div className='card'>
    <div className='.container'>
      <img src={robo} alt="image1" />
      <h3 className='h31'>Never update your contacts manually</h3>
      <p className='para'> Any contact you add in CRM gets updated automatically in Klenty. Set up Triggers to drive leads from klenty back into the CRM. Save hours everyday to focus on critical activities</p>
    </div>
    </div>
    <div className='card'>
    <div className='.container'>
      <img src={robo2} alt="image2" />
      <h3 className='h31'>Engage instantly with prospects who show intent</h3>
      <p className='para'>Auto-sync email engagement data like opens, clicks and replies from klenty right into your CRM. Get notified immediately. Followup without skipping a beat.</p>
    </div>
    </div>
    <div className='card'>
    <div className='.container'>
      <img src={robo3} alt="image3" />
      <h3 className='h31'>Outreach without leaving your CRM</h3>
      <p className='para'>Engage with prospects straight from you CRM. Book meeting using Klenty-without ever logging into klenty. No more switching screens to execute sales outreach.</p>
    </div>
    </div>
  </section>
  </>
  )
}
export default Acceleration