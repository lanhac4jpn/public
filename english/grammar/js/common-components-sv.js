// 1. 文法説明の「開始」部品
class GrammarStart extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#grammar-explanation">文法説明</button>
      <div class="collapse show" id="grammar-explanation">
    `;
  }
}
customElements.define('grammar-start', GrammarStart);

// 2. 文法説明の「終了」部品
class GrammarEnd extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `</div>`;
  }
}
customElements.define('grammar-end', GrammarEnd);

// 3. 閉じるボタン
class CloseBtn extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="close" onclick="window.close()">閉じる</div>`;
  }
}
customElements.define('close-btn', CloseBtn);

// 4. 英文削除ボタン
class DeleteBtn extends HTMLElement {
  connectedCallback() {
    // onclick="cleanText(this)" を onclick="cleanText(this.parentElement)" に変更します
    this.innerHTML = `<button class="btn btn-success" type="button" onclick="cleanText(this.parentElement)">英文削除</button>`;
  }
}
customElements.define('delete-btn', DeleteBtn);
