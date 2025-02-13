import personal from "../images/architecture/personal/personal-front.jpg";
import em_en from "../images/architecture/em-en/em-en-front.jpg";
import at_cafe from "../images/architecture/at-cafe/at-cafe-front.jpg";
import kickstart from "../images/architecture/kickstart/kickstart-front.jpg";

export const architecture_img_html = `<div class="generic-top-img">
        <p>Danish Munib</p>
        <p>Architecture Photography</p>
      </div>`;

export const architecture_html = `
<div class="architecture-content">
        <div class="architecture-component" id="at-link">
          <div><img src="${at_cafe}" alt="" /></div>
          <p><strong>AT Café</strong></p>
          <p>Islamabad, 2023</p>
        </div>
        <div class="architecture-component" id="em-link">
          <div><img src="${em_en}" alt="" /></div>
          <p><strong>EM EN Café</strong></p>
          <p>Islamabad, 2023</p>
        </div>
        <div class="architecture-component" id="kickstart-link">
          <div><img src="${kickstart}" alt="" /></div>
          <p><strong>Kickstart Coworking</strong></p>
          <p>Islamabad, 2023</p>
        </div>
        <div class="architecture-component" id="personal-link">
          <div><img src="${personal}" alt="" /></div>
          <p><strong>Personal</strong></p>
        </div>
      </div>
`;
