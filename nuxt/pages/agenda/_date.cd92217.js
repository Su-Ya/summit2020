(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{608:function(t,e,n){t.exports=n.p+"img/agenda-bg-left.2a92389.svg"},609:function(t,e,n){t.exports=n.p+"img/agenda-bg-right.161b16b.svg"},621:function(t,e,n){var content=n(654);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("40b6cbfe",content,!0,{sourceMap:!1})},622:function(t,e,n){var content=n(656);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("0340b8fc",content,!0,{sourceMap:!1})},623:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"minuteUnit":"mins"},"zh":{"minuteUnit":"分鐘"}}'),delete t.options._Ctor}},624:function(t,e,n){var content=n(659);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("a94b0ff4",content,!0,{sourceMap:!1})},625:function(t,e,n){var content=n(661);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("c9072ba8",content,!0,{sourceMap:!1})},626:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"2020-12-03":"Thu, Dec 3","2020-12-04":"Fri, Dec 4","2020-12-05":"Sat, Dec 5","2020-12-06":"Sun, Dec 6"},"zh":{"2020-12-03":"12/03 （四）","2020-12-04":"12/04 （五）","2020-12-05":"12/05 （六）","2020-12-06":"12/06 （日）"}}'),delete t.options._Ctor}},637:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",c="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},h={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:u,y:o,w:s,d:i,D:c,h:r,m:n,s:e,ms:t,Q:a}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",_={};_[v]=l;var y=function(t){return t instanceof w},$=function(t,e,n){var r;if(!t)return v;if("string"==typeof t)_[t]&&(r=t),e&&(_[t]=e,r=t);else{var i=t.name;_[i]=t,r=i}return!n&&r&&(v=r),r||!n&&v},O=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},g=h;g.l=$,g.i=y,g.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function l(t){this.$L=this.$L||$(t.locale,null,!0),this.parse(t)}var m=l.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return g},m.isValid=function(){return!("Invalid Date"===this.$d.toString())},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,a){var d=this,f=!!g.u(a)||a,l=g.p(t),m=function(t,e){var n=g.w(d.$u?Date.UTC(d.$y,e,t):new Date(d.$y,e,t),d);return f?n:n.endOf(i)},h=function(t,e){return g.w(d.toDate()[t].apply(d.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),d)},v=this.$W,_=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(l){case o:return f?m(1,0):m(31,11);case u:return f?m(1,_):m(0,_+1);case s:var O=this.$locale().weekStart||0,w=(v<O?v+7:v)-O;return m(f?y-w:y+(6-w),_);case i:case c:return h($+"Hours",0);case r:return h($+"Minutes",1);case n:return h($+"Seconds",2);case e:return h($+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(s,a){var d,f=g.p(s),l="set"+(this.$u?"UTC":""),m=(d={},d[i]=l+"Date",d[c]=l+"Date",d[u]=l+"Month",d[o]=l+"FullYear",d[r]=l+"Hours",d[n]=l+"Minutes",d[e]=l+"Seconds",d[t]=l+"Milliseconds",d)[f],h=f===i?this.$D+(a-this.$W):a;if(f===u||f===o){var v=this.clone().set(c,1);v.$d[m](h),v.init(),this.$d=v.set(c,Math.min(this.$D,v.daysInMonth())).$d}else m&&this.$d[m](h);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[g.p(t)]()},m.add=function(t,a){var c,d=this;t=Number(t);var f=g.p(a),l=function(e){var n=O(d);return g.w(n.date(n.date()+Math.round(e*t)),d)};if(f===u)return this.set(u,this.$M+t);if(f===o)return this.set(o,this.$y+t);if(f===i)return l(1);if(f===s)return l(7);var m=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[f]||1,h=this.$d.getTime()+t*m;return g.w(h,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,c=i.months,d=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},l=function(t){return g.s(s%12||12,t,"0")},m=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:d(i.monthsShort,a,c,3),MMMM:d(c,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:d(i.weekdaysMin,this.$W,o,2),ddd:d(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:l(1),hh:l(2),a:m(s,u,!0),A:m(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(f,(function(t,e){return e||h[t]||r.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(t,c,d){var f,l=g.p(c),m=O(t),h=6e4*(m.utcOffset()-this.utcOffset()),v=this-m,_=g.m(this,m);return _=(f={},f[o]=_/12,f[u]=_,f[a]=_/3,f[s]=(v-h)/6048e5,f[i]=(v-h)/864e5,f[r]=v/36e5,f[n]=v/6e4,f[e]=v/1e3,f)[l]||v,d?_:g.a(_)},m.daysInMonth=function(){return this.endOf(u).$D},m.$locale=function(){return _[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=$(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return g.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},l}(),p=w.prototype;return O.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",c]].forEach((function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t(e,w,O),O},O.locale=$,O.isDayjs=y,O.unix=function(t){return O(1e3*t)},O.en=_[v],O.Ls=_,O}()},653:function(t,e,n){"use strict";var r=n(621);n.n(r).a},654:function(t,e,n){(e=n(21)(!1)).push([t.i,".roomcard[data-v-ec956874]{color:#555}",""]),t.exports=e},655:function(t,e,n){"use strict";var r=n(622);n.n(r).a},656:function(t,e,n){(e=n(21)(!1)).push([t.i,".agendacard[data-v-e4f7b49a]{background:#f8f8f8;padding:1rem .75rem}.agendacard__time[data-v-e4f7b49a]{color:#303030}.agendacard__title[data-v-e4f7b49a]{color:#0eafc9}.agendacard__tag[data-v-e4f7b49a]{border-radius:999px;color:#fff;font-size:.75rem;margin-top:.25rem;background:#67cddd;padding:.125rem .5rem}.agendacard__tag[data-v-e4f7b49a]:not(:first-child){margin-left:.25rem}",""]),t.exports=e},657:function(t,e,n){"use strict";var r=n(623),o=n.n(r);e.default=o.a},658:function(t,e,n){"use strict";var r=n(624);n.n(r).a},659:function(t,e,n){(e=n(21)(!1)).push([t.i,".dailyagenda[data-v-5fa565ea]{display:grid;justify-content:center;align-items:stretch;grid-column-gap:.5rem;-moz-column-gap:.5rem;column-gap:.5rem;grid-row-gap:.5rem;row-gap:.5rem}.dailyagenda__header[data-v-5fa565ea]{grid-row-start:1}.dailyagenda__all[data-v-5fa565ea]{grid-column-start:room-start;grid-column-end:room-end}.dailyagenda__body3[data-v-5fa565ea]{grid-row-start:3;grid-row-end:span 3}.dailyagenda__body2[data-v-5fa565ea]{grid-row-start:7;grid-row-end:span 2}",""]),t.exports=e},660:function(t,e,n){"use strict";var r=n(625);n.n(r).a},661:function(t,e,n){var r=n(21),o=n(209),c=n(608),d=n(609);e=r(!1);var f=o(c),l=o(d);e.push([t.i,".agenda[data-v-4a59ca9a]{padding:1rem;background-image:url("+f+"),url("+l+");background-position:left -10.5rem top 15rem,right -10em top;background-repeat:no-repeat}@media screen and (min-width:30em) and (max-width:60em){.agenda[data-v-4a59ca9a]{padding:2.5rem 6.5rem;background-position:left -6rem top 15rem,right -4.5rem top}}@media screen and (min-width:60em){.agenda[data-v-4a59ca9a]{padding:5rem 12rem;background-position:left top 15rem,100% 0}}.agenda__content[data-v-4a59ca9a]{margin-top:5.25rem}.datemenu .nuxt-link-exact-active .datemenu__date[data-v-4a59ca9a]{border-color:#f779ee;color:#f779ee}.datemenu__title[data-v-4a59ca9a]{color:#6e6e6e}.datemenu__date[data-v-4a59ca9a]{color:#c2c0c0;min-width:10.5rem;padding:.625rem 1.375rem 0;margin-top:.75rem;border-color:transparent}",""]),t.exports=e},662:function(t,e,n){"use strict";var r=n(626),o=n.n(r);e.default=o.a},677:function(t,e,n){"use strict";n.r(e);n(54),n(25);var r=n(23),o=(n(26),n(74),n(45),n(24),n(13),n(448),n(56),n(145)),c=(n(75),n(637)),d=n.n(c),f=(n(55),{props:{name:{type:String,required:!0}},computed:{roomToken:function(){return this.name.split(" - ")},building:function(){return this.roomToken.length>1?this.roomToken.slice(0,-1).join("-").trim():this.name.trim()},room:function(){return this.roomToken.length>1?this.roomToken[this.roomToken.length-1].trim():""}}}),l=(n(653),n(10)),m=Object(l.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"roomcard tc"},[e("div",{staticClass:"fw5 f4"},[this._v(this._s(this.building))]),e("div",{staticClass:"fw3"},[this._v(this._s(this.room))])])}),[],!1,null,"ec956874",null).exports,h={props:{agenda:{type:Object,required:!0}},computed:{time:function(){return this.agenda.timeSheet||console.warn(this.agenda,this.agenda.timeSheet),this.agenda.timeSheet},fromTime:function(){return d()(this.time.議程開始時間).format("HH:mm")},duration:function(){return this.time.議程長度},toTime:function(){return d()(this.time.議程開始時間).add(this.duration,"m").format("HH:mm")},title:function(){return this.agenda.title},speakers:function(){var t=this.agenda.speakers||[];return t.map((function(t){return t.display_name})).join(" ")},lang:function(){return this.agenda.oral_language_other||this.agenda.oral_language}}},v=(n(655),n(657)),_=Object(l.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"agendacard br2 h-100"},[n("div",{staticClass:"agendacard__time flex justify-between mb3"},[n("div",{staticClass:"f7"},[t._v(t._s(t.fromTime)+" - "+t._s(t.toTime))]),n("div",{staticClass:"f7"},[t._v(t._s(t.duration)+t._s(t.$t("minuteUnit")))])]),n("div",{staticClass:"agendacard__title mv2 f6 fw5"},[t._v(t._s(t.title))]),n("div",{staticClass:"agendacard__speakers mv2 f7"},[t._v(t._s(t.speakers))]),n("div",{staticClass:"flex mt4"},[t.lang?n("div",{staticClass:"agendacard__tag"},[t._v(t._s(t.lang))]):t._e()])])}),[],!1,null,"e4f7b49a",null);"function"==typeof v.default&&Object(v.default)(_);var y=_.exports;function $(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={components:{RoomCard:m,AgendaCard:y},props:{agendaPerRoom:{type:Array,required:!0,validator:function(t){return t.every((function(t){return t.name&&Array.isArray(t.agendaList)}))}}},computed:{regularRooms:function(){var t=this;return this.agendaPerRoom.filter((function(t){return"ALL"!==t.name})).map((function(e,n){return t.decorateLayout(e,n)}))},crossRoom:function(){var t=this.agendaPerRoom.find((function(t){return"ALL"===t.name}));return t?this.decorateLayout(t,0,this.regularRooms.length):{}},gridStyle:function(){var t=this.agendaPerRoom.filter((function(t){return"ALL"!==t.name})).length;return{gridTemplateColumns:"repeat(".concat(t,", 13rem)")}},eventStartTime:function(){return Math.min.apply(Math,Object(o.a)(this.agendaPerRoom.filter((function(t){return t.agendaList.length})).map((function(t){return d()(t.agendaList[0].timeSheet.議程開始時間)}))))}},methods:{agendaStyle:function(t){return{gridColumn:"".concat(t.layout.columnStart," / span ").concat(t.layout.columnSpan),gridRow:"".concat(t.layout.rowStart," / span ").concat(t.layout.rowSpan)}},decorateLayout:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=e+1;return{name:t.name,index:o,agendaList:t.agendaList.map((function(t){var e=(d()(t.timeSheet.議程開始時間)-n.eventStartTime)/3e5+2,c=t.timeSheet.議程長度/5;return O(O({},t),{},{layout:{columnStart:o,columnSpan:r,rowStart:e,rowSpan:c}})}))}}}},S=(n(658),Object(l.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dailyagenda",style:t.gridStyle},[t._l(t.regularRooms,(function(e){return[n("div",{key:e.name,staticClass:"dailyagenda__header"},[n("room-card",{attrs:{name:e.name}})],1),t._l(e.agendaList,(function(e){return n("div",{key:e.id,staticClass:"dailyagenda__item",style:t.agendaStyle(e)},[n("agenda-card",{attrs:{agenda:e}})],1)}))]})),t._l(t.crossRoom.agendaList,(function(e){return n("div",{key:e.id,staticClass:"dailyagenda__item",style:t.agendaStyle(e)},[n("agenda-card",{attrs:{agenda:e}})],1)}))],2)}),[],!1,null,"5fa565ea",null).exports);function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function M(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j=["2020-12-04","2020-12-05","2020-12-06"],x={components:{DailyAgenda:S},computed:{isDateValid:function(){return j.includes(this.$route.params.date)},dateList:function(){return j.map((function(t,e){return{index:e+1,date:t}}))},targetDate:function(){return this.isDateValid?this.$route.params.date:"2020-12-04"},agendaPerRoom:function(){var t=this,e=this.$t("proposal/map"),n=Object.values(e).filter((function(e){return e.timeSheet.議程日期===t.targetDate})).sort((function(t){return t.timeSheet.議程開始時間})).reduce((function(t,e){var n=e.timeSheet.議程場地;return n in t||(t[n]=[]),t[n].push(e),t}),{});return Object.keys(n).map((function(t){return{name:t,agendaList:n[t]}}))}},watch:{isDateValid:function(t){this.checkDate()}},mounted:function(){this.checkDate()},methods:{checkDate:function(){this.isDateValid||this.$router.replace({name:this.$route.name,params:M(M({},this.$route.params),{},{date:"2020-12-04"})})}}},k=(n(660),n(662)),C=Object(l.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"agenda"},[n("div",{staticClass:"agenda__menu flex justify-center"},[n("div",{staticClass:"datemenu flex"},t._l(t.dateList,(function(e){return n("nuxt-link",{key:e.index,staticClass:"datemenu__item tc f4 mh2",attrs:{to:t.localePath("/agenda/"+e.date)}},[n("div",{staticClass:"datemenu__title b"},[t._v("Day"+t._s(e.index))]),n("div",{staticClass:"datemenu__date fw5 bt"},[t._v(t._s(t.$t(e.date)))])])})),1)]),n("div",{staticClass:"agenda__content flex justify-center"},[n("daily-agenda",{attrs:{"agenda-per-room":t.agendaPerRoom}})],1)])}),[],!1,null,"4a59ca9a",null);"function"==typeof k.default&&Object(k.default)(C);e.default=C.exports}}]);