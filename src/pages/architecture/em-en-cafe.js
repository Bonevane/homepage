import a from "../../images/architecture/em-en/em-en-front.jpg";
import b from "../../images/architecture/em-en/em-en-cafe-1_orig.jpg";
import c from "../../images/architecture/em-en/em-en-cafe-2_orig.jpg";
import d from "../../images/architecture/em-en/em-en-cafe-3_orig.jpg";
import e from "../../images/architecture/em-en/em-en-cafe-5_orig.jpg";
import f from "../../images/architecture/em-en/em-en-cafe-6_orig.jpg";

export const em_en_cafe_img_html = `
  <div class="generic-top-img" style="background-color: rgba(0, 0, 0, 0.2);">
    <p>EM-EN Café</p>
    <p>Architecture</p>
  </div>
`;

export const em_en_cafe_html = `
  <div class="gallery">
    ${[a, b, c, d, e, f]
      .map(
        (src, index) => `
          <div class="portfolio-component">
            <img 
              src="${src}" 
              alt="EM-EN Café Photo ${index + 1}" 
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
