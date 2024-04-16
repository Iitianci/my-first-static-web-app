import{g as t,W as i,a as e,o as a,c as s,w as o,b as l,e as p,d as n,r,F as _,f as c,h as m,l as h,j as d,p as y,k as g,t as w,i as f}from"./index-f5cba0e4.js";import{_ as u}from"./tm-message.42d12b93.js";import{r as x}from"./uni-app.es.62a9cda9.js";import{_ as k}from"./tm-icon.ed97db34.js";import{_ as j}from"./tm-sheet.38d3d718.js";import{_ as z}from"./tm-skeleton-line.9799a71e.js";import{_ as v}from"./tm-app.c7c4bc54.js";import{p as b}from"./pyq-card.777f0db0.js";import{a as C}from"./api.f04a1197.js";import{s as T}from"./index.0f5d7c69.js";import{_ as q}from"./_plugin-vue_export-helper.1b428a4d.js";import"./tm-text.d010834d.js";import"./useWindowInfo.47d82cea.js";import"./useTheme.d1454919.js";const F=q({components:{pyqCard:b},data:()=>({first_loding:!0,is_full:!1,hideBtn:!1,is_loadding:!1,show_to_top:!1,avatar_list:[],nickname_list:[],photo_list:[],copywrite_list:[],current_index:0,current_item:{},type_list:[{type:"douyin",zh_type:"精选",img:"/static/img/copywrite/1.jpg"},{type:"moment",zh_type:"动态",img:"/static/img/copywrite/2.jpg"},{type:"daily",zh_type:"日常",img:"/static/img/copywrite/3.jpg"},{type:"emotion",zh_type:"情感",img:"/static/img/copywrite/4.jpg"},{type:"individuality",zh_type:"个性",img:"/static/img/copywrite/5.jpg"},{type:"inspirational",zh_type:"励志",img:"/static/img/copywrite/6.jpg"},{type:"life",zh_type:"生活",img:"/static/img/copywrite/7.jpg"},{type:"nature",zh_type:"自然",img:"/static/img/copywrite/8.jpg"},{type:"seasons",zh_type:"四季",img:"/static/img/copywrite/9.jpg"},{type:"month",zh_type:"月份",img:"/static/img/copywrite/10.jpg"},{type:"feast",zh_type:"节日",img:"/static/img/copywrite/11.jpg"},{type:"solar_term",zh_type:"节气",img:"/static/img/copywrite/12.jpg"},{type:"fun",zh_type:"有趣",img:"/static/img/copywrite/13.jpg"},{type:"sports",zh_type:"运动",img:"/static/img/copywrite/14.jpg"},{type:"flowers",zh_type:"花草",img:"/static/img/copywrite/15.jpg"},{type:"other",zh_type:"其他",img:"/static/img/copywrite/16.jpg"}],down_url:"",down_type:"img"}),async onReachBottom(){console.log("触底了"),await this.get_copywrite_list()},async onLoad(){this.first_loding=!0,this.copywrite_list=t("copywrite_list")||[],this.avatar_list=t("avatar_list")||[],this.nickname_list=t("nickname_list")||[],this.photo_list=t("photo_list")||[],0!=this.copywrite_list.length&&0!=this.avatar_list.length&&0!=this.nickname_list.length&&0!=this.photo_list.length&&(this.first_loding=!1),await Promise.all([this.get_copywrite_list(),this.get_avatar_list(),this.get_nickname_list(),this.get_photo_list()]),this.first_loding=!1},async onReady(){},onPageScroll(t){t.scrollTop>200?this.show_to_top=!0:this.show_to_top=!1},methods:{finish_download(t){console.log("下载完成",t)},async click_down(t){console.log("父节点click_down",t)},copy_data(t){T(t).then((i=>{uni.vk.alert(t,"复制成功")}),(i=>{uni.vk.alert(t,"复制失败")}))},to_top(){i({scrollTop:0,duration:300})},to_class(t){uni.vk.navigateTo({url:`/pages/copywrite/class?type=${t}`})},async get_avatar_list(){let t=await C("avatar",{type:"weixin"},100);0==t.code&&(this.avatar_list=t.data,e("avatar_list",this.avatar_list))},async get_nickname_list(){let t=await C("nickname",{},100);0==t.code&&(this.nickname_list=t.data,e("nickname_list",this.nickname_list))},async get_photo_list(){let t=await C("wallpaper",{zh_type:"风景"},100);0==t.code&&(this.photo_list=t.data,e("photo_list",this.photo_list))},async get_copywrite_list(){if(this.is_loadding)return;this.is_loadding=!0;let t=await C("copywrite",{},20);if(0==t.code)try{this.copywrite_list=[...this.copywrite_list,...t.data],e("copywrite_list",t.data)}catch(i){console.log("err------------",i)}this.is_loadding=!1}}},[["render",function(t,i,e,b,C,T){const q=x(m("tm-message"),u),F=x(m("tm-icon"),k),$=h,B=d,I=f,L=x(m("tm-sheet"),j),P=y,R=x(m("tm-skeleton-line"),z),S=g("pyqCard"),V=x(m("tm-app"),v);return a(),s(V,null,{default:o((()=>[l(q,{ref:"toast"},null,512),l(B,{class:"flex flex-row flex-center mx-10"},{default:o((()=>[l(F,{name:"tmicon-menu","font-size":25}),l($,{class:"text-size-n pa-10 text-weight-b text-grey-5"},{default:o((()=>[p("分类")])),_:1})])),_:1}),l(L,{margin:[10,0],round:5,shadow:5},{default:o((()=>[l(B,{class:"flex flex-row flex-wrap flex-around"},{default:o((()=>[(a(!0),n(_,null,r(C.type_list,((t,i)=>(a(),s(B,{key:i,style:{width:"150rpx"},onClick:i=>T.to_class(t.type)},{default:o((()=>[l(B,{class:"flex flex-col flex-center"},{default:o((()=>[l(I,{src:t.img,mode:"aspectFill",style:{width:"120rpx",height:"120rpx","border-radius":"60rpx"}},null,8,["src"]),l(B,{class:"text-align-center"},{default:o((()=>[l($,{class:"text-weight-b text-size-xs"},{default:o((()=>[p(w(t.zh_type),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1}),l(B,{class:"flex flex-row flex-center mx-10"},{default:o((()=>[l(F,{name:"tmicon-menu"}),l($,{class:"text-size-n pa-10 text-weight-b text-grey-5"},{default:o((()=>[p("随机推荐")])),_:1})])),_:1}),t.vk.getVuex("$app.mp_ad_obj.banner")?(a(),s(B,{key:0},{default:o((()=>[l(P,{"unit-id":t.vk.getVuex("$app.mp_ad_obj.banner")},null,8,["unit-id"])])),_:1})):c("",!0),C.first_loding?(a(),s(B,{key:1},{default:o((()=>[(a(),n(_,null,r(10,(t=>l(L,{_class:"shadow-1 round-5",class:"round-5",padding:[20,30],margin:[25,10]},{default:o((()=>[l(B,{class:"flex flex-row"},{default:o((()=>[l(B,{style:{width:"80rpx",height:"80rpx"}},{default:o((()=>[l(R,{height:80,width:80,round:2})])),_:1}),l(B,{class:"mt-2 mx-10",style:{width:"580rpx"}},{default:o((()=>[l(R,{height:50,width:580}),l(R,{height:50,width:580}),l(R,{height:350,width:220,style:{width:"200rpx",height:"350rpx"}})])),_:1})])),_:1})])),_:1}))),64))])),_:1})):(a(),s(B,{key:2},{default:o((()=>[(a(!0),n(_,null,r(C.copywrite_list,((t,i)=>(a(),s(B,{key:i},{default:o((()=>[l(S,{avatar:C.avatar_list[i%100].cloud_url,nickname:C.nickname_list[i%100].nickname,photo:C.photo_list[i%100].cloud_url,content:C.copywrite_list[i].content,onClick_down:T.click_down,onCopy_data:T.copy_data},null,8,["avatar","nickname","photo","content","onClick_down","onCopy_data"])])),_:2},1024)))),128))])),_:1})),C.show_to_top?(a(),s(B,{key:3,class:"to_top border-1-bk shadow-10",onClick:T.to_top},{default:o((()=>[l(F,{"font-size":45,shadow:10,name:"tmicon-arrow-alt-from-botto",color:"black"})])),_:1},8,["onClick"])):c("",!0)])),_:1})}],["__scopeId","data-v-97edb02f"]]);export{F as default};
