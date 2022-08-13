import{o as t,c as i,w as e,a as r,d as a,e as n,l as d,m as s,p as l,q as p,b as o,t as u,F as c,h as g,s as h,i as y,j as x,S as f,u as m}from"./index.5e82b323.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";var b=w({name:"gui-swiper",props:{width:{type:Number,default:750},height:{type:Number,default:300},swiperItems:{type:Array,default:function(){return new Array}},borderRadius:{type:String,default:"10rpx"},indicatorBarHeight:{type:Number,default:68},indicatorBarBgClass:{type:Array,default:function(){return["gui-bg-black-opacity5"]}},indicatorWidth:{type:Number,default:18},indicatorActiveWidth:{type:Number,default:18},indicatorHeight:{type:Number,default:18},indicatorRadius:{type:Number,default:18},indicatorClass:{type:Array,default:function(){return["gui-bg-gray","gui-dark-bg-level-5"]}},indicatorActiveClass:{type:Array,default:function(){return["gui-bg-primary"]}},indicatorType:{type:String,default:"dot"},indicatorPosition:{type:String,default:"absolute"},indicatorDirection:{type:String,default:"center"},spacing:{type:Number,default:50},padding:{type:Number,default:26},interval:{type:Number,default:5e3},autoplay:{type:Boolean,default:!0},currentIndex:{type:Number,default:0},opacity:{type:Number,default:.66},titleColor:{type:String,default:"#FFFFFF"},titleSize:{type:String,default:"28rpx"},imgMode:{type:String,default:"widthFix"}},data:()=>({current:0,isReady:!1,widthIn:750,heightIn:300,widthInSamll:700,heightInSmall:280,paddingY:0}),watch:{currentIndex:function(t){this.current=t}},created:function(){this.current=this.currentIndex,this.init()},methods:{init:function(){this.widthIn=this.width-2*this.spacing,this.heightIn=this.height/this.width*this.widthIn,this.paddingY=this.padding*this.height/this.width,this.widthInSamll=this.widthIn-2*this.padding,this.heightInSmall=this.heightIn-2*this.paddingY},swiperchange:function(t){var i=t.detail.current;this.current=i,this.$emit("swiperchange",i)},taped:function(t){this.$emit("taped",t.currentTarget.dataset.index)}},emits:["swiperchange","taped"]},[["render",function(w,b,I,S,v,_){const C=g,R=h,k=y,B=x,N=f,A=m;return t(),i(k,{class:"gui-swiper-card-wrap"},{default:e((()=>[r(A,{style:d({width:I.width+"rpx",height:v.heightIn+"rpx"}),class:"gui-swiper-card","indicator-dots":!1,interval:I.interval,circular:!0,autoplay:I.autoplay,current:I.currentIndex,"previous-margin":I.spacing+"rpx","next-margin":I.spacing+"rpx",onChange:_.swiperchange},{default:e((()=>[(t(!0),a(c,null,n(I.swiperItems,((a,n)=>(t(),i(N,{key:n,class:"gui-swiper-card-item gui-border-box"},{default:e((()=>["click"!=a.opentype?(t(),i(R,{key:0,class:"gui-swiper-card-nav gui-transition-all",url:a.url,"open-type":a.opentype,"hover-class":"none",style:d({paddingLeft:v.current!=n?I.padding+"rpx":"0rpx",paddingRight:v.current!=n?I.padding+"rpx":"0rpx",paddingTop:v.current!=n?v.paddingY+"rpx":"0rpx",paddingBottom:v.current!=n?v.paddingY+"rpx":"0rpx"})},{default:e((()=>[r(C,{style:d({borderRadius:I.borderRadius,width:v.current!=n?v.widthInSamll+"rpx":v.widthIn+"rpx",height:v.current!=n?v.heightInSmall+"rpx":v.heightIn+"rpx",opacity:v.current!=n?I.opacity:1}),src:a.img,mode:I.imgMode,class:"gui-swiper-card-image gui-transition-all"},null,8,["style","src","mode"])])),_:2},1032,["url","open-type","style"])):s("",!0),"click"==a.opentype?(t(),i(k,{key:1,class:"gui-swiper-card-nav gui-transition-all","hover-class":"none",onClick:l(_.taped,["stop"]),"data-index":n,style:d({paddingLeft:v.current!=n?I.padding+"rpx":"0rpx",paddingRight:v.current!=n?I.padding+"rpx":"0rpx",paddingTop:v.current!=n?v.paddingY+"rpx":"0rpx",paddingBottom:v.current!=n?v.paddingY+"rpx":"0rpx"})},{default:e((()=>[r(C,{style:d({borderRadius:I.borderRadius,width:v.current!=n?v.widthInSamll+"rpx":v.widthIn+"rpx",height:v.current!=n?v.heightInSmall+"rpx":v.heightIn+"rpx",opacity:v.current!=n?I.opacity:1}),src:a.img,mode:I.imgMode,class:"gui-swiper-card-image gui-transition-all"},null,8,["style","src","mode"])])),_:2},1032,["onClick","data-index","style"])):s("",!0),"number"==I.indicatorType?(t(),i(k,{key:2,class:p(["gui-indicator-dot-numbers gui-flex gui-row gui-nowrap",I.indicatorBarBgClass]),style:d({height:I.indicatorBarHeight+"rpx","border-bottom-left-radius":I.borderRadius,"border-bottom-right-radius":I.borderRadius,width:v.current!=n?v.widthInSamll+"rpx":v.widthIn+"rpx",left:v.current!=n?I.padding+"rpx":"0rpx",bottom:v.current!=n?v.paddingY+"rpx":"0rpx"})},{default:e((()=>[r(B,{class:"gui-indicator-dot-text",style:d({paddingLeft:"20rpx",fontStyle:"italic",color:I.titleColor})},{default:e((()=>[o(u(n+1),1)])),_:2},1032,["style"]),r(B,{class:"gui-indicator-dot-text",style:d({fontSize:"36rpx",color:I.titleColor})},{default:e((()=>[o("/")])),_:1},8,["style"]),r(B,{class:"gui-indicator-dot-text",style:d({fontSize:"28rpx",paddingRight:"20rpx",fontStyle:"italic",color:I.titleColor})},{default:e((()=>[o(u(I.swiperItems.length),1)])),_:1},8,["style"]),r(B,{class:"gui-swiper-text gui-block-text gui-flex1 gui-ellipsis",style:d({color:I.titleColor,fontSize:I.titleSize,height:I.indicatorBarHeight+"rpx",lineHeight:I.indicatorBarHeight+"rpx"})},{default:e((()=>[o(u(a.title),1)])),_:2},1032,["style"])])),_:2},1032,["class","style"])):s("",!0)])),_:2},1024)))),128))])),_:1},8,["style","interval","autoplay","current","previous-margin","next-margin","onChange"]),"dot"==I.indicatorType?(t(),i(k,{key:0,class:"gui-indicator-dots gui-flex gui-row gui-nowrap gui-justify-content-center gui-align-items-center gui-border-box",style:d({width:I.width+"rpx",height:I.indicatorBarHeight+"rpx",position:I.indicatorPosition,paddingLeft:I.spacing+"rpx",paddingRight:I.spacing+"rpx","justify-content":I.indicatorDirection})},{default:e((()=>[r(k,{class:"gui-indicator-dots-wrap gui-flex gui-row gui-nowrap gui-justify-content-center"},{default:e((()=>[(t(!0),a(c,null,n(I.swiperItems,((e,r)=>(t(),i(k,{key:r,class:p(["gui-indicator-dot",v.current==r?"dot-show":"",v.current==r?I.indicatorActiveClass:I.indicatorClass]),style:d({width:v.current!=r?I.indicatorWidth+"rpx":I.indicatorActiveWidth+"rpx",height:I.indicatorHeight+"rpx",borderRadius:I.indicatorRadius+"rpx"})},null,8,["class","style"])))),128))])),_:1})])),_:1},8,["style"])):s("",!0)])),_:1})}],["__scopeId","data-v-d2fa5e36"]]);export{b as _};
