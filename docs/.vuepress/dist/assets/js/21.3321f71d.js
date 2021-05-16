(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{354:function(v,e,_){"use strict";_.r(e);var t=_(33),l=Object(t.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"vue原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue原理"}},[v._v("#")]),v._v(" Vue原理")]),v._v(" "),_("h2",{attrs:{id:"组件化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#组件化"}},[v._v("#")]),v._v(" 组件化")]),v._v(" "),_("ul",[_("li",[v._v("数据驱动视图（MVVM）\n"),_("ul",[_("li",[v._v("传统组件，只是静态渲染，更新还要依赖于操作DOM")])])])]),v._v(" "),_("h2",{attrs:{id:"响应式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#响应式"}},[v._v("#")]),v._v(" 响应式")]),v._v(" "),_("ul",[_("li",[v._v("组件data的数据一旦变化，立刻触发视图的更新")]),v._v(" "),_("li",[v._v("实现数据驱动视图的第一步")]),v._v(" "),_("li",[v._v("核心API\n"),_("ul",[_("li",[v._v("Vue2.x Object.defineProperty\n"),_("ul",[_("li",[v._v("深度监听，需要递归到底，一次性计算量大")]),v._v(" "),_("li",[v._v("新增属性，删除属性监听不到（Vue.set Vue.delete）")]),v._v(" "),_("li",[v._v("无法原生监听数组，需要特殊处理")])])]),v._v(" "),_("li",[v._v("Vue3.0 Proxy\n"),_("ul",[_("li",[_("code",[v._v("Proxy")]),v._v(","),_("code",[v._v("Reflect")])]),v._v(" "),_("li",[_("code",[v._v("Reflect")]),v._v("和Proxy能力一一对应")]),v._v(" "),_("li",[v._v("规范化、标准化、函数化")]),v._v(" "),_("li",[v._v("替代Object上的工具函数")]),v._v(" "),_("li",[v._v("深度监听，性能更好，只有在get的时候才会深度监听不像defineProperty开始就全部递归监听")]),v._v(" "),_("li",[v._v("可监听新增/删除属性")]),v._v(" "),_("li",[v._v("可监听数组变化")])])])])])]),v._v(" "),_("h2",{attrs:{id:"vdom和diff"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vdom和diff"}},[v._v("#")]),v._v(" vdom和diff")]),v._v(" "),_("ul",[_("li",[v._v("vdom是实现Vue和React的重要基石\n"),_("ul",[_("li",[v._v("dom操作非常耗费性能")]),v._v(" "),_("li",[v._v("之前用jQuery，可以自行控制DOM操作的时机，手动调整")]),v._v(" "),_("li",[v._v("通过js模拟DOM结构，计算出最小的变更，操作DOM")])])]),v._v(" "),_("li",[v._v("diff算法是vdom中最核心，最关键的部分\n"),_("ul",[_("li",[v._v("普通树的diff的时间复杂度是O(n^3)")]),v._v(" "),_("li",[v._v("react,vue优化时间复杂度到O(n) 即只进行同层比较")])])])]),v._v(" "),_("h2",{attrs:{id:"模板编译"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模板编译"}},[v._v("#")]),v._v(" 模板编译")]),v._v(" "),_("ul",[_("li",[v._v("vue template complier将模板编译为render函数 "),_("code",[v._v("with(this){ return _c() }")])]),v._v(" "),_("li",[v._v("执行render函数生成vnode")]),v._v(" "),_("li",[v._v("patch(elem, vnode) patch(vnode, newVnode)")])]),v._v(" "),_("h2",{attrs:{id:"渲染过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#渲染过程"}},[v._v("#")]),v._v(" 渲染过程")]),v._v(" "),_("ul",[_("li",[v._v("初次渲染过程\n"),_("ul",[_("li",[v._v("解析模板为render函数（或在开发环境已完成，vue-loader）")]),v._v(" "),_("li",[v._v("触发响应式，监听data属性getter setter")]),v._v(" "),_("li",[v._v("执行render函数，生成vnode，patch(elem, vnode)")])])]),v._v(" "),_("li",[v._v("更新过程\n"),_("ul",[_("li",[v._v("修改data，触发setter（此前在getter中已被监听）")]),v._v(" "),_("li",[v._v("重新执行render函数，生成newVnode")]),v._v(" "),_("li",[v._v("patch(vnode. newVnode)")])])]),v._v(" "),_("li",[v._v("异步渲染\n"),_("ul",[_("li",[v._v("$nextTick")]),v._v(" "),_("li",[v._v("汇总data的修改，一次性更新视图")]),v._v(" "),_("li",[v._v("减少DOM操作次数，提高性能")])])])]),v._v(" "),_("h2",{attrs:{id:"前端路由-hash-history"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前端路由-hash-history"}},[v._v("#")]),v._v(" 前端路由(hash,history)")]),v._v(" "),_("ul",[_("li",[v._v("hash特点\n"),_("ul",[_("li",[v._v("hash变化会触发页面跳转，即浏览器的前进，后退")]),v._v(" "),_("li",[v._v("hash变化不会刷新页面，SPA必需的特点")]),v._v(" "),_("li",[v._v("hash永远不会提交到server端")]),v._v(" "),_("li",[_("code",[v._v("window.onhashchange")])])])]),v._v(" "),_("li",[v._v("H5 history\n"),_("ul",[_("li",[v._v("用url规范的路由，但跳转时不刷新页面")]),v._v(" "),_("li",[v._v("需要后端支持")]),v._v(" "),_("li",[_("code",[v._v("history.pushState")])]),v._v(" "),_("li",[_("code",[v._v("window.onpopstate")])])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);