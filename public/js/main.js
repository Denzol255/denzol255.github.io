!function(){var t={831:function(t){t.exports=function(t,e){const n=document.querySelector(e);document.querySelector(t)||n.insertAdjacentHTML("beforeend",'\t<div class="auto__form form-owner">\n\t\t\t\t\t<form action="#" class="form-owner__form">\n\t\t\t\t\t\t<div class="form-owner__item">\n\t\t\t\t\t\t\t<label for="name-input" class="form-owner__label">\n\t\t\t\t\t\t\t\tName:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type="text" id="name-input" placeholder="Change name..." class="form-owner__input">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="form-owner__item">\n\t\t\t\t\t\t\t<label for="owner-input" class="form-owner__label">\n\t\t\t\t\t\t\t\tOwner:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type="text" id="owner-input" placeholder="Change owner..." class="form-owner__input">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="form-owner__item">\n\t\t\t\t\t\t\t<label for="email-input" class="form-owner__label">\n\t\t\t\t\t\t\t\tEmail:\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type="email" id="email-input" placeholder="Change email..." class="form-owner__input">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button type="button" class="form-owner__button">Submit</button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>')}},481:function(t){t.exports=function(t){const e=document.querySelector(".auto__wrapper"),n=t.Item.Title.toLowerCase(),a=t.Item.Description,o=t.Item.KeyValues;e.insertAdjacentHTML("afterbegin",`\n  <div class="auto__image">\n    <img src="./img/2022-kia-sportage-front-quarter.jpg" alt="kia sportage">\n  </div>\n  <div class="auto__info">\n    <h1 class="auto__title">${n}</h1>\n    <p class="auto__description">${a}</p>\n  </div>\n  <div class="auto__features features">\n    <h2 class="features__title">Key features</h2>\n    <ul class="features__cards">\n      ${(t=>{let e="";for(const n in t)e+=`\n      <li class="features__card">\n        <span class="features__name">${n}</span>\n        <span>-</span>\n        <span class="features__value">${t[n]}</span>\n      </li>`;return e})(o)}\n    </ul>\n  </div>\n  <div class="auto__owner owner">\n    <div className="owner__main">\n      <h2 class="owner__title">Owner</h2>\n      <div class="owner__info">\n        <div class="owner__name">\n          <span class="owner__text">Name:</span>\n          <span class="owner__data owner__data_name">${t.Garage.Name}</span>\n        </div>\n        <div class="owner__owner">\n          <span class="owner__text">Owner:</span>\n          <span class="owner__data owner__data_owner">\n            ${t.Garage.Owner}\n          </span>\n        </div>\n        <div className="owner__email">\n          <span class="owner__text">Email:</span>\n          <a href="mailto:${t.Garage.Email}" class="owner__data owner__data_email">\n            ${t.Garage.Email}\n          </a>\n        </div>\n      </div>\n    </div>\n    <button class="owner__edit">Edit</button>\n  </div>\n  `)}}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}!function(){const t=n(831),e=n(481),a={};fetch("http://109.236.74.74:9900/getdata").then((t=>t.json())).then((t=>e(t))).catch((t=>console.error(t))),document.body.addEventListener("click",(e=>{const n=e.target;if(n.matches(".owner__edit")&&(t(".form-owner",".auto__wrapper"),document.querySelector(".form-owner").scrollIntoView({behavior:"smooth"})),n.matches(".form-owner__button")){for(let t in a){const e=document.querySelector(`.owner__data_${t}`);e.textContent=a[t],"email"===t&&(e.href=a[t]),e.classList.add("changed"),setTimeout((()=>e.classList.remove("changed")),1e3)}document.querySelector("#name-input").value="",document.querySelector("#owner-input").value="",document.querySelector("#email-input").value=""}})),document.body.addEventListener("change",(t=>{const e=t.target;if(e.matches("#name-input")||e.matches("#owner-input")||e.matches("#email-input")){const t=e.id.split("-")[0];a[t]=e.value}}))}()}();