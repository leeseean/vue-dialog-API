(() => {
    const horizontalImgs = Array(41).fill(0).map((item, index) => {
        return `./img/masonry/horizontal/h${index+1}.jpg`;
    });
    const verticalImgs = Array(9).fill(0).map((item, index) => {
        return `./img/masonry/vertical/v${index+1}.jpg`;
    });
    const masonryItemsHtml = [
        ...horizontalImgs,
        ...verticalImgs
    ].map((item, index) => {
        let plusClass;
        if (item.indexOf('horizontal') !== -1) {
            plusClass = 'horizontal';
        } else if (item.indexOf('vertical') !== -1) {
            plusClass = 'vertical';
        }
        return `
            <div class="js-masonry-item item" url="${item}">
                <div class="item__content ${plusClass}" style="background:url(${item}) no-repeat top center;background-size:cover">
                    <div class="zoom-in"></div>
                </div>
            </div>
        `;
    }).join('');
    $('.js-masonry').html(masonryItemsHtml);
    $('.js-masonry-item').off('click').on('click', function() {
        const src = $(this).attr('url');
        dialog({
            content:`
                <img src="${src}">
            `,
            quickClose: true
        }).showModal();
    });
})();