import{a as w,S as P,i as s}from"./assets/vendor-CIF6YjI2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const S="56116707-e9227c31c48c3a53a77242256",v="https://pixabay.com/api/";async function u(r,e){return(await w.get(v,{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".load-more"),M=new P(".gallery a",{captionsData:"alt",captionDelay:250});function y(r){const e=r.map(o=>`
      <li class="gallery-item">
        <a href="${o.largeImageURL}">
          <img
            src="${o.webformatURL}"
            alt="${o.tags}"
            loading="lazy"
          />
          <div class="info">
            <p><b>Likes</b> ${o.likes}</p>
            <p><b>Views</b> ${o.views}</p>
            <p><b>Comments</b> ${o.comments}</p>
            <p><b>Downloads</b> ${o.downloads}</p>
          </div>
        </a>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",e),M.refresh()}function q(){f.innerHTML=""}function g(){h.classList.remove("hidden")}function p(){h.classList.add("hidden")}function L(){m.classList.remove("hidden")}function c(){m.classList.add("hidden")}const B=document.querySelector(".form"),$=document.querySelector(".load-more");let i="",n=1;const b=15;B.addEventListener("submit",E);$.addEventListener("click",O);async function E(r){if(r.preventDefault(),i=r.currentTarget.elements["search-text"].value.trim(),!!i){n=1,q(),c(),g();try{const e=await u(i,n);if(e.hits.length===0){c(),s.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(e.hits);const o=Math.ceil(e.totalHits/b);n<o?L():s.info({message:"We're sorry, but you've reached the end of search results."})}catch{s.error({message:"Something went wrong. Please try again later."})}finally{p()}}}async function O(){n+=1,c(),g();try{const r=await u(i,n);y(r.hits);const e=Math.ceil(r.totalHits/b);n<e?L():(c(),s.info({message:"We're sorry, but you've reached the end of search results."})),x()}catch{s.error({message:"Something went wrong. Please try again later."})}finally{p()}}function x(){const r=document.querySelector(".gallery-item");if(!r)return;const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
