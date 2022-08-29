import '../App.css';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import enhanced_logo from '../style/enhanced-that-little-pizza-place-logo.png';
import { Link } from "react-router-dom";

function SandwichesPasta() {
  return (
    <div>
      <Sidebar page="SandwichesPasta"/>
      <div className="content">
        <div style={{width: '100%', textAlign: 'center'}}>
          <br /><br />
          <Link to="/">
            <img src={enhanced_logo} className="responsive" alt='That Little Pizza Place Logo'/>
          </Link>
        </div>
        
        
        
        <Footer />
      </div>
    </div>
  );
}

export default SandwichesPasta;
