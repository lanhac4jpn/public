document.addEventListener('DOMContentLoaded', function () {
    // 挿入先コードを取得
    const targetElements = document.querySelectorAll('.btn.btn-success');

    if (targetElements.length > 0) {
        targetElements.forEach(targetElement => {
            // 挿入するコードを作成
            const newElement = document.createElement('div');
            newElement.className = 'answer-area';

            // 挿入先コードの上に挿入
            targetElement.insertAdjacentElement('beforebegin', newElement);
        });
    } else {
        console.error('Target elements not found');
    }
});
