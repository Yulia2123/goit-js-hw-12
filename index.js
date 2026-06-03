import{a as b,S as w,i}from"./assets/vendor-CIF6YjI2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const v="56116707-e9227c31c48c3a53a77242256",P="https://pixabay.com/api/";async function d(t,e){return(await b.get(P,{params:{key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),h=document.querySelector(".load-more"),S=new w(".gallery a",{captionsData:"alt",captionDelay:250});function y(t){const e=t.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img
            src="${r.webformatURL}"
            alt="${r.tags}"
            loading="lazy"
          />
          <div class="info">
            <p><b>Likes</b> ${r.likes}</p>
            <p><b>Views</b> ${r.views}</p>
            <p><b>Comments</b> ${r.comments}</p>
            <p><b>Downloads</b> ${r.downloads}</p>
          </div>
        </a>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",e),S.refresh()}function M(){u.innerHTML=""}function m(){f.classList.remove("hidden")}function p(){f.classList.add("hidden")}function q(){h.classList.remove("hidden")}function g(){h.classList.add("hidden")}const B=document.querySelector(".form"),$=document.querySelector(".load-more");let a="",s=1;const L=15;B.addEventListener("submit",E);$.addEventListener("click",O);async function E(t){if(t.preventDefault(),a=t.currentTarget.elements["search-text"].value.trim(),!!a){s=1,M(),g(),m();try{const e=await d(a,s);if(e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(e.hits);const r=Math.ceil(e.totalHits/L);s<r?q():i.info({message:"We're sorry, but you've reached the end of search results."})}catch(e){console.log(e)}finally{p()}}}async function O(){s+=1,m();try{const t=await d(a,s);y(t.hits);const e=Math.ceil(t.totalHits/L);s>=e&&(g(),i.info({message:"We're sorry, but you've reached the end of search results."})),x()}catch(t){console.log(t)}finally{p()}}function x(){const t=document.querySelector(".gallery-item");if(!t)return;const e=t.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
