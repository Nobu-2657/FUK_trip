document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 0;

    function showPage(page) {
        const flipbook = document.getElementById('flipbook');
        const totalPages = document.querySelectorAll('.page').length;
        
        // ページの範囲を制限
        if (page < 0) {
            currentPage = 0;
        } else if (page >= totalPages) {
            currentPage = totalPages - 1;
        } else {
            currentPage = page;
        }

        // スライドの位置を設定
        flipbook.style.transform = `translateX(-${currentPage * 100}%)`;
    }

    // 初期表示
    showPage(currentPage);

    // キーボード操作でページを切り替え
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            showPage(currentPage + 1);
        } else if (event.key === 'ArrowLeft') {
            showPage(currentPage - 1);
        }
    });
});
