import logo from './images/Star 3.png';
import star from './images/Star 2.png';
import button from './images/button1.png';
import heroimage from './images/Hero Image.png';
import burger from './images/Cheeseburger.png';
import bottom from './images/image2.png';
import security from './images/security.png';
import autobill from './images/autobill.png';
import credit1 from './images/credit1.png';
import credit2 from './images/credit2.png';
import house from './images/house.png';
import blackarrow from './images/black arrow.png';
import star4 from './images/Star 4.png';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import mobile from './images/mobile.png';
import william from './images/william.png';
import rebecca from './images/rebecca.png';
import arrow1 from './images/arrow1.png';
import arrow2 from './images/arrow2.png';
import vector from './images/Vector.png';
import './App.css';

function App() {
  return (
  <>
  <body>
    <div className="main">
    <div className="toplogo">
      <img src={logo} className="logo1" alt="star1"/>
      <h2>BANQUEE</h2>
      <div className="burger1">
        <img src={burger} className="cburger" alt="cburger"/>
      </div>
    </div>
      <div className="logocontaints">
        <div className="writtencont">
          <div className="star">
            <img src={star} className="star1" alt="star1"/>
          </div>
          <h1>EASY WAY TO BANKING</h1>
          <h2>We give you both the foundation and flexibility to build and grow digital capabilities and deliver customer experiences.</h2>
          <button className="getstart">
            Get Started
            <img src={button} className="startbutton" alt="button1"/>
          </button>
        </div>
      </div>
    </div>
    <div>
          <img src={heroimage} className="heroimage" alt="heroimage"/>
    </div>
    <div className="bottomclass" alt="bottom class">
      <img src={bottom} className="bottomimage" alt="bottomimage"/>
    </div>
    <div className="feature">
      <h2>all features you need in one plaCE</h2>
    </div>
    <div className="highilights">
      <div className="uppersection">
        <div className="secure">
          <img src={security} className="securitydiv" alt="securitydiv"/>
          <h2>Secure Online Banking</h2>
        </div>
        <div className="bill">
          <img src={autobill} className="billdiv" alt="billdiv"/>
          <h2>Automatic Bill Payment</h2>
        </div>
      </div>
      <div className="lowersection">
        <div className="fees">
          <img src={credit1} className="feesdiv" alt="feesdiv"/>
          <h2>No Hidden Fees</h2>
        </div>
        <div className="payments">
          <img src={credit2} className="paymentsdiv" alt="paymentsdiv"/>
          <h2>Card Payments Anytime</h2>
        </div>
      </div>
    </div>
    <div className="digital">
      <div className="housesection">
        <img src={house} className="housediv" alt="housediv"/>
      </div>
      <div className="digitalcontent">
        <h1>Go digital now!</h1>
        <h4>Our digital platform allows you to access your money from anywhere, anytime. Which our innovative security features, and first-in-class service, we combine the best of traditional banking with a modern convenience of digital banking today</h4>
        <button className="getstart2">
            Get Started
            <img src={blackarrow} className="startbutton" alt="button1"/>
          </button>
      </div>
    </div>
    <div className="bussiness">
      <h2>designed for businesses of all sizes</h2>
    </div>
    <div className="images">
      <div className="image1">
        <img src={star4} className="stardiv" alt="stardiv"/>
        <img src={img1} className="img1div" alt="img1div"/>
        <h2>for small businesses</h2>
      </div>
      <div className="image2">
        <img src={img2} className="img2div" alt="img2div"/>
        <h2>for startups</h2>
      </div>
      <div className="image3">
        <img src={img3} className="img3div" alt="img3div"/>
        <h2>for enterprises</h2>
      </div>
    </div>
    <div className="banking">
      <h2>We take banking personally</h2>
    </div>
    <div className="mob">
      <div className="mobcontent">
        <div className="save">
          <h2>SAVE</h2>
          <h4>We’re using technology to solve that by automating saving. You set an amount to save and we takes care of the rest, prompt interest payout included.</h4>
        </div>
        <div className="spend">
          <h2>SPEND</h2>
          <h4>We give you more than one way to pay easily, including a widely accepted debit card issued in partnership with Visa, quick web payments direct from your account.</h4>
        </div>
        <div className="send">
        <h2>SEND</h2>
        <h4>From international transfers to on-the-spot payments at market stalls, we’ve simplified sending money so you don’t need to think too much about it.</h4>
        </div>
      </div>
      <div className="mobimage">
        <img src={mobile} className="mobdiv" alt="mobdiv"/>
      </div>
    </div>
    <div className="trust">trusted by People all over the world</div>
    <div className="comments">
      <div className="comimage">
        <img src={william} className="william" alt="william"/>
        <img src={rebecca} className="rebecca" alt="rebecca"/>
      </div>
      <div className="arrow">
        <buttom className="arrowimg">
          <img src={arrow1} className="arrow1div" alt="arrow1div"/>
          <img src={arrow2} className="arrow2div" alt="arrow2div"/>
        </buttom>
      </div>
    </div>
    <div className="quest">
      <h2>frequently asked question</h2>
    </div>
    <div className="question">
      <div className="question1">
        <h2>How much would it require to open an account ?</h2>
        <img src={vector} className="vectorimage" alt="vectorimage"/>
      </div>
      <div className="question2">
        <h2>Is there a minimum operational cost ?</h2>
        <img src={vector} className="vectorimage" alt="vectorimage"/>
      </div>
      <div className="question3">
        <h2>where can i use my debit cards ?</h2>
        <img src={vector} className="vectorimage" alt="vectorimage"/>
      </div>
      <div className="question4">
        <h2>how much do i get as interest on savings ?</h2>
        <img src={vector} className="vectorimage" alt="vectorimage"/>
      </div>
    </div>
    <div className="subscription">
      <div className="subcontent">
        <h2>subscribe to our newsletter for a 10% bonus on transactions</h2>
        <img src={logo} className="subimg" alt="subimg"/>
      </div>
      <div class="buttonIn">
        <input type="email" id="email" name="email" placeholder="Your email address"/>
        <button id="clear" class="mail">SUBSCRIBE</button>
      </div>
    </div>
  </body>
  </>
  );
}

export default App;
