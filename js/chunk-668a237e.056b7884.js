(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-668a237e"],{"159b":function(e,t,i){var n=i("da84"),r=i("fdbc"),l=i("17c2"),o=i("9112");for(var a in r){var s=n[a],f=s&&s.prototype;if(f&&f.forEach!==l)try{o(f,"forEach",l)}catch(c){f.forEach=l}}},"17c2":function(e,t,i){"use strict";var n=i("b727").forEach,r=i("a640"),l=i("ae40"),o=r("forEach"),a=l("forEach");e.exports=o&&a?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},"29f9":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-row",[i("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[i("h1",{staticClass:"pageTitle"},[e._v(e._s(this.pageTitle))])]),i("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[i("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"label-position":"left","label-width":"250px",model:e.form}},[i("el-row",{attrs:{gutter:20}},[e._l(this.fields,(function(t){return i("el-col",{key:t.field_id,attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[e.hiddenField(t.is_hidden)?i("el-form-item",{attrs:{label:e.requiredLabelField(t.field_label,t.is_required)}},[e.textField(t.type_field)?i("el-input",{model:{value:e.form[t.field_table_name],callback:function(i){e.$set(e.form,t.field_table_name,i)},expression:"form[field.field_table_name]"}}):e._e(),e.switchField(t.type_field)?i("el-switch",{model:{value:e.form[t.field_table_name],callback:function(i){e.$set(e.form,t.field_table_name,i)},expression:"form[field.field_table_name]"}}):e._e(),e.dateField(t.type_field)?i("el-date-picker",{attrs:{type:"date",format:"dd/MM/yyyy"},model:{value:e.form[t.field_table_name],callback:function(i){e.$set(e.form,t.field_table_name,i)},expression:"form[field.field_table_name]"}}):e._e(),e.selectField(t.type_field)?i("el-select",{attrs:{width:"100%",clearable:"",placeholder:"Selecione"},model:{value:e.form[t.field_table_name],callback:function(i){e.$set(e.form,t.field_table_name,i)},expression:"form[field.field_table_name]"}},e._l(e.fieldsOptions[t.field_table_name],(function(e){return i("el-option",{key:e.dropdown_option_value,attrs:{label:e.dropdown_option_value,value:e.dropdown_option_value}})})),1):e._e()],1):e._e()],1)})),i("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit()}}},[e._v("Criar Conta")])],1)],1)],2)],1)],1)],1)},r=[],l=(i("4160"),i("159b"),{name:"AccountCreate",data:function(){return{loading:!1,pageTitle:"Nova Conta",fields:[],form:{},fieldsOptions:{}}},methods:{textField:function(e){return"text"===e},switchField:function(e){return"switch"===e},dateField:function(e){return"date"===e},selectField:function(e){return"dropdown"===e},hiddenField:function(e){return 0==e},requiredLabelField:function(e,t){return"1"==t?e+" *":e},submit:function(){var e=this;this.loading=!0,this.$http.post("/module/accounts",this.form).then((function(t){e.loading=!1,e.$notify({title:"Sucesso!",message:t.data.msg,type:"success",duration:3e3}),e.$router.push({name:"Accounts_List"})})).catch((function(t){e.loading=!1,e.$notify({title:"Erro",message:t.response.data,type:"error"})}))},getFields:function(){var e=this;this.$http.get("/fields/accounts").then((function(t){e.fields=t.data,e.fields.forEach((function(t){"dropdown"===t.type_field&&e.$http.get("/fields/dropdown-values/"+t.field_id).then((function(i){e.$set(e.fieldsOptions,t.field_table_name,i.data)})),e.$set(e.form,t.field_table_name,"")}))}))}},mounted:function(){this.getFields()},head:{title:{inner:"Nova Conta",complement:"GuiaSales"}}}),o=l,a=(i("ff20"),i("2877")),s=Object(a["a"])(o,n,r,!1,null,null,null);t["default"]=s.exports},4160:function(e,t,i){"use strict";var n=i("23e7"),r=i("17c2");n({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},5039:function(e,t,i){},"65f0":function(e,t,i){var n=i("861d"),r=i("e8b5"),l=i("b622"),o=l("species");e.exports=function(e,t){var i;return r(e)&&(i=e.constructor,"function"!=typeof i||i!==Array&&!r(i.prototype)?n(i)&&(i=i[o],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===t?0:t)}},a640:function(e,t,i){"use strict";var n=i("d039");e.exports=function(e,t){var i=[][e];return!!i&&n((function(){i.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,i){var n=i("83ab"),r=i("d039"),l=i("5135"),o=Object.defineProperty,a={},s=function(e){throw e};e.exports=function(e,t){if(l(a,e))return a[e];t||(t={});var i=[][e],f=!!l(t,"ACCESSORS")&&t.ACCESSORS,c=l(t,0)?t[0]:s,d=l(t,1)?t[1]:void 0;return a[e]=!!i&&!r((function(){if(f&&!n)return!0;var e={length:-1};f?o(e,1,{enumerable:!0,get:s}):e[1]=1,i.call(e,c,d)}))}},b727:function(e,t,i){var n=i("0366"),r=i("44ad"),l=i("7b0b"),o=i("50c4"),a=i("65f0"),s=[].push,f=function(e){var t=1==e,i=2==e,f=3==e,c=4==e,d=6==e,u=5==e||d;return function(m,p,_,h){for(var b,v,y=l(m),g=r(y),L=n(p,_,3),S=o(g.length),x=0,w=h||a,C=t?w(m,S):i?w(m,0):void 0;S>x;x++)if((u||x in g)&&(b=g[x],v=L(b,x,y),e))if(t)C[x]=v;else if(v)switch(e){case 3:return!0;case 5:return b;case 6:return x;case 2:s.call(C,b)}else if(c)return!1;return d?-1:f||c?c:C}};e.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},e8b5:function(e,t,i){var n=i("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},ff20:function(e,t,i){"use strict";var n=i("5039"),r=i.n(n);r.a}}]);
//# sourceMappingURL=chunk-668a237e.056b7884.js.map