import '../App.css';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import enhanced_logo from '../style/enhanced-that-little-pizza-place-logo.png';
import { Link } from "react-router-dom";


function Homepage() {
  return (
    <div>
      <Sidebar page="Home"/>
      <div className="content">
        <div style={{width: '100%', textAlign: 'center'}}>
          <br /><br />
          <Link to="/">
            <img src={enhanced_logo} className="responsive" alt='That Little Pizza Place Logo'/>
          </Link>
        </div>
        <div style={{width: '100%', textAlign: 'center'}}>
          <h1 className="welcome">Welcome to<br/>That Little Pizza Place</h1>
          <p>(479) 738-2155</p>
          <h4>Tues-Sat: <i>10:30am - 9:00pm</i><br/> Sunday & Monday: <i>Closed</i></h4>
          <p><i>Dining room opens @ 4pm</i></p>
          <p><i>Since 1987</i></p><br/><br/>
          <h3>Location:</h3>
        </div>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.8534413150464!2d-93.73584319305266!3d36.085711983060634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ceb3303b8d134b%3A0x344a7161dc76293a!2sThat%20Little%20Pizza%20Place!5e0!3m2!1sen!2sus!4v1632203918875!5m2!1sen!2sus" height="450" style={{border: 0, width: '85%'}} allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div style={{width: '100%', textAlign: 'center'}}>
          <p><i>204 S. Harris Street <br/>Huntsville, AR 72740</i></p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
