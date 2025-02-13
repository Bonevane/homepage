import "./pages/contact.css";
import instagram_logo from "./images/misc/instagram-logo-white.svg";
import linkedin_logo from "./images/misc/linkedin-logo-white.svg";

export const contact_img_html = `<div class="contact-top-img">
        <h1>CONTACT</h1>
        <div class="contact-text">
          <p>
            danishmunibcontact@gmail.com
          </p>
          <p>
            ​+92 335 9447085
          </p>
          <p>
            Rawalpindi, Pakistan
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
      </div>`;

export const contact_html = `
<div class="contact-text"><p>For all pricing and booking inquiries, please fill out the form below. Include as much relevant information as possible. I look forward to hearing from you.</p></div>
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
`;
