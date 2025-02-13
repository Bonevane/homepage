import a from "../images/coverage/dsc-0072_orig.jpg";
import b from "../images/coverage/dsc-0074_orig.jpg";
import c from "../images/coverage/dsc-0082_orig.jpg";
import d from "../images/coverage/dsc-0085_orig.jpg";
import e from "../images/coverage/dsc-0104_orig.jpg";
import f from "../images/coverage/dsc-0122_orig.jpg";
import g from "../images/coverage/dsc-0140_orig.jpg";
import h from "../images/coverage/dsc-0155_orig.jpg";
import i from "../images/coverage/dsc-0183_orig.jpg";
import j from "../images/coverage/dsc-0204_orig.jpg";
import k from "../images/coverage/dsc-0207_orig.jpg";
import l from "../images/coverage/dsc-0245_orig.jpg";
import m from "../images/coverage/dsc-0251_orig.jpg";
import n from "../images/coverage/dsc-0262_orig.jpg";
import o from "../images/coverage/dsc-0265_orig.jpg";
import p from "../images/coverage/dsc-0513_orig.jpg";
import q from "../images/coverage/dsc-0521_orig.jpg";
import r from "../images/coverage/dsc-0544_orig.jpg";
import s from "../images/coverage/dsc-0549_orig.jpg";
import t from "../images/coverage/img-20230830-122351_orig.jpg";

export const coverage_img_html = `
  <div class="generic-top-img">
    <p>Danish Munib</p>
    <p>Coverage Photography</p>
  </div>
`;

export const coverage_html = `
  <div class="gallery">
    ${[a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t]
      .map(
        (src, index) => `
          <div class="portfolio-component">
            <img 
              src="${src}" 
              alt="Coverage Photo ${index + 1}" 
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

window.openLightbox = function openLightbox(imageSrc) {
  document.getElementById("lightbox-img").src = imageSrc;
  document.getElementById("lightbox").style.display = "block";
};

window.closeLightbox = function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
};
