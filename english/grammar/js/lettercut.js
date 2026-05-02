    // 変換関数
    function cleanText(buttonElement) {
        // ボタンの親要素を取得
        const parentDiv = buttonElement.parentElement;
        
        // <p>タグを取得
        const textElement = parentDiv.querySelector("p");
        if (textElement) {
            // 元のテキストを取得
            let originalText = textElement.textContent;

            // 正規表現で英字と ( / ) を削除
            let cleanedText = originalText.replace(/[a-zA-Z\/\(\)/?]/g, '');

            // 結果をテキストに反映
            textElement.textContent = cleanedText;
        }

        // すべての<section>を取得
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
          const h2 = section.querySelector('h2');
          if (h2 && h2.textContent.trim() === '問題') {
            const nextElem = h2.nextElementSibling;
            if (nextElem && nextElem.tagName.toLowerCase() === 'p') {
              nextElem.textContent = '英文を作成して下さい。';
            }
          }
        });
    }
