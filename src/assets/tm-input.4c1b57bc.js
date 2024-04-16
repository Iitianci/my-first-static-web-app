import{q as e,u as o,v as l,ai as t,x as a,y as r,o as n,c as i,w as s,b as u,D as d,G as c,E as f,f as p,a2 as y,a5 as h,C as m,j as g,I as b,aj as x}from"./index-f5cba0e4.js";import{_ as S}from"./tm-sheet.38d3d718.js";import{_ as v}from"./tm-icon.ed97db34.js";import{t as C}from"./tm-text.d010834d.js";import{c as w,u as _,e as k,a as z,b as B,d as N}from"./uni-app.es.62a9cda9.js";import{_ as H}from"./tm-button.37a1a22f.js";import{_ as j}from"./_plugin-vue_export-helper.1b428a4d.js";const $=j(e({__name:"tm-input",props:{...w,followTheme:{type:[Boolean,String],default:!0},color:{type:String,default:"grey-4"},searchBgColor:{type:String,default:"primary"},searchFontColor:{type:String,default:""},searchWidth:{type:Number,default:0},prefixColor:{type:String,default:""},suffixColor:{type:String,default:""},focusColor:{type:String,default:"primary"},clearAndEyeColor:{type:String,default:""},fontColor:{type:String,default:""},text:{type:Boolean,default:!0},outlined:{type:Boolean,default:!1},border:{type:Number,default:0},transprent:{type:Boolean,default:!1},round:{type:Number,default:3},shadow:{type:Number,default:0},margin:{type:Array,default:()=>[0,0]},padding:{type:Array,default:()=>[0,0]},height:{type:Number,default:64},prefix:{type:String,default:""},prefixLabel:{type:String,default:""},suffix:{type:String,default:""},suffixLabel:{type:String,default:""},fontSize:{type:Number,default:30},search:{type:String,default:""},searchLabel:{type:String,default:""},showClear:{type:Boolean,default:!1},password:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:"请输入内容"},errorLabel:{type:String,default:"请输入内容"},align:{type:String,default:"left"},modelValue:{type:[String,Number],default:""},inputPadding:{type:Array,default:()=>[24,0]},showCharNumber:{type:Boolean,default:!1},maxlength:{type:Number,default:-1},type:{type:String,default:"text"},cursorSpacing:{type:Number,default:24},confirmType:{type:String,default:"done"},confirmHold:{type:Boolean,default:!1},autoBlur:{type:Boolean,default:!0},holdKeyboard:{type:Boolean,default:!1},adjustPosition:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},cursor:{type:Number,default:0},showConfirmBar:{type:Boolean,default:!0},selectionStart:{type:Number,default:-1},selectionEnd:{type:Number,default:-1},disableDefaultPadding:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1},placeholderStyle:{type:String,default:""},autoHeight:{type:Boolean,default:!1},readyOnly:{type:Boolean,default:!1},layoutAlign:{type:String,default:"flex-row-top-start"},customicon:{type:Boolean,default:!1}},emits:["focus","blur","confirm","input","update:modelValue","clear","search","keyboardheightchange","click"],setup(e,{emit:w}){var j;const $=e,E=_(),P=(null==(j=o())?void 0:j.proxy)??null;let K=null==P?void 0:P.$parent;for(;K&&"tmFormComnameFormItem"!=(null==K?void 0:K.tmFormComnameFormItem)&&K;)K=(null==K?void 0:K.$parent)??void 0;const T=l(!1);T.value="android"==t().osName;const I=a((()=>$.height)),L=a((()=>""!==$.search||""!==$.searchLabel?[4,0]:$.inputPadding));let F=NaN;function A(e,o=500,l=!1){if(isNaN(F)||clearTimeout(F),l){var t=!F;F=setTimeout((()=>{F=NaN}),o),t&&"function"==typeof e&&e()}else F=setTimeout((()=>{"function"==typeof e&&e(),F=NaN}),o)}const V=a((()=>({...$,fontSize_px:m($.fontSize)})));$.modelValue;const D=a((()=>E.tmStore));a((()=>k($))),a((()=>z($)));const O=a((()=>B($,D.value))),W=l(!1),q=l($.focus||!1);r((()=>$.focus),(()=>{q.value=$.focus}));const G=a((()=>{let e=$.color;return q.value&&(e=$.followTheme&&E.tmStore.color?E.tmStore.color:$.focusColor),W.value&&(e="red"),e})),J=a((()=>{const e={...$,color:G.value};return N(e,O.value,D.value)})),M=l(V.value.password),Q=a((()=>$.password));l($.errorLabel);const R=l($.modelValue),U=a((()=>String(R.value).split("").length));function X(){w("search",R.value)}function Y(){R.value="",w("update:modelValue",""),w("clear")}function Z(){M.value=!M.value}function ee(e){q.value=!0,w("focus",e)}function oe(e){q.value=!1,w("blur",e)}function le(){w("confirm",R.value)}function te(e){return R.value=e.detail.value,w("input",e.detail.value),w("update:modelValue",e.detail.value),e.detail.value}function ae(e,o){A("ali"!=o?()=>w("click",e):()=>{w("click",e)},200,!0)}return r((()=>$.modelValue),(()=>R.value=$.modelValue)),(e,o)=>{const l=g,t=b,a=x;return n(),i(S,{eventPenetrationEnabled:!0,transprent:!0,margin:$.margin,padding:$.padding},{default:s((()=>[u(S,{transprent:$.transprent,round:$.round,"no-level":"",margin:[0,0],padding:d(L),border:$.border,text:$.text,color:d(G),outlined:$.outlined,shadow:$.shadow,linear:$.linear,linearDeep:$.linearDeep,_style:"transition:border 0.24s"},{default:s((()=>[u(l,{class:c(["flex flex-row relative",["textarea"==d(V).type?d(V).layoutAlign:"flex-row-center-start"]]),onClick:o[7]||(o[7]=e=>ae(e,"")),style:f([d(V).autoHeight&&"textarea"==d(V).type?{}:{height:`${d(I)}rpx`}])},{default:s((()=>[d(V).search||d(V).searchLabel?(n(),i(l,{key:0,class:"px-9"})):p("",!0),y(e.$slots,"left",{},void 0,!0),d(V).prefix?(n(),i(l,{key:1,class:"pr-16"},{default:s((()=>[u(v,{_style:"transition:color 0.24s","font-size":d(V).fontSize,color:$.prefixColor,name:d(V).prefix,customicon:$.customicon},null,8,["font-size","color","name","customicon"])])),_:1})):p("",!0),d(V).prefixLabel?(n(),i(l,{key:2,class:"pr-24"},{default:s((()=>[u(C,{_style:"transition:color 0.24s","font-size":d(V).fontSize,color:$.prefixColor,label:d(V).prefixLabel},null,8,["font-size","color","label"])])),_:1})):p("",!0),T.value?p("",!0):(n(),i(l,{key:3,onClick:o[2]||(o[2]=e=>ae(e,"ali")),class:"flex-1 relative flex-row flex",style:f([{width:"0px"}])},{default:s((()=>["textarea"!=d(V).type?(n(),i(t,{key:0,class:"flex-1",userInteractionEnabled:!1,value:R.value,focus:d(V).focus,onFocus:ee,onBlur:oe,onConfirm:le,onInput:te,onKeyboardheightchange:o[0]||(o[0]=e=>w("keyboardheightchange",e)),password:M.value,maxlength:d(V).maxlength,disabled:d(V).disabled,cursorSpacing:d(V).cursorSpacing,confirmType:d(V).confirmType,confirmHold:d(V).confirmHold,autoBlur:d(V).autoBlur,holdKeyboard:d(V).holdKeyboard,adjustPosition:d(V).adjustPosition,readonly:d(V).readyOnly,type:d(V).type,placeholder:d(V).placeholder,style:f([{height:`${d(I)}rpx`,color:d(V).fontColor?d(V).fontColor:d(J).textColor,"text-align":$.align,fontSize:`${d(V).fontSize_px}px`,transition:"color 0.24s"}]),"placeholder-style":`fontSize:${d(V).fontSize_px}px;${$.placeholderStyle}`,"ready-only":d(V).readyOnly},null,8,["value","focus","password","maxlength","disabled","cursorSpacing","confirmType","confirmHold","autoBlur","holdKeyboard","adjustPosition","readonly","type","placeholder","style","placeholder-style","ready-only"])):p("",!0),"textarea"==d(V).type?(n(),i(a,{key:1,userInteractionEnabled:!1,value:R.value,focus:d(V).focus,onFocus:ee,onBlur:oe,onConfirm:le,onInput:te,onKeyboardheightchange:o[1]||(o[1]=e=>w("keyboardheightchange",e)),maxlength:d(V).maxlength,disabled:d(V).disabled,placeholder:d(V).placeholder,cursorSpacing:d(V).cursorSpacing,confirmHold:d(V).confirmHold,autoBlur:d(V).autoBlur,holdKeyboard:d(V).holdKeyboard,cursor:d(V).cursor,"show-confirm-bar":d(V).showConfirmBar,selectionStart:d(V).selectionStart,selectionEnd:d(V).selectionEnd,"disable-default-padding":d(V).disableDefaultPadding,fixed:d(V).fixed,autoHeight:d(V).autoHeight,readonly:d(V).readyOnly,adjustPosition:d(V).adjustPosition,type:d(V).type,style:f([d(V).autoHeight?{}:{height:`${d(I)}rpx`},{width:"auto","word-break":"break-word",color:d(V).fontColor?d(V).fontColor:d(J).textColor,"text-align":$.align,fontSize:`${d(V).fontSize_px}px`,transition:"color 0.24s"}]),class:"wrap flex-1","placeholder-style":`fontSize:${d(V).fontSize_px}px;${$.placeholderStyle}`,"ready-only":d(V).readyOnly},null,8,["value","focus","maxlength","disabled","placeholder","cursorSpacing","confirmHold","autoBlur","holdKeyboard","cursor","show-confirm-bar","selectionStart","selectionEnd","disable-default-padding","fixed","autoHeight","readonly","adjustPosition","type","style","placeholder-style","ready-only"])):p("",!0)])),_:1})),T.value?(n(),i(l,{key:4,class:"flex-1 relative flex-row flex",style:f([{width:"0px"}])},{default:s((()=>["textarea"!=d(V).type?(n(),i(t,{key:0,class:"flex-1",onClick:o[3]||(o[3]=h((e=>w("click",e)),["stop"])),userInteractionEnabled:!1,value:R.value,focus:d(V).focus,onFocus:ee,onBlur:oe,onConfirm:le,onInput:te,onKeyboardheightchange:o[4]||(o[4]=e=>w("keyboardheightchange",e)),password:M.value,disabled:d(V).disabled,cursorSpacing:d(V).cursorSpacing,confirmType:d(V).confirmType,confirmHold:d(V).confirmHold,autoBlur:d(V).autoBlur,holdKeyboard:d(V).holdKeyboard,adjustPosition:d(V).adjustPosition,maxlength:d(V).maxlength,type:d(V).type,readonly:d(V).readyOnly,placeholder:d(V).placeholder,style:f([{height:`${d(I)}rpx`,color:d(V).fontColor?d(V).fontColor:d(J).textColor,"text-align":$.align,fontSize:`${d(V).fontSize_px}px`}]),"placeholder-style":`fontSize:${d(V).fontSize_px}px;${$.placeholderStyle}`},null,8,["value","focus","password","disabled","cursorSpacing","confirmType","confirmHold","autoBlur","holdKeyboard","adjustPosition","maxlength","type","readonly","placeholder","style","placeholder-style"])):p("",!0),"textarea"==d(V).type?(n(),i(a,{key:1,onClick:o[5]||(o[5]=h((e=>w("click",e)),["stop"])),userInteractionEnabled:!1,value:R.value,focus:d(V).focus,onFocus:ee,onBlur:oe,onConfirm:le,onInput:te,onKeyboardheightchange:o[6]||(o[6]=e=>w("keyboardheightchange",e)),disabled:d(V).disabled,placeholder:d(V).placeholder,cursorSpacing:d(V).cursorSpacing,confirmHold:d(V).confirmHold,autoBlur:d(V).autoBlur,holdKeyboard:d(V).holdKeyboard,adjustPosition:d(V).adjustPosition,maxlength:d(V).maxlength,autoHeight:d(V).autoHeight,cursor:d(V).cursor,"show-confirm-bar":d(V).showConfirmBar,selectionStart:d(V).selectionStart,selectionEnd:d(V).selectionEnd,"disable-default-padding":d(V).disableDefaultPadding,readonly:d(V).readyOnly,fixed:d(V).fixed,type:d(V).type,style:f([d(V).autoHeight?{}:{height:`${d(I)}rpx`},{width:"auto","word-break":"break-word",color:d(V).fontColor?d(V).fontColor:d(J).textColor,"text-align":$.align,fontSize:`${d(V).fontSize_px}px`}]),class:"wrap flex-1","placeholder-style":`fontSize:${d(V).fontSize_px}px;${$.placeholderStyle}`},null,8,["value","focus","disabled","placeholder","cursorSpacing","confirmHold","autoBlur","holdKeyboard","adjustPosition","maxlength","autoHeight","cursor","show-confirm-bar","selectionStart","selectionEnd","disable-default-padding","readonly","fixed","type","style","placeholder-style"])):p("",!0)])),_:1})):p("",!0),d(V).showClear&&d(U)>0?(n(),i(l,{key:5,onClick:Y,class:"pl-16"},{default:s((()=>[u(v,{customicon:$.customicon,_style:"transition:color 0.24s",userInteractionEnabled:!1,"font-size":d(V).fontSize,color:$.clearAndEyeColor,name:"tmicon-times-circle-fill"},null,8,["customicon","font-size","color"])])),_:1})):p("",!0),W.value?(n(),i(l,{key:6,class:"pl-16"},{default:s((()=>[u(v,{_style:"transition:color 0.24s","font-size":d(V).fontSize,name:"tmicon-exclamation-circle"},null,8,["font-size"])])),_:1})):p("",!0),d(V).suffix?(n(),i(l,{key:7,class:"pl-16"},{default:s((()=>[u(v,{customicon:$.customicon,_style:"transition:color 0.24s","font-size":d(V).fontSize,color:$.suffixColor,name:d(V).suffix},null,8,["customicon","font-size","color","name"])])),_:1})):p("",!0),d(V).suffixLabel?(n(),i(l,{key:8,class:"pl-16"},{default:s((()=>[u(C,{_style:"transition:color 0.24s","font-size":d(V).fontSize,color:$.suffixColor,label:d(V).suffixLabel},null,8,["font-size","color","label"])])),_:1})):p("",!0),d(Q)?(n(),i(l,{key:9,onClick:Z,class:"pl-16"},{default:s((()=>[u(v,{color:$.clearAndEyeColor,_style:"transition:color 0.24s",userInteractionEnabled:!1,"font-size":d(V).fontSize,name:M.value?"tmicon-eyeslash-fill":"tmicon-eye-fill"},null,8,["color","font-size","name"])])),_:1})):p("",!0),d(V).showCharNumber&&d(U)>0&&"textarea"!=d(V).type?(n(),i(l,{key:10,class:"pl-16 flex-row flex"},{default:s((()=>[u(C,{_style:"transition:color 0.24s",label:d(U)},null,8,["label"]),d(V).maxlength>0?(n(),i(C,{key:0,_style:"transition:color 0.24s",label:"/"+d(V).maxlength},null,8,["label"])):p("",!0)])),_:1})):p("",!0),d(V).showCharNumber&&d(U)>0&&"textarea"==d(V).type?(n(),i(l,{key:11,class:c(["pl-16 flex-row flex absolute r-0",["b-12"]])},{default:s((()=>[u(C,{_style:"transition:color 0.24s",label:d(U)},null,8,["label"]),d(V).maxlength>0?(n(),i(C,{key:0,_style:"transition:color 0.24s",label:"/"+d(V).maxlength},null,8,["label"])):p("",!0)])),_:1})):p("",!0),y(e.$slots,"right",{},(()=>[d(V).search||d(V).searchLabel?(n(),i(l,{key:0,class:"pl-16"},{default:s((()=>[u(H,{round:$.round,width:$.searchWidth,followTheme:$.followTheme,onClick:X,color:$.searchBgColor,"font-size":24,height:d(I)-11,padding:[16,0],block:!$.searchWidth,margin:[0,0],fontColor:$.searchFontColor,icon:d(V).search,label:d(V).searchLabel},null,8,["round","width","followTheme","color","height","block","fontColor","icon","label"])])),_:1})):p("",!0)]),!0)])),_:3},8,["class","style"])])),_:3},8,["transprent","round","padding","border","text","color","outlined","shadow","linear","linearDeep"])])),_:3},8,["margin","padding"])}}}),[["__scopeId","data-v-bf5a44d3"]]);export{$ as _};
