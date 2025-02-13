import a from "../../images/architecture/personal/502blocks_3.jpg";
import b from "../../images/architecture/personal/2023-09-26-11-13-42_1.jpg";
import c from "../../images/architecture/personal/2023-10-10-09-13-07-1_1.jpg";
import d from "../../images/architecture/personal/2023-10-17-17-28-54_1.jpg";
import e from "../../images/architecture/personal/2023-11-10-16-59-52-1_orig.jpg";
import f from "../../images/architecture/personal/20230715-184715_orig.jpg";
import g from "../../images/architecture/personal/bridge-2-21_3.jpg";
import h from "../../images/architecture/personal/dsc-0112_orig.png";
import i from "../../images/architecture/personal/hex-topaz-enhance-4_3.jpg";
import j from "../../images/architecture/personal/leading-lines-2_4.jpg";
import k from "../../images/architecture/personal/light-peak-door_3.jpg";
import l from "../../images/architecture/personal/light-topaz-enhance-1_6.jpg";
import m from "../../images/architecture/personal/metro_2.jpg";
import n from "../../images/architecture/personal/personal-front.jpg";
import o from "../../images/architecture/personal/unfulfilled-dreams-color-topaz-enhance-sharpen-2_3.jpg";

export const personal_img_html = `
  <div class="generic-top-img" style="background-color: rgba(0, 0, 0, 0.2);">
    <p>Personal</p>
    <p>Architecture</p>
  </div>
`;

export const personal_html = `
  <div class="gallery">
    ${[a, b, c, d, e, f, g, h, i, j, k, l, m, n, o]
      .map(
        (src, index) => `
          <div class="portfolio-component">
            <img 
              src="${src}" 
              alt="Kickstart Café Photo ${index + 1}" 
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
