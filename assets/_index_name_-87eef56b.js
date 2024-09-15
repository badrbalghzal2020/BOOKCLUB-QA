import{k as z,C as se,r as ne,g as q,D as xe,f as I,_ as S,o as _,c as V,w,a as y,u,U as ae,h as D,b as r,G as oe,R as re,V as ie,e as le,d as k,v as ce,x as ue,S as de,T as j,j as fe,l as x,F as T,y as me,H as ke,W as Y,t as Q,z as A,I as pe,L as Ce,M as $e,X as Me,s as L,Y as Oe,E as Se,Z as K,$ as Pe,a0 as Be,a1 as Ie,O as je,a2 as Fe,i as Ae,a3 as Le,a4 as Ve,m as Z}from"./index-b710355a.js";import{u as ge}from"./document-8589ce0c.js";const ze=async e=>z.get(`/message/${e}`),Re=async(e,t)=>z.post("/document/ask_file",null,{params:{question:e,file_index:t}}),X={fetchConversationMessages:ze,askQuestion:Re};var J;const De=typeof window<"u",H=()=>Date.now();De&&((J=window==null?void 0:window.navigator)!=null&&J.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const R=se("chat",{state:()=>({showUserProfile:!1,conversations:[],currentConversation:null,msg:"",isResponseLoading:!1}),actions:{async fetchConversations(e){this.conversations=[{messages:[]}];const t=this.conversations[0];try{t&&await this.showConversationMessages(t,e)}catch{ne.push("/myspace")}},async showConversationMessages(e,t){this.currentConversation={...e,messages:[]};const{data:{messages:s,remainingMessagesCredit:n}}=await X.fetchConversationMessages(t);if(this.currentConversation={...e,messages:s,remainingMessagesCredit:n},s.length===0){const a=await this.askQuestionAndShowAnswer("what's this document about?");this.addBotMessage("Do you have any questions for this document?",a)}},async askQuestionAndShowAnswer(e){const{documentIndexName:t}=ge();this.isResponseLoading=!0;const{data:{answer:s,introMsg:n}}=await X.askQuestion(e,t);return this.isResponseLoading=!1,this.addBotMessage(s.content,s._id),n._id},addBotMessage(e,t){const{messages:s}=this.currentConversation,n={_id:t!==void 0?t:s.length+100,content:e,isBotMessage:!0,created_at:H()};s.push(n)},async sendMessage(){const{currentUser:e}=q(),{openGoPremiumModal:t}=xe();if(!this.currentConversation||!e||!this.msg)return;const{messages:s,remainingMessagesCredit:n}=this.currentConversation;if(n===0){t(2);return}const a=this.msg,i={_id:s.length,content:a,isBotMessage:!1,created_at:H()};s.push(i),this.currentConversation.remainingMessagesCredit-=1,this.msg="",this.askQuestionAndShowAnswer(a)}}}),U=se("feedback",()=>{const e=I(null),t=R();function s(i){const{currentConversation:d}=t,{messages:f}=d,c=f.find(p=>p._id===i);c&&(c.feedback={isPositive:!0,content:""},e.value=c,z.post("/feedback",{...c.feedback,messageId:c._id}))}function n(i){var d;e.value&&z.post("/feedback",{isPositive:((d=e.value.feedback)==null?void 0:d.isPositive)||!1,messageId:e.value._id,content:i})}function a(i){const{currentConversation:d}=t,{messages:f}=d,c=f.find(p=>p._id===i);c&&(c.feedback={isPositive:!1,content:""},e.value=c,z.post("/feedback",{...c.feedback,messageId:c._id}))}return{currentMessage:e,likeAnswer:s,disLikeAnswer:a,submitFeedback:n}}),Ne=r("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),Te={class:"fixed inset-0 z-10 overflow-y-auto"},Ue={class:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"},We={class:"absolute top-0 right-0 hidden pt-6 pr-4 sm:block"},Ee=r("span",{class:"sr-only"},"Close",-1),Ke={class:"w-[10d0%] sm:w-audto bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},He={class:"sm:flex sm:items-center"},qe=r("div",{class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[r("svg",{stroke:"currentColor",fill:"none","stroke-width":"1.5",viewBox:"0 0 24 24","stroke-linecap":"round","stroke-linejoin":"round",class:"h-6 w-6 text-red-700 transform rotate-180",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"})])],-1),Qe={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full"},Ge={class:"mt-5"},Ye={__name:"NegativeFeedbackModal",props:{open:Boolean},emits:["closeModal","sendFeedback"],setup(e,{emit:t}){const s=t;function n(){s("closeModal")}const a=I("");async function i(){const{submitFeedback:d}=U();await d(a.value),n()}return(d,f)=>(_(),V(u(de),{as:"template",show:e.open},{default:w(()=>[y(u(ae),{as:"div",class:"relative z-10",onClose:n},{default:w(()=>[y(u(D),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:w(()=>[Ne]),_:1}),r("div",Te,[r("div",Ue,[y(u(D),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:w(()=>[y(u(oe),{class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-4xld w-[90%] sm:max-w-3xl"},{default:w(()=>[r("div",We,[r("button",{type:"button",class:"rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:n},[Ee,y(u(re),{class:"h-6 w-6","aria-hidden":"true"})])]),r("div",Ke,[r("div",He,[qe,r("div",Qe,[y(u(ie),{as:"h3",class:"text-base font-semibold leading-6 text-gray-900"},{default:w(()=>[le("Provide additional feedback ")]),_:1})])]),r("div",Ge,[k(` <InputField
                    class="pdt-4 pdl-6 border-2 !w-full rounded-lg"
                    :css="{ '!py-6 !text-left': true }"
                    :withLabel="false"
                    type="text"
                    placeholder="Write your feedback.."
                    v-model="msg"
                    @keydown.enter="sendMessage"
                    :disabled="isResponseLoading"
                  >

                  </InputField> `),ce(r("textarea",{"onUpdate:modelValue":f[0]||(f[0]=c=>a.value=c),rows:"4",name:"comment",id:"comment",placeholder:"Write your feedback..",class:"bg-white text-xl p-4 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:leading-6"},null,512),[[ue,a.value]])])]),r("div",{class:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"},[r("button",{type:"button",class:"inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 sm:ml-3 sm:w-auto",onClick:i}," Submit Feedback ")])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}},Ze=S(Ye,[["__file","/usr/src/app/src/components/Chat/Conversation/NegativeFeedbackModal.vue"]]),Xe=r("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),Je={class:"fixed inset-0 z-10 overflow-y-auto"},et={class:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"},tt={class:"absolute top-0 right-0 hidden pt-6 pr-4 sm:block"},st=r("span",{class:"sr-only"},"Close",-1),nt={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},at={class:"sm:flex sm:items-center"},ot=r("div",{class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"},[k(` <ExclamationTriangleIcon
                      class="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    /> `),r("svg",{stroke:"currentColor",fill:"none","stroke-width":"1.5",viewBox:"0 0 24 24","stroke-linecap":"round","stroke-linejoin":"round",class:"h-6 w-6 text-green-700",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"})])],-1),rt={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full"},it={class:"mt-5"},lt={__name:"Modal",props:{open:Boolean},emits:["closeModal"],setup(e,{emit:t}){const s=t;function n(){s("closeModal")}const a=I("");async function i(){const{submitFeedback:d}=U();await d(a.value),n()}return(d,f)=>(_(),V(u(de),{as:"template",show:e.open},{default:w(()=>[y(u(ae),{as:"div",class:"relative z-10",onClose:n},{default:w(()=>[y(u(D),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:w(()=>[Xe]),_:1}),r("div",Je,[r("div",et,[y(u(D),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:w(()=>[y(u(oe),{class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl w-[90%]"},{default:w(()=>[r("div",tt,[r("button",{type:"button",class:"rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:n},[st,y(u(re),{class:"h-6 w-6","aria-hidden":"true"})])]),r("div",nt,[r("div",at,[ot,r("div",rt,[y(u(ie),{as:"h3",class:"text-base font-semibold leading-6 text-gray-900"},{default:w(()=>[le("Provide additional feedback ")]),_:1})])]),r("div",it,[k(` <InputField
                    class="pdt-4 pdl-6 border-2 !w-full rounded-lg"
                    :css="{ '!py-6 !text-left': true }"
                    :withLabel="false"
                    type="text"
                    placeholder="Write your feedback.."
                    v-model="msg"
                    @keydown.enter="sendMessage"
                    :disabled="isResponseLoading"
                  >

                  </InputField> `),ce(r("textarea",{"onUpdate:modelValue":f[0]||(f[0]=c=>a.value=c),rows:"4",name:"comment",id:"comment",placeholder:"Write your feedback..",class:"text-xl p-4 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:leading-6 bg-white"},null,512),[[ue,a.value]])])]),r("div",{class:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"},[r("button",{type:"button",class:"inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 sm:ml-3 sm:w-auto",onClick:i}," Submit Feedback ")])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}},ct=S(lt,[["__file","/usr/src/app/src/components/common/Modal.vue"]]);const ut={class:"pdf-render w-full"},dt=["width","height"],ft={key:0,class:"loading-message"},mt={__name:"pdfViewer",props:{pdfBlob:String},setup(e){const t=e,s=j(()=>t.pdfBlob?URL.createObjectURL(t.pdfBlob):""),n=I(!1);let a=null;const i=I([]),d=I([]),f=I(null),c=I([]),p=async()=>{const v=await Y(()=>import("./pdf-e2b6a844.js").then(o=>o.p),["assets/pdf-e2b6a844.js","assets/_commonjsHelpers-23102255.js"]);await Y(()=>import("./pdf.worker.entry-e6a5eebd.js").then(o=>o.p),["assets/pdf.worker.entry-e6a5eebd.js","assets/_commonjsHelpers-23102255.js"]);const g=await v.getDocument(s.value).promise;a=g;const m=g.numPages;for(let o=1;o<=m;o++){const b=(await g.getPage(o)).getViewport({scale:1.5}),{width:$,height:P}=b;i.value.push({number:o,width:$,height:P})}n.value=!0,URL.revokeObjectURL(s.value)},h=()=>{requestAnimationFrame(M)},M=()=>{const v=f.value,g=v.scrollTop;v.scrollHeight;const m=v.offsetHeight,o=v.offsetTop;v.getBoundingClientRect().top;const l=g-o,b=Math.ceil(l/m)+1,$=i.value.map(P=>P.number).filter(P=>Math.abs(P-b)<10);B($)},B=async v=>{const g=i.value;v.forEach(async m=>{g[m-1];const o=c.value[m-1];if(!d.value.includes(m))try{await O(m,o),d.value.push(m)}catch(l){console.error(`Error rendering page ${m}`,l)}})},O=async(v,g)=>{const m=await a.getPage(v),o=m.getViewport({scale:1.5}),l=g.getContext("2d");g.width=o.width,g.height=o.height;const b={canvasContext:l,viewport:o};await m.render(b).promise};return fe(async()=>{t.pdfBlob&&(await p(),h())}),(v,g)=>(_(),x("div",ut,[r("div",{ref_key:"pdfContainer",ref:f,class:"pdf-container flex flex-col gap-yd-4 wd-full dshrink-0",onScroll:h},[(_(!0),x(T,null,me(i.value,(m,o)=>(_(),x("div",{key:o,class:"w-fdll mb-4",style:ke({height:m.height+"px"})},[r("canvas",{ref_for:!0,ref_key:"canvasRefs",ref:c,width:m.width,height:m.height,class:"w-full"},null,8,dt)],4))),128))],544),n.value?k("v-if",!0):(_(),x("div",ft,"Loading PDF..."))]))}},pt=S(mt,[["__file","/usr/src/app/src/components/Chat/pdf/pdfViewer.vue"]]);const gt={__name:"WebViewer",props:{pdfBlob:String},setup(e){return(t,s)=>{const n=pt;return _(),x(T,null,[k(" {{ pdfBlob }} "),k(` <VuePdfEmbed
    class="mx-4 overflow-y-scroll overflow-x-hidden rounded-md h-[calc(100vh-4rem)]"
    :source="documentContent"
  /> `),y(n,{classs:`
      overflow-y-scroll overflow-x-hidden
      rounded-md
      h-[calc(100vh-4rem)]
    `,pdfBlob:e.pdfBlob},null,8,["pdfBlob"])],2112)}}},vt=S(gt,[["__file","/usr/src/app/src/components/Chat/pdf/WebViewer.vue"]]),_t={key:0,for:"email",class:"block text-sm font-medium text-gray-700"},ht={class:"mt-1 mb-2 relative"},yt=["placeholder","type","disabled","value"],bt={class:"pointer-cursor absolute inset-y-0 right-0 flex items-center pr-3"},wt={__name:"InputField",props:{label:String,type:String,icon:Object,modelValue:String,placeholder:String,disabled:{type:Boolean,default(){return!1}},withLabel:{type:Boolean,default(){return!0}},css:{type:Object,default(){return{}}},wrapperClass:{type:Object,default(){return{}}}},emits:["update:updateValue"],setup(e,{emit:t}){const s=t,n=i=>{s("update:modelValue",i.target.value)},a=I("");return(i,d)=>(_(),x("div",{class:A(e.wrapperClass)},[e.withLabel?(_(),x("label",_t,Q(e.label),1)):k("v-if",!0),r("div",ht,[r("input",{ref_key:"inputRef",ref:a,id:"email",name:"email",placeholder:e.placeholder,type:e.type,block:"",autocomplete:"off",disabled:e.disabled,required:"",class:A(["w-full bg-white rounded-md border-0 px-3 py-2 placeholder-gray-400 shadow-sm",e.css]),value:e.modelValue,onInput:n},null,42,yt),r("div",bt,[pe(i.$slots,"default",{ariaHidden:"true"})])])],2))}},xt=S(wt,[["__file","/usr/src/app/src/components/common/InputField.vue"]]);const ve=e=>(Ce("data-v-c2ef9b7d"),e=e(),$e(),e),kt={class:"flex gap-x-2"},Ct=["id","disabled"],$t=["for"],Mt=ve(()=>r("img",{draggable:"false",src:"https://i.hizliresim.com/seigsy3.png",class:"like"},null,-1)),Ot=[Mt],St=["id","disabled"],Pt=["for"],Bt=ve(()=>r("img",{draggable:"false",src:"https://i.hizliresim.com/l3xxttm.png",class:"dislike"},null,-1)),It=[Bt],jt={__name:"Feedback",props:{message:Object,index:Number,user:Object},setup(e){const{likeAnswer:t,disLikeAnswer:s}=U();return(n,a)=>{var i,d,f,c,p,h,M,B,O,v,g,m;return _(),x("div",kt,[r("input",{type:"radio",name:"radio",id:`likeInput ${(i=e.message)==null?void 0:i._id}`,onClick:a[0]||(a[0]=o=>{var l;return u(t)((l=e.message)==null?void 0:l._id)}),disabled:((d=e.message.feedback)==null?void 0:d.isPositive)!==n.undefiend},null,8,Ct),!e.message.feedback||(f=e.message.feedback)!=null&&f.isPositive?(_(),x("label",{key:0,class:A([[{active:(p=(c=e.message)==null?void 0:c.feedback)==null?void 0:p.isPositive}],"likeLabel"]),for:`likeInput ${(h=e.message)==null?void 0:h._id}`},[...Ot],10,$t)):k("v-if",!0),r("input",{type:"radio",id:`dislikeInput ${(M=e.message)==null?void 0:M._id}`,name:"radio",onClick:a[1]||(a[1]=o=>{var l;return u(s)((l=e.message)==null?void 0:l._id)}),disabled:((B=e.message.feedback)==null?void 0:B.isPositive)!==n.undefiend},null,8,St),!e.message.feedback||!((O=e.message.feedback)!=null&&O.isPositive)?(_(),x("label",{key:1,for:`dislikeInput ${(v=e.message)==null?void 0:v._id}`,class:A([[{active:((m=(g=e.message)==null?void 0:g.feedback)==null?void 0:m.isPositive)===!1}],"dislikeLabel"])},[...It],10,Pt)):k("v-if",!0)])}}},Ft=S(jt,[["__scopeId","data-v-c2ef9b7d"],["__file","/usr/src/app/src/components/Chat/Conversation/Feedback.vue"]]),At={class:"text-left pl-3 font-bold"},Lt={class:"flex items-center gap-x-4"},Vt={__name:"MessageWrapper",props:{message:{type:Object,require:!0},index:{required:!0,type:Number},hideFeedack:{default:!1,type:Boolean}},setup(e){const t=e,{message:s}=Me(t),n=q();L(n);const a=j(()=>!s.value.isBotMessage),i=R();L(i);const d=j(()=>a!=null&&a.value?"You":"File");return L(i),(f,c)=>{const p=Ft;return _(),x("div",{class:A(["flex items-center gap-x-2 mb-1 jusDtify-between",{"justify-end":u(a)}])},[r("div",null,[r("div",At,Q(u(d)),1),r("div",Lt,[r("div",{class:A(["relative shadow-sm rounded-2xl rounded-bl-none py-3 pl-5 pr-5 ml-2 font-medium",u(a)?"bg-[#D7D9E8] reverse":"bg-white"])},[r("div",{id:"triangle",class:A(["absolute left-[-.6rem] bottom-0",{"!border-b-[#D7D9E8] border-b-[1rem]":u(a)}])},null,2),r("div",{class:A(["text-left text-sm",{reverse:u(a)}])},[pe(f.$slots,"default")],2)],2),!u(a)&&!e.hideFeedack?(_(),V(p,{key:0,message:u(s),index:e.index},null,8,["message","index"])):k("v-if",!0)])])],2)}}},_e=S(Vt,[["__file","/usr/src/app/src/components/Chat/Conversation/MessageWrapper.vue"]]);const zt=r("div",{class:"typing py-2 px-2"},[r("div",{class:"dot"}),r("div",{class:"dot"}),r("div",{class:"dot"})],-1),Rt={__name:"typingAnimation",setup(e){const t={message:null,isBotMessage:!0,created_at:H()};return(s,n)=>{const a=_e;return _(),x(T,null,[k(' <div class="chat-bubble"> '),y(a,{message:t,hideFeedack:!0},{default:w(()=>[zt]),_:1}),k(" </div> ")],2112)}}},Dt=S(Rt,[["__file","/usr/src/app/src/components/Chat/Conversation/typingAnimation.vue"]]),Nt=["innerHTML"],Tt={__name:"Message",props:{message:Object,user:Object,index:Number},setup(e){return(t,s)=>{const n=_e;return _(),V(n,{message:e.message,index:e.index},{default:w(()=>[r("span",{innerHTML:e.message.content.replace(/\n/g,"<br>")},null,8,Nt)]),_:1},8,["message","index"])}}},Ut=S(Tt,[["__file","/usr/src/app/src/components/Chat/Conversation/Message.vue"]]);const Wt={key:0,class:"text-[#3C444B] relative rounded-xl"},Et={__name:"MessagesList",setup(e){const t=R(),s=q(),{currentUserFullName:n,currentUser:a}=L(s),{showUserProfile:i,currentConversation:d,isResponseLoading:f}=L(t),c=I(null);return Oe(()=>{c.value&&c.value.scrollIntoView({behavior:"smooth",block:"end"})}),(p,h)=>{var O;const M=Ut,B=Dt;return u(d)?(_(),x("div",Wt,[k(` <div
			class="border-b-2 border-dark-color sticky top-0 right-0 bg-grey-color opacity-30 z-10 w-full p-8 text-2xl text-dark-color font-medium"
		>
			ss
		</div> `),r("div",{ref_key:"messages",ref:c,class:"py-6 overflow-x-hidden"},[(_(!0),x(T,null,me((O=u(d))==null?void 0:O.messages,(v,g)=>(_(),V(M,{key:v.id,message:v,user:u(a),index:g},null,8,["message","user","index"]))),128)),u(f)?(_(),V(B,{key:0})):k("v-if",!0)],512)])):k("v-if",!0)}}},Kt=S(Et,[["__file","/usr/src/app/src/components/Chat/Conversation/MessagesList.vue"]]);function ee(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),s.push.apply(s,n)}return s}function F(e){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?ee(Object(s),!0).forEach(function(n){C(e,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):ee(Object(s)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))})}return e}function N(e){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(e)}function C(e,t,s){return t=Gt(t),t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function Ht(e,t){if(e==null)return{};var s={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(s[a]=e[a]);return s}function qt(e,t){if(e==null)return{};var s=Ht(e,t),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function Qt(e,t){if(typeof e!="object"||e===null)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var n=s.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Gt(e){var t=Qt(e,"string");return typeof t=="symbol"?t:String(t)}var Yt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},he={exports:{}};(function(e){(function(t){var s=function(o,l,b){if(!p(l)||M(l)||B(l)||O(l)||c(l))return l;var $,P=0,G=0;if(h(l))for($=[],G=l.length;P<G;P++)$.push(s(o,l[P],b));else{$={};for(var W in l)Object.prototype.hasOwnProperty.call(l,W)&&($[o(W,b)]=s(o,l[W],b))}return $},n=function(o,l){l=l||{};var b=l.separator||"_",$=l.split||/(?=[A-Z])/;return o.split($).join(b)},a=function(o){return v(o)?o:(o=o.replace(/[\-_\s]+(.)?/g,function(l,b){return b?b.toUpperCase():""}),o.substr(0,1).toLowerCase()+o.substr(1))},i=function(o){var l=a(o);return l.substr(0,1).toUpperCase()+l.substr(1)},d=function(o,l){return n(o,l).toLowerCase()},f=Object.prototype.toString,c=function(o){return typeof o=="function"},p=function(o){return o===Object(o)},h=function(o){return f.call(o)=="[object Array]"},M=function(o){return f.call(o)=="[object Date]"},B=function(o){return f.call(o)=="[object RegExp]"},O=function(o){return f.call(o)=="[object Boolean]"},v=function(o){return o=o-0,o===o},g=function(o,l){var b=l&&"process"in l?l.process:l;return typeof b!="function"?o:function($,P){return b($,o,P)}},m={camelize:a,decamelize:d,pascalize:i,depascalize:d,camelizeKeys:function(o,l){return s(g(a,l),o)},decamelizeKeys:function(o,l){return s(g(d,l),o,l)},pascalizeKeys:function(o,l){return s(g(i,l),o)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=m:t.humps=m})(Yt)})(he);var Zt=he.exports,Xt=["class","style"];function Jt(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,s){var n=s.indexOf(":"),a=Zt.camelize(s.slice(0,n)),i=s.slice(n+1).trim();return t[a]=i,t},{})}function es(e){return e.split(/\s+/).reduce(function(t,s){return t[s]=!0,t},{})}function ye(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var n=(e.children||[]).map(function(c){return ye(c)}),a=Object.keys(e.attributes||{}).reduce(function(c,p){var h=e.attributes[p];switch(p){case"class":c.class=es(h);break;case"style":c.style=Jt(h);break;default:c.attrs[p]=h}return c},{attrs:{},class:{},style:{}});s.class;var i=s.style,d=i===void 0?{}:i,f=qt(s,Xt);return Ie(e.tag,F(F(F({},t),{},{class:a.class,style:F(F({},a.style),d)},a.attrs),f),n)}var be=!1;try{be=!1}catch{}function ts(){if(!be&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function E(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?C({},e,t):{}}function ss(e){var t,s=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},C(t,"fa-".concat(e.size),e.size!==null),C(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),C(t,"fa-pull-".concat(e.pull),e.pull!==null),C(t,"fa-swap-opacity",e.swapOpacity),C(t,"fa-bounce",e.bounce),C(t,"fa-shake",e.shake),C(t,"fa-beat",e.beat),C(t,"fa-fade",e.fade),C(t,"fa-beat-fade",e.beatFade),C(t,"fa-flash",e.flash),C(t,"fa-spin-pulse",e.spinPulse),C(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(s).map(function(n){return s[n]?n:null}).filter(function(n){return n})}function te(e){if(e&&N(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(K.icon)return K.icon(e);if(e===null)return null;if(N(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var ns=Se({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,s){var n=s.attrs,a=j(function(){return te(t.icon)}),i=j(function(){return E("classes",ss(t))}),d=j(function(){return E("transform",typeof t.transform=="string"?K.transform(t.transform):t.transform)}),f=j(function(){return E("mask",te(t.mask))}),c=j(function(){return Pe(a.value,F(F(F(F({},i.value),d.value),f.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Be(c,function(h){if(!h)return ts("Could not find one or more icon(s)",a.value,f.value)},{immediate:!0});var p=j(function(){return c.value?ye(c.value.abstract[0],{},n):null});return function(){return p.value}}});const as={class:"!bg-[#dfe8f2] w-[100%] rounded-xl pr-6 pt-4 overflow-yd-auto relative"},os={class:"!pl-2 pt-4 !sm:pl-3 sm:pt-4"},rs={class:"pb-1 text-gray-700"},is={class:"flex items-center gap-x-4 w-[96%] sm:w-[98%]"},ls={__name:"Conversation",setup(e){const t=R(),{sendMessage:s}=t,{msg:n,isResponseLoading:a,currentConversation:i}=L(t);return(d,f)=>{var h;const c=Kt,p=xt;return _(),x("div",as,[y(c,{class:"h-[calc(100%-7rem)] sm:h-[calc(100%-7.5rem)] overflow-y-scroll w-full border-d2 border-red pr-6"}),r("div",os,[r("h2",rs,Q(((h=u(i))==null?void 0:h.remainingMessagesCredit)||0)+" message credits left ",1),r("div",is,[y(p,{css:{"!py-2 !sm:py-3 !px-6 rounded-lg text-md sm:text-xl !rounded-full !bg-[#F5F7FB] shadow-lg":!0},withLabel:!1,wrapperClass:{"!w-[100%]":!0},type:"text",placeholder:"Write your message..",modelValue:u(n),"onUpdate:modelValue":f[0]||(f[0]=M=>je(n)?n.value=M:null),onKeydown:Fe(u(s),["enter"]),disabled:u(a)},null,8,["modelValue","onKeydown","disabled"]),y(u(ns),{onClick:u(s),icon:"fa-solid fa-paper-plane",class:"cursor-pointer h-3 sm:h-4 w-4 bg-primary-color !text-white p-3 rounded-full mr-1"},null,8,["onClick"])])])])}}},cs=S(ls,[["__file","/usr/src/app/src/components/Chat/Conversation/Conversation.vue"]]),us={class:"flex pt-10 sm:pt-30 sm:px-10 h-[calc(100vh-0rem)] sm:h-[calc(100vh-2.5rem)] overflow-hidden"},we={__name:"[index_name]",setup(e){const t=R(),{fetchConversations:s}=t,{documentBlob:n,documentIndexName:a}=L(ge()),{currentMessage:i}=L(U());function d(){i.value=null}return fe(async()=>{const c=Ae().params.index_name;a.value=c;try{if(s(c),n.value===null){const h=(await z.get(`/document/${c}`,{responseType:"blob"})).data;n.value=h}}catch{ne.push("/myspace")}}),Le(()=>{n.value=null}),(f,c)=>{const p=cs,h=vt,M=ct,B=Ze;return _(),V(u(Ve),null,{default:w(()=>{var O,v,g,m;return[r("div",us,[y(p,{class:"w-[100%] sm:!w-[60%] px-3 shadow-md"}),(_(),V(h,{key:u(n),class:"hidden sm:block !w-[40%] border-2 ml-4",pdfBlob:u(n)},null,8,["pdfBlob"])),y(M,{onCloseModal:d,open:u(i)!=null&&((v=(O=u(i))==null?void 0:O.feedback)==null?void 0:v.isPositive)},null,8,["open"]),y(B,{onCloseModal:d,open:u(i)!=null&&!((m=(g=u(i))==null?void 0:g.feedback)!=null&&m.isPositive)},null,8,["open"])])]}),_:1})}}};typeof Z=="function"&&Z(we);const ms=S(we,[["__file","/usr/src/app/src/pages/chat/[index_name].vue"]]);export{ms as default};