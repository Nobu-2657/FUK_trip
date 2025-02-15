document.addEventListener('DOMContentLoaded', () => {
    const flipbook = document.getElementById('flipbook');
    let currentPage = 0;
    let startX;

    function showPage(page) {
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

    // タッチイベントの追加
    flipbook.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    flipbook.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        
        if (diff > 50) {
            showPage(currentPage + 1);
        } else if (diff < -50) {
            showPage(currentPage - 1);
        }
    });

    // ウィンドウリサイズ時の対応
    window.addEventListener('resize', () => {
        showPage(currentPage);
    });
});
