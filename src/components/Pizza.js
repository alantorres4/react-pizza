import '../App.css';
import Footer from '../Footer';
import Sidebar from './Sidebar';
import CallNowButton from './CallNowButton';
import enhanced_logo from '../style/enhanced-that-little-pizza-place-logo.png';
import { Link } from "react-router-dom";

function Pizza() {
  return (
    <div>
      <div className="checkeredBanner"> .</div>
      <Sidebar page="Pizza"/>
      <div className="content">
        <CallNowButton />
        <div style={{width: '100%', textAlign: 'center'}}>
          <br /><br />
          <Link to="/">
            <img src={enhanced_logo} className="responsive" alt='That Little Pizza Place Logo'/>
          </Link>
        </div>
        
        <h1 style={{width: '100%', textAlign: 'center'}}>Pizza</h1>
        <div className="pizza-quote">
          <p><i>We make all our dough and pizza sauce from scratch here in the restaurant. Our recipes were developed from over 40 years experience serving pizza.</i></p>
        </div>

        <br/>
        <h4 style={{width: '100%', textAlign: 'center'}}>Choose from our specially curated list or create your own in two simple steps below!</h4>
        <br/><br/>

        <h2 className="pizza-headers">Calzone</h2>
        <p>Mozzarella cheese with your choice of three (3) toppings or a speciality pizza. <span className="bold-prices">$9.50</span></p>
        <table>
          <tr>
            <td>Additional Toppings</td>
            <td><span className="bold-prices">$0.50</span></td>
          </tr>
          <tr>
            <td>Extra Cheese</td>
            <td><span className="bold-prices">$1.00</span></td>
          </tr>
        </table>
        <p><i>Not available with discount offers.</i></p>
        <br/>



        <div className="row">
          <div className="column">
            <h2 className="pizza-headers">All Meat</h2>
            <p>Pepperoni, Canadian bacon, Sausage, cheddar, and mozzarella cheese.</p>
            <table>
              <tr>
                <th>Small</th>
                <th>Medium</th>
                <th>Large</th>
                <th>X-Large</th>
              </tr>
              <tr>
                <td>$8.50</td>
                <td>$14.10</td>
                <td>$17.45</td>
                <td>$20.95</td>
              </tr>
            </table>
            <br/><br/>

            <h2 className="pizza-headers">Barbecue Pizza</h2>
            <p>Flavorful pork barbacue and sauce served on a thick crust topped with mozzarella.</p>
            <table>
              <tr>
                <th>Small</th>
                <th>Medium</th>
                <th>Large</th>
                <th>X-Large</th>
              </tr>
              <tr>
                <td>$8.50</td>
                <td>$14.10</td>
                <td>$17.45</td>
                <td>$20.95</td>
              </tr>
            </table>
            <br/><br/>

            <h2 className="pizza-headers">Taco Pizza</h2>
            <p>Our flavorful taco meat covered with mozzarella, baked on a crispy, thin crust. Topped with cheddar, tomato, and lettuce.</p>
            <table>
              <tr>
                <th>Small</th>
                <th>Medium</th>
                <th>Large</th>
                <th>X-Large</th>
              </tr>
              <tr>
                <td>$8.50</td>
                <td>$14.10</td>
                <td>$17.45</td>
                <td>$20.95</td>
              </tr>
            </table>
            <br/><br/>

            <h2 className="pizza-headers">Chicken Bacon Ranch</h2>
            <p>Ranch over a pizza topped with mozzarella with chicken, bacon, red onions, and diced tomatoes.</p>
            <table>
              <tr>
                <th>Small</th>
                <th>Medium</th>
                <th>Large</th>
                <th>X-Large</th>
              </tr>
              <tr>
                <td>$8.50</td>
                <td>$14.10</td>
                <td>$17.45</td>
                <td>$20.95</td>
              </tr>
            </table>
            <br/><br/>

            <h2 className="pizza-headers">Veggie Pizza</h2>
            <p>A tasty combination of mushrooms, diced tomato, green olives, black olives, sautéed bell peppers, and sautéed onion.</p>
            <table>
              <tr>
                <th>Small</th>
                <th>Medium</th>
                <th>Large</th>
                <th>X-Large</th>
              </tr>
              <tr>
                <td>$7.95</td>
                <td>$13.60</td>
                <td>$16.95</td>
                <td>$20.45</td>
              </tr>
            </table>
            <br/><br/>

          </div>

          <div className="column">
            <h2 className="pizza-headers">Combo</h2>
            <p>Pepperoni, sausage, black olives, mushrooms, onions, and bell pepper.</p>
            <table>
              <tr>
                <th>Small</th>
                <th>Medium</th>
                <th>Large</th>
                <th>X-Large</th>
              </tr>
              <tr>
                <td>$8.30</td>
                <td>$13.90</td>
                <td>$17.25</td>
                <td>$20.75</td>
              </tr>
            </table>
            <br/><br/>

            <h2 className="pizza-headers">Meatballs and Cheese</h2>
            <p>Hearty flavor of meatballs on tomato sauce, covered with mozzarella and cheddar cheese.</p>
            <table>
              <tr>
                <th>Small</th>
                <th>Medium</th>
                <th>Large</th>
                <th>X-Large</th>
              </tr>
              <tr>
                <td>$8.30</td>
                <td>$13.90</td>
                <td>$17.25</td>
                <td>$20.75</td>
              </tr>
            </table>
            <br/><br/>

            <h2 className="pizza-headers">Pepperoni Express</h2>
            <p>Double pepperoni with a layer of extra cheese in-between.</p>
            <table>
              <tr>
                <th>Small</th>
                <th>Medium</th>
                <th>Large</th>
                <th>X-Large</th>
              </tr>
              <tr>
                <td>$7.95</td>
                <td>$13.60</td>
                <td>$16.95</td>
                <td>$20.45</td>
              </tr>
            </table>
            <br/><br/>

            <h2 className="pizza-headers">Bacon Cheeseburger</h2>
            <p>A thick crust covered with 1000 Island dressing with mozzarella, beef, and bacon baked on. Garnished with lettuce, cheddar, tomato, onion, and pickle.</p>
            <table>
              <tr>
                <th>Small</th>
                <th>Medium</th>
                <th>Large</th>
                <th>X-Large</th>
              </tr>
              <tr>
                <td>$8.30</td>
                <td>$13.90</td>
                <td>$17.25</td>
                <td>$20.75</td>
              </tr>
            </table>
            <br/><br/>

            <h2 className="pizza-headers">Deluxe Veggie</h2>
            <p>Your choice of crust covered with garlic sauce, spinach, and mozzarella. Then topped with mushrooms, black olives, tomato, green olives, sautéed bell peppers, sautéed onions, and artichoke hearts.</p>
            <table>
              <tr>
                <th>Small</th>
                <th>Medium</th>
                <th>Large</th>
                <th>X-Large</th>
              </tr>
              <tr>
                <td>$8.50</td>
                <td>$14.10</td>
                <td>$17.45</td>
                <td>$20.95</td>
              </tr>
            </table>
            <br/><br/>
          </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>





        <h1 style={{width: '100%', textAlign: 'center'}}>Want to create your own pizza?</h1>
        <div className="row">
          <div className="column">
            <h2 className="pizza-headers">1) Choose your favorite crust</h2>
            <h3>Crispy Thin Crust: <span style={{fontSize: '75%', color: 'rgba(136, 59, 33, 0.384)'}}>most popular</span></h3>
            <p>Our most popular crust, this tender, cracker-like crust works well even when loaded with lots of toppings!</p>

            <h3>Pan Style:</h3>
            <p>A thicker, bread-like crust that is filling and holds up well with heavy toppings. Available while supplies last.</p>

            <h3>Hand Tossed: <span style={{fontSize: '75%', color: 'rgba(136, 59, 33, 0.384)'}}>available in Medium and Large only</span></h3>
            <p>A light, tender crust that works best with lighter toppings. Available while supplies last!</p>
          </div>
        </div>

        <h2 className="pizza-headers">2) Your choice of toppings</h2>
        <div className="row">
          <div className="four-column">
            <p>Mushroom</p>
            <p>Pineapple</p>
            <p>Japalenos</p>
            <p>Fresh Tomato</p>
          </div>
          <div className="four-column">
            <p>Black Olive</p>
            <p>Green Olive</p>
            <p>Bell Pepper</p>
            <p>Pepperoni</p>
          </div>
          <div className="four-column">
            <p>Canadian Bacon</p>
            <p>Sausage</p>
            <p>Italian Sausage</p>
            <p>Anchovy</p>
          </div>
          <div className="four-column">
            <p>Onion</p>
            <p>Beef</p>
            <p>Spinach</p>
            <p>Sun Dried Tomato</p>
          </div>
        </div>
        
        <br/>

        
        
        <Footer />
      </div>
    </div>
  );
}

export default Pizza;
