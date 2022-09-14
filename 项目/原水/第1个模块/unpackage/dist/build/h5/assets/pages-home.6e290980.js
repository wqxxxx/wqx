import{o as e,c as t,w as i,a,b as s,r as o,n as r,d as l,e as n,f as u,g,t as d,F as c,i as h,h as p,j as f,k as m,S as y,l as x,m as w,p as S,v as b,q as k,I as P,s as _,u as v,x as T,y as C,z as A,A as z,B as I}from"./index.5d657fe7.js";var F=(e,t)=>{const i=e.__vccOpts||e;for(const[a,s]of t)i[a]=s;return i};var N=F({name:"gui-swiper",props:{width:{type:Number,default:750},height:{type:Number,default:300},swiperItems:{type:Array,default:function(){return new Array}},borderRadius:{type:String,default:"10rpx"},indicatorBarHeight:{type:Number,default:68},indicatorBarBgClass:{type:Array,default:function(){return["gui-bg-black-opacity5"]}},indicatorWidth:{type:Number,default:18},indicatorActiveWidth:{type:Number,default:18},indicatorHeight:{type:Number,default:18},indicatorRadius:{type:Number,default:18},indicatorClass:{type:Array,default:function(){return["gui-bg-gray","gui-dark-bg-level-5"]}},indicatorActiveClass:{type:Array,default:function(){return["gui-bg-primary"]}},indicatorType:{type:String,default:"dot"},indicatorPosition:{type:String,default:"absolute"},indicatorDirection:{type:String,default:"center"},spacing:{type:Number,default:50},padding:{type:Number,default:26},interval:{type:Number,default:5e3},autoplay:{type:Boolean,default:!0},currentIndex:{type:Number,default:0},opacity:{type:Number,default:.66},titleColor:{type:String,default:"#FFFFFF"},titleSize:{type:String,default:"28rpx"},imgMode:{type:String,default:"widthFix"}},data:()=>({current:0,isReady:!1,widthIn:750,heightIn:300,widthInSamll:700,heightInSmall:280,paddingY:0}),watch:{currentIndex:function(e){this.current=e}},created:function(){this.current=this.currentIndex,this.init()},methods:{init:function(){this.widthIn=this.width-2*this.spacing,this.heightIn=this.height/this.width*this.widthIn,this.paddingY=this.padding*this.height/this.width,this.widthInSamll=this.widthIn-2*this.padding,this.heightInSmall=this.heightIn-2*this.paddingY},swiperchange:function(e){var t=e.detail.current;this.current=t,this.$emit("swiperchange",t)},taped:function(e){this.$emit("taped",e.currentTarget.dataset.index)}},emits:["swiperchange","taped"]},[["render",function(w,S,b,k,P,_){const v=h,T=p,C=f,A=m,z=y,I=x;return e(),t(C,{class:"gui-swiper-card-wrap"},{default:i((()=>[a(I,{style:r({width:b.width+"rpx",height:P.heightIn+"rpx"}),class:"gui-swiper-card","indicator-dots":!1,interval:b.interval,circular:!0,autoplay:b.autoplay,current:b.currentIndex,"previous-margin":b.spacing+"rpx","next-margin":b.spacing+"rpx",onChange:_.swiperchange},{default:i((()=>[(e(!0),s(c,null,o(b.swiperItems,((s,o)=>(e(),t(z,{key:o,class:"gui-swiper-card-item gui-border-box"},{default:i((()=>["click"!=s.opentype?(e(),t(T,{key:0,class:"gui-swiper-card-nav gui-transition-all",url:s.url,"open-type":s.opentype,"hover-class":"none",style:r({paddingLeft:P.current!=o?b.padding+"rpx":"0rpx",paddingRight:P.current!=o?b.padding+"rpx":"0rpx",paddingTop:P.current!=o?P.paddingY+"rpx":"0rpx",paddingBottom:P.current!=o?P.paddingY+"rpx":"0rpx"})},{default:i((()=>[a(v,{style:r({borderRadius:b.borderRadius,width:P.current!=o?P.widthInSamll+"rpx":P.widthIn+"rpx",height:P.current!=o?P.heightInSmall+"rpx":P.heightIn+"rpx",opacity:P.current!=o?b.opacity:1}),src:s.img,mode:b.imgMode,class:"gui-swiper-card-image gui-transition-all"},null,8,["style","src","mode"])])),_:2},1032,["url","open-type","style"])):l("",!0),"click"==s.opentype?(e(),t(C,{key:1,class:"gui-swiper-card-nav gui-transition-all","hover-class":"none",onClick:n(_.taped,["stop"]),"data-index":o,style:r({paddingLeft:P.current!=o?b.padding+"rpx":"0rpx",paddingRight:P.current!=o?b.padding+"rpx":"0rpx",paddingTop:P.current!=o?P.paddingY+"rpx":"0rpx",paddingBottom:P.current!=o?P.paddingY+"rpx":"0rpx"})},{default:i((()=>[a(v,{style:r({borderRadius:b.borderRadius,width:P.current!=o?P.widthInSamll+"rpx":P.widthIn+"rpx",height:P.current!=o?P.heightInSmall+"rpx":P.heightIn+"rpx",opacity:P.current!=o?b.opacity:1}),src:s.img,mode:b.imgMode,class:"gui-swiper-card-image gui-transition-all"},null,8,["style","src","mode"])])),_:2},1032,["onClick","data-index","style"])):l("",!0),"number"==b.indicatorType?(e(),t(C,{key:2,class:u(["gui-indicator-dot-numbers gui-flex gui-row gui-nowrap",b.indicatorBarBgClass]),style:r({height:b.indicatorBarHeight+"rpx","border-bottom-left-radius":b.borderRadius,"border-bottom-right-radius":b.borderRadius,width:P.current!=o?P.widthInSamll+"rpx":P.widthIn+"rpx",left:P.current!=o?b.padding+"rpx":"0rpx",bottom:P.current!=o?P.paddingY+"rpx":"0rpx"})},{default:i((()=>[a(A,{class:"gui-indicator-dot-text",style:r({paddingLeft:"20rpx",fontStyle:"italic",color:b.titleColor})},{default:i((()=>[g(d(o+1),1)])),_:2},1032,["style"]),a(A,{class:"gui-indicator-dot-text",style:r({fontSize:"36rpx",color:b.titleColor})},{default:i((()=>[g(" / ")])),_:1},8,["style"]),a(A,{class:"gui-indicator-dot-text",style:r({fontSize:"28rpx",paddingRight:"20rpx",fontStyle:"italic",color:b.titleColor})},{default:i((()=>[g(d(b.swiperItems.length),1)])),_:1},8,["style"]),a(A,{class:"gui-swiper-text gui-block-text gui-flex1 gui-ellipsis",style:r({color:b.titleColor,fontSize:b.titleSize,height:b.indicatorBarHeight+"rpx",lineHeight:b.indicatorBarHeight+"rpx"})},{default:i((()=>[g(d(s.title),1)])),_:2},1032,["style"])])),_:2},1032,["class","style"])):l("",!0)])),_:2},1024)))),128))])),_:1},8,["style","interval","autoplay","current","previous-margin","next-margin","onChange"]),"dot"==b.indicatorType?(e(),t(C,{key:0,class:"gui-indicator-dots gui-flex gui-row gui-nowrap gui-justify-content-center gui-align-items-center gui-border-box",style:r({width:b.width+"rpx",height:b.indicatorBarHeight+"rpx",position:b.indicatorPosition,paddingLeft:b.spacing+"rpx",paddingRight:b.spacing+"rpx","justify-content":b.indicatorDirection})},{default:i((()=>[a(C,{class:"gui-indicator-dots-wrap gui-flex gui-row gui-nowrap gui-justify-content-center"},{default:i((()=>[(e(!0),s(c,null,o(b.swiperItems,((i,a)=>(e(),t(C,{key:a,class:u(["gui-indicator-dot",P.current==a?"dot-show":"",P.current==a?b.indicatorActiveClass:b.indicatorClass]),style:r({width:P.current!=a?b.indicatorWidth+"rpx":b.indicatorActiveWidth+"rpx",height:b.indicatorHeight+"rpx",borderRadius:b.indicatorRadius+"rpx"})},null,8,["class","style"])))),128))])),_:1})])),_:1},8,["style"])):l("",!0)])),_:1})}],["__scopeId","data-v-701e0ec2"]]);function M(e,t){return w(e)?t:e}var B=F({name:"PagePagination",props:{total:{type:Number,default:0},pageSize:{type:Number,default:10},currentPage:{type:Number,default:1},showPageSize:{type:Number,default:5},mode:{type:String,default:"multi"},forceEllipses:{type:Boolean,default:!1},btnText:{type:Boolean,default:!1},showAround:{type:Boolean,default:!1},numAround:{type:Boolean,default:!1},size:{type:String,default:"normal"},color:{type:String,default:"#1989FA"},showPageInfo:{type:Boolean,default:!1},showGoPage:{type:Boolean,default:!1},trigger:{type:String,default:"blur"}},data(){return{nowPage:this.currentPage,inputPage:this.currentPage}},watch:{currentPage(e){this.nowPage=e>this.pageNum?this.pageNum:e,this.inputPage=e>this.pageNum?this.pageNum:e,1==e&&(this.nowPage=1,this.inputPage=1)}},computed:{pageNum(){return Math.ceil(this.total/this.pageSize)},pageNumArr(){var e=[];for(let t=0;t<this.pageNum;t++)e.push(t+1);return e},getFirstPage(){let e=0,t=Math.floor((this.showPageSize-1)/2),i=Math.floor(this.showPageSize/2)-1;return e=this.nowPage<=t?this.numAround?2:1:this.nowPage>=this.pageNum-i?this.forceEllipses||this.numAround?this.pageNum-this.showPageSize+3:this.pageNum-this.showPageSize+1:this.forceEllipses||this.numAround?this.nowPage-t+1:this.nowPage-t,e}},methods:{clickPage(e){this.nowPage!=e&&(this.nowPage=e,this.change(e,"page"))},clickPrev(){if(this.nowPage>1){let e=this.nowPage-1;this.nowPage=e,this.change(e,"prev")}},clickNext(){if(this.nowPage<this.pageNum){let e=this.nowPage+1;this.nowPage=e,this.change(e,"next")}},clickStart(){if(1!=this.nowPage){let e=1;this.nowPage=e,this.change(e,"homePage")}},clickEnd(){if(this.nowPage!=this.pageNum){let e=this.pageNum;this.nowPage=e,this.change(e,"endPage")}},change(e,t){this.inputPage=e,this.$emit("change",e,t)},onInput(e){let t=this,i=parseInt(e.target.value.replace(/[^\d]/g,""));setTimeout((function(){t.inputPage=i?i>t.pageNum?t.pageNum:i:""}),10)},goPage(){this.nowPage=parseInt(this.inputPage?this.inputPage:"1"),this.inputPage=parseInt(this.inputPage?this.inputPage:"1"),this.change(parseInt(this.inputPage),"goPage")}}},[["render",function(n,h,p,y,x,w){const _=m,v=f,T=P;return e(),t(v,{class:u(["contact page-pagination","large"==p.size?"size-large":"small"==p.size?"size-small":""])},{default:i((()=>[a(v,{class:"page-con"},{default:i((()=>[a(v,{class:"page-scroll"},{default:i((()=>[a(v,{class:"page-scroll-child"},{default:i((()=>[p.showAround&&!p.numAround?(e(),t(v,{key:0,class:u(["pag-btn start",[1==x.nowPage?"btn-ban":"",p.btnText?"btn-text":""]]),style:r({color:p.color}),onClick:w.clickStart},{default:i((()=>[p.btnText?(e(),t(_,{key:0},{default:i((()=>[g("首页")])),_:1})):(e(),t(_,{key:1,class:"icon icon-left1"}))])),_:1},8,["style","class","onClick"])):l("",!0),a(v,{class:u(["pag-btn prev",[1==x.nowPage?"btn-ban":"",p.btnText?"btn-text":""]]),style:r({color:p.color}),onClick:w.clickPrev},{default:i((()=>[p.btnText?(e(),t(_,{key:0},{default:i((()=>[g("上页")])),_:1})):(e(),t(_,{key:1,class:"icon icon-left"}))])),_:1},8,["style","class","onClick"]),"simple"==p.mode?(e(),t(v,{key:1,class:"page-num simple"},{default:i((()=>[a(_,{style:r([{color:p.color},{"margin-right":"10rpx"}])},{default:i((()=>[g(d(x.nowPage),1)])),_:1},8,["style"]),g(" / "+d(w.pageNum),1)])),_:1})):(e(),t(v,{key:2,class:"page-num"},{default:i((()=>[w.pageNum<=p.showPageSize?(e(!0),s(c,{key:0},o(w.pageNumArr,(a=>(e(),t(v,{key:a,class:u(["pag-btn",a==x.nowPage?"active":""]),style:r({color:p.color,backgroundColor:a==x.nowPage?p.color:""}),onClick:e=>w.clickPage(a)},{default:i((()=>[g(d(a),1)])),_:2},1032,["style","class","onClick"])))),128)):(e(),s(c,{key:1},[p.numAround?(e(),t(v,{key:0,class:u(["pag-btn",1==x.nowPage?"active":""]),style:r({color:p.color,backgroundColor:1==x.nowPage?p.color:""}),onClick:h[0]||(h[0]=e=>w.clickPage(1))},{default:i((()=>[g(" 1 ")])),_:1},8,["style","class"])):l("",!0),S(a(v,{class:"pag-btn ellipsis-btn",style:r({color:p.color})},{default:i((()=>[a(_,{class:"icon icon-more"})])),_:1},8,["style"]),[[b,p.forceEllipses&&1!=w.getFirstPage||p.numAround&&2!=w.getFirstPage]]),(e(!0),s(c,null,o(p.showPageSize,((a,o)=>(e(),s(c,null,[o<p.showPageSize-2?(e(),t(v,{key:o,class:u(["pag-btn",w.getFirstPage+o==x.nowPage?"active":""]),style:r({color:p.color,backgroundColor:w.getFirstPage+o==x.nowPage?p.color:""}),onClick:e=>w.clickPage(w.getFirstPage+o)},{default:i((()=>[g(d(w.getFirstPage+o),1)])),_:2},1032,["style","class","onClick"])):S((e(),t(v,{key:o,class:u(["pag-btn",w.getFirstPage+o==x.nowPage?"active":""]),style:r({color:p.color,backgroundColor:w.getFirstPage+o==x.nowPage?p.color:""}),onClick:e=>w.clickPage(w.getFirstPage+o)},{default:i((()=>[g(d(w.getFirstPage+o),1)])),_:2},1032,["style","class","onClick"])),[[b,!p.forceEllipses&&!p.numAround]])],64)))),256)),S(a(v,{class:"pag-btn ellipsis-btn",style:r({color:p.color})},{default:i((()=>[a(_,{class:"icon icon-more"})])),_:1},8,["style"]),[[b,p.forceEllipses&&w.getFirstPage<w.pageNum-(p.showPageSize-3)||p.numAround&&w.getFirstPage<w.pageNum-(p.showPageSize-2)]]),p.numAround?S((e(),t(v,{key:1,class:u(["pag-btn",x.nowPage==w.pageNum?"active":""]),style:r({color:p.color,backgroundColor:x.nowPage==w.pageNum?p.color:""}),onClick:h[1]||(h[1]=e=>w.clickPage(w.pageNum))},{default:i((()=>[g(d(w.pageNum),1)])),_:1},8,["style","class"])),[[b,w.getFirstPage<w.pageNum-(p.showPageSize-3)]]):l("",!0)],64))])),_:1})),a(v,{class:u(["pag-btn next",[w.pageNum<=x.nowPage?"btn-ban":"",p.btnText?"btn-text":""]]),style:r({color:p.color}),onClick:w.clickNext},{default:i((()=>[p.btnText?(e(),t(_,{key:0},{default:i((()=>[g("下页")])),_:1})):(e(),t(_,{key:1,class:"icon icon-right"}))])),_:1},8,["style","class","onClick"]),p.showAround&&!p.numAround?(e(),t(v,{key:3,class:u(["pag-btn end",[w.pageNum<=x.nowPage?"btn-ban":"",p.btnText?"btn-text":""]]),style:r({color:p.color}),onClick:w.clickEnd},{default:i((()=>[p.btnText?(e(),t(_,{key:0},{default:i((()=>[g("尾页")])),_:1})):(e(),t(_,{key:1,class:"icon icon-right1"}))])),_:1},8,["style","class","onClick"])):l("",!0)])),_:1})])),_:1})])),_:1}),a(v,{class:"page-info"},{default:i((()=>[k(n.$slots,"default",{},void 0,!0),p.showPageInfo?(e(),t(v,{key:0,class:"page-info-con"},{default:i((()=>[a(v,null,{default:i((()=>[g("共 "+d(p.total)+" 条，",1)])),_:1}),a(v,null,{default:i((()=>[g("每页 "+d(p.pageSize)+" 条，",1)])),_:1}),a(v,null,{default:i((()=>[g(" 当前页 "+d(x.nowPage)+"/"+d(w.pageNum)+" ",1),p.showGoPage?(e(),t(_,{key:0},{default:i((()=>[g("，")])),_:1})):l("",!0)])),_:1})])),_:1})):l("",!0),p.showGoPage?(e(),t(v,{key:1,class:"page-go"},{default:i((()=>[g(" 前往第 "),"blur"==p.trigger?(e(),s(c,{key:0},[a(T,{class:"page-input",type:"text",modelValue:x.inputPage,"onUpdate:modelValue":h[2]||(h[2]=e=>x.inputPage=e),onBlur:w.goPage,onInput:w.onInput},null,8,["modelValue","onBlur","onInput"]),g(" 页 ")],64)):(e(),s(c,{key:1},[a(T,{class:"page-input",type:"text",modelValue:x.inputPage,"onUpdate:modelValue":h[3]||(h[3]=e=>x.inputPage=e),onInput:w.onInput},null,8,["modelValue","onInput"]),g(" 页 "),"click"==p.trigger?(e(),t(_,{key:0,class:"page-input-btn",onClick:w.goPage},{default:i((()=>[g("跳转")])),_:1},8,["onClick"])):l("",!0)],64))])),_:1})):l("",!0)])),_:3})])),_:3},8,["class"])}],["__scopeId","data-v-4d124604"]]);var L=F({name:"gui-refresh",props:{refreshText:{type:Array,default:function(){return["继续下拉刷新","松开手指开始刷新","数据刷新中","数据已刷新"]}},customClass:{type:Array,default:function(){return[["gui-color-gray"],["gui-color-gray"],["gui-primary-text"],["gui-color-green"]]}},refreshFontSize:{type:Number,default:28}},data:()=>({reScrollTop:0,refreshHeight:0,refreshY:0,refreshStatus:0,refreshTimer:0}),methods:{touchstart:function(e){this.reScrollTop>10||(this.refreshY=e.changedTouches[0].pageY)},touchmove:function(e){if(this.refreshStatus>=1)return null;if(!(this.reScrollTop>10)){var t=e.changedTouches[0].pageY-this.refreshY;(t/=2)>=50&&(t=50,this.refreshStatus=1),t>15&&(this.refreshHeight=t)}},touchend:function(e){if(!(this.reScrollTop>10))return this.refreshStatus<1?this.resetFresh():void(1==this.refreshStatus&&(this.refreshStatus=2,this.$emit("reload")))},scroll:function(e){this.reScrollTop=e.detail.scrollTop},endReload:function(){this.refreshStatus=3,setTimeout((()=>{this.resetFresh()}),1e3)},resetFresh:function(){return this.refreshHeight=0,this.refreshStatus=0,null},rotate360:function(){var e=this.$refs.loadingIcon;animation.transition(e,{styles:{transform:"rotate(7200deg)",transformOrigin:"center"},duration:2e4,timingFunction:"linear",needLayout:!1,delay:0})}},emits:["reload"]},[["render",function(s,o,n,c,h,p){const y=m,x=f;return e(),t(x,{class:"gui-page-refresh gui-flex gui-column gui-justify-content-center",style:r({height:h.refreshHeight+"px"})},{default:i((()=>[a(x,{style:r({height:n.refreshFontSize+"rpx"}),class:"gui-flex gui-row gui-justify-content-center gui-align-items-center"},{default:i((()=>[0==h.refreshStatus||1==h.refreshStatus?(e(),t(y,{key:0,class:u(["gui-icons gui-block",n.customClass[h.refreshStatus]]),style:r({fontSize:n.refreshFontSize+"rpx",width:n.refreshFontSize+"rpx",height:n.refreshFontSize+"rpx",lineHeight:n.refreshFontSize+"rpx"})},{default:i((()=>[g("")])),_:1},8,["class","style"])):l("",!0),2==h.refreshStatus?(e(),t(y,{key:1,ref:"loadingIcon",class:u(["gui-icons gui-block gui-text-center gui-rotate360",n.customClass[h.refreshStatus]]),style:r({fontSize:n.refreshFontSize+"rpx",width:n.refreshFontSize+"rpx",height:n.refreshFontSize+"rpx",lineHeight:n.refreshFontSize+"rpx"})},{default:i((()=>[g("")])),_:1},8,["class","style"])):l("",!0),3==h.refreshStatus?(e(),t(y,{key:2,class:u(["gui-icons",n.customClass[h.refreshStatus]]),style:r({fontSize:n.refreshFontSize+"rpx",width:n.refreshFontSize+"rpx",height:n.refreshFontSize+"rpx",lineHeight:n.refreshFontSize+"rpx"})},{default:i((()=>[g("")])),_:1},8,["class","style"])):l("",!0),a(y,{style:r([{"margin-left":"12rpx"},{fontSize:n.refreshFontSize+"rpx"}]),class:u(["gui-page-refresh-text gui-block",n.customClass[h.refreshStatus]])},{default:i((()=>[g(d(n.refreshText[h.refreshStatus]),1)])),_:1},8,["class","style"])])),_:1},8,["style"])])),_:1},8,["style"])}],["__scopeId","data-v-05d6f57c"]]);var H=F({name:"gui-loadmore",props:{loadMoreText:{type:Array,default:function(){return["","数据加载中","已加载全部数据","暂无数据"]}},customClass:{type:Array,default:function(){return["gui-color-gray"]}},loadMoreFontSize:{type:String,default:"26rpx"},status:{type:Number,default:0}},data:()=>({loadMoreStatus:0,hidden:!1}),created:function(){this.loadMoreStatus=this.status,this.status},methods:{loading:function(){this.loadMoreStatus=1},stoploadmore:function(){this.loadMoreStatus=0},stopLoadmore:function(){this.loadMoreStatus=0},nomore:function(){this.loadMoreStatus=2},empty:function(){this.loadMoreStatus=3},hide:function(){this.hidden=!0},rotate360:function(){var e=this.$refs.loadingiconforloadmore;animation.transition(e,{styles:{transform:"rotate(7200deg)"},duration:2e4,timingFunction:"linear",needLayout:!1,delay:0})},tapme:function(){0==this.loadMoreStatus&&this.$emit("tapme")}},emits:["tapme"]},[["render",function(s,o,c,h,p,y){const x=m,w=f;return e(),t(w,{class:"gui-load-more gui-flex gui-row gui-align-items-center gui-justify-content-center",onClick:n(y.tapme,["stop","prevent"])},{default:i((()=>[0==p.loadMoreStatus?(e(),t(w,{key:0},{default:i((()=>[a(x,{class:"gui-block",style:r({height:c.loadMoreFontSize})},null,8,["style"])])),_:1})):l("",!0),1==p.loadMoreStatus?(e(),t(w,{key:1,class:"gui-load-more-icon",ref:"loadingiconforloadmore"},{default:i((()=>[a(x,{class:u([c.customClass,"gui-icons gui-rotate360 gui-block"]),style:r({fontSize:c.loadMoreFontSize})},{default:i((()=>[g("")])),_:1},8,["class","style"])])),_:1},512)):l("",!0),a(x,{class:u(["gui-block",c.customClass]),style:r({fontSize:c.loadMoreFontSize})},{default:i((()=>[g(d(c.loadMoreText[p.loadMoreStatus]),1)])),_:1},8,["class","style"])])),_:1},8,["onClick"])}],["__scopeId","data-v-8c43515e"]]);var R=F({name:"gui-iphone-bottom",props:{height:{type:String,default:"60rpx"},isSwitchPage:{type:Boolean,default:!1},customClass:{type:Array,default:function(){return["gui-bg-transparent"]}}},data:()=>({need:!1}),created:function(){if(!this.isSwitchPage){var e=_();if(e.model){e.model=e.model.replace(" ",""),e.model=e.model.toLowerCase();var t=e.model.indexOf("iphonex");t>5&&(t=-1);var i=e.model.indexOf("iphone1");i>5&&(i=-1),-1==t&&-1==i||(this.need=!0)}}}},[["render",function(i,a,s,o,n,g){const d=f;return n.need?(e(),t(d,{key:0,style:r({height:s.height}),class:u(s.customClass)},null,8,["style","class"])):l("",!0)}]]);var $=F({name:"gui-page-loading",props:{},data:()=>({isLoading:!1,BindingXObjs:[null,null,null],AnimateObjs:[null,null,null],animateTimer:800,intervalID:null}),watch:{},methods:{stopfun:function(e){return e.stopPropagation(),null},open:function(){this.isLoading=!0},close:function(){setTimeout((()=>{this.isLoading=!1}),100)},getRefs:function(e,t,i){if(t>=50)return i(this.$refs[e]),!1;var a=this.$refs[e];a?i(a):(t++,setTimeout((()=>{this.getRefs(e,t,i)}),100))}}},[["render",function(s,o,r,u,g,d){const c=f;return g.isLoading?(e(),t(c,{key:0,class:"gui-page-loading gui-flex gui-nowrap gui-align-items-center gui-justify-content-center gui-page-loading-bg",onClick:n(d.stopfun,["stop"]),onTouchmove:n(d.stopfun,["stop","prevent"])},{default:i((()=>[a(c,{class:"gui-page-loading-point gui-flex gui-rows gui-justify-content-center"},{default:i((()=>[a(c,{class:"gui-page-loading-points animate1 gui-page-loading-color"}),a(c,{class:"gui-page-loading-points animate2 gui-page-loading-color"}),a(c,{class:"gui-page-loading-points animate3 gui-page-loading-color"})])),_:1})])),_:1},8,["onClick","onTouchmove"])):l("",!0)}],["__scopeId","data-v-5179bc02"]]);var D=F({name:"gui-page",props:{fullPage:{type:Boolean,default:!1},customHeader:{type:Boolean,default:!1},headerClass:{type:Array,default:function(){return[]}},isHeaderSized:{type:Boolean,default:!0},statusBarClass:{type:Array,default:function(){return[]}},customFooter:{type:Boolean,default:!1},footerClass:{type:Array,default:function(){return[]}},footerSpaceClass:{type:Array,default:function(){return["gui-bg-gray","gui-dark-bg-level-2"]}},pendantClass:{type:Array,default:function(){return[]}},isLoading:{type:Boolean,default:!1},isSwitchPage:{type:Boolean,default:!1},fixedTopClass:{type:Array,default:function(){return[]}},refresh:{type:Boolean,default:!1},refreshText:{type:Array,default:function(){return["继续下拉刷新","松开手指开始刷新","数据刷新中","数据已刷新"]}},refreshClasses:{type:Array,default:function(){return[["gui-color-gray"],["gui-color-gray"],["gui-primary-text"],["gui-color-green"]]}},refreshFontSize:{type:Number,default:26},loadmore:{type:Boolean,default:!1},loadMoreText:{type:Array,default:function(){return["","数据加载中","已加载全部数据","暂无数据"]}},loadMoreClass:{type:Array,default:function(){return["gui-color-gray"]}},loadMoreFontSize:{type:String,default:"26rpx"},loadMoreStatus:{type:Number,default:1},apiLoadingStatus:{type:Boolean,default:!1}},data:()=>({pageStatus:!1,footerHeight:50,statusBarHeight:44,headerHeight:44,headerTapNumber:0,fixedTop:0,loadMoreTimer:null,fixedTopMargin:0,scrollTop:0,srcollTimer:null,refreshing:!1,pullingdownVal:0,topTagID:"no"}),watch:{isLoading:function(e){e?this.pageLoadingOpen():this.pageLoadingClose()}},mounted:function(){this.isLoading&&this.pageLoadingOpen();try{var e=_();e.model&&(this.statusBarHeight=e.statusBarHeight)}catch(t){return null}this.customFooter&&setTimeout((()=>{this.getDomSize("guiPageFooter",(e=>{this.footerHeight=e.height}),0)}),200),this.customHeader?setTimeout((()=>{this.getDomSize("guiPageHeader",(e=>{this.headerHeight=e.height,this.$nextTick((()=>{this.pageStatus=!0}))}),0)}),200):this.pageStatus=!0,this.customHeader?setTimeout((()=>{this.getDomSize("guiPageHeader",(e=>{this.fixedTop=e.height}),0)}),200):this.fixedTop=44,setTimeout((()=>{this.getDomSize("guiPageFixedTop",(e=>{this.fixedTopMargin=e.height}),0)}),200)},methods:{onpullingdown:function(e){if(this.apiLoadingStatus)return!1;e.changedTouches=[{pageY:e.pullingDistance}],this.$refs.guiPageRefresh.touchmove(e)},onrefresh:function(){if(this.apiLoadingStatus)return!1;this.refreshing=!0,this.$refs.guiPageRefresh.refreshStatus=2,setTimeout((()=>{this.$refs.guiPageRefresh.rotate360()}),200),this.$emit("reload")},pageLoadingOpen:function(){this.getRefs("guipageloading",0,(e=>{e.open()}))},pageLoadingClose:function(){this.getRefs("guipageloading",0,(e=>{e.close()}))},touchstart:function(e){return!!this.refresh&&(!this.apiLoadingStatus&&void this.$refs.guiPageRefresh.touchstart(e))},touchmove:function(e){return!!this.refresh&&(!this.apiLoadingStatus&&void this.$refs.guiPageRefresh.touchmove(e))},touchend:function(e){return!!this.refresh&&(!this.apiLoadingStatus&&void this.$refs.guiPageRefresh.touchend(e))},scroll:function(e){null!=this.srcollTimer&&clearTimeout(this.srcollTimer),this.srcollTimer=setTimeout((()=>{this.$refs.guiPageRefresh.scroll(e),this.$emit("scroll",e),this.scrollTop=e.detail.scrollTop}),500)},toTop:function(){this.topTagID="guiPageBodyTopTag",setTimeout((()=>{this.topTagID="no"}),500)},endReload:function(){this.$refs.guiPageRefresh.endReload(),this.refreshing=!1},reload:function(){if(this.apiLoadingStatus)return!1;this.$emit("reload"),this.loadmore&&this.$refs.guipageloadmore.stoploadmore()},getDomSize:function(e,t,i){if(i||(i=1),i>=50)return t({width:0,height:0}),!1;v().in(this).select("#"+e).boundingClientRect().exec((a=>null==a[0]||null==a[0].height?(i+=1,void setTimeout((()=>{this.getDomSize(e,t,i)}),50)):void t(a[0])))},stopfun:function(e){return e.stopPropagation(),null},headerTap:function(){this.headerTapNumber++,this.headerTapNumber>=2?(this.$emit("gotoTop"),this.headerTapNumber=0):setTimeout((()=>{this.headerTapNumber=0}),1e3)},getRefs:function(e,t,i){if(t>=50)return i(this.$refs[e]),!1;var a=this.$refs[e];a?i(a):(t++,setTimeout((()=>{this.getRefs(e,t,i)}),100))},loadmorefun:function(){return!!this.loadmore&&(!this.apiLoadingStatus&&(null!=this.loadMoreTimer&&clearTimeout(this.loadMoreTimer),void(this.loadMoreTimer=setTimeout((()=>{if(0!=this.$refs.guipageloadmore.loadMoreStatus)return null;this.$refs.guipageloadmore.loading(),this.$emit("loadmorefun")}),80))))},stopLoadmore:function(){this.$refs.guipageloadmore.stoploadmore()},stoploadmore:function(){this.$refs.guipageloadmore.stoploadmore()},nomore:function(){this.$refs.guipageloadmore.nomore()},toast:function(e){T({title:e,icon:"none"})},resetFooterHeight:function(){this.customFooter&&setTimeout((()=>{this.getDomSize("guiPageFooter",(e=>{this.footerHeight=e.height}),0)}),500)}},emits:["scroll","reload","loadmorefun","gotoTop"]},[["render",function(s,o,g,d,c,h){const p=f,m=M(C("gui-refresh"),L),y=M(C("gui-loadmore"),H),x=A,w=M(C("gui-iphone-bottom"),R),S=M(C("gui-page-loading"),$);return e(),t(p,{style:r({opacity:c.pageStatus?1:0}),class:u(["gui-sbody gui-flex gui-column",[g.fullPage||g.refresh||g.loadmore?"gui-flex1":""]])},{default:i((()=>[g.customHeader?(e(),t(p,{key:0,class:u(["gui-header gui-transition-all",g.headerClass]),id:"guiPageHeader",ref:"guiPageHeader"},{default:i((()=>[a(p,{class:u(["gui-page-status-bar",g.statusBarClass]),style:r({height:c.statusBarHeight+"px"})},{default:i((()=>[k(s.$slots,"gStatusBar")])),_:3},8,["class","style"]),a(p,{class:"gui-flex gui-column gui-justify-content-center",onClick:n(h.headerTap,["stop"])},{default:i((()=>[k(s.$slots,"gHeader")])),_:3},8,["onClick"])])),_:3},8,["class"])):l("",!0),g.customHeader&&g.isHeaderSized?(e(),t(p,{key:1,style:r({height:c.headerHeight+"px"})},null,8,["style"])):l("",!0),g.refresh||g.loadmore?l("",!0):(e(),t(p,{key:2,class:u(["gui-flex gui-column gui-relative",[g.fullPage?"gui-flex1":""]]),id:"guiPageBody",ref:"guiPageBody"},{default:i((()=>[k(s.$slots,"gBody")])),_:3},8,["class"])),g.refresh||g.loadmore?(e(),t(p,{key:3,class:"gui-flex1 gui-relative",id:"guiPageBody",ref:"guiPageBody",style:r({marginTop:c.fixedTopMargin+"px"})},{default:i((()=>[a(x,{class:"gui-absolute-full","scroll-y":!0,"show-scrollbar":!1,onTouchstart:h.touchstart,onTouchmove:h.touchmove,onTouchend:h.touchend,onScroll:h.scroll,"scroll-into-view":c.topTagID,"scroll-with-animation":!1,onScrolltolower:h.loadmorefun},{default:i((()=>[a(p,{id:"guiPageBodyTopTag"},{default:i((()=>[a(m,{ref:"guiPageRefresh",onReload:h.reload,refreshText:g.refreshText,customClass:g.refreshClasses,refreshFontSize:g.refreshFontSize},null,8,["onReload","refreshText","customClass","refreshFontSize"])])),_:1}),k(s.$slots,"gBody"),g.loadmore?(e(),t(p,{key:0},{default:i((()=>[a(y,{ref:"guipageloadmore",status:g.loadMoreStatus,loadMoreText:g.loadMoreText,customClass:g.loadMoreClass,loadMoreFontSize:g.loadMoreFontSize},null,8,["status","loadMoreText","customClass","loadMoreFontSize"])])),_:1})):l("",!0)])),_:3},8,["onTouchstart","onTouchmove","onTouchend","onScroll","scroll-into-view","onScrolltolower"])])),_:3},8,["style"])):l("",!0),g.customFooter?(e(),t(p,{key:4,style:r({height:c.footerHeight+"px"})},null,8,["style"])):l("",!0),g.customFooter?(e(),t(p,{key:5,class:u(["gui-page-footer gui-border-box",g.footerClass]),id:"guiPageFooter",ref:"guiPageFooter"},{default:i((()=>[k(s.$slots,"gFooter"),a(w,{need:!g.isSwitchPage,customClass:g.footerSpaceClass},null,8,["need","customClass"])])),_:3},8,["class"])):l("",!0),a(p,{class:u(["gui-page-pendant",g.pendantClass])},{default:i((()=>[k(s.$slots,"gPendant")])),_:3},8,["class"]),a(p,{class:"gui-page-fixed-top",ref:"guiPageFixedTop",id:"guiPageFixedTop",style:r({top:c.fixedTop+"px"})},{default:i((()=>[k(s.$slots,"gFixedTop")])),_:3},8,["style"]),a(S,{ref:"guipageloading"},null,512)])),_:3},8,["style","class"])}]]);var j=F({data:()=>({o_id:"",type:"",swiperItems2:[],current:0,backgroundImage:[],arr:[],search:"",timer:null,num:0,showSearch:"",bgImg:"",pic:[],video:[],web:[],istitle:0,page:{total:0,pageSize:10,pageNum:1}}),methods:{inputSearch:function(e,t){clearTimeout(this.timer),this.num=0,this.timer=setTimeout((()=>{this.search=e.detail.value;let t=this.search,i=this.web.length;for(var a=0;a<i;a++)-1!=this.web[a].title.indexOf(t)?this.web[a].showComment=!0:(this.web[a].showComment=!1,this.num++)}),500)},chooseItem(e,t){this.current=e,this.search="",this.arr[e].list.forEach((e=>e.showComment=!0)),this.num=0,"视频"==t.nav_link&&(this.type=t.videotype_id[e+1],this.getVideo(this.o_id,this.type)),"图片"==t.nav_link&&(this.type=t.imagetype_id[e+1],this.istitle=t.is_title[e+1],this.getImg(this.o_id,this.type)),"文章"==t.nav_link&&(this.type=t.website_id[e+1],this.getWeb(this.o_id,this.type,this.page.pageNum,this.page.pageSize))},taped:function(e){this.swiperItems2[e].url&&window.open("https://"+this.swiperItems2[e].url)},change(e){this.search="",this.page.pageNum=e,this.getWeb(this.o_id,this.type,this.page.pageNum,this.page.pageSize)},jsonDocment(){fetch("./config.json?time="+Date.now()).then((e=>e.json())).then((e=>{let t=e.reception;console.log(t),t.bodyimagelist[0]?this.bgImg=t.bodyimagelist[0].body_img:this.bgImg="",this.o_id=t.o_id,"视频"==t.navigationlist[0].nav_link&&(this.type=t.navigationlist[0].videotype_id[1],this.getVideo(this.o_id,this.type)),"图片"==t.navigationlist[0].nav_link&&(this.type=t.navigationlist[0].imagetype_id[1],this.istitle=t.navigationlist[0].is_title[1],this.getImg(this.o_id,this.type)),"文章"==t.navigationlist[0].nav_link&&(this.type=t.navigationlist[0].website_id[1],this.getWeb(this.o_id,this.type,this.page.pageNum,this.page.pageSize)),t.bannerlist.forEach(((e,t)=>{this.swiperItems2.push({img:e.banner_img,url:e.banner_link,opentype:"click"})})),z({title:t.project_name}),this.showSearch=t.is_search,this.arr=t.navigationlist;let i=[];for(var a=0;a<this.arr.length;a++)i.push(this.arr[a].nav_bgimg3);this.backgroundImage=i}))},getImg(e,t){fetch(`https://${window.location.host}/api/imagevideo/getApiImage?o_id=${e}&img_type_id=${t}`).then((e=>e.json())).then((e=>{this.pic=e.data.list}))},getWeb(e,t,i,a){fetch(`https://${window.location.host}/api/article/getApi?o_id=${e}&website_id=${t}&pageNum=${i}&pageSize=${a}`).then((e=>e.json())).then((e=>{this.page.total=e.total,this.web=e.data.list,this.web.forEach((e=>e.showComment=!0)),this.web.forEach((e=>{e.release_time=e.release_time.substring(0,10)}))}))},getVideo(e,t){fetch(`https://${window.location.host}/api/imagevideo/getApiVideo?o_id=${e}&img_type_id=${t}`).then((e=>e.json())).then((e=>{this.video=e.data.list}))}},onLoad:function(){this.jsonDocment()}},[["render",function(n,u,p,y,x,w){const k=M(C("gui-swiper"),N),_=f,v=P,T=h,z=A,F=m,L=M(C("page-pagination"),B),H=M(C("gui-page"),D);return e(),t(H,null,{gBody:i((()=>[a(_,{style:{width:"100%"}},{default:i((()=>[a(k,{swiperItems:x.swiperItems2,onTaped:w.taped,width:750,height:420,spacing:0,padding:0,borderRadius:"0rpx",indicatorType:"none",style:{width:"100%"},imgMode:"height"},null,8,["swiperItems","onTaped"])])),_:1}),S(a(_,{class:"search"},{default:i((()=>[a(v,{type:"text",placeholder:"搜索",modelValue:x.search,"onUpdate:modelValue":u[0]||(u[0]=e=>x.search=e),onInput:u[1]||(u[1]=e=>w.inputSearch(e,x.current)),style:{"line-height":"30px",height:"30px","font-size":"28rpx"}},null,8,["modelValue"])])),_:1},512),[[b,1==x.showSearch]]),a(_,{style:r(x.bgImg?"background-image:url("+x.bgImg+")":"")},{default:i((()=>[a(_,{class:"scroll"},{default:i((()=>[a(T,{class:"background",src:x.backgroundImage[x.current]},null,8,["src"]),a(_,{class:"tab"},{default:i((()=>[a(z,{"scroll-x":"","scroll-into-view":"yy_"+x.current,class:"scrollview"},{default:i((()=>[a(_,{style:{display:"flex","flex-direction":"row"}},{default:i((()=>[(e(!0),s(c,null,o(x.arr,((s,o)=>(e(),t(_,{id:"yy_"+o,onClick:e=>w.chooseItem(o,s),class:"toggle",key:o},{default:i((()=>[o==x.current?(e(),t(_,{key:0},{default:i((()=>[a(T,{class:"scrollImage",src:s.nav_img2},null,8,["src"])])),_:2},1024)):(e(),t(_,{key:1},{default:i((()=>[a(T,{class:"scrollImage",src:s.nav_img1},null,8,["src"])])),_:2},1024))])),_:2},1032,["id","onClick"])))),128))])),_:1})])),_:1},8,["scroll-into-view"])])),_:1}),a(_,{class:"list"},{default:i((()=>[(e(!0),s(c,null,o(x.arr,((r,n)=>(e(),s(c,null,[x.current==n?(e(),t(_,{key:0},{default:i((()=>["文章"==r.nav_link?(e(),t(_,{key:0,style:{margin:"0 35rpx 15rpx"}},{default:i((()=>[(e(!0),s(c,null,o(x.web,(s=>S((e(),t(_,{class:"oneModule",key:s.id},{default:i((()=>[I("a",{href:""==s.linkurl?"javascript:void(0)":s.linkurl},[a(T,{src:s.imgurl,class:"left"},null,8,["src"])],8,["href"]),a(_,{class:"center"},{default:i((()=>[I("a",{href:""==s.linkurl?"javascript:void(0)":s.linkurl},[a(F,{class:"content"},{default:i((()=>[g(d(s.title),1)])),_:2},1024)],8,["href"]),a(_,{class:"bottom"},{default:i((()=>[a(T,{src:"data:image/png;base64,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",class:"timelogo"}),a(F,{class:"time"},{default:i((()=>[g(d(s.release_time),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),a(F,{class:"right"},{default:i((()=>[g(">")])),_:1})])),_:2},1024)),[[b,s.showComment]]))),128)),this.web.length==x.num?(e(),t(_,{key:0},{default:i((()=>[g("暂无数据")])),_:1})):l("",!0),a(L,{total:x.page.total,pageSize:x.page.pageSize,forceEllipses:!0,"current-page":x.page.pageNum,onChange:w.change,style:{"margin-top":"40rpx"}},null,8,["total","pageSize","current-page","onChange"])])),_:1})):l("",!0),"图片"==r.nav_link?(e(),t(_,{key:1,style:{margin:"0 35rpx 15rpx"}},{default:i((()=>[(e(!0),s(c,null,o(x.pic,(o=>(e(),t(_,{class:"twoModule",key:o.id},{default:i((()=>[I("a",{href:""==o.linkurl?"javascript:void(0)":o.linkurl},[a(T,{src:o.imgurl,style:{height:"100%",display:"block"}},null,8,["src"])],8,["href"]),1==x.istitle?(e(),s("h5",{key:0,style:{"margin-bottom":"25rpx",padding:"12rpx","text-align":"center"}},d(o.title),1)):l("",!0)])),_:2},1024)))),128))])),_:1})):l("",!0),"视频"==r.nav_link?(e(),t(_,{key:2,style:{margin:"0 35rpx 15rpx"}},{default:i((()=>[(e(!0),s(c,null,o(x.video,(o=>(e(),t(_,{class:"threeModule",key:o.id},{default:i((()=>[o.linkurl&&""!==o.linkurl?(e(),s("a",{key:0,href:o.linkurl},[a(T,{src:o.imgurl},null,8,["src"]),a(F,null,{default:i((()=>[g(d(o.title),1)])),_:2},1024)],8,["href"])):o.videourl&&""!==o.videourl?(e(),s("a",{key:1,href:o.videourl},[a(T,{src:o.imgurl},null,8,["src"]),a(F,null,{default:i((()=>[g(d(o.title),1)])),_:2},1024)],8,["href"])):(e(),s("a",{key:2,href:"javascript:void(0)"},[a(T,{src:o.imgurl},null,8,["src"]),a(F,null,{default:i((()=>[g(d(o.title),1)])),_:2},1024)]))])),_:2},1024)))),128))])),_:1})):l("",!0)])),_:2},1024)):l("",!0)],64)))),256))])),_:1})])),_:1})])),_:1},8,["style"])])),_:1})}],["__scopeId","data-v-2fad1a41"]]);export{j as default};
