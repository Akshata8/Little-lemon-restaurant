import style from "./Nav.module.css";
import { Link } from "react-router-dom";


const Nav = () => {


  return (

    <header>

      <nav className={style.Nav}>


        <img 
          src="/images/Logo.png" 
          alt="logo" 
          className={style.Logo} 
        />


        <ul className={style.NavLinks}>


          <li>
            <Link to="/">
              Home
            </Link>
          </li>


          <li>
            <Link to="/about">
              About
            </Link>
          </li>


          <li>
            <Link to="/menu">
              Menu
            </Link>
          </li>


          <li>
            <Link to="/reservations">
              Reservations
            </Link>
          </li>


          <li>
            <Link to="/order-online">
              Order Online
            </Link>
          </li>


          {/* <li>
            <Link to="/login">
              Login
            </Link>
          </li> */}


        </ul>


      </nav>


    </header>

  );

};


export default Nav;