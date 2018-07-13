(() => {
  const _obj = {
    init() {
      this.initMasonry();
      this.initRightFixedPosition();
      this.initGoToTop();
      this.initVideo();
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
      this.initScrollBar();
      $('.js-masonry-item').off('click').on('click', function () {
        const src = $(this).attr('url');
        dialog({
          mask: true,
          content: `
                        <img src="${src}">
                    `,
        }).show();
      });
    },
    initRightFixedPosition() {
      const screenWidth = window.screen.width;
      let rightFixedRight = (screenWidth - 1240) / 2 - $('.js-right-fixed')[0].offsetWidth - 80;
      rightFixedRight = rightFixedRight < 0 ? 0 : rightFixedRight;
      $('.js-right-fixed').css({
        right: rightFixedRight
      });
    },
    initScrollBar() {
      const imgBox = document.querySelector('.js-img-box');
      const imgBoxScrollHeight = imgBox.scrollHeight;
      const imgBoxHeight = imgBox.offsetHeight;
      const scrollWrapperHeight = document.querySelector('.js-scroll-wrapper').offsetHeight;
      const scrollBar = document.querySelector('.js-scroll-bar');
      const scrollBarHeight = scrollBar.offsetHeight;
      imgBox.addEventListener('scroll', function () {
        $('.js-scroll-bar').css({
          top: (this.scrollTop / (imgBoxScrollHeight - imgBoxHeight)) * (scrollWrapperHeight - scrollBarHeight)
        });
      });
    },
    initGoToTop() {
      $(window).scroll(() => {
        if ($(window).scrollTop() > 300) {
          $('.js-to-top').addClass('show');
        } else {
          $('.js-to-top').removeClass('show');
        }
      });
    },
    initVideo() {
      $('.js-video-btn').off('click').on('click', function () {
        $('.js-video-bro').addClass('hide');
        $('.js-video').removeClass('hide');
        $('.js-video')[0].play();
      });
      $('.js-video')[0].addEventListener('ended', function () {
        $(this).addClass('hide');
        $('.js-video-bro').removeClass('hide');
      }, false);
    }
  };


  _obj.init();

  function dialog({
    content = '',
    mask = false,
    fixed = false,
  }) {
    const $content = $(`
            <div class="ui-dialog">
                <div class="ui-dialog-close">x</div>
                ${content ? content: ''}
            </div>
        `);
    if (fixed) {
      $content.css({
        top: '50%',
        position: 'fixed'
      });
    } else {
      $content.css({
        top: getScrollTop() + getViewPortHeight() / 2,
      });
    }
    return {
      show() {
        if (mask) {
          $('body').append(`<div class="mask"></div>`);
        }
        $('body').append($content);

        $('.ui-dialog-close').off('click').on('click', () => {
          $('.mask').hide().remove();
          $content.hide().remove();
        });
      }
    };
  }
})();
// 获取浏览器窗口的可视区域的宽度
function getViewPortWidth() {
  return document.documentElement.clientWidth || document.body.clientWidth;
}

// 获取浏览器窗口的可视区域的高度
function getViewPortHeight() {
  return document.documentElement.clientHeight || document.body.clientHeight;
}

// 获取浏览器窗口水平滚动条的位置
function getScrollLeft() {
  return document.documentElement.scrollLeft || document.body.scrollLeft;
}

// 获取浏览器窗口垂直滚动条的位置
function getScrollTop() {
  return document.documentElement.scrollTop || document.body.scrollTop;
}
