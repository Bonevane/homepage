import "./pages/home.css";
import home_dmunib from "./images/home/dmunib.jpg";
import home_photography from "./images/home/photography.jpg";
import home_visualization from "./images/home/visualization.jpg";
import instagram_logo from "./images/misc/instagram-logo.svg";
import linkedin_logo from "./images/misc/linkedin-logo.svg";

export const home_img_html =
  '<p class="top-img-text">West Indian Lantana, 2021</p>';

export const home_html = `<div class="main-content">
        <div class="main-left">
          <p class="about-me">ABOUT ME</p>
          <p class="name">Danish Munib</p>
          <div class="about-text">
            <p>
              Born, raised and based in Pakistan, Danish Munib photographs
              architecture, landscapes and portrait/macro images.
            </p>
            <p>
              His fascination with all things architecture has also allowed him
              to work in architecture visualization.
            </p>
            <p>
              When he's not capturing images or crafting scenes, he tries to
              focus on his studies as a software engineer.
            </p>
          </div>
          <div class="socials-btns">
            <button>
              <a href="https://www.instagram.com/danish.munib/"
                ><img src="${instagram_logo}" alt="" width="20px"
              /></a>
            </button>
            <button>
              <a href="https://www.linkedin.com/in/danish-munib/"
                ><img src="${linkedin_logo}" alt="" width="20px"
              /></a>
            </button>
          </div>
        </div>
        <div class="main-right">
          <img src="${home_dmunib}" alt="" width="600rem" />
          <p class="quote">
            ​"The latest image in the very short series of good photos of me, so
            you'll find me using it everywhere"
          </p>
        </div>
      </div>
      <div class="portfolio">
        <h2 class="portfolio-head">VIEW PORTFOLIOS</h2>
        <div class="portfolio-content">
          <div class="portfolio-component" id="photography-link">
            <div><img src="${home_photography}" alt="" /></div>
            <p>Photography</p>
          </div>
          <div class="portfolio-component" id="visualization-link">
            <div><img src="${home_visualization}" alt="" /></div>
            <p>Visualization</p>
          </div>
        </div>
      </div>
      <div class="contact">
        <h2>CONTACT</h2>
        <div class="form-container">
          <p class="required-text">
            <span class="required">*</span> INDICATES REQUIRED FIELD
          </p>

          <form>
            <label for="first-name">NAME <span class="required">*</span></label>
            <div class="name-fields">
              <input type="text" id="first-name" placeholder="First" required />
              <input type="text" id="last-name" placeholder="Last" required />
            </div>

            <label for="email">EMAIL <span class="required">*</span></label>
            <input type="email" id="email" required />

            <label for="comment">COMMENT <span class="required">*</span></label>
            <textarea id="comment" rows="5" required></textarea>

            <button type="submit" class="submit-button">SUBMIT</button>
          </form>
        </div>
      </div>`;
