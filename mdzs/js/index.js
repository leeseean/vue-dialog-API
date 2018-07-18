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
      this.testSpeed();
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
      const totalImgs = [
        ...horizontalImgs,
        ...verticalImgs
      ];
      const masonryItemsHtml = totalImgs.map((item, index) => {
        let plusClass;
        if (item.indexOf('horizontal') !== -1) {
          plusClass = 'horizontal';
        } else if (item.indexOf('vertical') !== -1) {
          plusClass = 'vertical';
        }
        return `
                    <div class="js-masonry-item item" url="${item}">
                        <div class="item__content ${plusClass}" style="background:url(${item}) no-repeat top center;background-size:cover">
                            <div class="item__content-mask"></div>
                            <div class="zoom-in"></div>
                        </div>
                    </div>
                `;
      }).join('');
      $('.js-masonry').html(masonryItemsHtml);
      $('.js-masonry-item').off('click').on('click', function () {
        const slideHtml = totalImgs.map((item, index) => {
          return `
                <div class="js-swiper-item swiper-slide"><img class="js-swiper-img" src="${item}"></div>                
              `;
        }).join('');
        const src = $(this).attr('url');
        const activeIndex = totalImgs.indexOf(src);
        dialog({
          mask: true,
          content: `    
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        ${slideHtml}
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-pagination"></div>
                </div>
            `,
          onshow() {
            const mySwiper = new Swiper('.swiper-container', {
              autoplay: false,
              autoHeight: true,
              initialSlide: activeIndex,
              direction: 'horizontal',
              loop: true,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              pagination: {
                el: '.swiper-pagination',
                // type: 'bullets',
                type: 'fraction',
                //type : 'progressbar',
                //type : 'custom',
              }
            });
            
          }
        }).show();
      });
    },
    initRightFixedPosition() {
      const mainContentWidth = $('.js-head-wrapper')[0].offsetWidth;
      const screenWidth = window.screen.width;
      let rightFixedRight = (screenWidth - mainContentWidth) / 2 - $('.js-right-fixed')[0].offsetWidth - 60;
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
    initRightFixedNav() { //根据滚动的位置点亮右侧固定栏导航
      $(window).scroll(() => {
        const scrollTop = $(window).scrollTop();
        if (scrollTop <= 360) {
          $('.js-fixed-video').removeClass('active');
          $('.js-fixed-masonry').removeClass('active');
          $('.js-fixed-introduction').removeClass('active');
        } else if (scrollTop > 360 && scrollTop <= 720) {
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
      const me = this;
      $('.js-video-btn').off('click').on('click', function () {
        dialog({
          mask: true,
          onshow() {
            const video = $('.js-video')[0];
            $('.js-switch-sharpness').off('click').on('click', function () {
              $('.js-sharpness-list').toggleClass('hide');
            });
            $('.js-sharpness-item').off('click').on('click', function () {
              const currentTime = video.currentTime;
              $(".js-video").attr("src", $(this).attr('url')).attr("autoplay", "true");
              video.currentTime = currentTime;
              $('.js-sharpness-list').addClass('hide');
            });
            $('.js-video-wrapper').hover(function () {
              $('.switch-video-wrapper').show();
            }, function () {
              $('.switch-video-wrapper').hide();
            });
            //根据网速选择加载视频
            if (me.netSpeed === 0 || me.netSpeed === 1) {
                $(".js-video").attr("src", './media/480p.mp4');
            } else if (me.netSpeed === 2 || me.netSpeed === 3) {
                $(".js-video").attr("src", './media/720p.mp4');
            } else if (me.netSpeed === 4) {
                $(".js-video").attr("src", './media/1080p.mp4');                
            }
          },
          content: `
                <div class="js-video-wrapper video-wrapper">
                    <video class="js-video content-2-video" src="./media/720p.mp4" muted controls autoplay></video>
                    <div class="js-switch-video-wrapper switch-video-wrapper">
                        <span class="js-switch-sharpness">切换清晰度</span>
                        <ul class="js-sharpness-list video-sharpness-list hide">
                            <li class="js-sharpness-item sharpness-item" sharpness="480P" url="./media/480p.mp4">480P</li>
                            <li class="js-sharpness-item sharpness-item" sharpness="720P" url="./media/720p.mp4">720P</li>
                            <li class="js-sharpness-item sharpness-item" sharpness="1080P" url="./media/1080p.mp4">1080P</li>                            
                        </ul>
                    </div>
                </div>
                      `,
        }).show();
      });
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
    },
    netSpeed: 0,
    testSpeed() { //测试用户网速
      const me = this;
      var arr = ["网速低于50KB", "网速在50-100KB之间", "网速在100-200KB之间", "网速在200-300KB之间", "视频通讯"];
      var st = new Date().getTime();
      const img = new Image('https://www.xxx.com');
      img.onerror = getSpeed;
      function getSpeed() {
        var filesize = 35.4; //measured in KB  
        var et = new Date().getTime();
        var speed = Math.round(filesize * 1000) / (et - st);
        var scope = (speed > 0 && speed <= 50) ? 0 : (speed > 50 && speed <= 100) ? 1 : (speed >= 100 && speed < 200) ? 2 : (speed >= 200 && speed < 300) ? 3 : 4;
        me.netSpeed = scope;
      }
    }
  };


  _obj.init();

  function dialog({
    content = '',
    mask = false,
    fixed = false,
    onshow = () => {}
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
        onshow();
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
