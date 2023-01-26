import "./style.css"

import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";
import gitHub from "./../../img/icons/gitHub.svg";


const Footer = () => {
    return ( 
        <footer className="footer">
          <div className="container">
              <div className="footer__wrapper">
                  <ul className="social">
                      <li className="social__item"><a href="https://vk.com/timkmit"><img src={vk} alt="Link" /></a></li>
                      <li className="social__item"><a href="https://www.instagram.com/t1mkm1t/"><img src={instagram} alt="Link" /></a></li>
                      <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
                      <li className="social__item"><a href="https://github.com/timkmit"><img src={gitHub} alt="Link" /></a></li>
                  </ul>
                  <div className="copyright">
                      <p>© 2023 </p>
                  </div>
              </div>
          </div>
      </footer>
     );
}
 
export default Footer;