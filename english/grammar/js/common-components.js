// ブラウザがHTMLを解析して「自動修正」を行う前に実行する
(function() {
    // ページ全体のHTML（テキスト）を取得
    let bodyHtml = document.body.innerHTML;

    // 1. 文法説明開始タグを、PHPの中身と同じ「生文字列」に置換
    // 正規表現を使って <grammar-start></grammar-start> を探します
    bodyHtml = bodyHtml.replace(/<grammar-start><\/grammar-start>/g, `
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#grammar-explanation">文法説明</button>
        <div class="collapse show" id="grammar-explanation">
    `);

    // 2. 文法説明終了タグを、単なる「</div>」に置換
    bodyHtml = bodyHtml.replace(/<grammar-end><\/grammar-end>/g, '</div>');

    // 3. 閉じるボタン
    bodyHtml = bodyHtml.replace(/<close-btn><\/close-btn>/g, `
        <div class="close" onclick="window.close()">閉じる</div>
    `);

    // 4. 英文削除ボタン（lettercut.jsとの互換性を保つためボタンを直接配置）
    bodyHtml = bodyHtml.replace(/<delete-btn><\/delete-btn>/g, `
        <button class="btn btn-success" type="button" onclick="cleanText(this)">英文削除</button>
    `);

    // 置換した「完成後の文字列」をbodyに戻す
    document.body.innerHTML = bodyHtml;
})();