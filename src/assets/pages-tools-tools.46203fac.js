import{m as t,g as e,o as a,c as s,w as l,b as i,e as o,t as r,d as n,r as p,F as _,f as c,l as u,j as d,h,p as m,i as x}from"./index-f5cba0e4.js";import{_ as g}from"./tm-sheet.38d3d718.js";import{r as f}from"./uni-app.es.62a9cda9.js";import{_ as v}from"./tm-app.c7c4bc54.js";import{s as w}from"./index.0f5d7c69.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";import"./useTheme.d1454919.js";import"./useWindowInfo.47d82cea.js";var b=null;const y=k({data:()=>({vk:uni.vk,tool_list:[{path:"/pages/save_sticker/save_sticker",icon:"/static/logo.png",title:"表情保存",sub_title:"收藏的表情,可以保存到相册了",name:"save_sticker"},{path:"/pages/sticker/sticker",icon:"/static/tools/sticker.png",title:"表情素材",sub_title:"海量表情包,从此斗图再也不愁",name:"sticker"},{path:"/pages/avatar/avatar",icon:"/static/tools/avatar.png",title:"头像素材",sub_title:"海量头像,每个头像都是一种个性",name:"avatar"},{path:"/pages/wallpaper/wallpaper",icon:"/static/tools/wallpaper.png",title:"壁纸素材",sub_title:"海量壁纸,每张都很有特色",name:"wallpaper"},{path:"/pages/gallery/gallery",icon:"/static/tools/gallery.png",title:"套图素材",sub_title:"海量套图,整套会更加美观",name:"gallery"},{path:"/pages/portrait/index",icon:"/static/tools/people.png",title:"人像转换",sub_title:"快来看看动漫化之后的你",name:"avatar"}],real_tools_list:[],in_review:"2",mp_ad_obj:{}}),computed:{},onPullDownRefresh(){"1"==uni.vk.getVuex("$app.in_review")?this.real_tools_list=this.tool_list.slice(0,this.tool_list.length-1):this.real_tools_list=this.tool_list,t()},onLoad(){},onShow(){setInterval((()=>{this.in_review=uni.vk.getVuex("$app.in_review"),"1"==this.in_review?this.real_tools_list=this.tool_list.slice(0,this.tool_list.length-1):"0"==this.in_review&&(this.real_tools_list=this.tool_list)}),300)},onReady(){wx.createInterstitialAd&&((b=wx.createInterstitialAd({adUnitId:uni.vk.getVuex("$app.mp_ad_obj.interstitial_ad")})).onLoad((()=>{})),b.onError((t=>{})),b.onClose((()=>{})),setTimeout((()=>{b&&(console.log("弹出插屏广告"),b.show().catch((t=>{console.error("interstitialAd.show.err",t)})))}),7e3))},methods:{copy_data(t){t?w(t).then((e=>{uni.vk.alert(t,"复制成功")}),(e=>{uni.vk.alert("复制失败",t)})):uni.vk.alert("所复制的内容为空数据")},copy_err_data(){let t=e("in_review_requestId");this.copy_data(t)},ad_custom_error(t){console.log("err",t),this.ad_custom_show=!1},to_path(t){this.in_time=(new Date).getTime(),uni.vk.navigateTo({url:t,fail:t=>{console.log("err",t)}})}}},[["render",function(t,e,w,k,b,y){const j=u,V=d,I=x,$=f(h("tm-sheet"),g),C=m,A=f(h("tm-app"),v);return a(),s(A,null,{default:l((()=>[i(V,{class:"flex flex-row flex-center",onClick:y.copy_err_data},{default:l((()=>[i(j,{class:"text-align-center text-size-xs text-grey"},{default:l((()=>[o(r(b.vk.getVuex("$app.location.clientIP")+":"+b.vk.getVuex("$sys.sys.appVersionCode")),1)])),_:1})])),_:1},8,["onClick"]),i(V,{class:"flex flex-col flex-center"},{default:l((()=>[(a(!0),n(_,null,p(b.tool_list,((t,e)=>(a(),s($,{margin:[0,10],width:600,round:10},{default:l((()=>[i(V,{class:"flex flex-row flex-around",onClick:e=>y.to_path(t.path)},{default:l((()=>[i(V,{class:"flex flex-col flex-center"},{default:l((()=>[i(j,{class:"text-weight-b"},{default:l((()=>[o(r(t.title),1)])),_:2},1024),i(j,{class:"text-size-xs text-grey mt-20"},{default:l((()=>[o(r(t.sub_title),1)])),_:2},1024)])),_:2},1024),i(V,{class:"flex flex-row flex-center"},{default:l((()=>[i(I,{src:t.icon,style:{width:"120rpx",height:"120rpx","border-radius":"60rpx"},mode:"aspectFill"},null,8,["src"])])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),256))])),_:1}),b.vk.getVuex("$app.mp_ad_obj.banner")?(a(),s(V,{key:0},{default:l((()=>[i(C,{"unit-id":b.vk.getVuex("$app.mp_ad_obj.banner")},null,8,["unit-id"])])),_:1})):c("",!0)])),_:1})}]]);export{y as default};
