import '../App.css';
import { Link } from "react-router-dom";

function Sidebar(props) {
  const pageName = props.page;
  let homeLink = "";
  let pizzaLink = "";
  let sandwichLink = "";

  if (pageName === "Home") {
    homeLink = "sidebar_active";
  } else if (pageName === "Pizza") {
    pizzaLink = "sidebar_active";
  } else if (pageName === "SandwichesPasta") {
    sandwichLink = "sidebar_active";
  }

  return (
    <div className="sidebar">
      <div className={homeLink}>
        <Link to="/">Home</Link>
      </div>
      <div className={pizzaLink}>
        <Link to="/pizza">Hot, Fresh Pizza!</Link>
      </div>
      <div className={sandwichLink}>
        <Link to="/sandwichesPasta">Sandwiches & Pasta!</Link>
      </div>
    </div>
  );
}

export default Sidebar;
