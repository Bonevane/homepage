import "./pages/photography.css";
import landscape from "./images/photography/landscape.jpg";
import architecture from "./images/photography/architecture.jpg";
import coverage from "./images/photography/coverage.jpg";
import macro from "./images/photography/macro.jpg";

export const photography_img_html = `<div class="photography-top-img">
        <p>CAPTURE THE MOMENT</p>
        <h1>Danish Munib Photography</h1>
        <button id="contact-link"><a>BOOK</a></button>
      </div>`;

export const photography_html = `
<div class="photography-content">
        <div class="photography-component" id="landscape-link">
          <div><img src="${landscape}" alt="" /></div>
          <p>Landscape</p>
        </div>
        <div class="photography-component" id="architecture-link">
          <div><img src="${architecture}" alt="" /></div>
          <p>Architecture</p>
        </div>
        <div class="photography-component" id="coverage-link">
          <div><img src="${coverage}" alt="" /></div>
          <p>Coverage</p>
        </div>
        <div class="photography-component" id="macro-link">
          <div><img src="${macro}" alt="" /></div>
          <p>Macro</p>
        </div>
      </div>
`;
