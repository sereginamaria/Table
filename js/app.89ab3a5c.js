(function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],p=0,u=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(u.length)u.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Table/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-tabel",{attrs:{users_data:e.USERS}})],1)},s=[],o=n("5530"),i=n("2f62"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"container-fluid"},[n("b-row",[n("b-col",{staticClass:"my-1",attrs:{lg:"6"}},[n("b-form-group",{staticClass:"mb-0",attrs:{label:"Sort","label-for":"sort-by-select","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[n("b-input-group",{attrs:{size:"sm"}},[n("b-form-select",{staticClass:"w-75",attrs:{id:"sort-by-select",options:e.sortOptions},scopedSlots:e._u([{key:"first",fn:function(){return[n("option",{attrs:{value:""}},[e._v("-- none --")])]},proxy:!0}]),model:{value:e.sortBy,callback:function(t){e.sortBy=t},expression:"sortBy"}})],1)],1)],1),n("b-col",{staticClass:"my-1",attrs:{sm:"5",md:"6"}},[n("b-form-group",{staticClass:"mb-0",attrs:{label:"Per page","label-for":"per-page-select","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm"}},[n("b-form-select",{attrs:{id:"per-page-select",options:e.pageOptions,size:"sm"},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1),n("b-col",{staticClass:"my-1",attrs:{lg:"6"}},[n("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-for":"filter-input","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[n("b-input-group",{attrs:{size:"sm"}},[n("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),n("b-input-group-append",[n("b-button",{attrs:{disabled:!e.filter},on:{click:function(t){e.filter=""}}},[e._v("Clear")])],1)],1)],1)],1)],1),n("b-table",{attrs:{striped:"",hover:"",items:e.users_data,fields:e.fields,filter:e.filter,"current-page":e.currentPage,"per-page":e.perPage,"sort-by":e.sortBy,stacked:"md","show-empty":"",small:""},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},filtered:e.onFiltered}}),n("b-col",{staticClass:"my-1",attrs:{sm:"7",md:"6"}},[e.onFiltered?n("b-pagination",{staticClass:"my-0",attrs:{"total-rows":e.totalRows,"per-page":e.perPage,align:"fill",size:"sm"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}):e._e()],1)],1)},c=[],d=(n("4de4"),n("d81d"),n("36c9")),p=n.n(d);n("f890");r["default"].use(p.a);var u={name:"vTabel",components:{},data:function(){return{fields:[{key:"id",label:"id",sortable:!0},{key:"name",label:"name",sortable:!0},{key:"points_earned",label:"points_earned",sortable:!0},{key:"points_spend",label:"points_spend",sortable:!0},{key:"registration_date",label:"registration_date",sortable:!0}],currentPage:1,perPage:5,pageOptions:[5,10,15,{value:100,text:"Show a lot"}],sortBy:"",filter:null,filterOn:[],row:1}},props:{users_data:{type:Array}},computed:{sortOptions:function(){return this.fields.filter((function(e){return e.sortable})).map((function(e){return{text:e.label,value:e.key}}))},totalRows:{get:function(){return 1===this.row?this.users_data.length:this.row},set:function(e){this.row=e}}},methods:{onFiltered:function(e){this.totalRows=e.length}}},f=u,b=n("2877"),_=Object(b["a"])(f,l,c,!1,null,null,null),m=_.exports,g=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(g["a"]);var y={name:"App",components:{vTabel:m},computed:Object(o["a"])({},Object(i["c"])(["USERS"])),methods:Object(o["a"])({},Object(i["b"])(["GET_USERS_FROM_API"])),mounted:function(){this.GET_USERS_FROM_API()}},h=y,v=Object(b["a"])(h,a,s,!1,null,null,null),S=v.exports,O=n("bc3a"),w=n.n(O),P={users:[{id:"5c41c5asfd56",name:"Иван",points_earned:862,points_spend:325,registration_date:"2021-01-04"},{id:"5c41crgrwgd56",name:"Георг",points_earned:862,points_spend:4556,registration_date:"2021-01-06"},{id:"5c41c56drd56",name:"Урсула",points_earned:862,points_spend:543,registration_date:"2021-01-15"},{id:"5c41c56c4656",name:"Енот",points_earned:862,points_spend:166,registration_date:"2021-01-16"},{id:"5c41c56cd456",name:"Паскаль",points_earned:862,points_spend:347,registration_date:"2021-01-18"},{id:"5c41c56cd59",name:"Корталь",points_earned:862,points_spend:9876,registration_date:"2021-01-29"},{id:"5c41c56cd59",name:"Егор",points_earned:862,points_spend:123,registration_date:"2021-01-30"},{id:"5c41c56cd59",name:"Игорь",points_earned:862,points_spend:236,registration_date:"2021-01-02"},{id:"5c41c56cd59",name:"Ярослав",points_earned:862,points_spend:463,registration_date:"2021-01-07"},{id:"5c41c56cd59",name:"Даниил",points_earned:862,points_spend:835,registration_date:"2021-01-17"},{id:"5c41c56cd59",name:"Даниил",points_earned:862,points_spend:835,registration_date:"2021-01-10"},{id:"5c41c56cd59",name:"Даниил",points_earned:862,points_spend:835,registration_date:"2021-01-25"},{id:"5c41c56cd59",name:"Даниил",points_earned:862,points_spend:835,registration_date:"2021-01-28"},{id:"5c41c56cd59",name:"Даниил",points_earned:862,points_spend:835,registration_date:"2021-01-21"},{id:"5c41c56cd59",name:"Даниил",points_earned:862,points_spend:835,registration_date:"2021-01-21"},{id:"5c41c56cd59",name:"Даниил",points_earned:862,points_spend:835,registration_date:"2021-01-21"}]};r["default"].use(i["a"]);var E=new i["a"].Store({state:{users:[]},actions:{GET_USERS_FROM_API:function(e){var t=e.commit;return w()("http://localhost:3000/users",{method:"GET"}).then((function(e){t("SET_USERS_TO_VUEX",e.data)})).catch(this.state.users=P.users)}},mutations:{SET_USERS_TO_VUEX:function(e,t){e.users=t}},getters:{USERS:function(e){return e.users}}}),k=E;r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(S)},store:k}).$mount("#app")}});
//# sourceMappingURL=app.89ab3a5c.js.map