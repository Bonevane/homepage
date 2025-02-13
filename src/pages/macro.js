import a from "../images/macro/2023-04-20-08-02-28-20_orig.jpg";
import b from "../images/macro/20240921-162728_orig.jpg";
import c from "../images/macro/ant_orig.jpg";
import d from "../images/macro/bloom-1_orig.jpg";
import e from "../images/macro/drop-re2-3_orig.jpg";
import f from "../images/macro/dsc-0295_orig.jpg";
import g from "../images/macro/dsc-0416_orig.jpg";
import h from "../images/macro/flower-buds-re-8_orig.jpg";
import i from "../images/macro/flowers_orig.jpg";
import j from "../images/macro/kitten-re2-2_orig.jpg";
import k from "../images/macro/leaf-2-12_orig.jpg";
import l from "../images/macro/rock-texture_orig.jpg";
import m from "../images/macro/strawberry_orig.jpg";

export const macro_img_html = `
  <div class="generic-top-img">
    <p>Danish Munib</p>
    <p>Macro Photography</p>
  </div>
`;

export const macro_html = `
  <div class="gallery">
    ${[a, b, c, d, e, f, g, h, i, j, k, l, m]
      .map(
        (src, index) => `
          <div class="portfolio-component">
            <img 
              src="${src}" 
              alt="Macro Photo ${index + 1}" 
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