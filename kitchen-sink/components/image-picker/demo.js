webpackJsonp([24],{1083:function(n,a,t){"use strict";t(50),t(847),t(1147)},1084:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{default:n}}function e(){}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}(),p=s(t(0)),c=s(t(6)),l=s(t(150)),u=s(t(848)),i=function(n){function a(){!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var n=function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments));return n.getOrientation=function(n,a){var t=new FileReader;t.onload=function(n){var t=new DataView(n.target.result);if(65496!==t.getUint16(0,!1))return a(-2);for(var s=t.byteLength,e=2;e<s;){var o=t.getUint16(e,!1);if(e+=2,65505===o){if(1165519206!==t.getUint32(e+=2,!1))return a(-1);var p=18761===t.getUint16(e+=6,!1);e+=t.getUint32(e+4,p);var c=t.getUint16(e,p);e+=2;for(var l=0;l<c;l++)if(274===t.getUint16(e+12*l,p))return a(t.getUint16(e+12*l+8,p))}else{if(65280!=(65280&o))break;e+=t.getUint16(e,!1)}}return a(-1)},t.readAsArrayBuffer(n.slice(0,65536))},n.getRotation=function(){var n=0;switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1){case 3:n=180;break;case 6:n=90;break;case 8:n=270}return n},n.removeImage=function(a){var t=[],s=n.props.files;(void 0===s?[]:s).forEach(function(n,s){a!==s&&t.push(n)}),n.props.onChange&&n.props.onChange(t,"remove",a)},n.addImage=function(a){var t=n.props.files,s=(void 0===t?[]:t).concat(a);n.props.onChange&&n.props.onChange(s,"add")},n.onImageClick=function(a){n.props.onImageClick&&n.props.onImageClick(a,n.props.files)},n.onFileChange=function(){var a=n.fileSelectorInput;if(a&&a.files&&a.files.length)for(var t=a.files,s=0;s<t.length;s++)n.parseFile(t[s],s);a.value=""},n.parseFile=function(a,t){var s=new FileReader;s.onload=function(s){var e=s.target.result;if(e){var o=1;n.getOrientation(a,function(t){t>0&&(o=t),n.addImage({url:e,orientation:o,file:a})})}else n.props.onFail&&n.props.onFail("Fail to get the "+t+" image")},s.readAsDataURL(a)},n}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,p.default.Component),o(a,[{key:"render",value:function(){var n=this,a=this.props,t=a.prefixCls,s=a.style,e=a.className,o=a.files,i=void 0===o?[]:o,r=a.selectable,k=a.onAddImageClick,f=a.multiple,d=[],g=(0,c.default)(""+t,e);i.forEach(function(a,s){var e={backgroundImage:"url("+a.url+")",transform:"rotate("+n.getRotation(a.orientation)+"deg)"};d.push(p.default.createElement(u.default.Item,{key:"item-"+s},p.default.createElement("div",{key:s,className:t+"-item"},p.default.createElement("div",{className:t+"-item-remove",role:"button","aria-label":"Click and Remove this image",onClick:function(){n.removeImage(s)}}),p.default.createElement("div",{className:t+"-item-content",role:"button","aria-label":"Image can be clicked",onClick:function(){n.onImageClick(s)},style:e}))))});var m=p.default.createElement(u.default.Item,{key:"select"},p.default.createElement(l.default,{activeClassName:t+"-upload-btn-active"},p.default.createElement("div",{className:t+"-item "+t+"-upload-btn",onClick:k,role:"button","aria-label":"Choose and add image"},p.default.createElement("input",{ref:function(a){n.fileSelectorInput=a},type:"file",accept:"image/*",onChange:function(){n.onFileChange()},multiple:f})))),h=r?d.concat([m]):d,y=h.length;if(0!==y&&y%4!=0){for(var b=4-y%4,v=[],w=0;w<b;w++)v.push(p.default.createElement(u.default.Item,{key:"blank-"+w}));h=h.concat(v)}for(var C=[],j=0;j<h.length/4;j++){var O=h.slice(4*j,4*j+4);C.push(O)}var _=C.map(function(n,a){return p.default.createElement(u.default,{key:"flex-"+a},n)});return p.default.createElement("div",{className:g,style:s},p.default.createElement("div",{className:t+"-list",role:"group"},_))}}]),a}();a.default=i,i.defaultProps={prefixCls:"am-image-picker",files:[],onChange:e,onImageClick:e,onAddImageClick:e,onFail:e,selectable:!0,multiple:!1},n.exports=a.default},1146:function(n,a,t){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u7b80\u5355\u7684\u56fe\u7247\u9009\u62e9\u7ec4\u4ef6","en-US":"Simple image picker"},filename:"components/image-picker/demo/basic.md",id:"components-image-picker-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ImagePicker<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> SegmentedControl <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2121\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2122\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ImagePickerExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    files<span class="token punctuation">:</span> data<span class="token punctuation">,</span>\n    multiple<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      files<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onSegChange <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> index <span class="token operator">=</span> e<span class="token punctuation">.</span>nativeEvent<span class="token punctuation">.</span>selectedSegmentIndex<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      multiple<span class="token punctuation">:</span> index <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> files <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span>\n          <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'\u5207\u6362\u5230\u5355\u9009\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u5230\u591a\u9009\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">selectedIndex</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>multiple <span class="token operator">?</span> <span class="token number">1</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onSegChange<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePicker</span>\n          <span class="token attr-name">files</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onImageClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">selectable</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">multiple</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>multiple<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePickerExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{default:n}}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}var s=t(0);t(0);t(274);var e=n(t(275)).default;t(1083);var o=n(t(1084)).default;t(917);var p=n(t(918)).default,c=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}(),l=[{url:"https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",id:"2121"},{url:"https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg",id:"2122"}],u=function(n){function t(){var n,s,e,o;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,t);for(var p=arguments.length,c=Array(p),u=0;u<p;u++)c[u]=arguments[u];return s=e=a(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(c))),e.state={files:l,multiple:!1},e.onChange=function(n,a,t){console.log(n,a,t),e.setState({files:n})},e.onSegChange=function(n){var a=n.nativeEvent.selectedSegmentIndex;e.setState({multiple:1===a})},o=s,a(e,o)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(t,s.Component),c(t,[{key:"render",value:function(){var n=this.state.files;return s.createElement(e,null,s.createElement(p,{values:["\u5207\u6362\u5230\u5355\u9009","\u5207\u6362\u5230\u591a\u9009"],selectedIndex:this.state.multiple?1:0,onChange:this.onSegChange}),s.createElement(o,{files:n,onChange:this.onChange,onImageClick:function(n,a){return console.log(n,a)},selectable:n.length<5,multiple:this.state.multiple}))}}]),t}();return s.createElement(u,null)}}},1147:function(n,a){},1148:function(n,a,t){n.exports={content:[],meta:{order:1,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u9009\u62e9\u56fe\u7247\u7684\u65b9\u6cd5","en-US":"Cutom how to choose file"},filename:"components/image-picker/demo/custom.md",id:"components-image-picker-demo-custom"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ImagePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2121\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2122\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ImagePickerExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    files<span class="token punctuation">:</span> data<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      files<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onAddImageClick <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      files<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>files<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation">,</span>\n        id<span class="token punctuation">:</span> <span class="token string">\'3\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onTabChange <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> files <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePicker</span>\n          <span class="token attr-name">files</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onImageClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">selectable</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onAddImageClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onAddImageClick<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePickerExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}var a=t(0);t(0);t(1083);var s=function(n){return n&&n.__esModule?n:{default:n}}(t(1084)).default,e=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}(),o=[{url:"https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",id:"2121"},{url:"https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg",id:"2122"}],p=function(t){function p(){var a,t,s,e;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,p);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return t=s=n(this,(a=p.__proto__||Object.getPrototypeOf(p)).call.apply(a,[this].concat(l))),s.state={files:o},s.onChange=function(n,a,t){console.log(n,a,t),s.setState({files:n})},s.onAddImageClick=function(n){n.preventDefault(),s.setState({files:s.state.files.concat({url:"https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg",id:"3"})})},s.onTabChange=function(n){console.log(n)},e=t,n(s,e)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(p,a.Component),e(p,[{key:"render",value:function(){var n=this.state.files;return a.createElement("div",null,a.createElement(s,{files:n,onChange:this.onChange,onImageClick:function(n,a){return console.log(n,a)},selectable:n.length<5,onAddImageClick:this.onAddImageClick}))}}]),p}();return a.createElement(p,null)}}},748:function(n,a,t){n.exports={basic:t(1146),custom:t(1148)}},847:function(n,a,t){"use strict";t(50),t(858)},848:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(t(859)),o=s(t(860));e.default.Item=o.default,a.default=e.default,n.exports=a.default},858:function(n,a){},859:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{default:n}}function e(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},p=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}(),c=s(t(0)),l=s(t(6)),u=function(n,a){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&a.indexOf(s)<0&&(t[s]=n[s]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(s=Object.getOwnPropertySymbols(n);e<s.length;e++)a.indexOf(s[e])<0&&(t[s[e]]=n[s[e]])}return t},i=function(n){function a(){return function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,c.default.Component),p(a,[{key:"render",value:function(){var n,a=this.props,t=a.direction,s=a.wrap,p=a.justify,i=a.align,r=a.alignContent,k=a.className,f=a.children,d=a.prefixCls,g=a.style,m=u(a,["direction","wrap","justify","align","alignContent","className","children","prefixCls","style"]),h=(0,l.default)(d,k,(n={},e(n,d+"-dir-row","row"===t),e(n,d+"-dir-row-reverse","row-reverse"===t),e(n,d+"-dir-column","column"===t),e(n,d+"-dir-column-reverse","column-reverse"===t),e(n,d+"-nowrap","nowrap"===s),e(n,d+"-wrap","wrap"===s),e(n,d+"-wrap-reverse","wrap-reverse"===s),e(n,d+"-justify-start","start"===p),e(n,d+"-justify-end","end"===p),e(n,d+"-justify-center","center"===p),e(n,d+"-justify-between","between"===p),e(n,d+"-justify-around","around"===p),e(n,d+"-align-start","start"===i),e(n,d+"-align-center","center"===i),e(n,d+"-align-end","end"===i),e(n,d+"-align-baseline","baseline"===i),e(n,d+"-align-stretch","stretch"===i),e(n,d+"-align-content-start","start"===r),e(n,d+"-align-content-end","end"===r),e(n,d+"-align-content-center","center"===r),e(n,d+"-align-content-between","between"===r),e(n,d+"-align-content-around","around"===r),e(n,d+"-align-content-stretch","stretch"===r),n));return c.default.createElement("div",o({className:h,style:g},m),f)}}]),a}();a.default=i,i.defaultProps={prefixCls:"am-flexbox",align:"center"},n.exports=a.default},860:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},o=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}(),p=s(t(0)),c=s(t(6)),l=function(n,a){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&a.indexOf(s)<0&&(t[s]=n[s]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(s=Object.getOwnPropertySymbols(n);e<s.length;e++)a.indexOf(s[e])<0&&(t[s[e]]=n[s[e]])}return t},u=function(n){function a(){return function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,p.default.Component),o(a,[{key:"render",value:function(){var n=this.props,a=n.children,t=n.className,s=n.prefixCls,o=n.style,u=l(n,["children","className","prefixCls","style"]),i=(0,c.default)(s+"-item",t);return p.default.createElement("div",e({className:i,style:o},u),a)}}]),a}();a.default=u,u.defaultProps={prefixCls:"am-flexbox"},n.exports=a.default},917:function(n,a,t){"use strict";t(50),t(985)},918:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{default:n}}function e(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}(),p=s(t(0)),c=s(t(6)),l=s(t(150)),u=function(n){function a(n){!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));return t.state={selectedIndex:n.selectedIndex},t}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,p.default.Component),o(a,[{key:"componentWillReceiveProps",value:function(n){n.selectedIndex!==this.state.selectedIndex&&this.setState({selectedIndex:n.selectedIndex})}},{key:"onClick",value:function(n,a,t){var s=this.props,e=s.disabled,o=s.onChange,p=s.onValueChange;e||this.state.selectedIndex===a||(n.nativeEvent=n.nativeEvent?n.nativeEvent:{},n.nativeEvent.selectedSegmentIndex=a,n.nativeEvent.value=t,o&&o(n),p&&p(t),this.setState({selectedIndex:a}))}},{key:"renderSegmentItem",value:function(n,a,t){var s=this,o=this.props,u=o.prefixCls,i=o.disabled,r=o.tintColor,k=(0,c.default)(u+"-item",e({},u+"-item-selected",t)),f={color:t?"#fff":r,backgroundColor:t?r:"transparent",borderColor:r},d=r?{backgroundColor:r}:{};return p.default.createElement(l.default,{key:n,disabled:i,activeClassName:u+"-item-active"},p.default.createElement("div",{className:k,style:f,role:"tab","aria-selected":t&&!i,"aria-disabled":i,onClick:i?void 0:function(t){return s.onClick(t,n,a)}},p.default.createElement("div",{className:u+"-item-inner",style:d}),a))}},{key:"render",value:function(){var n=this,a=this.props,t=a.className,s=a.prefixCls,o=a.style,l=a.disabled,u=a.values,i=void 0===u?[]:u,r=(0,c.default)(t,s,e({},s+"-disabled",l));return p.default.createElement("div",{className:r,style:o,role:"tablist"},i.map(function(a,t){return n.renderSegmentItem(t,a,t===n.state.selectedIndex)}))}}]),a}();a.default=u,u.defaultProps={prefixCls:"am-segment",selectedIndex:0,disabled:!1,values:[],onChange:function(){},onValueChange:function(){},style:{},tintColor:""},n.exports=a.default},985:function(n,a){}});