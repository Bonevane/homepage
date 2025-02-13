import a from "../../images/architecture/at-cafe/at-cafe-front.jpg";
import b from "../../images/architecture/at-cafe/dsc-0274_1.jpg";
import c from "../../images/architecture/at-cafe/dsc-0278_1.jpg";
import d from "../../images/architecture/at-cafe/dsc-0281_1.jpg";
import e from "../../images/architecture/at-cafe/dsc-0289_1.jpg";
import f from "../../images/architecture/at-cafe/dsc-0299_2.jpg";
import g from "../../images/architecture/at-cafe/dsc-0316_1.jpg";
import h from "../../images/architecture/at-cafe/dsc-0322_1.jpg";
import i from "../../images/architecture/at-cafe/dsc-0327_1.jpg";
import j from "../../images/architecture/at-cafe/dsc-0341_1.jpg";
import k from "../../images/architecture/at-cafe/dsc-0349_1.jpg";
import l from "../../images/architecture/at-cafe/dsc-0374_1.jpg";
import m from "../../images/architecture/at-cafe/dsc-0378_2.jpg";
import n from "../../images/architecture/at-cafe/dsc-0381_2.jpg";
import o from "../../images/architecture/at-cafe/dsc-0391_2.jpg";
import p from "../../images/architecture/at-cafe/dsc-0398_2.jpg";
import q from "../../images/architecture/at-cafe/dsc-0405_2.jpg";
import r from "../../images/architecture/at-cafe/dsc-0427_1.jpg";
import s from "../../images/architecture/at-cafe/dsc-0428_1.jpg";
import t from "../../images/architecture/at-cafe/dsc-0434_2.jpg";

export const at_cafe_img_html = `
  <div class="generic-top-img" style="background-color: rgba(0, 0, 0, 0.2);">
    <p>AT Café</p>
    <p>Architecture</p>
  </div>
`;

export const at_cafe_html = `
  <div class="gallery">
    ${[a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t]
      .map(
        (src, index) => `
          <div class="portfolio-component">
            <img 
              src="${src}" 
              alt="AT Café Photo ${index + 1}" 
              onclick="openLightbox('${src}')"
            >
          </div>
        `
      )
      .join("")}
  </div>

  <!-- Lightbox -->
  <div id="lightbox" class="lightbox">
    <span class="close" onclick="closeLightbox()">&times;</span>
    <img class="lightbox-content" id="lightbox-img">
  </div>
`;
