(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["01089b90"],{"122b":function(t,e,n){"use strict";var r=n("8681"),o=n.n(r);o.a},"1c4c":function(t,e,n){"use strict";var r=n("9b43"),o=n("5ca1"),a=n("4bf8"),i=n("1fa8"),s=n("33a4"),c=n("9def"),l=n("f1ae"),u=n("27ee");o(o.S+o.F*!n("5cc5")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,p,d=a(t),h="function"==typeof this?this:Array,f=arguments.length,m=f>1?arguments[1]:void 0,g=void 0!==m,b=0,v=u(d);if(g&&(m=r(m,f>2?arguments[2]:void 0,2)),void 0==v||h==Array&&s(v))for(e=c(d.length),n=new h(e);e>b;b++)l(n,b,g?m(d[b],b):d[b]);else for(p=v.call(d),n=new h;!(o=p.next()).done;b++)l(n,b,g?i(p,m,[o.value,b],!0):o.value);return n.length=b,n}})},"504c":function(t,e,n){var r=n("9e1e"),o=n("0d58"),a=n("6821"),i=n("52a7").f;t.exports=function(t){return function(e){var n,s=a(e),c=o(s),l=c.length,u=0,p=[];while(l>u)n=c[u++],r&&!i.call(s,n)||p.push(t?[n,s[n]]:s[n]);return p}}},"7cab":function(t,e,n){"use strict";var r=n("81df"),o=n.n(r);o.a},"81df":function(t,e,n){},8615:function(t,e,n){var r=n("5ca1"),o=n("504c")(!1);r(r.S,"Object",{values:function(t){return o(t)}})},8681:function(t,e,n){},"8b24":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",[n("div",{staticClass:"q-pa-md desktop-only hidden"},[n("div",{staticClass:"row items-center justify-center"},[n("div",{attrs:{id:"apple-sign-in-button"}}),n("div",{attrs:{id:"apple-sign-out-button"}})])]),n("CKConnection"),t.$store.connection.loading?t._e():n("div",{staticClass:"col"},[n("Tabs")],1)],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.connection.loading?n("div",[n("div",{staticClass:"text-h6"},[t._v(t._s(t.$store.connection.loadingMsg))]),n("q-linear-progress",{staticClass:"q-mt-sm",attrs:{indeterminate:"",rounded:"",color:"secondary"}})],1):t._e()},i=[],s=(n("ac6a"),n("cadf"),n("8615"),n("5df3"),n("1c4c"),n("c5f6"),n("28a5"),n("a481"),n("551c"),n("06db"),n("c60b")),c={readRecords:function(t,e){return console.log("Reading records of type  "+e),new Promise(function(n,r){var o=t.publicCloudDatabase,a=[],i={recordType:e};function s(t){return o.performQuery(t).then(function(t){function e(t){t.records.forEach(function(t){a.push(t)})}if(t.hasErrors&&(console.error(t.errors[0]),r(t.errors[0])),t.moreComing)return e(t),s(t);0===t.records.length&&(console.error("No matching items"),r(t.errors[0])),e(t),n(a)}).catch(function(t){console.log(t),r(t)})}s(i)})},organizeRecords:function(t,e){for(var n in e.forEach(function(t){var e={Id:t.fields.author.value,pubname:"Anonyme",contrepeteries:[],votes:[],created:t.created.timestamp,voteNb:0};null!=t.fields.pubname&&(e.pubname=t.fields.pubname.value),null!=t.fields.votes&&(e.votes=t.fields.votes.value),s["b"].ck.authorsAndVoters[e.Id]=e}),s["b"].ck.authorsAndVoters["MoneyBoxApple"]={Id:"MoneyBoxApple",pubname:"Auteur De DecalSon",contrepeteries:[],votes:[],voteNb:0},t.forEach(function(t){var e=s["b"].ck.authorsAndVoters[t.fields.author.value],n=t.fields.spelling.value.replace(/\s+/g," ").trim(),r=t.fields.matches.value.split("-").map(function(t){return t.split(".").map(Number)}),o=[],a=[],i={},c=r.length>2?s["b"].ctpType.double:s["b"].ctpType.normal;r.forEach(function(t){var e=n.slice(0,t[0]+1),r=e.lastIndexOf(" ")+1,o=e.split(" ").length-1,a={};if(0==t[1])a[t[0]-r]=!1,c=s["b"].ctpType.glissee;else for(var l=0;l<t[1];l++)a[t[0]-r+l]=!0;i[o]=a});var l={author:e,Id:t.recordName,spelling:n,type:c,matches:{ranges:r,indices:o,emptyIndices:a,solutionWordIndices:i},status:0,created:t.created.timestamp,voteNb:0,isSolutionWord:function(t){return!(void 0==this.matches.solutionWordIndices[t])},isSolutionLetterAndType:function(t,e){var n={answer:!1,normalType:void 0};if(!this.isSolutionWord(t))return n;var r=this.matches.solutionWordIndices[t][e];return void 0==r?n:{answer:!0,normalType:r}}};null!=t.fields.status&&(l.status=t.fields.status.value),e.contrepeteries.push(l),s["b"].ck.contrepeteries[l.Id]=l}),s["b"].ck.authorsAndVoters){var r=s["b"].ck.authorsAndVoters[n];0==r.contrepeteries.length?s["b"].ck.voterList.push(r):(s["b"].ck.authorList.push(r),s["b"].ck.authors[n]=r,0==r.votes.length&&console.log("Author "+r.pubname+" has "+r.contrepeteries.length+" contrepeterie(s) but has never voted"))}e.forEach(function(t){t.fields.votes.value.forEach(function(t){null!=s["b"].ck.contrepeteries[t]?(s["b"].ck.contrepeteries[t].voteNb++,s["b"].ck.totalVotes++):console.log("WARNING : Counterparty voted for but deleted "+t)})}),s["b"].ck.authorList.forEach(function(t){t.contrepeteries.forEach(function(e){t.voteNb+=e.voteNb})}),s["b"].ck.contrepeterieList=Array.from(Object.values(s["b"].ck.contrepeteries))}},l={name:"CKConnection",data:function(){return{}},mounted:function(){var t=this,e=document.createElement("script");e.setAttribute("src","https://cdn.apple-cloudkit.com/ck/1/cloudkit.js"),document.head.appendChild(e),document.addEventListener("cloudkitloaded",function(){console.log("listening for cloudkitloaded "),self.CloudKit.configure({services:{fetch:fetch},containers:[{containerIdentifier:"iCloud.MoneyBox.DecalSon",apiToken:"a255bac321460b4bbaa33ebc36ab80effc7edbe396a2b1784f400e0f6df33790",environment:"development"}]}),console.log("cloudkitloaded");var e=function(){t.$store.connection.loadingMsg="Chargement des contrepèteries",c.readRecords(n,"Contrepeterie").then(function(e){self.contrepeteries=e,t.$store.connection.loadingMsg="Chargement des auteurs et votes",c.readRecords(n,"Votes").then(function(n){c.organizeRecords(e,n),t.$store.connection.loading=!1}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)})},n=self.CloudKit.getDefaultContainer();n.registerForNotifications().catch(function(t){console.log(t)}),n.addNotificationListener(function(t){console.log(t),e()});var r=function(e){e.isDiscoverable?t.displayUserName=e.firstName+" "+e.lastName:t.displayUserName="Veut Rester Anonyme",n.whenUserSignsOut().then(self.gotoUnauthenticatedState)},o=function(e){e&&console.log(e),t.displayUserName="Anonyme",n.whenUserSignsIn().then(self.gotoAuthenticatedState).catch(self.gotoUnauthenticatedState)};n.setUpAuth().then(function(t){console.log("setUpAuth"),e(),t?r(t):o()}).catch(function(t){console.log(t)})})}},u=l,p=n("2877"),d=Object(p["a"])(u,a,i,!1,null,null,null),h=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-tabs",{staticClass:"text-grey",attrs:{"no-caps":"","inline-label":"","narrow-indicator":"","active-color":"primary","indicator-color":"primary",align:"justify"},model:{value:t.$store.frontEnd.currentTabPanel,callback:function(e){t.$set(t.$store.frontEnd,"currentTabPanel",e)},expression:"$store.frontEnd.currentTabPanel"}},[n("q-tab",{attrs:{name:"CtpTabPanel",icon:"comment",label:t.CtpMenu}}),n("q-tab",{attrs:{name:"AuthorTabPanel",icon:"person",label:t.AuthorMenu}})],1),n("q-separator"),n("q-tab-panels",{attrs:{"keep-alive":""},model:{value:t.$store.frontEnd.currentTabPanel,callback:function(e){t.$set(t.$store.frontEnd,"currentTabPanel",e)},expression:"$store.frontEnd.currentTabPanel"}},[n("q-tab-panel",{attrs:{name:"CtpTabPanel"}},[n("CtpTabPanel")],1),n("q-tab-panel",{attrs:{name:"AuthorTabPanel"}},[n("AuthorTabPanel")],1)],1)],1)},m=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column",style:t.myHeight},[n("div",{staticClass:"col"},[n("CtpSpelling")],1),n("div",{staticClass:"col items-end"},[n("div",{staticClass:"row justify-around"},[n("CtpNbVotes"),n("CtpAuthor")],1),n("q-separator",{attrs:{spaced:""}}),n("div",{staticClass:"row justify-center items-center"},[n("CtpPagination")],1),n("div",{staticClass:"row justify-around items-center"},[n("CtpSortByVotes"),n("CtpSearch"),n("div",{staticClass:"q-ma-sm"},[n("CtpFilter")],1),n("CtpSolution")],1)],1)])},b=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-weight-light fontsize-18",attrs:{id:"ctp"}},t._l(t.$ctpMgr.currentCtpNbWords(),function(e){return n("div",{key:t.wordUniqueKey(e),class:t.ctpW(e-1),staticStyle:{display:"inline-block"}},[t._l(t.$ctpMgr.currentCtpWord(e-1),function(r,o){return n("div",{key:t.letterUniqueKey(e,o),class:t.ctpL(e-1,o),staticStyle:{display:"inline-block"},attrs:{id:t.ctpL(e-1,o)}},[t._v("\n      "+t._s(r)+"\n    ")])}),n("div",{staticClass:"ctpL",staticStyle:{display:"inline-block",width:"5px"},attrs:{id:"ctpL"}})],2)}),0)},C=[],S={name:"CtpSpelling",data:function(){return{}},mounted:function(){var t=this;function e(t){return new Promise(function(e){return setTimeout(e,t)})}e(5).then(function(){console.log(t.$store.connection.loading)})},methods:{wordUniqueKey:function(t){return"C"+this.$store.ctpFilter.currentCtpNb+"W"+t},letterUniqueKey:function(t,e){return"C"+this.$store.currentCtpId()+"W"+t+"L"+e},ctpW:function(t){return void 0==this.$store.currentCtp()?"":this.$store.currentCtp().isSolutionWord(t)?"ctpWS":"ctpW"},ctpL:function(t,e){if(void 0==this.$store.currentCtp())return"";var n=this.$store.currentCtp().isSolutionLetterAndType(t,e);return n.answer?n.normalType?"ctpLSN":"ctpLSE":"ctpL"}}},y=S,$=(n("7cab"),Object(p["a"])(y,v,C,!1,null,null,null)),q=$.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-chip",{attrs:{square:"",icon:"how_to_vote",label:t.$ctpMgr.currentCtpNbVotes()}})},w=[],x={name:"CtpNbVotes",data:function(){return{}}},A=x,P=Object(p["a"])(A,k,w,!1,null,null,null),L=P.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-chip",{attrs:{square:"",icon:"face",label:t.$ctpMgr.currentCtpAuthor()}})},E=[],T={name:"CtpAuthor",data:function(){return{}}},N=T,V=Object(p["a"])(N,_,E,!1,null,null,null),O=V.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-btn-toggle",{attrs:{disable:t.$store.frontEnd.animatingCtp,"toggle-color":"primary",options:t.$store.ctpFilter.filterOptions,"no-caps":"","no-wrap":"",dense:t.$q.screen.lt.sm,size:t.$ctpMgr.buttonSize(t.$q.screen)},model:{value:t.ctpFilter,callback:function(e){t.ctpFilter=e},expression:"ctpFilter"}})},M=[],j={name:"CtpFilter",data:function(){return{}},computed:{ctpFilter:{get:function(){return this.$store.ctpFilter.currentFilter},set:function(t){console.log("calling mgr"),this.$ctpMgr.ctpFilterChanged(t)}}},watch:{ctpFilter:function(){this.$ctpAnimate.animateCtp()}},mounted:function(){this.ctpFilter="all"}},I=j,B=Object(p["a"])(I,F,M,!1,null,null,null),W=B.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-btn",{attrs:{disable:t.$store.frontEnd.animatingCtp,dense:"",size:t.$ctpMgr.buttonSize(t.$q.screen),icon:"search"},on:{click:t.searchCtpDialog}}),n("q-dialog",{attrs:{persistent:"",maximized:""},model:{value:t.searchCtp,callback:function(e){t.searchCtp=e},expression:"searchCtp"}},[n("q-layout",{staticClass:"bg-white",attrs:{view:"Lhh lpR fff",container:""}},[n("q-page-container",[n("q-table",{attrs:{grid:!t.$q.platform.is.desktop,title:"Contrepèteries",data:t.ctpSearchList,columns:t.ctpSearchColums,"row-key":"Id",filter:t.ctpSearch,selection:"multiple",selected:t.ctpSearchSelected,dense:"","rows-per-page-label":"Nombre par page","rows-per-page-options":[1,2,3,5,10,20],"pagination-label":t.getPaginationLabel,pagination:t.myPagination,"selected-rows-label":t.getSelectedRowsLabel,"no-results-label":"Pas de contrepèterie trouvée"},on:{"update:selected":function(e){t.ctpSearchSelected=e},"update:pagination":function(e){t.myPagination=e}},scopedSlots:t._u([{key:"top-right",fn:function(){return[n("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Chercher"},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.ctpSearch,callback:function(e){t.ctpSearch=e},expression:"ctpSearch"}})]},proxy:!0}])}),n("div",[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Annuler",color:"primary"}}),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Valider",color:"primary"},on:{click:t.ctpSearchValidated}})],1)],1)],1)],1)],1)},U=[],z={name:"CtpSearch",data:function(){return{searchCtp:!1,ctpSearch:"",ctpSearchList:[],ctpSearchSelected:[],ctpSearchColums:[{name:"Id",label:"Contrepèterie",field:"spelling",align:"left"},{name:"author",label:"Auteur",field:"author",format:function(t){return t.pubname}},{name:"voteNb",label:"Votes",field:"voteNb",align:"right",sortable:!0}],myPagination:{rowsPerPage:this.$q.platform.is.desktop?12:this.$q.screen.height<=568?1:this.$q.screen.height<=812?2:this.$q.screen.height<=896?3:5}}},methods:{searchCtpDialog:function(){this.ctpSearchList=this.$store.ck.contrepeterieList,this.searchCtp=!0},ctpSearchValidated:function(){console.log("search validated"),0==this.ctpSearchSelected.length?this.$ctpMgr.ctpFilterChanged("all"):this.$ctpMgr.ctpFilteredListChanged(this.ctpSearchSelected)},getPaginationLabel:function(t,e,n){return t+"-"+e+" sur "+n},getSelectedRowsLabel:function(t){return t+" sélectionnée"+(t>1?"s":"")}}},K=z,D=Object(p["a"])(K,R,U,!1,null,null,null),H=D.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-pagination",{attrs:{disable:t.$store.frontEnd.animatingCtp,max:t.$store.ctpFilter.ctpFilteredList.length,input:!0,size:t.$ctpMgr.buttonSize(t.$q.screen)},on:{input:function(e){return t.currentCtp=e-1}},model:{value:t.currentCtpPlusOne,callback:function(e){t.currentCtpPlusOne=e},expression:"currentCtpPlusOne"}})},G=[],Q={name:"CtpPagination",data:function(){return{}},computed:{currentCtpPlusOne:{get:function(){return this.$store.ctpFilter.currentCtpNb+1},set:function(t){this.$ctpMgr.changeCurrentCtp(t-1)}}},watch:{currentCtpPlusOne:function(){this.$ctpAnimate.animateCtp()}}},X=Q,Y=Object(p["a"])(X,J,G,!1,null,null,null),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-toggle",{attrs:{label:"Triées par votes",disable:t.onlyOneCtp,size:t.$ctpMgr.buttonSize(t.$q.screen)},model:{value:t.sortedByVotes,callback:function(e){t.sortedByVotes=e},expression:"sortedByVotes"}})},et=[],nt={name:"CtpSortByVotes",data:function(){return{}},computed:{sortedByVotes:{get:function(){return this.$store.ctpFilter.ctpSortedByVotes},set:function(t){this.$ctpMgr.ctpSortedByVotesChanged(t)}},onlyOneCtp:function(){return this.$store.ctpFilter.ctpFilteredList.length<2||this.$store.frontEnd.animatingCtp}},watch:{sortedByVotes:function(){this.$ctpAnimate.animateCtp()}}},rt=nt,ot=Object(p["a"])(rt,tt,et,!1,null,null,null),at=ot.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-btn",{staticClass:"solutionButton",attrs:{disable:t.$store.frontEnd.animatingCtp||3==t.$store.frontEnd.solutionLevel,dense:"","no-caps":"",flat:"",color:"primary",label:t.solutionLabels[t.$store.frontEnd.solutionLevel]},on:{click:t.solutionClicked}})},st=[],ct={name:"CtpSolution",data:function(){return{solutionLabels:["Un peu d'aide","Beaucoup d'aide","Solution","Solution"]}},methods:{solutionClicked:function(){this.$ctpAnimate.animateCtp(this.$store.frontEnd.solutionLevel+1),++this.$store.frontEnd.solutionLevel}}},lt=ct,ut=(n("122b"),Object(p["a"])(lt,it,st,!1,null,null,null)),pt=ut.exports,dt={name:"CtpTabPanel",data:function(){return{}},components:{CtpSpelling:q,CtpNbVotes:L,CtpAuthor:O,CtpFilter:W,CtpSearch:H,CtpPagination:Z,CtpSortByVotes:at,CtpSolution:pt},computed:{myHeight:function(){return"height:"+(this.$q.screen.height-198)+"px"}},created:function(){console.log("CtpTabPanel created")},mounted:function(){console.log("CtpTabPanel mounted"),console.log(this.$q)}},ht=dt,ft=Object(p["a"])(ht,g,b,!1,null,null,null),mt=ft.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column",style:t.myHeight},[n("div",{staticClass:"col"},[n("AuthorSearch")],1)])},bt=[],vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{staticClass:"bg-white",attrs:{view:"Lhh lpR fff",container:""}},[n("q-page-container",[n("q-page",[n("div",[n("q-table",{attrs:{data:t.authorSearchList,columns:t.authorSearchColums,"row-key":"Id",filter:t.authorSearch,selection:"single",selected:t.authorSearchSelected,dense:"","rows-per-page-options":[],"pagination-label":t.getPaginationLabel,pagination:t.myPagination,"selected-rows-label":t.getSelectedRowsLabel,"no-results-label":"Pas d'auteur trouvé"},on:{"update:selected":function(e){t.authorSearchSelected=e},"update:pagination":function(e){t.myPagination=e}},scopedSlots:t._u([{key:"top-right",fn:function(){return[n("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Chercher"},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.authorSearch,callback:function(e){t.authorSearch=e},expression:"authorSearch"}})]},proxy:!0}])}),n("div",[n("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.authorSearchSelected.length>0,expression:"authorSearchSelected.length > 0"}],attrs:{"no-caps":"",flat:"",label:t.getValidationButtonName(),color:"primary"},on:{click:t.authorSearchValidated}})],1)],1)])],1)],1)},Ct=[],St={name:"AuthorSearch",data:function(){return{authorSearch:"",authorSearchList:[],authorSearchSelected:[],authorSearchColums:[{name:"Id",label:"Auteur",field:"pubname",align:"left",classes:"ellipsis",style:"max-width: 90px"},{name:"ctps",label:"Contrepèteries",field:"contrepeteries",align:"right",format:function(t){return t.length},sortable:!0,classes:"ellipsis",style:"max-width: 100px"},{name:"voteNb",label:"Votes",field:"voteNb",align:"right",sortable:!0,style:"max-width: 90px"}],myPagination:{rowsPerPage:this.$q.platform.is.desktop?15:this.$q.screen.height<=568?8:this.$q.screen.height<=667?11:this.$q.screen.height<=736?14:this.$q.screen.height<=812?15:this.$q.screen.height<=896?16:20}}},mounted:function(){console.log("AuthorSearch mounted"),this.authorSearchList=this.$store.ck.authorList},methods:{authorSearchValidated:function(){this.$store.changeCurrentTabPanel("CtpTabPanel"),this.$ctpMgr.ctpByAuthorChanged(this.authorSearchSelected[0].contrepeteries)},getPaginationLabel:function(t,e,n){return t+"-"+e+" sur "+n},getSelectedRowsLabel:function(){return""},getValidationButtonName:function(){return this.authorSearchSelected.length>0?"Contrepèteries de "+this.authorSearchSelected[0].pubname:""}}},yt=St,$t=Object(p["a"])(yt,vt,Ct,!1,null,null,null),qt=$t.exports,kt={name:"AuthorTabPanel",data:function(){return{}},components:{AuthorSearch:qt},computed:{myHeight:function(){return"height:"+(this.$q.screen.height-148)+"px"}},mounted:function(){console.log("AuthorTabPanel mounted")}},wt=kt,xt=Object(p["a"])(wt,gt,bt,!1,null,null,null),At=xt.exports,Pt={name:"Tabs",components:{CtpTabPanel:mt,AuthorTabPanel:At},data:function(){return{}},computed:{CtpMenu:function(){return this.$store.ck.contrepeterieList.length+" Contrepèteries"},AuthorMenu:function(){return this.$store.ck.authorList.length+" Auteurs"}},mounted:function(){console.log("Tabs is mounted ")}},Lt=Pt,_t=Object(p["a"])(Lt,f,m,!1,null,null,null),Et=_t.exports,Tt={name:"PageIndex",data:function(){return{}},components:{CKConnection:h,Tabs:Et},mounted:function(){console.log("Index is mounted ")}},Nt=Tt,Vt=Object(p["a"])(Nt,r,o,!1,null,null,null);e["default"]=Vt.exports}}]);