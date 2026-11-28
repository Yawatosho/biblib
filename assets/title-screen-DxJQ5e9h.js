import{c as a}from"./index-DgL9jjzv.js";const s=new URL(""+new URL("title-MhAHD50_.webp",import.meta.url).href,import.meta.url).href,i=new URL(""+new URL("logo-D1aO3tEq.webp",import.meta.url).href,import.meta.url).href;function c(){document.title="びぶりぶ",document.body.classList.add("title-page"),document.querySelector("#viewport").classList.add("title-viewport");const t=document.querySelector("#app");t.classList.add("title-screen"),t.dataset.screen="title";const e=a();t.innerHTML=`
    <img class="title-art" src="${s}" alt="" fetchpriority="high" draggable="false">
    <h1 class="title-logo"><img src="${i}" alt="BibLib びぶりぶ" draggable="false"><span aria-hidden="true">びぶりぶ</span></h1>
    <nav class="title-menu" aria-label="メインメニュー">
      <button type="button" class="text-button title-choice" id="title-story" data-screen-target="story-intro" data-story-stage="1">
        <span class="title-choice-mark" aria-hidden="true">✦</span>
        <span class="title-choice-copy"><strong>ストーリーモード</strong></span>
        <span class="title-choice-arrow" aria-hidden="true">›</span>
      </button>
      <button type="button" class="text-button title-choice" id="title-versus" data-screen-target="versus-select"${e?"":" disabled"}>
        <span class="title-choice-mark" aria-hidden="true">⚑</span>
        <span class="title-choice-copy"><strong>対戦モード</strong>${e?"":"<small>PCで遊べます</small>"}</span>
        <span class="title-choice-arrow" aria-hidden="true">›</span>
      </button>
      <button type="button" class="text-button title-choice" id="title-classic" data-screen-target="classic-select">
        <span class="title-choice-mark" aria-hidden="true">✦</span>
        <span class="title-choice-copy"><strong>スコアアタック</strong></span>
        <span class="title-choice-arrow" aria-hidden="true">›</span>
      </button>
      <button type="button" class="text-button title-choice" id="title-gallery" data-screen-target="gallery">
        <span class="title-choice-mark" aria-hidden="true">♧</span>
        <span class="title-choice-copy"><strong>ギャラリー</strong></span>
        <span class="title-choice-arrow" aria-hidden="true">›</span>
      </button>
      <button type="button" class="text-button title-choice" id="title-manual" data-screen-target="manual">
        <span class="title-choice-mark" aria-hidden="true">▤</span>
        <span class="title-choice-copy"><strong>説明書</strong></span>
        <span class="title-choice-arrow" aria-hidden="true">›</span>
      </button>
    </nav>
    <footer class="title-credit">
      <div class="title-credit-row">
        <span>作成：やわらか図書館学</span><a href="https://yawatosho.github.io/">YAWATOSHO GAMES</a>
      </div>
      <div class="title-credit-row">
        <a href="./" data-screen-target="privacy">プライバシーポリシー</a>
        <a href="./" data-screen-target="offline">オフライン準備</a>
      </div>
    </footer>`}export{c as mountTitleScreen};
