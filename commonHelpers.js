import{i as u}from"./assets/vendor-2d1813ad.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const a=document.querySelector(".footer-form");a.addEventListener("submit",c);const s=document.querySelector(".footer-input");function c(n){n.preventDefault();const o=s.value.trim();return o||o.checkValidity()?(d(),u.info({animateInside:!0,position:"topCenter",title:"Info",message:"You successfully subscribed on our updates! Thank you"})):u.warning({animateInside:!0,position:"topCenter",title:"Info",message:"You put incorrect value of email!"})}setTimeout(c,7e3);function d(){s.value=""}(()=>{const n={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};n.openMenuBtn.addEventListener("click",o),n.closeMenuBtn.addEventListener("click",o);function o(){n.menu.classList.toggle("is-open")}})();
//# sourceMappingURL=commonHelpers.js.map
