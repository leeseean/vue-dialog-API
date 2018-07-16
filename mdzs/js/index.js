if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, 'fill', {
    value: function (value) {

      // Steps 1-2.
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);

      // Steps 3-5.
      var len = O.length >>> 0;

      // Steps 6-7.
      var start = arguments[1];
      var relativeStart = start >> 0;

      // Step 8.
      var k = relativeStart < 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

      // Steps 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ?
        len : end >> 0;

      // Step 11.
      var final = relativeEnd < 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

      // Step 12.
      while (k < final) {
        O[k] = value;
        k++;
      }

      // Step 13.
      return O;
    }
  });
}
(() => {
  const _obj = {
    init() {
      this.initMasonry();
      this.initRightFixedPosition();
      this.initGoToTop();
      this.initVideo();
      this.initScrollBar();
      this.initMoveByMouse();
      this.initRightFixedNav();
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
      const mainContentWidth = $('.js-head-wrapper')[0].offsetWidth;
      const screenWidth = window.screen.width;
      let rightFixedRight = (screenWidth - mainContentWidth) / 2 - $('.js-right-fixed')[0].offsetWidth - 10;
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
        if ($(window).scrollTop() > 720) {
          $('.js-to-top').addClass('show');
        } else {
          $('.js-to-top').removeClass('show');
        }
      });
    },
    initRightFixedNav() {//根据滚动的位置点亮右侧固定栏导航
      $(window).scroll(() => {
        const scrollTop = $(window).scrollTop();
        if (scrollTop > 360 && scrollTop <= 720) {
          $('.js-fixed-video').addClass('active');
          $('.js-fixed-masonry').removeClass('active');
          $('.js-fixed-introduction').removeClass('active');
        } else if (scrollTop > 720 && scrollTop <= 1600) {
          $('.js-fixed-masonry').addClass('active');
          $('.js-fixed-video').removeClass('active');
          $('.js-fixed-introduction').removeClass('active');
        } else if (scrollTop > 1600) {
          $('.js-fixed-introduction').addClass('active');
          $('.js-fixed-masonry').removeClass('active');
          $('.js-fixed-video').removeClass('active');
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
    },
    initMoveByMouse() { //鼠标移动到区域 里面的图片运动
      $('.js-content-1').mousemove(function (event) {
        const width = $(this)[0].offsetWidth;
        const height = $(this)[0].offsetHeight;
        const X = event.offsetX;
        const Y = event.offsetY;
        const fireWidth = $('.js-main-fire')[0].offsetWidth;
        const fireHeight = $('.js-main-fire')[0].offsetHeight;
        const titleWidth = $('.js-main-title')[0].offsetWidth;
        const titleHeight = $('.js-main-title')[0].offsetHeight;
        $('.js-main-fire').css({
          transform: `translate(${-fireWidth/2 - 50*(X-width/2)/width}px, ${-fireHeight/2 - 50*(Y-height/2)/height}px)`
        });
        $('.js-main-title').css({
          transform: `translate(${-titleWidth/2 + 100*(X-width/2)/width}px, ${-titleHeight/2 + 100*(Y-height/2)/height}px)`
        });
      }).mouseleave(function () {
        $('.js-main-fire').css({
          transform: `translate(-50%, -50%)`
        });
        $('.js-main-title').css({
          transform: `translate(-50%, -50%)`
        });
      });
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

