(function(e){function t(t){for(var i,n,o=t[0],l=t[1],c=t[2],u=0,p=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);m&&m(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(i=!1)}i&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},s={app:0},r=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var m=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0d6c":function(e,t,a){},"120e":function(e,t,a){},"1c33":function(e,t,a){"use strict";var i=a("fe4f"),s=a.n(i);s.a},"3c69":function(e,t,a){},"46fd":function(e,t,a){"use strict";var i=a("e416"),s=a.n(i);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("Drawer"),a("v-main",[a("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[a("router-view")],1),a("vue-particles",{staticClass:"particle",attrs:{color:"#dedede",particleOpacity:.4,particlesNumber:100,shapeType:"circle",particleSize:4,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.3,linesDistance:150,moveSpeed:2,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})],1)],1)},r=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.$vuetify.breakpoint.width<768?a("v-app-bar-nav-icon",{staticClass:"drawerToggle",attrs:{fixed:"",right:"","x-large":""},on:{click:function(t){e.drawer=!e.drawer}}}):e._e(),a("v-navigation-drawer",{staticClass:"nav-drawer",attrs:{src:e.bg,app:"","mobile-breakpoint":"768"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{staticClass:"text-center",attrs:{link:""}},[a("v-list-item",{staticClass:"justify-center"},[a("v-list-item-avatar",{staticClass:"avatar",attrs:{size:"150"}},[a("img",{attrs:{src:"https://sun9-57.userapi.com/c858232/v858232044/6e65b/njwWalSDTkM.jpg"}})])],1),a("v-list-item",{staticClass:"text-center"},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[e._v("Терёхин Кирилл")]),a("v-list-item-subtitle",{staticClass:"subtitle"},[e._v("HTML-программист")])],1)],1),e._l(e.items,(function(t){return a("v-list-item",{key:t.title,attrs:{link:"",to:t.link}},[a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.title))])],1)],1)}))],2)],1)],1)},o=[],l={name:"Drawer",data:function(){return{drawer:this.$vuetify.breakpoint.width>=768,items:[{title:"Главная",link:"/"},{title:"Опыт",link:"/experience"},{title:"Навыки",link:"/skills"},{title:"Портфолио",link:"/portfolio"},{title:"Контакты",link:"/contact"}]}},computed:{bg:function(){return{gradient:"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))",src:"./images/sidebar_bg/sidebar_bg1.jpg"}}}},c=l,m=(a("6893"),a("2877")),u=a("6544"),p=a.n(u),g=a("5bc1"),d=a("8860"),h=a("da13"),v=a("8270"),f=a("5d23"),b=a("f774"),k=Object(m["a"])(c,n,o,!1,null,"5c95f7a0",null),y=k.exports;p()(k,{VAppBarNavIcon:g["a"],VList:d["a"],VListItem:h["a"],VListItemAvatar:v["a"],VListItemContent:f["a"],VListItemSubtitle:f["b"],VListItemTitle:f["c"],VNavigationDrawer:b["a"]});var C={components:{Drawer:y},data:function(){return{}}},_=C,S=(a("5c0b"),a("7496")),T=a("f6c4"),j=Object(m["a"])(_,s,r,!1,null,null,null),w=j.exports;p()(j,{VApp:S["a"],VMain:T["a"]});var L=a("8c4f"),x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("div",{staticClass:"display-1 particleLayer"},[e._v("About Me")]),a("div",{staticClass:"subtitle-1 particleLayer"},[e._v("Subtitle")]),a("div",{staticClass:"body-1 particleLayer"},[e._v("Text")])])}],A={name:"About",data:function(){return{message:"Слава Одину, About работает!"}}},V=A,P=Object(m["a"])(V,x,M,!1,null,"ad72d14a",null),B=P.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"timeline"},[a("v-timeline",{attrs:{dense:e.mobileSM,"align-top":e.mobileSM}},e._l(e.experience,(function(t){return a("v-timeline-item",{attrs:{color:"grey darken-1","icon-color":"grey darken-4",icon:"mdi--briefcase-outline",small:e.mobile}},[a("span",{staticClass:"font-regular particleLayer",attrs:{slot:"opposite"},slot:"opposite"},[e._v(e._s(t.from)),a("br"),e._v(e._s(t.to)),a("br"),e._v(e._s(t.sum))]),a("v-card",{staticClass:"elevation-10 particleLayer"},[a("v-card-title",{staticClass:"title"},[e._v(e._s(t.company))]),a("v-card-subtitle",{staticClass:"subtitle-1"},[e._v(e._s(t.companyInfo)),e.mobileSM?[a("div",{staticClass:"caption"},[e._v(e._s(t.from)+" - "+e._s(t.to))]),a("div",{staticClass:"caption"},[e._v(e._s(t.sum))])]:e._e()],2),a("v-card-text",[a("div",{staticClass:"headline"},[e._v(e._s(t.position))]),e._l(t.description,(function(i,s){return[e._v(e._s(i)),s<t.description.length-1?a("br"):e._e()]}))],2)],1)],1)})),1)],1)},E=[],F={name:"Experience",data:function(){return{message:"Слава Одину, Experience работает!",experience:[{from:"Январь 2021",to:"Декабрь 2021",sum:"1 год",company:"Интеллект Технологии",companyInfo:"Нижний Новгород",position:"Frontend-разработчик (Aurelia)",description:["Рефакторинг легаси на Aurelia.","Исправление багов.","Оптимизация SPA посредством разбиения запросов на сервер на более мелкие части, компоненты."]},{from:"Октябрь 2020",to:"Январь 2021",sum:"4 месяца",company:"Freelance",companyInfo:"Россия. Москва.",position:"Angular Frontend Developer",description:["Пара подработок на Angular:","Исправил ошибку оплаты.","Настроил библиотеку для работы с камерой и микрофоном (WebRTC), настроил комнату для общения (classroom).","Создание графиков, настройка форм."]},{from:"Март 2020",to:"Август 2020",sum:"6 месяцев",company:"PandariumWEB",companyInfo:"Ростов-на-Дону",position:"Angular Frontend-developer",description:["Удалённая работа единственным Frontend-разработчиком на проекте.","Разработал Frontend часть админки визового центра (RNTO).","В кратчайшие сроки разработал Frontend часть некролога.","Помог в создании нескольких страниц, подключении API и настройке фильтров на страницах CRM системы."]},{from:"Февраль 2019",to:"Oктябрь 2019",sum:"9 месяцев",company:"Zensoft",companyInfo:"Кыргызстан, zensoft.io",position:"Верстальщик",description:["Исправил множество ошибок в стилях веб-приложения.","Раздробил монолитный код на компоненты (React.js).","Вел активную разработку компонентов для CRM системы под Angular 7+"]},{from:"Май 2018",to:"Июль 2018",sum:"3 месяцев",company:"DevForge",companyInfo:"Кыргызстан",position:"Frontend-разработчик",description:["Изучил фреймворк Vue.js,","Работал над банковской CRM системой на Vue.js."]},{from:"Май 2017 ",to:"Июнь 2017",sum:"2 месяца",company:"Velox Software",companyInfo:"Кыргызстан",position:"Frontend-разработчик (Стажер)",description:["Прошел стажировку,","Получил базовые знания и навыки для работы с фреймворком Angular 4-ой версии и выше."]},{from:"Сентябрь 2014",to:"Январь 2016",sum:"1 год 5 месяцев",company:"Фриланс",companyInfo:"Бишкек, Кыргызстан",position:"Верстальщик / Frontend",description:["Разработка сайтов на CMS:","Joomla,","OpenCart,","Wordpress."]}]}},computed:{mobile:function(){return this.$vuetify.breakpoint.width<768},mobileSM:function(){return this.$vuetify.breakpoint.width<1024}}},G=F,O=(a("dc3f"),a("b0af")),R=a("99d9"),H=a("8414"),D=a("1e06"),$=Object(m["a"])(G,I,E,!1,null,"90763e4a",null),W=$.exports;p()($,{VCard:O["a"],VCardSubtitle:R["a"],VCardText:R["b"],VCardTitle:R["c"],VTimeline:H["a"],VTimelineItem:D["a"]});var K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("div",{staticClass:"display-2 particleLayer"},[e._v("Навыки")]),a("div",{staticClass:"subtitle-1 particleLayer"},[e._v("Мои суперспособности =)")]),a("br"),e._l(e.skills,(function(t){return a("div",{staticClass:"pb-3"},[a("div",{staticClass:"title pb-2 particleLayer"},[e._v(e._s(t.title))]),e._l(t.items,(function(t){return a("v-hover",{staticClass:"particleLayer",scopedSlots:e._u([{key:"default",fn:function(i){var s=i.hover;return[a("v-btn",{staticClass:"mr-3 mb-3",attrs:{tag:"span",color:s?"grey lighten-5":"grey darken-1",outlined:"",rounded:"",small:""}},[e._v(e._s(t))])]}}],null,!0)})}))],2)}))],2)},N=[],J={name:"Skills",data:function(){return{message:"Слава Одину, Skills работает!",skill:["HTML","HTML5","Jade","Pug","CSS","CSS3","Sass","SCSS","js","ES6","jQuery","jQuery UI","Angular 2+","NgRx","Angular Material design","Vue","Vuex","Vue-router","Vuetify","Firebase","Bootstrap","Git","BEM","SPA (Vue, Angular, React)","Ajax","Figma","Avocode","Zeplin","Adobe Photoshop","Adobe Illustrator","Adobe XD","CMS Wordpress","OpenCart CMS","Joomla CMS"],skills:[{title:"Языки программирования:",items:["HTML","HTML5","Jade","Pug","CSS","CSS3","Sass","SCSS","JavaScript","ES6","TypeScript"]},{title:"Фрэймворки и библиотеки:",items:["jQuery","jQuery UI","Angular 2+","NgRx","Angular Material design","Vue","Vuex","Vue-router","Vuetify","Firebase","Bootstrap"]},{title:"Вспомогательные технологии:",items:["Git","BEM","SPA (Vue, Angular, React)","Ajax","Figma","Avocode","Zeplin","Adobe Photoshop","Adobe Illustrator","Adobe XD","CMS Wordpress","OpenCart CMS","Joomla CMS"]}]}}},z=J,Z=(a("ba28"),a("8336")),Q=a("ce87"),U=Object(m["a"])(z,K,N,!1,null,"525cb8f0",null),Y=U.exports;p()(U,{VBtn:Z["a"],VHover:Q["a"]});var X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"portfolioBox"},[e.isShowGallery?a("ImageGallery",{staticClass:"imageGallery",attrs:{isShow:e.isShowGallery,src:e.imagesForGallery},on:{hide:function(t){e.isShowGallery=!1,e.imagesForGallery=null}}}):e._e(),a("v-carousel",{staticClass:"particleLayer",attrs:{"show-arrows-on-hover":"",height:"100vh","hide-delimiter-background":!0,"hide-delimiters":!1}},e._l(e.portfolio,(function(t,i){return a("v-carousel-item",{key:i,staticClass:"carouselItem"},[a("v-container",{staticClass:"height",attrs:{fluid:""}},[a("v-row",{class:e.mobile?"flex-column":"height",attrs:{align:"center",justify:"center"}},[a("v-col",[a("div",{staticClass:"portfolio__description"},[a("h3",{staticClass:"headline"},[e._v(e._s(t.name))]),a("br"),a("p",{staticClass:"body-2",domProps:{innerHTML:e._s(t.desc)}}),a("ul",e._l(t.tech,(function(t){return a("li",[e._v(e._s(t))])})),0),a("br"),t.view?a("v-btn",{staticClass:"portfolio__btn mr-2",attrs:{href:t.view,target:"_blank",outlined:""}},[e._v("View")]):e._e(),t.code?a("v-btn",{staticClass:"portfolio__btn",attrs:{href:t.code,target:"_blank",outlined:""}},[e._v("Code")]):e._e()],1)]),a("v-col",{class:e.mobile?"order-first":""},[a("img",{staticClass:"carouselItem__image",attrs:{src:t.src,alt:t.alt},on:{click:function(a){return e.showGallery(t.gallery)}}})])],1)],1)],1)})),1)],1)},q=[],ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vue-easy-lightbox",{staticClass:"particleLayer",attrs:{escDisabled:"",moveDisabled:!1,visible:e.isShow,imgs:e.src,index:e.index,loop:!0},on:{hide:e.handleHide}})},te=[],ae=a("825ae"),ie={name:"ImageGallery",props:{isShow:Boolean,src:Array},components:{VueEasyLightbox:ae["a"]},data:function(){return{index:0,message:"Слава Одину, ImageGallery работает!"}},methods:{handleHide:function(){this.$emit("hide")}}},se=ie,re=Object(m["a"])(se,ee,te,!1,null,"137d1ec1",null),ne=re.exports,oe={name:"Portfolio",components:{ImageGallery:ne},data:function(){var e="/";return{isShowGallery:!1,imagesForGallery:null,portfolio:[{src:e+"./images/TimeWEBtest.png",gallery:[e+"./images/TimeWEBtest.png",e+"./images/TimeWEBtest/TimeWEBtest_1.jpg",e+"./images/TimeWEBtest/TimeWEBtest_2.jpg",e+"./images/TimeWEBtest/TimeWEBtest_3.jpg",e+"./images/TimeWEBtest/TimeWEBtest_4.jpg"],alt:"TimeWEB test",name:"TimeWEB test",code:"https://github.com/Deathmetalldrummer/TimewebTest",view:"https://timewebtest-ecfdd.web.app/",desc:"Тестовое задание для TimeWEB: сделать небольшой аналог тильды<br />Октябрь 2020",tech:["Vue","Vuex","Vuetify","Firebase"]},{src:e+"./images/RNTO.jpg",gallery:[e+"./images/RNTO.jpg"],alt:"RNTO",name:"RNTO",code:null,view:null,desc:"Админка для сайта визового центра.Проект с нуля, единственный фронтист на проекте.<br />Март - Июль 2020",tech:["Angular 9","NgRx","Material Angular","RESTful API"]},{src:e+"./images/TableUI.png",gallery:[e+"./images/TableUI.png"],alt:"TableUI",name:"Table UI",code:"https://github.com/Deathmetalldrummer/TableUI",view:"https://deathmetalldrummer.github.io/TableUI/",desc:"Тестовое задание.<br />Май - Август 2020",tech:["Vue","Vuex"]},{src:e+"./images/GitHubSearch.png",gallery:[e+"./images/GitHubSearch.png"],alt:"GitHubSearch",name:"GitHubSearch",code:"https://github.com/Deathmetalldrummer/GitHubSearch",view:"https://deathmetalldrummer.github.io/GitHubSearch/",desc:"Тестовое задание.<br />Июль 2020.",tech:["Angular 9","NgRx","Material Angular","GitHub API"]},{src:e+"./images/SteamConference.jpg",gallery:[e+"./images/SteamConference.jpg"],alt:"Steam Conference",name:"Steam Conference",code:"https://github.com/Deathmetalldrummer/Steam-Conference",view:"https://deathmetalldrummer.github.io/Steam-Conference/",desc:"Верстка лэндинга для практики.<br />2020-2021",tech:["HTML5","CSS3","Adaptive","Responsive","Gulp","8 Themes"]},{src:e+"./images/Bakery.jpg",gallery:[e+"./images/Bakery.jpg",e+"./images/Bakery/Bakery_1.jpg"],alt:"Bakery",name:"Bakery",code:"https://github.com/Deathmetalldrummer/Bakery",view:"https://deathmetalldrummer.github.io/Bakery/source/build/",desc:"Bakery <br />Июнь-Август 2019",tech:["HTML5","CSS3","Pug","Sass","JS","jQuery","Gulp 4","Adaptive fonts"]},{src:e+"./images/Agency.jpg",gallery:[e+"./images/Agency.jpg"],alt:"Agency",name:"Agency",code:"https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/Agency/",view:"https://kirk-terekhin.github.io/Landings/Agency/",desc:"Верстка лэндинга для практики.<br />2015",tech:["HTML5","CSS3","Bootstrap","Adaptive","Responsive"]},{src:e+"./images/CorporateLandingPage.jpg",gallery:[e+"./images/CorporateLandingPage.jpg"],alt:"Corporate Landing Page",name:"Corporate Landing Page",code:"https://github.com/Kirk-Terekhin/Corporate-Landing-Page/",view:"https://kirk-terekhin.github.io/Corporate-Landing-Page/",desc:"Верстка лэндинга для практики.<br />2017",tech:["HTML5","CSS3","Bootstrap","Adaptive","Responsive"]},{src:e+"./images/Logstyle.jpg",gallery:[e+"./images/Logstyle.jpg"],alt:"Log-style",name:"Log-style",code:"https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/logstyle/",view:"https://kirk-terekhin.github.io/Landings/logstyle",desc:"Копия сайта log-style.ru.<br />2015",tech:["HTML5","CSS3","Bootstrap","Adaptive","Responsive","WoW.js"]},{src:e+"./images/Gift.jpg",gallery:[e+"./images/Gift.jpg",e+"./images/Gift/Gift_1.jpg",e+"./images/Gift/Gift_2.jpg",e+"./images/Gift/Gift_3.jpg",e+"./images/Gift/Gift_4.jpg",e+"./images/Gift/Gift_5.jpg",e+"./images/Gift/Gift_6.jpg"],alt:"Gift.kg",name:"Gift.kg",code:"https://github.com/Kirk-Terekhin/Gift/",view:"https://giftkg.000webhostapp.com/",desc:"Создание магазина новогодних подарков на CMS OpenCart.<br />Ноябрь - Декабрь 2014",tech:["HTML5","CSS3","OpenCart CMS"]},{src:e+"./images/TZ.jpg",gallery:[e+"./images/TZ.jpg"],alt:"TZ",name:"TZ",code:"https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/TZ/",view:"https://kirk-terekhin.github.io/Landings/TZ/",desc:"Тестовое задание.<br />2015",tech:["HTML5","CSS3","Adaptive","Responsive"]},{src:e+"./images/LandingPage.jpg",gallery:[e+"./images/LandingPage.jpg"],alt:"Landing Page",name:"Landing Page",code:"https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/LandingPage/",view:"https://kirk-terekhin.github.io/Landings/LandingPage/",desc:"Верстка лэндинга для практики.<br />2016",tech:["HTML5","CSS3","Bootstrap","Adaptive","Responsive"]},{src:e+"./images/NightVision.jpg",gallery:[e+"./images/NightVision.jpg"],alt:"NightVision",name:"NightVision",code:"https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/NightVision/",view:"https://kirk-terekhin.github.io/Landings/NightVision/",desc:"Верстка лэндинга для практики.<br />2015",tech:["HTML5","CSS3","Bootstrap","Adaptive","Responsive"]},{src:e+"./images/Bootstrap.jpg",gallery:[e+"./images/Bootstrap.jpg"],alt:"Bootstrap",name:"Bootstrap",code:"https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/Bootstrap/",view:"https://kirk-terekhin.github.io/Landings/Bootstrap/",desc:"Верстка лэндинга для практики.Bootstrap.<br />2015",tech:["HTML5","CSS3","Bootstrap","Adaptive","Responsive"]},{src:e+"./images/Sakura.jpg",gallery:[e+"./images/Sakura.jpg",e+"./images/Sakura/Sakura_1.jpg",e+"./images/Sakura/Sakura_2.jpg",e+"./images/Sakura/Sakura_3.jpg"],alt:"Sakura",name:"Sakura",code:"https://github.com/Kirk-Terekhin/Sakura/",view:"https://kirk-terekhin.github.io/Sakura/",desc:"Верстка сайта.<br />Декабрь 2015",tech:["HTML5","CSS3","jQuery","Adaptive","Responsive"]},{src:e+"./images/PageOnlineStore.jpg",gallery:[e+"./images/PageOnlineStore.jpg"],alt:"PageOnlineStore",name:"PageOnlineStore",code:"https://github.com/Kirk-Terekhin/PageOnlineStore/",view:"https://kirk-terekhin.github.io/PageOnlineStore/",desc:"Верстка страницы интернет магазина для практики.<br />Апрель 2016",tech:["HTML5","CSS3","jQuery"]},{src:e+"./images/Karacenter.jpg",gallery:[e+"./images/Karacenter.jpg"],alt:"KaraCenter",name:"KaraCenter",code:"https://github.com/Kirk-Terekhin/KaraCenter",view:"https://karacenterkg.000webhostapp.com/",desc:"Создание Landing Page на CMS Joomla.<br />2015",tech:["HTML5","CSS3","Bootstrap","Adaptive","Responsive","CMS Joomla"]},{src:e+"./images/Connect.jpg",gallery:[e+"./images/Connect.jpg",e+"./images/Connect/Connect_1.jpg",e+"./images/Connect/Connect_2.jpg"],alt:"Connect.kg",name:"Connect.kg",code:"https://github.com/Kirk-Terekhin/Connect",view:"https://connect-kg.000webhostapp.com/",desc:"Колл центр Connect. CMS Joomla.<br />2016",tech:["HTML5","CSS3","Bootstrap","Adaptive","Responsive","CMS Joomla"]},{src:e+"./images/Family.jpg",gallery:[e+"./images/Family.jpg",e+"./images/Family/Family_1.jpg",e+"./images/Family/Family_2.jpg",e+"./images/Family/Family_3.jpg",e+"./images/Family/Family_4.jpg"],alt:"Family.kg",name:"Family.kg",code:"https://github.com/Kirk-Terekhin/Family",view:"https://familykg.000webhostapp.com/",desc:'Дом отдыха "Семья". CMS Joomla.<br />2015',tech:["HTML5","CSS3","Bootstrap","Adaptive","Responsive","CMS Joomla"]},{src:e+"./images/DrumTab.jpg",gallery:[e+"./images/DrumTab.jpg"],alt:"Drum Tab",name:"Drum Tab",code:"https://github.com/Kirk-Terekhin/Drum-Tab",view:"https://ragnarokdrum.stackblitz.io/list",desc:"Первое приложение на Angular (4v).Без стилей,только функционал.<br />Май 2017",tech:["HTML5","CSS3","Angular"]},{src:e+"./images/YgarockAPP.jpg",gallery:[e+"./images/YgarockAPP.jpg"],alt:"YgarockAPP",name:"YgarockAPP",code:"https://github.com/Deathmetalldrummer/YgarockAPP/",view:"https://deathmetalldrummer.github.io/YgarockAPP/source/build/",desc:"Не знаю для чего это веб-приложение, но ходят слухи, что оно показывает в каком из списков есть совпадения по поиску.<br />Сентябрь 2019",tech:["HTML5","CSS3","jQuery","Bootstrap"]}]}},methods:{showGallery:function(e){e&&e.length&&(this.isShowGallery=!0,this.imagesForGallery=e)}},computed:{mobile:function(){return this.$vuetify.breakpoint.width<768}}},le=oe,ce=(a("46fd"),a("5e66")),me=a("3e35"),ue=a("62ad"),pe=a("a523"),ge=a("0fd9"),de=Object(m["a"])(le,X,q,!1,null,"415e700c",null),he=de.exports;p()(de,{VBtn:Z["a"],VCarousel:ce["a"],VCarouselItem:me["a"],VCol:ue["a"],VContainer:pe["a"],VRow:ge["a"]});var ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("v-row",{staticClass:"mb-5",attrs:{"no-gutters":""}},[a("v-col",{attrs:{xs:"12",sm:"12",md:"12"}},[a("div",{staticClass:"display-2 particleLayer"},[e._v("Контакты")]),a("div",{staticClass:"subtitle-1 particleLayer"},[e._v("Звоните пишите!")])])],1),a("v-row",{attrs:{"no-gutters":""}},[e.mobileSM?e._e():a("v-col",{attrs:{xs:"12",md:"5"}},[e.sendSuccess?a("div",{staticClass:"body-1",domProps:{innerHTML:e._s(e.sendSuccess)}}):a("v-form",{ref:"form",staticClass:"formDisabled pt-2",attrs:{"lazy-validation":e.lazy,disabled:""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{dense:"",outlined:"",counter:32,rules:e.nameRules,label:"Имя",name:"name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{attrs:{dense:"",outlined:"",rules:e.emailRules,label:"Мыло",required:"",name:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-textarea",{attrs:{dense:"",outlined:"",rules:e.textRules,label:"Текст",name:"text"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e.sendError?a("p",{staticClass:"red--text",domProps:{innerHTML:e._s(e.sendError)}}):e._e(),a("v-btn",{attrs:{disabled:!e.valid,light:"",color:"white",block:"",type:"submit"},on:{click:function(t){return e.send(t)}}},[e._v("Отправить")])],1)],1),a("v-col",{attrs:{xs:"12",lg:"5",md:!e.mobileSM&&6,"offset-md":e.mobileSM?0:1}},[a("v-list",{staticClass:"pa-0"},[a("v-list-item",{staticClass:"particleLayer"},[a("v-list-item-icon",[a("v-icon",{attrs:{large:""}},[e._v("mdi-map-marker-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Location")]),a("v-list-item-subtitle",[e._v("Bishkek/Kyrgyzstan")])],1)],1),a("v-list-item",{staticClass:"particleLayer"},[a("v-list-item-icon",[a("a",{staticClass:"linkIcon",attrs:{href:"mailto:kirk.terekhin@gmail.com",target:"_blank"}},[a("v-icon",{attrs:{large:""}},[e._v("mdi-email")])],1)]),a("v-list-item-content",[a("v-list-item-title",[e._v("E-mail")]),a("v-list-item-subtitle",[e._v("kirk.terekhin@gmail.com")])],1)],1),a("v-list-item",{staticClass:"particleLayer"},[a("v-list-item-icon",[a("a",{staticClass:"linkIcon",attrs:{href:"tel:+996778363380",target:"_blank"}},[a("v-icon",{attrs:{large:""}},[e._v("mdi-phone")])],1)]),a("v-list-item-content",[a("v-list-item-title",[e._v("Phone")]),a("v-list-item-subtitle",[e._v("+996 778 36 33 80")])],1)],1),a("v-list-item",{staticClass:"particleLayer"},[a("v-list-item-icon",[a("a",{staticClass:"linkIcon linkIcon_telegram",attrs:{href:"tg://resolve?domain=kirk_terekhin",target:"_blank"}},[a("Icons",{staticClass:"icon_telegram",attrs:{name:"telegram"}})],1)]),a("v-list-item-content",[a("v-list-item-title",[e._v("Telegram")]),a("v-list-item-subtitle",[e._v("kirk_terekhin")])],1)],1),a("v-list-item",{staticClass:"particleLayer"},[a("v-list-item-icon",[a("a",{staticClass:"linkIcon",attrs:{href:"skype:kirk.terekhin",target:"_blank"}},[a("v-icon",{attrs:{large:""}},[e._v("mdi-skype")])],1)]),a("v-list-item-content",[a("v-list-item-title",[e._v("Skype")]),a("v-list-item-subtitle",[e._v("kirk.terekhin")])],1)],1)],1)],1)],1)],1)],1)},fe=[],be=(a("b0c0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"icons"},["telegram"===e.name?a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[a("path",{attrs:{d:"M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"}})]):e._e()])}),ke=[],ye={name:"Icons",props:{name:String},data:function(){return{message:"Слава Одину, Icons работает!"}}},Ce=ye,_e=(a("8feb"),Object(m["a"])(Ce,be,ke,!1,null,"885b833e",null)),Se=_e.exports,Te={name:"Contact",components:{Icons:Se},data:function(){return{valid:!0,name:"",nameRules:[function(e){return e.length<=32||"Имя должно быть не больше 32 символов."}],email:"",emailRules:[function(e){return!!e||"Мыло обязательно!"},function(e){return/.+@.+\..+/.test(e)||"Мыло не той фирмы"}],text:"",textRules:[],lazy:!1}},computed:{sendSuccess:function(){return this.$store.getters.sendSuccess},sendError:function(){return this.$store.getters.sendError},mobileSM:function(){return this.$vuetify.breakpoint.width<1024}},methods:{send:function(e){if(e.preventDefault(),this.$refs.form.validate(),this.valid){var t={name:this.name,text:this.text,email:this.email};this.$store.dispatch("sendMail",t)}}}},je=Te,we=(a("654b"),a("4bd4")),Le=a("132d"),xe=a("34c3"),Me=a("8654"),Ae=a("a844"),Ve=Object(m["a"])(je,ve,fe,!1,null,"37035ee1",null),Pe=Ve.exports;p()(Ve,{VBtn:Z["a"],VCol:ue["a"],VContainer:pe["a"],VForm:we["a"],VIcon:Le["a"],VList:d["a"],VListItem:h["a"],VListItemContent:f["a"],VListItemIcon:xe["a"],VListItemSubtitle:f["b"],VListItemTitle:f["c"],VRow:ge["a"],VTextField:Me["a"],VTextarea:Ae["a"]});var Be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("h1",{staticClass:"main__title"},[e._v("Терёхин Кирилл")]),a("p",{staticClass:"main__subtitle"},[e._v("Frontend-разработчик")]),a("br"),a("v-btn",{staticClass:"particleLayer",attrs:{outlined:"",href:"https://hh.ru/resume/23a4d105ff077b4cae0039ed1f58564b627876",target:"_blank"}},[a("span",{staticClass:"main__btnText"},[e._v("Резюме")]),a("v-icon",[e._v("mdi-launch")])],1)],1)},Ie=[],Ee={name:"Main",data:function(){return{message:"Слава Одину, Main работает!"}}},Fe=Ee,Ge=(a("1c33"),Object(m["a"])(Fe,Be,Ie,!1,null,"ca40e814",null)),Oe=Ge.exports;p()(Ge,{VBtn:Z["a"],VIcon:Le["a"]}),i["a"].use(L["a"]);var Re=[{path:"",name:"Main",component:Oe},{path:"about",name:"About",component:B},{path:"/experience",name:"Experience",component:W},{path:"/skills",name:"Skills",component:Y},{path:"/portfolio",name:"Portfolio",component:he},{path:"/contact",name:"Contact",component:Pe}],He=new L["a"]({mode:"history",base:"/",routes:Re}),De=He,$e=(a("99af"),a("2f62"));i["a"].use($e["a"]);var We=new $e["a"].Store({state:{sendSuccess:null,sendError:null},getters:{sendSuccess:function(e){return e.sendSuccess},sendError:function(e){return e.sendError}},mutations:{sendSuccess:function(e,t){e.sendSuccess=t},sendError:function(e,t){e.sendError=t}},actions:{sendMail:function(e,t){var a=t.name,i=t.email,s=t.text;console.log({from:"Portfolio app <kirk.terekhin@portfolio.io>",to:["kirk.terekhin@gmail.com"],subject:"Новое сообщение с сайта портфолио",text:"Сообщение от ".concat(i),html:"<ul><li>Имя: ".concat(a,"</li><li>Почта: ").concat(i,"</li><li>Текст сообщения: ").concat(s,"</li></ul>")})}},modules:{}}),Ke=a("f309"),Ne=a("2992"),Je=a.n(Ne);i["a"].use(Ke["a"]);var ze=new Ke["a"]({theme:{dark:!0,options:{customProperties:!0},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{ru:Je.a},current:"ru"}}),Ze=a("98c9");i["a"].config.productionTip=!1,i["a"].use(Ze["a"]),new i["a"]({router:De,store:We,vuetify:ze,render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var i=a("7694"),s=a.n(i);s.a},"654b":function(e,t,a){"use strict";var i=a("3c69"),s=a.n(i);s.a},6893:function(e,t,a){"use strict";var i=a("d1ec"),s=a.n(i);s.a},7694:function(e,t,a){},"8feb":function(e,t,a){"use strict";var i=a("e8a7"),s=a.n(i);s.a},ba28:function(e,t,a){"use strict";var i=a("0d6c"),s=a.n(i);s.a},d1ec:function(e,t,a){},dc3f:function(e,t,a){"use strict";var i=a("120e"),s=a.n(i);s.a},e416:function(e,t,a){},e8a7:function(e,t,a){},fe4f:function(e,t,a){}});
//# sourceMappingURL=app.ea090c6f.js.map