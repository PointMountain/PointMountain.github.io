(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{368:function(v,_,t){"use strict";t.r(_);var l=t(33),o=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"从输入url到返回数据过程中的知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从输入url到返回数据过程中的知识"}},[v._v("#")]),v._v(" 从输入URL到返回数据过程中的知识")]),v._v(" "),t("h2",{attrs:{id:"dns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[v._v("#")]),v._v(" DNS")]),v._v(" "),t("p",[v._v("当输入URL时，浏览去会先去寻找域名所对应的IP地址。"),t("strong",[v._v("DNS")]),v._v("的作用就是通过域名查询到具体的IP。\n当在浏览器中想要访问"),t("code",[v._v("www.google.com")]),v._v("时，会通过进行以下操作：")]),v._v(" "),t("ol",[t("li",[v._v("本地客户端向服务器发起请求查询IP地址")]),v._v(" "),t("li",[v._v("查看浏览器有没有该域名的IP缓存")]),v._v(" "),t("li",[v._v("查看操作系统有没有该域名的IP缓存")]),v._v(" "),t("li",[v._v("查看HOST文件有没有该域名的解析配置")]),v._v(" "),t("li",[v._v("如果都没有的话，会通过直接去DNS根服务器查询，首先查询"),t("code",[v._v("com")]),v._v("这个一级域名的服务器")]),v._v(" "),t("li",[v._v("然后去该服务器查询"),t("code",[v._v("google.com")]),v._v("这个二级域名")]),v._v(" "),t("li",[v._v("接下来查询"),t("code",[v._v("www.google.com")]),v._v("这个三级域名的地址")]),v._v(" "),t("li",[v._v("返回给DNS客户端并缓存起来")])]),v._v(" "),t("p",[v._v("以上过程是"),t("strong",[v._v("DNS递归查询")]),v._v("，它是由系统配置的DNS服务器做请求，得到结果后将数据返回给客户端；还有一种"),t("strong",[v._v("DNS迭代查询")]),v._v("，它是由客户端去做请求。\nDNS解析过程中向服务器发送的请求会根据情况使用TCP或者UDP协议")]),v._v(" "),t("ul",[t("li",[v._v("通过"),t("strong",[v._v("UDP")]),v._v("去进行一些数据量少的请求，此时用到UDP性能快的优势")]),v._v(" "),t("li",[v._v("通过"),t("strong",[v._v("TCP")]),v._v("去进行数据量大且需要数据保证完整有序的请求，保证数据的正确及完整性")])]),v._v(" "),t("p",[v._v("当浏览器获取域名IP地址后，就会通过TCP协议与服务器建立连接。")]),v._v(" "),t("h2",{attrs:{id:"tcp连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp连接"}},[v._v("#")]),v._v(" TCP连接")]),v._v(" "),t("p",[v._v("TCP建立连接需要进行三次握手")]),v._v(" "),t("ul",[t("li",[v._v("第一次握手 客户端发送请求报文段")]),v._v(" "),t("li",[v._v("第二次握手 服务端接收报文段并返回ACK")]),v._v(" "),t("li",[v._v("第三次握手 客户端接收到ACK后发送ACK")])])])}),[],!1,null,null,null);_.default=o.exports}}]);