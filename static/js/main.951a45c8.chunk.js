(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(3),o=c.n(s),n=c(4),a=c(5),i=c(7),l=c(6),d=c(1),r=c.n(d),u=(c(12),c(0)),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(i.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(n.a)(this,c);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={item:"Jam",selectedGood:"No goods selected"},e}return Object(a.a)(c,[{key:"componentDidMount",value:function(){var e=this.state.item;this.setState({selectedGood:"".concat(e," is selected")})}},{key:"render",value:function(){var e=this,t=this.state,c=t.item,s=t.selectedGood;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"title",children:s}),Object(u.jsx)("button",{type:"submit",className:"button button__clear",hidden:!c,onClick:function(){e.setState({item:"",selectedGood:"No goods selected"})},children:"Clear"}),Object(u.jsx)("ul",{className:"goods",children:m.map((function(t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("li",{className:t===c?"good good__selected":"good",children:[t,Object(u.jsx)("button",{type:"submit",className:"button",onClick:function(){c===t?e.setState({item:"",selectedGood:"No goods selected"}):e.setState({item:t,selectedGood:"".concat(t," is selected")})},children:t===c?"Remove":"Select"})]},t)})}))})]})}}]),c}(r.a.Component),h=b;o.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.951a45c8.chunk.js.map