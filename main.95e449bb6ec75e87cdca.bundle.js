webpackJsonp([5],{0:function(e,t,a){e.exports=a("cDNt")},B7HU:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var o=a("xTJO"),r=a("Pzo0"),i=a("asHm"),n=(a.n(i),a("l3Q+")),s=(a.n(n),function(){function e(e,t,a,o,r){var i=this;this.stateService=e,this.menuService=t,this.themeService=a,this.bpService=o,this.sidebarService=r,this.subMenu=[{title:"PAGE LEVEL MENU",group:!0},{title:"Buttons",icon:"ion ion-android-radio-button-off",link:"/pages/ui-features/buttons"},{title:"Grid",icon:"ion ion-android-radio-button-off",link:"/pages/ui-features/grid"},{title:"Icons",icon:"ion ion-android-radio-button-off",link:"/pages/ui-features/icons"},{title:"Modals",icon:"ion ion-android-radio-button-off",link:"/pages/ui-features/modals"},{title:"Typography",icon:"ion ion-android-radio-button-off",link:"/pages/ui-features/typography"},{title:"Animated Searches",icon:"ion ion-android-radio-button-off",link:"/pages/ui-features/search-fields"},{title:"Tabs",icon:"ion ion-android-radio-button-off",link:"/pages/ui-features/tabs"}],this.layout={},this.sidebar={},this.layoutState$=this.stateService.onLayoutState().subscribe(function(e){return i.layout=e}),this.sidebarState$=this.stateService.onSidebarState().subscribe(function(e){i.sidebar=e});var n=this.bpService.getByName("is");this.menuClick$=this.menuService.onItemSelect().withLatestFrom(this.themeService.onMediaQueryChange()).delay(20).subscribe(function(e){var t=(e[0],e[1]);t[0];t[1].width<=n.width&&i.sidebarService.collapse("menu-sidebar")})}return e.prototype.ngOnDestroy=function(){this.layoutState$.unsubscribe(),this.sidebarState$.unsubscribe(),this.menuClick$.unsubscribe()},e.ctorParameters=function(){return[{type:r.a},{type:o.g},{type:o.n},{type:o.e},{type:o.k}]},e}())},"CC/A":function(e,t,a){"use strict";var o=a("qbdv"),r=a("bm2B"),i=a("0WLp"),n=a("xTJO"),s=a("cJGl"),l=a("w6mL"),c=a("/oeL"),u=function(){function e(){this.search=new c.t,this.isInputShown=!1}return e.prototype.showInput=function(){this.isInputShown=!0,this.input.nativeElement.focus()},e.prototype.hideInput=function(){this.isInputShown=!1},e.prototype.onInput=function(e){this.search.emit(e)},e}(),m=function(){function e(e){this.host=e,this.editorKeyup=new c.t}return e.prototype.ngAfterViewInit=function(){var e=this;tinymce.init({target:this.host.nativeElement,plugins:["link","paste","table"],skin_url:"assets/skins/lightgray",setup:function(t){e.editor=t,t.on("keyup",function(){e.editorKeyup.emit(t.getContent())})},height:"320"})},e.prototype.ngOnDestroy=function(){tinymce.remove(this.editor)},e.ctorParameters=function(){return[{type:c.r}]},e}(),d=a("OfxL"),f=a("m/7M"),p=function(){function e(e,t){this.themeService=e,this.analyticsService=t}return e.prototype.ngOnInit=function(){var e=this;this.themeService.getJsTheme().subscribe(function(t){return e.theme=t})},e.prototype.toggleTheme=function(e){var t=this.boolToTheme(e);this.themeService.changeTheme(t),this.analyticsService.trackEvent("switchTheme")},e.prototype.currentBoolTheme=function(){return this.themeToBool(this.theme)},e.prototype.themeToBool=function(e){return"cosmic"===e.name},e.prototype.boolToTheme=function(e){return e?"cosmic":"default"},e.ctorParameters=function(){return[{type:n.n},{type:f.a}]},e}(),h=(function(){function e(){}e.prototype.transform=function(e){return e&&e.length?e.charAt(0).toUpperCase()+e.slice(1).toLowerCase():e}}(),function(){function e(){}e.prototype.transform=function(e,t,a){return void 0===a&&(a=""),e=e||0,1===e?e+" "+t:a?e+" "+a:e+" "+t+"s"}}(),function(){function e(){}e.prototype.transform=function(e){return Math.round(e)}}(),function(){function e(){}e.prototype.transform=function(e){if(e){var t=Math.floor(e/60),a=Math.floor(e%60);return""+this.initZero(t)+t+":"+this.initZero(a)+a}return"00:00"},e.prototype.initZero=function(e){return e<10?"0":""}}(),function(){function e(){}return e}()),b=function(){function e(){}return e}(),g=function(){function e(){}return e}(),y=a("B7HU"),_={name:"default",base:null,variables:{temperature:["#42db7d","#42db7d","#42db7d","#42db7d","#42db7d"],solar:{gradientLeft:"#42db7d",gradientRight:"#42db7d",shadowColor:"rgba(0, 0, 0, 0)",radius:["80%","90%"]},traffic:{colorBlack:"#000000",tooltipBg:"#ffffff",tooltipBorderColor:"#c0c8d1",tooltipExtraCss:"border-radius: 10px; padding: 4px 16px;",tooltipTextColor:"#2a2a2a",tooltipFontWeight:"bolder",lineBg:"#c0c8d1",lineShadowBlur:"1",itemColor:"#bcc3cc",itemBorderColor:"#bcc3cc",itemEmphasisBorderColor:"#42db7d",shadowLineDarkBg:"rgba(0, 0, 0, 0)",shadowLineShadow:"rgba(0, 0, 0, 0)",gradFrom:"#ebeef2",gradTo:"#ebeef2"},electricity:{tooltipBg:"#ffffff",tooltipLineColor:"rgba(0, 0, 0, 0)",tooltipLineWidth:"0",tooltipBorderColor:"#ebeef2",tooltipExtraCss:"border-radius: 10px; padding: 8px 24px;",tooltipTextColor:"#2a2a2a",tooltipFontWeight:"bolder",axisLineColor:"rgba(0, 0, 0, 0)",xAxisTextColor:"#2a2a2a",yAxisSplitLine:"#ebeef2",itemBorderColor:"#42db7d",lineStyle:"solid",lineWidth:"4",lineGradFrom:"#42db7d",lineGradTo:"#42db7d",lineShadow:"rgba(0, 0, 0, 0)",areaGradFrom:"rgba(235, 238, 242, 0.5)",areaGradTo:"rgba(235, 238, 242, 0.5)",shadowLineDarkBg:"rgba(0, 0, 0, 0)"},bubbleMap:{titleColor:"#484848",areaColor:"#dddddd",areaHoverColor:"#cccccc",areaBorderColor:"#ebeef2"},echarts:{bg:"#ffffff",textColor:"#484848",axisLineColor:"#bbbbbb",splitLineColor:"#ebeef2",itemHoverShadowColor:"rgba(0, 0, 0, 0.5)",tooltipBackgroundColor:"#6a7985",areaOpacity:"0.7"},chartjs:{axisLineColor:"#cccccc",textColor:"#484848"}}},k={name:"cosmic",base:"default",variables:{temperature:["#2ec7fe","#31ffad","#7bff24","#fff024","#f7bd59"],solar:{gradientLeft:"#7bff24",gradientRight:"#2ec7fe",shadowColor:"#19977E",radius:["70%","90%"]},traffic:{colorBlack:"#000000",tooltipBg:"rgba(0, 255, 170, 0.35)",tooltipBorderColor:"#00d977",tooltipExtraCss:"box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;",tooltipTextColor:"#ffffff",tooltipFontWeight:"normal",lineBg:"#d1d1ff",lineShadowBlur:"14",itemColor:"#BEBBFF",itemBorderColor:"#ffffff",itemEmphasisBorderColor:"#ffffff",shadowLineDarkBg:"#655ABD",shadowLineShadow:"rgba(33, 7, 77, 0.5)",gradFrom:"rgba(118, 89, 255, 0.4)",gradTo:"rgba(164, 84, 255, 0.5)"},electricity:{tooltipBg:"rgba(0, 255, 170, 0.35)",tooltipLineColor:"rgba(255, 255, 255, 0.1)",tooltipLineWidth:"1",tooltipBorderColor:"#00d977",tooltipExtraCss:"box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;",tooltipTextColor:"#ffffff",tooltipFontWeight:"normal",axisLineColor:"rgba(161, 161 ,229, 0.3)",xAxisTextColor:"#a1a1e5",yAxisSplitLine:"rgba(161, 161 ,229, 0.2)",itemBorderColor:"#ffffff",lineStyle:"dotted",lineWidth:"6",lineGradFrom:"#00ffaa",lineGradTo:"#fff835",lineShadow:"rgba(14, 16, 48, 0.4)",areaGradFrom:"rgba(188, 92, 255, 0.5)",areaGradTo:"rgba(188, 92, 255, 0)",shadowLineDarkBg:"#a695ff"},bubbleMap:{titleColor:"#ffffff",areaColor:"#2c2961",areaHoverColor:"#a1a1e5",areaBorderColor:"#654ddb"},echarts:{bg:"#3d3780",textColor:"#ffffff",axisLineColor:"#a1a1e5",splitLineColor:"#342e73",itemHoverShadowColor:"rgba(0, 0, 0, 0.5)",tooltipBackgroundColor:"#6a7985",areaOpacity:"1"},chartjs:{axisLineColor:"#a1a1e5",textColor:"#ffffff"}}};a.d(t,"a",function(){return N});var v=(o.b,r.e,r.q,n.b,n.d,n.l,n.h,n.f,n.o,n.a,n.i,n.j,n.c,i.a,s.a,l.a,d.a,y.a,n.m.forRoot({name:"default"},[_,k]).providers.concat(n.j.forRoot().providers,n.f.forRoot().providers)),N=function(){function e(){}return e.forRoot=function(){return{ngModule:e,providers:v.slice()}},e}()},OfxL:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var o=a("Pzo0"),r=function(){function e(e){var t=this;this.stateService=e,this.layouts=[],this.sidebars=[],this.stateService.getLayoutStates().subscribe(function(e){return t.layouts=e}),this.stateService.getSidebarStates().subscribe(function(e){return t.sidebars=e})}return e.prototype.layoutSelect=function(e){return this.layouts=this.layouts.map(function(e){return e.selected=!1,e}),e.selected=!0,this.stateService.setLayoutState(e),!1},e.prototype.sidebarSelect=function(e){return this.sidebars=this.sidebars.map(function(e){return e.selected=!1,e}),e.selected=!0,this.stateService.setSidebarState(e),!1},e.ctorParameters=function(){return[{type:o.a}]},e}()},Pzo0:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var o=a("bKpL"),r=(a.n(o),a("gvep")),i=(a.n(r),a("/zHi")),n=(a.n(i),function(){function e(){this.layouts=[{name:"One Column",icon:"nb-layout-default",id:"one-column",selected:!0},{name:"Two Column",icon:"nb-layout-two-column",id:"two-column"},{name:"Center Column",icon:"nb-layout-centre",id:"center-column"}],this.sidebars=[{name:"Left Sidebar",icon:"nb-layout-sidebar-left",id:"left",selected:!0},{name:"Right Sidebar",icon:"nb-layout-sidebar-right",id:"right"}],this.layoutState$=new r.BehaviorSubject(this.layouts[0]),this.sidebarState$=new r.BehaviorSubject(this.sidebars[0])}return e.prototype.setLayoutState=function(e){this.layoutState$.next(e)},e.prototype.getLayoutStates=function(){return o.Observable.of(this.layouts)},e.prototype.onLayoutState=function(){return this.layoutState$.asObservable()},e.prototype.setSidebarState=function(e){this.sidebarState$.next(e)},e.prototype.getSidebarStates=function(){return o.Observable.of(this.sidebars)},e.prototype.onSidebarState=function(){return this.sidebarState$.asObservable()},e}())},cDNt:function(e,t,a){"use strict";function o(e){return n._44(0,[(e()(),n._24(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),n._22(212992,null,0,S.o,[S.b,n._6,n.m,[8,null],n.j],null,null)],function(e,t){e(t,1,0)},null)}function r(e){return n._44(0,[(e()(),n._24(0,null,null,1,"ngx-app",[],null,null,null,o,B)),n._22(114688,null,0,u,[c.a],null,null)],function(e,t){e(t,1,0)},null)}function i(e,t){if(e)throw new Error(t+" has already been loaded. Import Core modules in the AppModule only.")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("/oeL"),s={production:!0},l=function(){function e(){}return e}(),c=a("m/7M"),u=function(){function e(e){this.analytics=e}return e.prototype.ngOnInit=function(){this.analytics.trackPageViews()},e.ctorParameters=function(){return[{type:c.a}]},e}(),m=a("CVNG"),d=a("ClIn"),f=a("CU81"),p=a("IkMs"),h=a("DlWC"),b=a("m0eP"),g=a("MsHi"),y=a("w+Qo"),_=a("OEyO"),k=a("jXLJ"),v=a("7T+G"),N=a("jclv"),w=a("JaXH"),C=a("qEED"),S=a("BkNc"),x=[],B=n._21({encapsulation:2,styles:x,data:{}}),L=n._19("ngx-app",u,r,{},{},[]),W=a("qbdv"),T=a("fc+i"),M=a("f9zQ"),H=a("fL27"),A=a("EyWH"),E=a("CPp0"),F=a("bm2B"),O=a("KRwK"),j=a("dN2u"),z=a("nVXb"),P=a("Wv1e"),D=a("QGDq"),G=a("0H8/"),J=a("5FV4"),K=a("f1rf"),R=a("KSV9"),I=a("CuDZ"),q=a("lA7/"),V=a("HRzg"),U=a("Qyse"),$=a("NmeZ"),X=a("7zUS"),Q=a("59zy"),Z=a("+E40"),Y=a("V6Dl"),ee=a("hjRC"),te=a("XKz0"),ae=a("bScv"),oe=a("wA9f"),re=a("z0fX"),ie=a("ldGY"),ne=a("On8K"),se=a("Und7"),le=a("lOV3"),ce=a("v4GM"),ue=function(){function e(){this.data=[{title:"2015",months:[{month:"Jan",delta:"0.97",down:!0,kWatts:"816",cost:"97"},{month:"Feb",delta:"1.83",down:!0,kWatts:"806",cost:"95"},{month:"Mar",delta:"0.64",down:!0,kWatts:"803",cost:"94"},{month:"Apr",delta:"2.17",down:!1,kWatts:"818",cost:"98"},{month:"May",delta:"1.32",down:!0,kWatts:"809",cost:"96"},{month:"Jun",delta:"0.05",down:!0,kWatts:"808",cost:"96"},{month:"Jul",delta:"1.39",down:!1,kWatts:"815",cost:"97"},{month:"Aug",delta:"0.73",down:!0,kWatts:"807",cost:"95"},{month:"Sept",delta:"2.61",down:!0,kWatts:"792",cost:"92"},{month:"Oct",delta:"0.16",down:!0,kWatts:"791",cost:"92"},{month:"Nov",delta:"1.71",down:!0,kWatts:"786",cost:"89"},{month:"Dec",delta:"0.37",down:!1,kWatts:"789",cost:"91"}]},{title:"2016",active:!0,months:[{month:"Jan",delta:"1.56",down:!0,kWatts:"789",cost:"91"},{month:"Feb",delta:"0.33",down:!1,kWatts:"791",cost:"92"},{month:"Mar",delta:"0.62",down:!0,kWatts:"790",cost:"92"},{month:"Apr",delta:"1.93",down:!0,kWatts:"783",cost:"87"},{month:"May",delta:"2.52",down:!0,kWatts:"771",cost:"83"},{month:"Jun",delta:"0.39",down:!1,kWatts:"774",cost:"85"},{month:"Jul",delta:"1.61",down:!0,kWatts:"767",cost:"81"},{month:"Aug",delta:"1.41",down:!0,kWatts:"759",cost:"76"},{month:"Sept",delta:"1.03",down:!0,kWatts:"752",cost:"74"},{month:"Oct",delta:"2.94",down:!1,kWatts:"769",cost:"82"},{month:"Nov",delta:"0.26",down:!0,kWatts:"767",cost:"81"},{month:"Dec",delta:"1.62",down:!0,kWatts:"760",cost:"76"}]},{title:"2017",months:[{month:"Jan",delta:"1.34",down:!1,kWatts:"789",cost:"91"},{month:"Feb",delta:"0.95",down:!1,kWatts:"793",cost:"93"},{month:"Mar",delta:"0.25",down:!0,kWatts:"791",cost:"92"},{month:"Apr",delta:"1.72",down:!1,kWatts:"797",cost:"95"},{month:"May",delta:"2.62",down:!0,kWatts:"786",cost:"90"},{month:"Jun",delta:"0.72",down:!1,kWatts:"789",cost:"91"},{month:"Jul",delta:"0.78",down:!0,kWatts:"784",cost:"89"},{month:"Aug",delta:"0.36",down:!0,kWatts:"782",cost:"88"},{month:"Sept",delta:"0.55",down:!1,kWatts:"787",cost:"90"},{month:"Oct",delta:"1.81",down:!0,kWatts:"779",cost:"86"},{month:"Nov",delta:"1.12",down:!0,kWatts:"774",cost:"84"},{month:"Dec",delta:"0.52",down:!1,kWatts:"776",cost:"95"}]}]}return e.prototype.getData=function(){return this.data},e.ctorParameters=function(){return[]},e}(),me=a("Pzo0"),de=function(){function e(){this.data=[{id:1,firstName:"Mark",lastName:"Otto",username:"@mdo",email:"mdo@gmail.com",age:"28"},{id:2,firstName:"Jacob",lastName:"Thornton",username:"@fat",email:"fat@yandex.ru",age:"45"},{id:3,firstName:"Larry",lastName:"Bird",username:"@twitter",email:"twitter@outlook.com",age:"18"},{id:4,firstName:"John",lastName:"Snow",username:"@snow",email:"snow@gmail.com",age:"20"},{id:5,firstName:"Jack",lastName:"Sparrow",username:"@jack",email:"jack@yandex.ru",age:"30"},{id:6,firstName:"Ann",lastName:"Smith",username:"@ann",email:"ann@gmail.com",age:"21"},{id:7,firstName:"Barbara",lastName:"Black",username:"@barbara",email:"barbara@yandex.ru",age:"43"},{id:8,firstName:"Sevan",lastName:"Bagrat",username:"@sevan",email:"sevan@outlook.com",age:"13"},{id:9,firstName:"Ruben",lastName:"Vardan",username:"@ruben",email:"ruben@gmail.com",age:"22"},{id:10,firstName:"Karen",lastName:"Sevan",username:"@karen",email:"karen@yandex.ru",age:"33"},{id:11,firstName:"Mark",lastName:"Otto",username:"@mark",email:"mark@gmail.com",age:"38"},{id:12,firstName:"Jacob",lastName:"Thornton",username:"@jacob",email:"jacob@yandex.ru",age:"48"},{id:13,firstName:"Haik",lastName:"Hakob",username:"@haik",email:"haik@outlook.com",age:"48"},{id:14,firstName:"Garegin",lastName:"Jirair",username:"@garegin",email:"garegin@gmail.com",age:"40"},{id:15,firstName:"Krikor",lastName:"Bedros",username:"@krikor",email:"krikor@yandex.ru",age:"32"},{id:16,firstName:"Francisca",lastName:"Brady",username:"@Gibson",email:"franciscagibson@comtours.com",age:11},{id:17,firstName:"Tillman",lastName:"Figueroa",username:"@Snow",email:"tillmansnow@comtours.com",age:34},{id:18,firstName:"Jimenez",lastName:"Morris",username:"@Bryant",email:"jimenezbryant@comtours.com",age:45},{id:19,firstName:"Sandoval",lastName:"Jacobson",username:"@Mcbride",email:"sandovalmcbride@comtours.com",age:32},{id:20,firstName:"Griffin",lastName:"Torres",username:"@Charles",email:"griffincharles@comtours.com",age:19},{id:21,firstName:"Cora",lastName:"Parker",username:"@Caldwell",email:"coracaldwell@comtours.com",age:27},{id:22,firstName:"Cindy",lastName:"Bond",username:"@Velez",email:"cindyvelez@comtours.com",age:24},{id:23,firstName:"Frieda",lastName:"Tyson",username:"@Craig",email:"friedacraig@comtours.com",age:45},{id:24,firstName:"Cote",lastName:"Holcomb",username:"@Rowe",email:"coterowe@comtours.com",age:20},{id:25,firstName:"Trujillo",lastName:"Mejia",username:"@Valenzuela",email:"trujillovalenzuela@comtours.com",age:16},{id:26,firstName:"Pruitt",lastName:"Shepard",username:"@Sloan",email:"pruittsloan@comtours.com",age:44},{id:27,firstName:"Sutton",lastName:"Ortega",username:"@Black",email:"suttonblack@comtours.com",age:42},{id:28,firstName:"Marion",lastName:"Heath",username:"@Espinoza",email:"marionespinoza@comtours.com",age:47},{id:29,firstName:"Newman",lastName:"Hicks",username:"@Keith",email:"newmankeith@comtours.com",age:15},{id:30,firstName:"Boyle",lastName:"Larson",username:"@Summers",email:"boylesummers@comtours.com",age:32},{id:31,firstName:"Haynes",lastName:"Vinson",username:"@Mckenzie",email:"haynesmckenzie@comtours.com",age:15},{id:32,firstName:"Miller",lastName:"Acosta",username:"@Young",email:"milleryoung@comtours.com",age:55},{id:33,firstName:"Johnston",lastName:"Brown",username:"@Knight",email:"johnstonknight@comtours.com",age:29},{id:34,firstName:"Lena",lastName:"Pitts",username:"@Forbes",email:"lenaforbes@comtours.com",age:25},{id:35,firstName:"Terrie",lastName:"Kennedy",username:"@Branch",email:"terriebranch@comtours.com",age:37},{id:36,firstName:"Louise",lastName:"Aguirre",username:"@Kirby",email:"louisekirby@comtours.com",age:44},{id:37,firstName:"David",lastName:"Patton",username:"@Sanders",email:"davidsanders@comtours.com",age:26},{id:38,firstName:"Holden",lastName:"Barlow",username:"@Mckinney",email:"holdenmckinney@comtours.com",age:11},{id:39,firstName:"Baker",lastName:"Rivera",username:"@Montoya",email:"bakermontoya@comtours.com",age:47},{id:40,firstName:"Belinda",lastName:"Lloyd",username:"@Calderon",email:"belindacalderon@comtours.com",age:21},{id:41,firstName:"Pearson",lastName:"Patrick",username:"@Clements",email:"pearsonclements@comtours.com",age:42},{id:42,firstName:"Alyce",lastName:"Mckee",username:"@Daugherty",email:"alycedaugherty@comtours.com",age:55},{id:43,firstName:"Valencia",lastName:"Spence",username:"@Olsen",email:"valenciaolsen@comtours.com",age:20},{id:44,firstName:"Leach",lastName:"Holcomb",username:"@Humphrey",email:"leachhumphrey@comtours.com",age:28},{id:45,firstName:"Moss",lastName:"Baxter",username:"@Fitzpatrick",email:"mossfitzpatrick@comtours.com",age:51},{id:46,firstName:"Jeanne",lastName:"Cooke",username:"@Ward",email:"jeanneward@comtours.com",age:59},{id:47,firstName:"Wilma",lastName:"Briggs",username:"@Kidd",email:"wilmakidd@comtours.com",age:53},{id:48,firstName:"Beatrice",lastName:"Perry",username:"@Gilbert",email:"beatricegilbert@comtours.com",age:39},{id:49,firstName:"Whitaker",lastName:"Hyde",username:"@Mcdonald",email:"whitakermcdonald@comtours.com",age:35},{id:50,firstName:"Rebekah",lastName:"Duran",username:"@Gross",email:"rebekahgross@comtours.com",age:40},{id:51,firstName:"Earline",lastName:"Mayer",username:"@Woodward",email:"earlinewoodward@comtours.com",age:52},{id:52,firstName:"Moran",lastName:"Baxter",username:"@Johns",email:"moranjohns@comtours.com",age:20},{id:53,firstName:"Nanette",lastName:"Hubbard",username:"@Cooke",email:"nanettecooke@comtours.com",age:55},{id:54,firstName:"Dalton",lastName:"Walker",username:"@Hendricks",email:"daltonhendricks@comtours.com",age:25},{id:55,firstName:"Bennett",lastName:"Blake",username:"@Pena",email:"bennettpena@comtours.com",age:13},{id:56,firstName:"Kellie",lastName:"Horton",username:"@Weiss",email:"kellieweiss@comtours.com",age:48},{id:57,firstName:"Hobbs",lastName:"Talley",username:"@Sanford",email:"hobbssanford@comtours.com",age:28},{id:58,firstName:"Mcguire",lastName:"Donaldson",username:"@Roman",email:"mcguireroman@comtours.com",age:38},{id:59,firstName:"Rodriquez",lastName:"Saunders",username:"@Harper",email:"rodriquezharper@comtours.com",age:20},{id:60,firstName:"Lou",lastName:"Conner",username:"@Sanchez",email:"lousanchez@comtours.com",age:16}]}return e.prototype.getData=function(){return this.data},e}(),fe=(a("/zHi"),function(){function e(){}}(),function(){function e(){this.playlist=[{name:"Don't Wanna Fight",artist:"Alabama Shakes",url:"https://p.scdn.co/mp3-preview/6156cdbca425a894972c02fca9d76c0b70e001af",cover:"assets/images/cover1.jpg"},{name:"Harder",artist:"Daft Punk",url:"https://p.scdn.co/mp3-preview/92a04c7c0e96bf93a1b1b1cae7dfff1921969a7b",cover:"assets/images/cover2.jpg"},{name:"Come Together",artist:"Beatles",url:"https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9",cover:"assets/images/cover3.jpg"}]}return e.prototype.random=function(){return this.current=Math.floor(Math.random()*this.playlist.length),this.playlist[this.current]},e.prototype.next=function(){return this.getNextTrack()},e.prototype.prev=function(){return this.getPrevTrack()},e.prototype.getNextTrack=function(){return this.current===this.playlist.length-1?this.current=0:this.current++,this.playlist[this.current]},e.prototype.getPrevTrack=function(){return 0===this.current?this.current=this.playlist.length-1:this.current--,this.playlist[this.current]},e}()),pe=a("V+L/"),he=a("200H"),be=a("QYrX"),ge=a("5HzZ"),ye=a("ibGg"),_e=a("c05T"),ke=a("W+nB"),ve=a("kbcB"),Ne=a("n0XI"),we=a("uU8k"),Ce=a("KFdp"),Se=a("SEks"),xe=function(){function e(){}return e}(),Be=a("wnyu"),Le=a("EoP3"),We=a("PY9B"),Te=a("3rU7"),Me=a("4HaF"),He=a("DaIH"),Ae=a("Zz+K"),Ee=a("2waW"),Fe=a("IBeK"),Oe=a("g5gQ"),je=a("xBEz"),ze=a("PuIS"),Pe=a("U0Tu"),De=a("Cb36"),Ge=a("5h8W"),Je=a("6ade"),Ke=a("0WLp"),Re=a("+S/n"),Ie=a("BMWL"),qe=a("xSzo"),Ve=a("0dqe"),Ue=a("m1oH"),$e=a("qkrk"),Xe=a("HToe"),Qe=a("9Y3Q"),Ze=a("3p+R"),Ye=a("1adR"),et=a("y0h+"),tt=a("CC/A"),at=a("NKDE"),ot=[ce.a,ue,me.a,de,fe],rt=function(){function e(){}return e.forRoot=function(){return{ngModule:e,providers:ot.slice()}},e}(),it=rt.forRoot().providers.concat(at.a.forRoot({providers:{email:{service:at.b,config:{delay:3e3,login:{rememberMe:!0}}}}}).providers,[c.a]),nt=function(){function e(e){i(e,"CoreModule")}return e.forRoot=function(){return{ngModule:e,providers:it.slice()}},e.ctorParameters=function(){return[{type:e,decorators:[{type:n.L},{type:n.Z}]}]},e}(),st=n._20(l,[u],function(e){return n._35([n._36(512,n.m,n._16,[[8,[m.a,d.a,f.a,p.a,h.a,b.a,g.a,y.a,_.a,k.a,v.a,N.a,w.a,C.a,L]],[3,n.m],n.I]),n._36(5120,n.E,n._34,[[3,n.E]]),n._36(4608,W.l,W.k,[n.E]),n._36(5120,n.c,n._25,[]),n._36(5120,n.C,n._31,[]),n._36(5120,n.D,n._32,[]),n._36(4608,T.b,T.s,[W.c]),n._36(6144,n.W,null,[T.b]),n._36(4608,T.e,T.f,[]),n._36(5120,T.c,function(e,t,a,o){return[new T.k(e),new T.o(t),new T.n(a,o)]},[W.c,W.c,W.c,T.e]),n._36(4608,T.d,T.d,[T.c,n.K]),n._36(135680,T.m,T.m,[W.c]),n._36(4608,T.l,T.l,[T.d,T.m]),n._36(5120,M.a,H.d,[]),n._36(5120,M.c,H.e,[]),n._36(4608,M.b,H.c,[M.a,M.c]),n._36(5120,n.U,H.f,[T.l,M.b,n.K]),n._36(6144,T.p,null,[T.m]),n._36(4608,n._3,n._3,[n.K]),n._36(4608,T.g,T.g,[W.c]),n._36(4608,T.i,T.i,[W.c]),n._36(4608,A.b,H.b,[n.U]),n._36(4608,E.c,E.c,[]),n._36(4608,E.g,E.b,[]),n._36(5120,E.i,E.j,[]),n._36(4608,E.h,E.h,[E.c,E.g,E.i]),n._36(4608,E.f,E.a,[]),n._36(5120,E.d,E.k,[E.h,E.f]),n._36(5120,S.a,S.x,[S.l]),n._36(4608,S.e,S.e,[]),n._36(6144,S.g,null,[S.e]),n._36(135680,S.p,S.p,[S.l,n.H,n.k,n.A,S.g]),n._36(4608,S.f,S.f,[]),n._36(5120,S.i,S.A,[S.y]),n._36(5120,n.b,function(e){return[e]},[S.i]),n._36(4608,F.u,F.u,[]),n._36(4608,O.a,O.a,[n.g,n.A,n.m]),n._36(4608,j.a,j.a,[n.m,n.A,O.a]),n._36(4608,z.a,z.a,[]),n._36(4608,P.a,P.a,[]),n._36(4608,D.a,D.a,[]),n._36(4608,G.a,G.a,[]),n._36(4608,J.a,J.a,[]),n._36(4608,K.a,K.a,[]),n._36(4608,R.a,R.b,[]),n._36(4608,I.a,I.b,[]),n._36(4608,q.b,q.a,[]),n._36(4608,V.a,V.a,[]),n._36(4608,U.a,U.a,[]),n._36(4608,$.a,$.a,[]),n._36(4608,X.a,X.a,[]),n._36(4608,Q.a,Q.a,[]),n._36(4608,Z.a,Z.a,[]),n._36(4608,Y.a,Y.a,[]),n._36(4608,F.d,F.d,[]),n._36(4608,ee.a,ee.a,[]),n._36(4608,te.j,te.o,[W.c,n.N,te.m]),n._36(4608,te.p,te.p,[te.j,te.n]),n._36(5120,te.a,function(e){return[e]},[te.p]),n._36(4608,te.l,te.l,[]),n._36(6144,te.k,null,[te.l]),n._36(4608,te.i,te.i,[te.k]),n._36(6144,te.b,null,[te.i]),n._36(5120,te.g,te.q,[te.b,[2,te.a]]),n._36(4608,te.c,te.c,[te.g]),n._36(4608,ae.b,ae.b,[oe.a,oe.b]),n._36(4608,re.b,re.b,[oe.c]),n._36(4608,ie.a,ie.a,[oe.d,re.b,ae.b]),n._36(4608,ne.a,ne.a,[]),n._36(4608,se.a,se.a,[]),n._36(4608,le.b,le.b,[]),n._36(4608,le.a,le.a,[S.l,W.f]),n._36(4608,ce.a,ce.a,[]),n._36(4608,ue,ue,[]),n._36(4608,me.a,me.a,[]),n._36(4608,de,de,[]),n._36(4608,fe,fe,[]),n._36(5120,pe.b,he.c,[pe.e]),n._36(4608,pe.d,be.a,[]),n._36(4608,be.b,be.b,[pe.b,pe.d]),n._36(5120,ge.b,he.b,[pe.b,be.b,n.A]),n._36(4608,ye.a,ye.a,[]),n._36(4608,_e.a,_e.a,[te.c,S.a]),n._36(4608,c.a,c.a,[W.f,S.l]),n._36(512,W.b,W.b,[]),n._36(1024,n.s,T.q,[]),n._36(1024,n.J,function(){return[S.t()]},[]),n._36(512,S.y,S.y,[n.A]),n._36(1024,n.d,function(e,t,a){return[T.r(e,t),S.z(a)]},[[2,T.h],[2,n.J],S.y]),n._36(512,n.e,n.e,[[2,n.d]]),n._36(131584,n._23,n._23,[n.K,n._17,n.A,n.s,n.m,n.e]),n._36(2048,n.g,null,[n._23]),n._36(512,n.f,n.f,[n.g]),n._36(512,T.a,T.a,[[3,T.a]]),n._36(512,H.a,H.a,[]),n._36(512,E.e,E.e,[]),n._36(1024,S.s,S.v,[[3,S.l]]),n._36(512,S.r,S.c,[]),n._36(512,S.b,S.b,[]),n._36(256,W.a,"/",[]),n._36(256,S.h,{useHash:!0},[]),n._36(1024,W.g,S.u,[W.p,[2,W.a],S.h]),n._36(512,W.f,W.f,[W.g]),n._36(512,n.k,n.k,[]),n._36(512,n.H,n._0,[n.k,[2,n._1]]),n._36(1024,S.j,function(){return[[{path:"pages",loadChildren:"app/pages/pages.module#PagesModule"},{path:"",redirectTo:"pages",pathMatch:"full"},{path:"**",redirectTo:"pages"}],[{path:"auth",component:ke.a,children:[{path:"",component:ve.a},{path:"login",component:ve.a},{path:"register",component:Ne.a},{path:"logout",component:we.a},{path:"request-password",component:Ce.a},{path:"reset-password",component:Se.a}]}]]},[]),n._36(1024,S.l,S.w,[n.g,S.r,S.b,W.f,n.A,n.H,n.k,S.j,S.h,[2,S.q],[2,S.k]]),n._36(512,S.n,S.n,[[2,S.s],[2,S.l]]),n._36(512,xe,xe,[]),n._36(512,Be.a,Be.a,[]),n._36(512,Le.a,Le.a,[]),n._36(512,We.a,We.a,[]),n._36(512,Te.a,Te.a,[]),n._36(512,Me.a,Me.a,[]),n._36(512,He.a,He.a,[]),n._36(512,Ae.a,Ae.a,[]),n._36(512,Ee.a,Ee.a,[]),n._36(512,F.s,F.s,[]),n._36(512,F.e,F.e,[]),n._36(512,Fe.a,Fe.a,[]),n._36(512,Oe.a,Oe.a,[]),n._36(512,je.a,je.a,[]),n._36(512,ze.a,ze.a,[]),n._36(512,Pe.a,Pe.a,[]),n._36(512,De.a,De.a,[]),n._36(512,Ge.a,Ge.a,[]),n._36(512,Je.a,Je.a,[]),n._36(512,Ke.b,Ke.b,[]),n._36(512,F.q,F.q,[]),n._36(512,Re.a,Re.a,[]),n._36(512,Ie.a,Ie.a,[]),n._36(512,qe.a,qe.a,[]),n._36(512,Ve.a,Ve.a,[]),n._36(512,Ue.a,Ue.a,[]),n._36(512,$e.a,$e.a,[]),n._36(512,Xe.a,Xe.a,[]),n._36(512,Qe.a,Qe.a,[]),n._36(512,Ze.a,Ze.a,[]),n._36(512,Ye.a,Ye.a,[]),n._36(512,et.a,et.a,[]),n._36(512,Ke.a,Ke.a,[]),n._36(512,tt.a,tt.a,[]),n._36(512,te.e,te.e,[]),n._36(512,te.d,te.d,[]),n._36(512,he.a,he.a,[]),n._36(512,nt,nt,[[3,nt]]),n._36(512,l,l,[]),n._36(256,te.m,"XSRF-TOKEN",[]),n._36(256,te.n,"X-XSRF-TOKEN",[]),n._36(256,oe.d,{name:"default"},[]),n._36(256,oe.a,ae.a,[]),n._36(256,oe.b,[{name:"default",base:null,variables:{temperature:["#42db7d","#42db7d","#42db7d","#42db7d","#42db7d"],solar:{gradientLeft:"#42db7d",gradientRight:"#42db7d",shadowColor:"rgba(0, 0, 0, 0)",radius:["80%","90%"]},traffic:{colorBlack:"#000000",tooltipBg:"#ffffff",tooltipBorderColor:"#c0c8d1",tooltipExtraCss:"border-radius: 10px; padding: 4px 16px;",tooltipTextColor:"#2a2a2a",tooltipFontWeight:"bolder",lineBg:"#c0c8d1",lineShadowBlur:"1",itemColor:"#bcc3cc",itemBorderColor:"#bcc3cc",itemEmphasisBorderColor:"#42db7d",shadowLineDarkBg:"rgba(0, 0, 0, 0)",shadowLineShadow:"rgba(0, 0, 0, 0)",gradFrom:"#ebeef2",gradTo:"#ebeef2"},electricity:{tooltipBg:"#ffffff",tooltipLineColor:"rgba(0, 0, 0, 0)",tooltipLineWidth:"0",tooltipBorderColor:"#ebeef2",tooltipExtraCss:"border-radius: 10px; padding: 8px 24px;",tooltipTextColor:"#2a2a2a",tooltipFontWeight:"bolder",axisLineColor:"rgba(0, 0, 0, 0)",xAxisTextColor:"#2a2a2a",yAxisSplitLine:"#ebeef2",itemBorderColor:"#42db7d",lineStyle:"solid",lineWidth:"4",lineGradFrom:"#42db7d",lineGradTo:"#42db7d",lineShadow:"rgba(0, 0, 0, 0)",areaGradFrom:"rgba(235, 238, 242, 0.5)",areaGradTo:"rgba(235, 238, 242, 0.5)",shadowLineDarkBg:"rgba(0, 0, 0, 0)"},bubbleMap:{titleColor:"#484848",areaColor:"#dddddd",areaHoverColor:"#cccccc",areaBorderColor:"#ebeef2"},echarts:{bg:"#ffffff",textColor:"#484848",axisLineColor:"#bbbbbb",splitLineColor:"#ebeef2",itemHoverShadowColor:"rgba(0, 0, 0, 0.5)",tooltipBackgroundColor:"#6a7985",areaOpacity:"0.7"},chartjs:{axisLineColor:"#cccccc",textColor:"#484848"}}},{name:"cosmic",base:"default",variables:{temperature:["#2ec7fe","#31ffad","#7bff24","#fff024","#f7bd59"],solar:{gradientLeft:"#7bff24",gradientRight:"#2ec7fe",shadowColor:"#19977E",radius:["70%","90%"]},traffic:{colorBlack:"#000000",tooltipBg:"rgba(0, 255, 170, 0.35)",tooltipBorderColor:"#00d977",tooltipExtraCss:"box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;",tooltipTextColor:"#ffffff",tooltipFontWeight:"normal",lineBg:"#d1d1ff",lineShadowBlur:"14",itemColor:"#BEBBFF",itemBorderColor:"#ffffff",itemEmphasisBorderColor:"#ffffff",shadowLineDarkBg:"#655ABD",shadowLineShadow:"rgba(33, 7, 77, 0.5)",gradFrom:"rgba(118, 89, 255, 0.4)",gradTo:"rgba(164, 84, 255, 0.5)"},electricity:{tooltipBg:"rgba(0, 255, 170, 0.35)",tooltipLineColor:"rgba(255, 255, 255, 0.1)",tooltipLineWidth:"1",tooltipBorderColor:"#00d977",tooltipExtraCss:"box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;",tooltipTextColor:"#ffffff",tooltipFontWeight:"normal",axisLineColor:"rgba(161, 161 ,229, 0.3)",xAxisTextColor:"#a1a1e5",yAxisSplitLine:"rgba(161, 161 ,229, 0.2)",itemBorderColor:"#ffffff",lineStyle:"dotted",lineWidth:"6",lineGradFrom:"#00ffaa",lineGradTo:"#fff835",lineShadow:"rgba(14, 16, 48, 0.4)",areaGradFrom:"rgba(188, 92, 255, 0.5)",areaGradTo:"rgba(188, 92, 255, 0)",shadowLineDarkBg:"#a695ff"},bubbleMap:{titleColor:"#ffffff",areaColor:"#2c2961",areaHoverColor:"#a1a1e5",areaBorderColor:"#654ddb"},echarts:{bg:"#3d3780",textColor:"#ffffff",axisLineColor:"#a1a1e5",splitLineColor:"#342e73",itemHoverShadowColor:"rgba(0, 0, 0, 0.5)",tooltipBackgroundColor:"#6a7985",areaOpacity:"1"},chartjs:{axisLineColor:"#a1a1e5",textColor:"#ffffff"}}}],[]),n._36(256,oe.c,re.a,[]),n._36(256,pe.e,{providers:{email:{service:ye.a,config:{delay:3e3,login:{rememberMe:!0}}}}},[]),n._36(256,pe.c,{},[]),n._36(256,pe.a,"Authorization",[])])});s.production&&Object(n._10)(),Object(T.j)().bootstrapModuleFactory(st)},cJGl:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var o=a("xTJO"),r=a("v4GM"),i=a("m/7M"),n=function(){function e(e,t,a,o){this.sidebarService=e,this.menuService=t,this.userService=a,this.analyticsService=o,this.position="normal",this.userMenu=[{title:"Profile",link:"/pages/auth/profile"},{title:"Log out",link:"/auth/logout"}]}return e.prototype.ngOnInit=function(){var e=this;this.userService.getUsers().subscribe(function(t){return e.user=t.nick})},e.prototype.toggleSidebar=function(){return this.sidebarService.toggle(!0,"menu-sidebar"),!1},e.prototype.toggleSettings=function(){return this.sidebarService.toggle(!1,"settings-sidebar"),!1},e.prototype.goToHome=function(){this.menuService.navigateHome()},e.prototype.startSearch=function(){this.analyticsService.trackEvent("startSearch")},e.ctorParameters=function(){return[{type:o.k},{type:o.g},{type:r.a},{type:i.a}]},e}()},gFIY:function(e,t,a){function o(e){var t=r[e];return t?a.e(t[1]).then(function(){return a(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var r={"./auth/auth.module.ngfactory":["VvqT",3],"./i94-passport/i94-passport.module.ngfactory":["z1oJ",2],"./workpermit/workpermit.module.ngfactory":["1l+K",0],"app/pages/pages.module.ngfactory":["wzMD",1]};o.keys=function(){return Object.keys(r)},o.id="gFIY",e.exports=o},"m/7M":function(e,t,a){"use strict";a.d(t,"a",function(){return n});var o=a("BkNc"),r=a("qbdv"),i=a("422b"),n=(a.n(i),function(){function e(e,t){this._location=e,this._router=t,this._enabled=window.location.href.indexOf("akveo.com")>=0}return e.prototype.trackPageViews=function(){var e=this;this._enabled&&i.filter.call(this._router.events,function(e){return e instanceof o.d}).subscribe(function(){ga("send",{hitType:"pageview",page:e._location.path()})})},e.prototype.trackEvent=function(e){this._enabled&&ga("send","event",e)},e.ctorParameters=function(){return[{type:r.f},{type:o.l}]},e}())},v4GM:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var o=a("bKpL"),r=(a.n(o),a("/zHi")),i=(a.n(r),0),n=function(){function e(){this.users={nick:{name:"Nick Jones",picture:"assets/images/nick.png"},eva:{name:"Eva Moor",picture:"assets/images/eva.png"},jack:{name:"Jack Williams",picture:"assets/images/jack.png"},lee:{name:"Lee Wong",picture:"assets/images/lee.png"},alan:{name:"Alan Thompson",picture:"assets/images/alan.png"},kate:{name:"Kate Martinez",picture:"assets/images/kate.png"}}}return e.prototype.getUsers=function(){return o.Observable.of(this.users)},e.prototype.getUserArray=function(){return o.Observable.of(this.userArray)},e.prototype.getUser=function(){return i=(i+1)%this.userArray.length,o.Observable.of(this.userArray[i])},e.ctorParameters=function(){return[]},e}()},w6mL:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var o=function(){function e(){}return e}()}},[0]);