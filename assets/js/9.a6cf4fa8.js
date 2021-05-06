(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{342:function(t,e,a){"use strict";a.r(e);var s=a(33),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react基础"}},[t._v("#")]),t._v(" React基础")]),t._v(" "),a("h2",{attrs:{id:"生命周期（类组件）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期（类组件）"}},[t._v("#")]),t._v(" 生命周期（类组件）")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("constructor(props)")]),t._v("最先调用 初始化实例")]),t._v(" "),a("li",[a("code",[t._v("static getDerivedStateFromProps(props, state)")]),t._v("每次初始化或者更新state的时候可以调用，返回一个对象赋值给新的state，返回null则不更新，很少使用")]),t._v(" "),a("li",[a("code",[t._v("shouldComponentUpdate(nextProps, nextState)")]),t._v("可以根据参数选择是否进行数据更新，一般作为性能优化的考虑，返回值为true/false，但是一般类组件可以通过"),a("code",[t._v("PureComponent")]),t._v("函数组件通过"),a("code",[t._v("React.memo")]),t._v("进行浅层比较进行优化")]),t._v(" "),a("li",[a("code",[t._v("render()")]),t._v("返回组件")]),t._v(" "),a("li",[a("code",[t._v("componentDidMount()")]),t._v("会在组件挂载之后调用，如果里面直接调用 "),a("code",[t._v("setState()")]),t._v("。它将触发额外渲染，但此渲染会发生在浏览器更新屏幕之前。如此保证了即使在"),a("code",[t._v("render()")]),t._v("两次调用的情况下，用户也不会看到中间状态。")]),t._v(" "),a("li",[a("code",[t._v("getSnapshotBeforeUpdate(prevProps, prevState)")]),t._v("在组件更新之前可以拿到快照，可以将更新前的某些DOM属性返回，作为"),a("code",[t._v("componentDidUpdate()")]),t._v("的参数")]),t._v(" "),a("li",[a("code",[t._v("componentDidUpdate(prevProps, prevState, snapshot)")]),t._v("更新后调用")]),t._v(" "),a("li",[a("code",[t._v("componentWillUnmount()")]),t._v("组件卸载前调用，用于清除事件监听，timer等")])]),t._v(" "),a("h3",{attrs:{id:"初始化阶段：由reactdom-render-触发-初次渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化阶段：由reactdom-render-触发-初次渲染"}},[t._v("#")]),t._v(" 初始化阶段：由ReactDOM.render()触发---初次渲染")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("constructor()")])]),t._v(" "),a("li",[a("code",[t._v("componentWillMount()")]),t._v("需要加"),a("code",[t._v("UNSAFE_")]),t._v("前缀 => "),a("code",[t._v("getDerivedStateFromProps()")])]),t._v(" "),a("li",[a("code",[t._v("render()")])]),t._v(" "),a("li",[a("code",[t._v("componentDidMount()")]),t._v(" ====> 常用")])]),t._v(" "),a("h3",{attrs:{id:"更新阶段：由组件内部this-setstate-或父组件重新render触发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新阶段：由组件内部this-setstate-或父组件重新render触发"}},[t._v("#")]),t._v(" 更新阶段：由组件内部this.setState()或父组件重新render触发")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("componentWillReceiveProps()")]),t._v(" => 需要加"),a("code",[t._v("UNSAFE_")]),t._v("前缀=>"),a("code",[t._v("getDerivedStateFromProps()")])]),t._v(" "),a("li",[a("code",[t._v("shouldComponentUpdate()")]),t._v(" => 如果调用"),a("code",[t._v("this.forceUpdate()")]),t._v("强制更新则没有此步")]),t._v(" "),a("li",[a("code",[t._v("componentWillUpdate()")]),t._v("需要加"),a("code",[t._v("UNSAFE_")]),t._v("前缀且与"),a("code",[t._v("getDerivedStateFromProps()")]),t._v("不兼容")]),t._v(" "),a("li",[a("code",[t._v("render()")])]),t._v(" "),a("li",[a("code",[t._v("getSnapshotBeforeUpdate()")])]),t._v(" "),a("li",[a("code",[t._v("componentDidUpdate()")])])]),t._v(" "),a("h3",{attrs:{id:"卸载组件：由reactdom-unmountcomponentatnode-htmlelement-触发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载组件：由reactdom-unmountcomponentatnode-htmlelement-触发"}},[t._v("#")]),t._v(" 卸载组件：由"),a("code",[t._v("ReactDOM.unmountComponentAtNode(HTMLElement)")]),t._v("触发")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("componentWillUnmount")]),t._v(" ====> 常用")])]),t._v(" "),a("p",[a("strong",[t._v("重点：")]),t._v(" "),a("code",[t._v("getDerivedStateFromProps")]),t._v("无法和三个"),a("code",[t._v("UNSAFE_")]),t._v("一起使用")]),t._v(" "),a("h2",{attrs:{id:"react事件处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react事件处理"}},[t._v("#")]),t._v(" React事件处理")]),t._v(" "),a("ol",[a("li",[t._v("通过onXxx属性指定事件处理函数（注意大小写）")])]),t._v(" "),a("ul",[a("li",[t._v("React使用的是自定义合成事件，而不是使用原生DOM事件 ----为了更好的兼容性")]),t._v(" "),a("li",[t._v("React中的事件是通过事件委托方式处理的（委托给组件最外层的元素）----为了高效")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("通过event.target得到发生事件的DOM元素对象 ----不要过度使用Refs")])]),t._v(" "),a("h2",{attrs:{id:"react样式模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react样式模块化"}},[t._v("#")]),t._v(" React样式模块化")]),t._v(" "),a("ol",[a("li",[t._v("使用less、sass等嵌套")]),t._v(" "),a("li",[t._v("给css文件加一个module前缀"),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.css => index.module.css")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index.module.css'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1 className"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[t._v("用"),a("code",[t._v("styled-components")])])]),t._v(" "),a("h2",{attrs:{id:"功能界面组件化编码流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能界面组件化编码流程"}},[t._v("#")]),t._v(" 功能界面组件化编码流程")]),t._v(" "),a("ol",[a("li",[t._v("拆分组件：拆分界面，抽取组件")]),t._v(" "),a("li",[t._v("实现静态组件：使用组件实现静态页面效果")]),t._v(" "),a("li",[t._v("实现动态组件\n"),a("ol",[a("li",[t._v("动态显示初始化数据\n"),a("ul",[a("li",[t._v("数据类型")]),t._v(" "),a("li",[t._v("数据名称")]),t._v(" "),a("li",[t._v("保存在哪个组件")])])]),t._v(" "),a("li",[t._v("交互（从绑定事件监听开始）")])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);