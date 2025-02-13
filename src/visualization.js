// Hard coded for now. Will need to add dynamic addition later

import "./pages/visualization.css";
import a_360 from "./images/visualization/woodkitchen360_orig.jpg";
import a from "./images/visualization/0001-1_orig.jpg";
import b from "./images/visualization/0002-1_orig.jpg";
import c from "./images/visualization/3_orig.jpg";
import d from "./images/visualization/3-2_orig.jpg";
import e from "./images/visualization/autumnporcheditjpeg_orig.jpg";
import f from "./images/visualization/bathroom0003_orig.jpg";
import g from "./images/visualization/bathroom0004-1_orig.jpg";
import h from "./images/visualization/bathroom0005-2_orig.jpg";
import i from "./images/visualization/bathroom0006-1-2_orig.jpg";
import j from "./images/visualization/camera-4_orig.jpg";
import k from "./images/visualization/camera-6_orig.jpg";
import l from "./images/visualization/visualization.jpg";
import m from "./images/visualization/woodkitchen1jpeg_orig.jpg";
import n from "./images/visualization/woodkitchen2jpeg_orig.jpg";
import o from "./images/visualization/woodkitchen3jpeg_orig.jpg";

export const visualization_img_html = `<div class="visualization-top-img">
        <p>Dreams Reimagined, Spaces Redefined</p>
      </div>`;

export const visualization_html = `
<div class="gallery">
  ${[a, b, c, d, e, f, g, h, i, j, k, l, m, n, o]
    .map(
      (src, index) => `
    <div class="portfolio-component">
      <img src="${src}" alt="Photo ${index + 1}" onclick="openLightbox('${src}')">
    </div>
  `
    )
    .join("")}
</div>
<div class="view-360">
    <p>Click image to view in VR</p>
    <div class="portfolio-component">
      <a href="https://renderstuff.com/tools/360-panorama-web-viewer-sharing/?image=https://i.ibb.co/TBPvYQf/Wood-Kitchen360.jpg&title=Kitchen">
        <img src="${a_360}" alt="360 Photo"">
      </a>
    </div>
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
