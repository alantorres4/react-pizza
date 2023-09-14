import '../App.css';
import Footer from '../Footer';
import Sidebar from './Sidebar';
import CallNowButton from './CallNowButton';
import enhanced_logo from '../style/enhanced-that-little-pizza-place-logo.png';
import { Link } from "react-router-dom";

function SandwichesPasta() {
  return (
    <div>
      <div className="checkeredBanner"> .</div>
      <Sidebar page="SandwichesPasta"/>
      <div className="content">
        <CallNowButton />
        <div style={{width: '100%', textAlign: 'center'}}>
          <br /><br />
          <Link to="/">
            <img src={enhanced_logo} className="responsive" alt='That Little Pizza Place Logo'/>
          </Link>
        </div>
        
        <h1 style={{width: '100%', textAlign: 'center'}}>Sandwiches & Pasta</h1>

        <div className="row">
          <div className="column">
            <h2 style={{ color: '#e10f00e6', display: 'inline-flex',  }}>Ham and Cheese</h2>
            <p style={{ paddingLeft: '16px', display: 'inline-flex' }}>$8.50</p>
            <p>Ham and cheese with lettuce, tomato, and onion.</p>

            <h2 style={{ color: '#e10f00e6', display: 'inline-flex',  }}>Sub Sandwich</h2>
            <p style={{ paddingLeft: '16px', display: 'inline-flex' }}>$8.50</p>
            <p>Ham, salami, and cheese with lettuce, tomato, and onion.</p>
          </div>

          <div className="column">
            <h2 style={{ color: '#e10f00e6', display: 'inline-flex',  }}>Veggie Sandwich</h2>
            <p style={{ paddingLeft: '16px', display: 'inline-flex' }}>$7.00</p>
            <p>Black olives, mushrooms, onions, tomatoes, lettuce, and mozzarella cheese.</p>

            <h2 style={{ color: '#e10f00e6', display: 'inline-flex',  }}>Meatball Sandwich</h2>
            <p style={{ paddingLeft: '16px', display: 'inline-flex' }}>$9.50</p>
            <p>A roll stuffed with meatballs and tomato sauce with cheese.</p>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default SandwichesPasta;
