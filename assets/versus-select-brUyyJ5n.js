import{n as b}from"./index-BFrD-dMs.js";import{s as u}from"./score-characters-BGUfqHVh.js";import{readVersusOptions as h,versusSeat as c,versusControls as n,writeVersusOptions as p}from"./versus-options-xwBhH3wI.js";import{a as m,m as y,o as l}from"./versus-portraits-B7j4quTJ.js";import{c as f}from"./story-music-Di_6GyB1.js";import"./classic-art-B3yJAYvl.js";import"./story-stages-DUZBIsDW.js";import"./score-options-BLci_Fyr.js";import"./engine-DfBVmaVW.js";import"./story-config-T0OBp6-Y.js";import"./bgm-owner-nLnFvCDS.js";function j(){const o=document.querySelector("#app"),a=h(),v=new URL(""+new URL("historic-library-ke47RtuL.webp",import.meta.url).href,import.meta.url).href;document.title="対戦モード | びぶりぶ",o.innerHTML=`<section class="versus-select" aria-labelledby="versus-title">
    <img class="versus-library" src="${v}" alt="" draggable="false">
    <button type="button" class="text-button versus-back" data-screen-target="title">‹ タイトル</button>
    <h1 id="versus-title">対戦モード</h1>
    <p class="versus-intro">同じ端末で、ふたりで本棚勝負。キャラと操作を選んでください。</p>
    <div class="versus-players">
      ${m.map(s=>`<section class="versus-player" data-side="${s}" aria-label="${c[s]}の設定">
        <h2><b>${c[s]}</b><span data-chosen-name></span></h2>
        <div class="versus-cast" role="group" aria-label="キャラクター">
          ${u.map(t=>`<button type="button" data-character="${t.id}">
            <img src="${t.preview}" alt="" draggable="false"${y(t.id,s)?" data-mirrored":""}><span>${t.name}</span>
          </button>`).join("")}
        </div>
        <div class="versus-inputs" role="group" aria-label="操作タイプ">
          ${Object.entries(n).map(([t,r])=>`<button type="button" data-control="${t}">
            <span>${r.name}</span><small data-control-note>${r.movement}</small>
          </button>`).join("")}
        </div>
        <p class="versus-key-hint" aria-live="polite"></p>
      </section>`).join("")}
      <span class="versus-seal" aria-hidden="true">VS</span>
    </div>
    <button type="button" id="versus-start" class="primary versus-start">対戦をはじめる</button>
  </section>`;function d(){for(const s of m){const t=o.querySelector(`[data-side="${s}"]`),r=a[s];t.querySelector("[data-chosen-name]").textContent=u.find(e=>e.id===r.character).name,t.querySelectorAll("[data-character]").forEach(e=>{e.setAttribute("aria-pressed",String(e.dataset.character===r.character))}),t.querySelectorAll("[data-control]").forEach(e=>{const i=e.dataset.control;e.disabled=i===a[l(s)].control,e.setAttribute("aria-pressed",String(i===r.control)),e.querySelector("[data-control-note]").textContent=e.disabled?`${c[l(s)]}が使用中`:n[i].movement}),t.querySelector(".versus-key-hint").textContent=`${n[r.control].movement}　${n[r.control].actions}`}}o.addEventListener("click",s=>{const t=s.target.closest("button"),r=t?.closest("[data-side]")?.dataset.side;if(!r||!t||t.disabled)return;t.dataset.character&&(a[r].character=t.dataset.character);const e=t.dataset.control;e&&e!==a[l(r)].control&&(a[r].control=e),p(a),d()}),o.querySelector("#versus-start").addEventListener("click",()=>{p(a),b("versus-battle")}),d(),f(o,{track:"setting",id:"settings-bgm"})}export{j as mountVersusSelect};
