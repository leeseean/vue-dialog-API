webpackJsonp([1],{IfBO:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s={name:"vue-dialog",props:{id:[String,Number],closeIcon:Boolean,isDialog:[String,Boolean],isMask:[String,Boolean],fixed:Boolean,quickClose:Boolean,align:String,skin:String,width:[String,Number],height:[String,Number],zIndex:[String,Number],title:[String,Number],content:Object,statusbar:Object,button:Array,onShow:Function,onClose:Function,onBeforeDestroy:Function,onDestroy:Function},watch:{isDialog:{handler:function(t,e){t?document.body.addEventListener("click",this.quickCloseCb):document.body.removeEventListener("click",this.quickCloseCb)},immediate:!1}},methods:{closeCb:function(){this.isDialog=!1},clickCb:function(){!1!==(arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){}).call(this)&&(this.isDialog=!1)},quickCloseCb:function(t){var e=t.target||t.srcElement,n=this.$refs.dialogWrapper;e!==n&&!n.contains(e)&&this.quickClose&&(this.isDialog=!1)}},beforeDestroy:function(){this.onBeforeDestroy()},destroyed:function(){this.onDestroy()}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isDialog?n("div",{staticClass:"dialog-outter-wrapper",style:{"z-index":t.zIndex},attrs:{"dialog-id":t.id}},[t.isMask?n("div",{staticClass:"dialog-mask"}):t._e(),t._v(" "),n("div",{ref:"dialogWrapper",staticClass:"dialog-wrapper",class:{skin:t.skin},style:{width:t.width,height:t.height,position:t.fixed?"fixed":"absolute"}},[t.closeIcon?n("div",{staticClass:"dialog-close",on:{click:t.closeCb}},[t._v("x")]):t._e(),t._v(" "),t.title?n("div",{staticClass:"dialog-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{ref:"content",staticClass:"dialog-content"}),t._v(" "),n("div",{staticClass:"dialog-footer"},[t.statusbar?n("div",{ref:"statusbar",staticClass:"dialog-statusbar"}):t._e(),t._v(" "),t.button.length>0?n("div",{staticClass:"dialog-buttons"},t._l(t.button,function(e,i){return n("div",{key:i,staticClass:"dialog-button",attrs:{"button-id":e.id},on:{click:function(n){t.clickCb(e.callback)}}},[t._v(t._s(e.value))])})):t._e()]),t._v(" "),n("div",{staticClass:"dialog-anchor-arrow",attrs:{align:t.align}})])]):t._e()},staticRenderFns:[]};var o=n("VU/8")(s,r,!1,function(t){n("IfBO")},null,null).exports;function a(){}function _(t){let e=0,n=0;for(;t;)e=e+t.offsetLeft+t.clientLeft,n=n+t.offsetTop+t.clientTop,t=t.offsetParent;return{left:e,top:n}}let l;var c={install(t,e){const n=e=>{const n=t.extend(o);return(l=(new n).$mount()).isDialog=!1,{show(n){l.id=e.id||"",l.closeIcon=!1!==e.closeIcon,l.title=e.title||"",l.skin=e.skin||"",l.fixed=e.fixed||!1,l.align=e.align||"top left",l.quickClose=e.quickClose||!1,l.isMask=e.isMask||!1,l.width=e.width||"auto",l.height=e.height||"auto",l.zIndex=e.zIndex||"1024",l.button=e.button||[],l.onShow=e.onShow||a,l.onClose=e.onClose||a,l.onBeforeDestroy=e.onBeforeDestroy||a,l.onDestroy=e.onDestroy||a,document.body.appendChild(l.$el),l.isDialog=!0;const i=t.extend(e.content||{template:"<div></div>"});if(l.content=(new i).$mount(),e.statusbar){const n=t.extend(e.statusbar);l.statusbar=(new n).$mount()}return l.$nextTick(()=>{if(l.$refs.content.appendChild(l.content.$el),l.statusbar&&l.$refs.statusbar.appendChild(l.statusbar.$el),n){l.fixed=!1;const t=_(n).left,e=_(n).top,i=n.offsetWidth,s=n.offsetHeight,r=l.$refs.dialogWrapper.offsetWidth,o=l.$refs.dialogWrapper.offsetHeight,a={"top left":`translateX(${t}px) translateY(${e-o-10}px)`,top:`translateX(${t+(i-r)/2}px) translateY(${e-o-10}px)`,"top right":`translateX(${t+i-r}px) translateY(${e-o-10}px)`,"right top":`translateX(${t+i+10}px) translateY(${e}px)`,right:`translateX(${t+i+10}px) translateY(${e+(s-o)/2}px)`,"right bottom":`translateX(${t+i+10}px) translateY(${e+s-o}px)`,"bottom right":`translateX(${t+i-r}px) translateY(${e+s+10}px)`,bottom:`translateX(${t+(i-r)/2}px) translateY(${e+s+10}px)`,"bottom left":`translateX(${t}px) translateY(${e+s+10}px)`,"left bottom":`translateX(${t-r-10}px) translateY(${e+s-o}px)`,left:`translateX(${t-r-10}px) translateY(${e+s-o}px)`,"left top":`translateX(${t-r-10}px) translateY(${e}px)`};!function(t,e){for(let n in e)t.style[n]=e[n]}(l.$refs.dialogWrapper,{left:0,top:0,transform:`${a[l.align]}`})}l.onShow()}),this},close(){return l.isDialog=!1,l.onClose(),this},destroy(){return l.$destroy(),this},content(e){const n=l.content.$el;l.content.$destroy();const i=t.extend(e);return l.content=(new i).$mount(),l.$nextTick(()=>{l.$refs.content.removeChild(n),l.$refs.content.appendChild(l.content.$el)}),this},open:l.isDialog}};t.dialog||(t.dialog=n),t.mixin({created(){this.$dialog=t.dialog}})}},v=(n("XSDV"),{data:function(){return{showConfigNav:!0,showReturnObjNav:!0,text:"text",color:"color",toTopFlag:!1}},methods:{showToTop:function(){var t=this;window.addEventListener("scroll",function(){document.documentElement.scrollTop>400?t.toTopFlag=!0:t.toTopFlag=!1})}},mounted:function(){this.showToTop()}}),h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",attrs:{id:"wrapper"}},[n("div",{staticClass:"aside"},[n("h4",[t._v("导航")]),t._v(" "),n("ol",[n("li",[n("p",{on:{click:function(e){t.showReturnObjNav=!t.showReturnObjNav}}},[t._v("returnObj")]),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.showReturnObjNav,expression:"showReturnObjNav"}]},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])]),t._v(" "),n("li",[n("p",{on:{click:function(e){t.showConfigNav=!t.showConfigNav}}},[t._v("config配置项")]),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.showConfigNav,expression:"showConfigNav"}]},[t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22)])])])]),t._v(" "),n("div",{staticClass:"content"},[n("h2",[t._v("引入art-dialog-vue")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("1.安装")]),t._v(" "),t._m(23),t._v(" "),n("p",[t._v("2.直接引入")]),t._v(" "),t._m(24),t._v(" "),n("p",[t._v("3.模块化引入")]),t._v(" "),t._m(25),t._v(" "),n("h2",[t._v("基本用法")]),t._v(" "),n("hr"),t._v(" "),t._m(26),t._v(" "),n("p",[t._v("下面会就返回对象returnObj和config对象进行分别说明")]),t._v(" "),n("h2",[t._v("returnObj")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("returnObj是vue调用dialog方法后返回的对象，共有4个方法(show,close,destroy,content)和1个属性(open)")]),t._v(" "),n("h3",{attrs:{id:"method-show"}},[t._v("show([anchor])")]),t._v(" "),n("p",[t._v("弹出对话框，默认弹出在屏幕中央；anchor为dom元素，传入dom时对话框将根据设置的align值吸附在dom元素附近")]),t._v(" "),n("p",[t._v("例子：")]),t._v(" "),t._m(27),t._v(" "),n("h3",{attrs:{id:"method-close"}},[t._v("close()")]),t._v(" "),n("p",[t._v("关闭对话框，并将对话框dom移除")]),t._v(" "),n("p",[t._v("例子：")]),t._v(" "),t._m(28),t._v(" "),n("h3",{attrs:{id:"method-destroy"}},[t._v("destroy()")]),t._v(" "),n("p",[t._v("触发弹窗vue实例的$destroy()方法")]),t._v(" "),n("p",[t._v("例子：")]),t._v(" "),t._m(29),t._v(" "),n("h3",{attrs:{id:"method-content"}},[t._v("content(options)")]),t._v(" "),n("p",[t._v("写入对话框内容,options配置项是vue组件配置")]),t._v(" "),n("p",[t._v("例子：")]),t._v(" "),n("pre",[t._v("                  "),n("code",[t._v("\n                      returnObj.content({\n                          template: '<div>"+t._s(t.text)+"</div>',\n                          data() {\n                              return {\n                                  text: '欢迎使用art-dialog-vue插件'\n                              }\n                          }\n                      });\n                  ")]),t._v("\n              ")]),t._v(" "),n("h3",{attrs:{id:"prop-open"}},[t._v("open")]),t._v(" "),n("p",[t._v("属性（Boolean），判断对话框是否打开")]),t._v(" "),n("p",[t._v("例子：")]),t._v(" "),t._m(30),t._v(" "),n("h2",[t._v("config配置项")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("注：config配置里面的所有方法中的this不指向returnObj，都指向弹窗vue实例")]),t._v(" "),n("table",[t._m(31),t._v(" "),n("tbody",[t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),n("tr",{attrs:{id:"config-content"}},[n("td",[t._v("content")]),t._v(" "),n("td",[t._v("Object")]),t._v(" "),n("td",[n("div",[n("pre",[t._v("                          "),n("p",[t._v("定义弹窗的内容，配置项为vue组件配置项，示例")]),t._v("\n                          "),n("code",[t._v("\n                              content: {\n                                  template: '<div>"+t._s(t.color)+"</div>',\n                                  data() {\n                                      color: 'red'\n                                  }\n                              }\n                          ")]),t._v("\n                          "),n("p",[t._v("要获取content中data的数据可以使用$vm.content.color（$vm为弹窗实例）")]),t._v("\n                      ")])])])]),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),t._m(48)])])]),t._v(" "),t.toTopFlag?n("a",{staticClass:"to-top-wrapper",attrs:{href:"#wrapper"}},[t._v("回顶部")]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#method-show"}},[this._v("show([anchor])")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#method-close"}},[this._v("close()")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#method-destroy"}},[this._v("destroy()")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#method-content"}},[this._v("content(options)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#prop-open"}},[this._v("open")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#config-id"}},[this._v("id")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#config-closeIcon"}},[this._v("closeIcon")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#config-isMask"}},[this._v("isMask")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#config-fixed"}},[this._v("fixed")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#config-quickClose"}},[this._v("quickClose")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#config-align"}},[this._v("align")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#config-skin"}},[this._v("skin")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#config-width"}},[this._v("width")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#config-height"}},[this._v("height")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#config-zIndex"}},[this._v("zIndex")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#config-title"}},[this._v("title")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#config-content"}},[this._v("content")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#config-statusbar"}},[this._v("statusbar")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#config-button"}},[this._v("button")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#config-onShow"}},[this._v("onShow")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#config-onClose"}},[this._v("onClose")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#config-onBeforeDestroy"}},[this._v("onBeforeDestroy")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#config-onDestroy"}},[this._v("onDestroy")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[this._v("        "),e("code",[this._v("\n            npm install --save-dev art-dialog-vue //插件文件在plugin目录下\n        ")]),this._v("\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[this._v("        "),e("code",[this._v('\n            <script src="plugin/dist/static/css/dialog.min.css"><\/script>\n            <script src="plugin/dist/static/js/dialog.js"><\/script>\n            <script>\n              Vue.use(Dialog.default)//使用插件,注意以url引入时use的参数是Dialog.default\n            <\/script>\n        ')]),this._v("\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[this._v("        "),e("code",[this._v("\n            import Dialog from 'art-dialog-vue' //esm\n            const Dialog = require('art-dialog-vue').default //RequireJS，非esm形式要加.default\n            Vue.use(Dialog)//使用插件\n        ")]),this._v("\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[this._v("        "),e("code",[this._v("\n            const returnObj = Vue.dialog(config);\n            returnObj.show([anchor]);\n        ")]),this._v("\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[this._v("                  "),e("code",[this._v("\n                      const returnObj = Vue.dialog({\n                          title: 'art-dialog-vue',\n                          content: {\n                              template: '<div>欢迎使用</div>'\n                          }\n                      });\n                      returnObj.show();\n                      //传入anchor情况\n                      const returnObj = Vue.dialog({\n                          title: 'art-dialog-vue',\n                          content: {\n                              template: '<div>欢迎使用</div>'\n                          },\n                          closeIcon: false,\n                          align: 'top'\n                      });\n                      returnObj.show(document.querySeletor('#example-anchor'));\n                  ")]),this._v("\n              ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[this._v("                  "),e("code",[this._v("\n                      const returnObj = Vue.dialog({\n                          title: 'art-dialog-vue',\n                          content: {\n                              template: '<div>欢迎使用</div>'\n                          },\n                          onShow() {\n                              setTimeout(() => {\n                                  returnObj.close();//2秒后关闭\n                              }, 2000);\n                          }\n                      });\n                      returnObj.show();\n                  ")]),this._v("\n              ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[this._v("                  "),e("code",[this._v("\n                      const returnObj = Vue.dialog({\n                          title: 'art-dialog-vue',\n                          content: {\n                              template: '<div>欢迎使用</div>'\n                          },\n                          onShow() {\n                              setTimeout(() => {\n                                  returnObj.close().destroy();//2秒后关闭并销毁弹窗vue实例\n                              }, 2000);\n                          }\n                      });\n                      returnObj.show();\n                  ")]),this._v("\n              ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[this._v("                  "),e("code",[this._v("\n                      const returnObj = Vue.dialog({\n                          title: 'art-dialog-vue',\n                          content: {\n                              template: '<div>欢迎使用</div>'\n                          }\n                      });\n                      returnObj.show();\n                      if (returnObj.open) {\n                          //判断是否打开，do something...\n                      }\n                  ")]),this._v("\n              ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("td",[this._v("名称")]),this._v(" "),e("td",[this._v("类型")]),this._v(" "),e("td",[this._v("说明")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{attrs:{id:"config-id"}},[e("td",[this._v("id")]),this._v(" "),e("td",[this._v("String, Number")]),this._v(" "),e("td",[this._v('弹窗id，将会在弹窗根元素上生成dialog-id="id"的属性')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{attrs:{id:"config-closeIcon"}},[e("td",[this._v("closeIcon")]),this._v(" "),e("td",[this._v("Boolean")]),this._v(" "),e("td",[this._v("默认为true，右上角关闭按钮，true的时候表示有，false的时候不出现")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{attrs:{id:"config-isMask"}},[e("td",[this._v("isMask")]),this._v(" "),e("td",[this._v("String, Boolean")]),this._v(" "),e("td",[this._v("默认为false,是否遮罩，true的时候是，false的时候遮罩不出现")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{attrs:{id:"config-fixed"}},[e("td",[this._v("fixed")]),this._v(" "),e("td",[this._v("Boolean")]),this._v(" "),e("td",[this._v("默认为true，为true表示弹窗以position:fixed定位，false则为absolute定位")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{attrs:{id:"config-quickClose"}},[e("td",[this._v("quickClose")]),this._v(" "),e("td",[this._v("Boolean")]),this._v(" "),e("td",[this._v("默认为false，为true时点击非弹窗区域弹窗关闭")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{attrs:{id:"config-skin"}},[e("td",[this._v("skin")]),this._v(" "),e("td",[this._v("String")]),this._v(" "),e("td",[this._v("额外为弹窗增加的class，可根据skin自定义样式")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{attrs:{id:"config-align"}},[e("td",[this._v("align")]),this._v(" "),e("td",[this._v("String")]),this._v(" "),e("td",{staticClass:"left"},[this._v('默认值为\'top left\'，弹窗吸附在anchor元素周围的位置，共十二个位置"top left","top","top right","right top","right","right bottom","bottom\n            right","bottom","bottom left","left bottom","left","left top"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{attrs:{id:"config-width"}},[e("td",[this._v("width")]),this._v(" "),e("td",[this._v("String, Number")]),this._v(" "),e("td",[this._v("默认值为'auto',定义弹窗的宽度")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{attrs:{id:"config-height"}},[e("td",[this._v("height")]),this._v(" "),e("td",[this._v("String, Number")]),this._v(" "),e("td",[this._v("默认值为'auto',定义弹窗的高度")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{attrs:{id:"config-zIndex"}},[e("td",[this._v("zIndex")]),this._v(" "),e("td",[this._v("String, Number")]),this._v(" "),e("td",[this._v("默认值为1024，定义弹窗的z-index值")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{attrs:{id:"config-title"}},[e("td",[this._v("title")]),this._v(" "),e("td",[this._v("String, Number")]),this._v(" "),e("td",[this._v("定义弹窗的标题")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{attrs:{id:"config-statusbar"}},[n("td",[t._v("statusbar")]),t._v(" "),n("td",[t._v("Object")]),t._v(" "),n("td",[n("div",[n("pre",[t._v("                          "),n("p",[t._v("定义状态栏区域的内容，配置项为vue组件配置项，示例")]),t._v("\n                          "),n("code",[t._v('\n                              statusbar: {\n                                  template: \'<label><input type="checkbox" v-model="checked">不再提醒</label>\',\n                                  data() {\n                                      checked: false\n                                  }\n                              }\n                          ')]),t._v("\n                          "),n("p",[t._v("要获取statusbar中data的数据可以使用$vm.statusbar.checked（$vm为弹窗实例）")]),t._v("\n                      ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{attrs:{id:"config-button"}},[n("td",[t._v("button")]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[n("div",[n("pre",[t._v("                          "),n("p",[t._v("每个item为一个对象，含id,value,callback三个配置项,示例")]),t._v("\n                          "),n("code",[t._v("\n                                  button: [\n                                      {\n                                          id: '1',\n                                          value: '确定',\n                                          callcack() {\n                                              //点击后的回调 \n                                              //注：this指向弹窗vue实例，\n                                              return false;//返回false 表示弹窗不关闭\n                                          }\n                                      }\n                                  ]\n                          ")]),t._v("\n                      ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{attrs:{id:"config-onShow"}},[e("td",[this._v("onShow")]),this._v(" "),e("td",[this._v("Function")]),this._v(" "),e("td",[this._v("弹窗打开(执行returnObj.show())后的回调，回调中this指向弹窗vue实例")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{attrs:{id:"config-onClose"}},[e("td",[this._v("onClose")]),this._v(" "),e("td",[this._v("Function")]),this._v(" "),e("td",[this._v("弹窗打开(执行returnObj.close())后的回调，回调中this指向弹窗vue实例")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{attrs:{id:"config-onBeforeDestroy"}},[e("td",[this._v("onBeforeDestroy")]),this._v(" "),e("td",[this._v("Function")]),this._v(" "),e("td",[this._v("弹窗实例钩子函数beforeDestroy中的回调，回调中this指向弹窗vue实例")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{attrs:{id:"config-onDestroy"}},[e("td",[this._v("onDestroy")]),this._v(" "),e("td",[this._v("Function")]),this._v(" "),e("td",[this._v("弹窗实例钩子函数destroyed中的回调，回调中this指向弹窗vue实例")])])}]},u=n("VU/8")(v,h,!1,null,null,null).exports;i.a.use(c),i.a.config.productionTip=!1,new i.a({el:"#app",template:"\n    <Main></Main>\n  ",components:{Main:u}})},XSDV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.61f161742922340a3e70.js.map