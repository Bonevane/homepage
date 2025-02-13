import a from "../../images/architecture/kickstart/kickstart-front.jpg";
import b from "../../images/architecture/kickstart/2023-07-23-16-36-53_orig.jpg";
import c from "../../images/architecture/kickstart/2023-07-23-16-52-19_orig.jpg";
import d from "../../images/architecture/kickstart/2023-07-23-16-53-04_orig.jpg";

export const kickstart_img_html = `
  <div class="generic-top-img" style="background-color: rgba(0, 0, 0, 0.2);">
    <p>Kickstart Café</p>
    <p>Architecture</p>
  </div>
`;

export const kickstart_html = `
  <div class="gallery">
    ${[d, a, c, b]
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
