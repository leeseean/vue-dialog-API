(() => {
    const _obj = {
        init() {
            this.initMasonry();
            this.initRightFixedPosition();
        },
        initMasonry() {
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
                    mask: true,
                    content:`
                        <img src="${src}">
                    `,
                }).show();
            });
        },
        initRightFixedPosition() {
            const screenWidth = window.screen.width;
            let rightFixedRight = (screenWidth - 1240)/2 - $('.js-right-fixed')[0].offsetWidth - 80;
            rightFixedRight = rightFixedRight < 0 ? 0 : rightFixedRight;
            $('.js-right-fixed').css({
                right: rightFixedRight
            });
        },
        initScrollBar() {
            
        }
    };
    

    _obj.init();

    function dialog(config) {
        const content = `
            <div class="ui-dialog">
                <div class="ui-dialog-close">x</div>
                ${config.content ? config.content: ''}
            </div>
        `;
        return {
            show() {
                if (config.mask) {
                    $('body').append(`<div class="mask"></div>`);
                }
                $('body').append(content);
                $('.ui-dialog-close').off('click').on('click', ()=> {
                    $('.mask').hide().remove();
                    $('.ui-dialog').hide().remove();
                });
            }
        };
    }
})();
