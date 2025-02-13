import a from "../images/landscape/skysilk-2-topaz-denoise-sharpen-14_orig.jpg";
import b from "../images/landscape/biker-ogfinal-19_orig.jpg";
import c from "../images/landscape/20240921-152521-enhanced-rd_orig.jpg";
import d from "../images/landscape/20230716-072215_orig.jpg";
import e from "../images/landscape/alpenglow-landscape-23_orig.jpg";
import f from "../images/landscape/20240921-134900-hdr_orig.jpg";
import g from "../images/landscape/wheat-field-photoshop-topaz-denoise-enhance-sharpen-17_orig.jpg";
import h from "../images/landscape/20240921-173244-enhanced-sr_orig.jpg";
import i from "../images/landscape/light-peak-door-1_orig.jpg";
import j from "../images/landscape/20230715-171454-1_orig.jpg";
import k from "../images/landscape/img-20240525-161121-136_orig.jpg";
import l from "../images/landscape/valley_orig.jpg";
import m from "../images/landscape/2024-02-20-16-16-21-resize_orig.jpg";
import n from "../images/landscape/20240921-180248-hdr_orig.jpg";
import o from "../images/landscape/epictrail3-re-riverside-re-9_orig.jpg";
import p from "../images/landscape/20240820-130047-2_orig.jpg";
import q from "../images/landscape/papa-trail5-re-re-soft-2-10_orig.jpg";
import r from "../images/landscape/20240921-155423-enhanced-rd_orig.jpg";

export const landscape_img_html = `<div class="generic-top-img">
        <p>Danish Munib</p>
        <p>Landscape Photography</p>
      </div>`;

export const landscape_html = `
  <div class="gallery">
    ${[a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r]
      .map(
        (src, index) => `
          <div class="portfolio-component">
            <img 
              src="${src}" 
              alt="Landscape Photo ${index + 1}" 
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