(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[951],{7596:function(e,t,s){Promise.resolve().then(s.bind(s,7433))},7433:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return E}});var a=s(7437),r=s(2265),l=s(2759),n=s(504),o=s(3046),c=function(e,t){let[s,a]=(0,r.useState)(e);return(0,r.useEffect)(()=>{let s=setTimeout(()=>a(e),t);return()=>clearTimeout(s)},[e]),s},i=s(6701);function u(e){let{onFocusedSearchBar:t,onChangeTextSearchBar:s,onGetResultSearchBar:o}=e,[u,d]=(0,r.useState)(""),[x,h]=(0,r.useState)(!1),[m,f]=(0,r.useState)([]),p=e=>{f(e),o(e)},g=c(u,500);return(0,r.useEffect)(()=>{if(!g.trim()){p([]);return}let e="".concat(i.Z.url_api,"/users/search?name=").concat(encodeURIComponent(g));fetch(e,{headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(async e=>{p(e.data.users)})},[g]),(0,a.jsxs)("div",{className:"   pb-4 relative",children:[x&&(0,a.jsx)("div",{onClick:()=>{h(!1),t(!1),s("")},className:"absolute h-10 w-10  left-0  rounded-full p-1 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-opacity duration-300",children:(0,a.jsx)(n.G,{icon:l.acZ,className:"absolute  w-4 h-4 text-gray-700  cursor-pointer"})}),(0,a.jsx)("form",{className:" ".concat(x?"w-10/12 float-right":"w-full "," transition-opacity duration-300"),children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(n.G,{icon:l.wn1,className:"absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-400 left-3 cursor-pointer"}),(0,a.jsx)("input",{value:u,type:"text",onChange:e=>{d(e.target.value),s(e.target.value)},onFocus:()=>{h(!0),t(!0)},placeholder:"Search Messenger",className:"w-full p-2 pl-12 pr-4 bg-slate-100 text-gray-700 border rounded-full outline-none bg-gray-50 focus:border-gray-300"}),""!==u&&(0,a.jsx)("div",{onClick:()=>{d(""),h(!1),t(!1),s("")},className:"absolute top-0 right-0 w-10 h-10 bg-gray-200 rounded-full p-1 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-opacity duration-300",children:(0,a.jsx)(n.G,{icon:l.YIN,className:"w-4 h-4 text-gray-400 cursor-pointer justify-center"})})]})})]})}function d(e){let t=e.chats,s=e.currentId,[c,d]=(0,r.useState)(!1),[x,h]=(0,r.useState)(""),[m,f]=(0,r.useState)([]),p=(0,o.v9)(e=>e.userIdAuth),g=(t,s,a,r)=>{e.handleClickBox(t,{userId:s,fullName:a,avatar:r})},b=e=>{let t=Math.floor(Math.floor((new Date().getTime()-new Date(e).getTime())/1e3)/60),s=Math.floor(t/60),a=Math.floor(s/24),r=Math.floor(a/30),l=Math.floor(a/365);return 0==t&&t++,l>0?"".concat(l," ").concat("y"):r>0?"".concat(r," ").concat("m"):a>0?"".concat(a," ").concat("d"):s>0?"".concat(s," ").concat("h"):"".concat(t," ").concat("m")},v=(t,s,a,r)=>{e.handleDefaultConversation({userId:t,fullName:s,avatar:a},r)},j=e=>{d(e)},y=async(e,t,s)=>{j(!1);let a="".concat(i.Z.url_local_api,"/conversations/search");await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user1_id:e,user2_id:p})}).then(e=>e.json()).then(async a=>{j(!1),g(a.data.result[0]._id,e,t,s)})};return(0,r.useEffect)(()=>{if(t.length>0){let e=t[0].users.filter(e=>e._id!==s);e.length>0&&v(e[0]._id,e[0].full_name,e[0].avatar,t[0]._id)}},[t,s]),(0,a.jsxs)("div",{className:"overflow-auto h-100 px-2 basis-1/4 flex flex-col border pb-4",children:[(0,a.jsxs)("div",{className:"sticky  bg-white z-10 top-0",children:[(0,a.jsx)("h1",{className:"font-bold text-gray-800 text-2xl px-2 py-4",children:"Chats"}),(0,a.jsx)(u,{onFocusedSearchBar:j,onChangeTextSearchBar:e=>{h(e)},onGetResultSearchBar:e=>{f(e)}})]}),c?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"py-2  bg-white h-16 flex w-full items-center hover:bg-gray-100 cursor-pointer  hover:rounded-lg  active:bg-gray-100",children:(0,a.jsxs)("div",{className:"py-2 w-100 flex items-center",children:[(0,a.jsx)("div",{className:"absolute h-10 w-10  left-3 mr-2  rounded-full p-1 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-opacity duration-300",children:(0,a.jsx)(n.G,{icon:l.wn1,className:"absolute   h-7 text-gray-700  cursor-pointer"})}),(0,a.jsxs)("div",{className:"text-base font-semibold ml-2 mb-1 pl-10 text-gray-600",children:["Search messages for ",x]})]})}),m.map((e,t)=>(console.log(e),(0,a.jsx)("div",{onClick:()=>y(e._id,e.full_name,e.avatar),className:"py-2  bg-white h-20 flex w-full items-center hover:bg-gray-100 cursor-pointer  hover:rounded-lg  active:bg-gray-100",children:(0,a.jsxs)("div",{className:"px-2 w-100 flex items-center",children:[(0,a.jsx)("div",{className:"basis-1/6 ",children:(0,a.jsx)("img",{src:e.avatar,className:"size-12 rounded-full"})}),(0,a.jsx)("div",{className:"ml-2 basis-5/6",children:(0,a.jsx)("div",{className:"text-base font-semibold mb-1 text-gray-600",children:e.full_name})})]})},t)))]}):t.map((e,t)=>{let r=e.users.filter(e=>e._id!==s),l=r[0]._id,n=r[0].avatar,o=r[0].full_name,c=e.last_message_id;return b(c.updatedAt),(0,a.jsx)("div",{onClick:()=>g(e._id,l,r[0].full_name,n),className:"py-2  bg-white h-24 flex w-full items-center hover:bg-gray-100 cursor-pointer  hover:rounded-lg  active:bg-gray-100",children:(0,a.jsxs)("div",{className:"px-2 w-100 flex items-center",children:[(0,a.jsx)("div",{className:"basis-1/6",children:(0,a.jsx)("img",{src:r.length>0?r[0].avatar:"",className:"size-12 rounded-full"})}),(0,a.jsxs)("div",{className:"ml-4 basis-5/6",children:[(0,a.jsx)("div",{className:"text-base font-semibold mb-1 text-gray-600",children:o}),(0,a.jsxs)("div",{className:"".concat(c.unread?"font-bold":"font-normal"," flex items-center"),children:[(0,a.jsx)("h1",{className:" text-sm text-gray-500 font-normal",children:c.content.length>25?"".concat(c.content.slice(0,25),"..."):c.content}),(0,a.jsx)("h1",{className:" px-3 text-sm text-gray-500 font-normal float-right",children:b(c.updatedAt)})]})]}),(0,a.jsx)("div",{className:"size-2 rounded-full ".concat(e.unread?"bg-blue-500":"bg-transparent")})]})},t)}),(0,a.jsx)("button",{className:"fixed left-56 bottom-4 transform -translate-x-1/2 bg-blue-500 text-white rounded-full p-4 text-lg cursor-pointer size-16 shadow-2xl active:bg-blue-700 hover:bg-blue-600 ",children:(0,a.jsx)(n.G,{icon:l.XSk})})]})}let x=e=>({type:"SEND_MESSAGE",payload:e}),h=()=>({type:"MESSAGE_SENT"});var m=e=>{let{conversationId:t,currentId:s,otherUserId:c,setShowEmojis:u,sendEmojiToChatInput:d}=e;(0,r.useEffect)(()=>{f(m+d)},[d]);let[m,f]=(0,r.useState)(""),[p,g]=(0,r.useState)([]),[b,v]=(0,r.useState)("48px"),j=(0,r.useRef)(null),y=(0,r.useRef)(null),N=(0,o.I0)();(0,o.v9)(e=>e.messageSent);let _=async()=>{let e="".concat(i.Z.url_api,"/messages");await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:m,conversation_id:t,user_id:s,other_user_id:c})}).then(e=>e.json()).then(async e=>{await N(h()),await N(x(m)),f("")})},w=e=>{g(t=>t.filter((t,s)=>s!==e))};return(0,a.jsxs)(a.Fragment,{children:[p.length>0&&(0,a.jsx)("div",{style:{paddingLeft:"110px"},className:"flex space-x-2 m-2",children:p.map((e,t)=>(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("img",{src:URL.createObjectURL(e),alt:"Selected Image ".concat(t+1),className:"h-20 w-20 object-cover rounded-full"}),(0,a.jsx)("button",{className:"absolute top-0 right-0 p-1  text-gray-600 w-8 h-8 bg-gray-100 rounded-full p-1 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-opacity duration-300",onClick:()=>w(t),children:(0,a.jsx)(n.G,{icon:l.YIN,className:"w-4 h-4 text-gray-600 cursor-pointer justify-center"})})]},t))}),(0,a.jsxs)("div",{className:"flex items-center justify-between p-3",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("input",{type:"file",ref:j,style:{display:"none"},onChange:e=>{let t=e.target.files;if(t){let e=Array.from(t).filter(Boolean);g(t=>[...t,...e]),y.current&&y.current.focus()}}}),(0,a.jsx)("label",{htmlFor:"fileInput",onClick:()=>{var e;null===(e=j.current)||void 0===e||e.click()},className:"text-blue-500 focus:outline-none hover:text-blue-600 cursor-pointer",children:(0,a.jsx)(n.G,{icon:l.VmB})}),(0,a.jsx)("button",{type:"button",className:"text-blue-500 focus:outline-none hover:text-blue-600",children:(0,a.jsx)(n.G,{className:"mx-3 size-5",icon:l.KtF})}),(0,a.jsxs)("div",{className:" relative",children:[(0,a.jsx)("input",{type:"text",value:m,onChange:e=>{f(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&_()},ref:y,placeholder:"Aa",className:"text-gray-700 bg-slate-100 px-4 py-2 rounded-full focus:outline-none focus:shadow-outline-gray mx-12 border h-12",style:{width:"150%",height:b}}),(0,a.jsx)("button",{type:"button",onClick:()=>u(e=>!e),style:{top:"24px",right:"-200px"},className:"text-blue-500 focus:outline-none hover:text-blue-600 absolute transform -translate-y-1/2",children:(0,a.jsx)(n.G,{className:"mx-3 size-5",icon:l.ctA})})]})]}),(0,a.jsx)("button",{onClick:()=>{f(e=>e+"\uD83D\uDE0A")},className:"text-blue-500 focus:outline-none hover:text-blue-600",children:(0,a.jsx)(n.G,{className:"mx-3 size-5",icon:l.u8Q})})]})]})},f=e=>{let{message:t,avatar:s,isSender:r}=e;return(0,a.jsx)("div",{className:"flex ".concat(r?"justify-end":"justify-start"," mb-4 pr-4"),children:r?(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"mx-4 px-4 py-2 rounded-full shadow-md bg-blue-500 text-white justify-start",children:(0,a.jsx)("p",{className:"text-sm",children:t})}),(0,a.jsx)("div",{className:"size-12 rounded-full",children:(0,a.jsx)("img",{src:s,className:"size-12 rounded-full",alt:"avatar"})})]}):(0,a.jsxs)("div",{className:"flex items-center ",children:[(0,a.jsx)("div",{className:"size-12 rounded-full",children:(0,a.jsx)("img",{src:s,className:"size-12 rounded-full",alt:"avatar"})}),(0,a.jsx)("div",{className:"mx-4 px-4 py-2 rounded-full text-gray-600 shadow-md bg-gray-200",children:(0,a.jsx)("p",{className:"text-sm",children:t})})]})})};function p(e){let{content:t}=e;return(0,a.jsx)("button",{type:"button",className:"mx-2 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]",children:t})}function g(e){return(0,a.jsxs)("div",{className:"flex-grow  flex flex-col items-center",children:[e.title&&(0,a.jsxs)("div",{className:"w-full h-72  flex flex-col items-center justify-center",children:[(0,a.jsx)("div",{className:"size-28 rounded-full mb-4",children:(0,a.jsx)("img",{src:e.avatar,alt:"Avatar",className:"size-28 rounded-full"})}),(0,a.jsx)("h1",{className:"font-bold text-gray-600 text-2xl my-2",children:e.title}),(0,a.jsxs)("div",{className:"flex flex-row px-3",children:[(0,a.jsx)(p,{content:"Call"}),(0,a.jsx)(p,{content:"Call Video"})]})]}),(0,a.jsx)("div",{className:"flex-grow w-full",children:e.title&&(0,a.jsxs)("ul",{className:" w-full my-10",children:[(0,a.jsxs)("li",{className:"w-full h-16 flex border-b items-center",children:[(0,a.jsx)("h1",{className:"font-medium text-gray-500 text-xl p-2 ",children:"Search in Converstation"}),(0,a.jsx)(n.G,{icon:l.wn1,className:"text-gray-500 absolute right-2 size-5 hover:text-gray-600 active:text-gray-700 cursor-pointer"})]}),(0,a.jsxs)("li",{className:"w-full h-16 flex border-b items-center",children:[(0,a.jsx)("h1",{className:"font-medium text-gray-500 text-xl p-2 ",children:"Change Color"}),(0,a.jsxs)("div",{className:"flex flex-row absolute right-2",children:[(0,a.jsx)("div",{className:"mx-1 size-5 border bg-white rounded-full"}),(0,a.jsx)("div",{className:"mx-1 size-5 border bg-blue-500 rounded-full"}),(0,a.jsx)("div",{className:"mx-1 size-5 border bg-orange-500 rounded-full"}),(0,a.jsx)("div",{className:"mx-1 size-5 border bg-black rounded-full"})]})]}),(0,a.jsxs)("li",{className:"w-full h-16 flex border-b items-center",children:[(0,a.jsx)("h1",{className:"font-medium text-gray-500 text-xl p-2",children:"Change Emoji"}),(0,a.jsx)(n.G,{icon:l.u8Q,className:"text-gray-500 absolute right-2 size-5 hover:text-gray-600 active:text-gray-700 cursor-pointer"})]})]})})]})}var b=s(7870);function v(e){let{chatdetail:t,currentId:s,otherUser:l,conversationId:n}=e,[o,c]=(0,r.useState)([]),i=(0,r.useRef)(null),[u,d]=(0,r.useState)(!1),[x,h]=(0,r.useState)("");(0,r.useEffect)(()=>{p()},[t]);let p=()=>{i.current&&(i.current.scrollTop=i.current.scrollHeight)};return(0,a.jsxs)("div",{className:"h-full basis-3/4 flex ",children:[(0,a.jsxs)("div",{className:"h-100 basis-2/3 border flex flex-col overflow-auto",children:[(0,a.jsx)("header",{className:"flex items-center border-b h-16 ",children:(0,a.jsx)("h1",{className:"font-bold text-xl m-5 text-gray-700",children:l.fullName})}),(0,a.jsxs)("div",{className:"flex-grow overflow-auto flex flex-col-reverse",children:[(0,a.jsx)("div",{className:"border-t",children:(0,a.jsx)(m,{conversationId:n,currentId:s,otherUserId:l.userId,setShowEmojis:d,sendEmojiToChatInput:x})}),u&&(0,a.jsx)("div",{style:{top:"214px",right:"470px"},className:"z-10 absolute ",children:(0,a.jsx)(b.ZP,{onEmojiClick:e=>{let t=String.fromCodePoint(...e.unified.split("-").map(e=>parseInt(e,16)));console.log(t),h(t)}})}),(0,a.jsx)("div",{className:"mx-4 my-1 items-center overflow-auto flex-grow",ref:i,children:t.map((e,t)=>(0,a.jsx)(f,{message:e.content,isSender:s===e.user_id._id,avatar:e.user_id.avatar},t))})]})]}),(0,a.jsx)(g,{title:l.fullName,avatar:l.avatar})]})}var j=s(7965),y=s.n(j),N=new(y())("ef136162ebafbc149f55",{cluster:"mt1"});function _(){let[e,t]=(0,r.useState)(null),s=(0,o.v9)(e=>e.userIdAuth),[l,n]=(0,r.useState)([]),[c,u]=(0,r.useState)(""),[x,h]=(0,r.useState)(!1),[m,f]=(0,r.useState)([]),[p,g]=(0,r.useState)({userId:"",fullName:"",avatar:""}),b=(0,o.v9)(e=>e.messageSent);(0,r.useEffect)(()=>{b&&(j(),console.log("Message sent. Reload the page or perform other actions."))},[b]),(0,r.useEffect)(()=>{j()},[e,x]),(0,r.useEffect)(()=>{console.log(s)},[s]),(0,r.useEffect)(()=>(y().logToConsole=!0,N.subscribe("conversation-".concat(c)).bind("new-messenger",function(t){console.log("New messenger from Pusher:",t.user_id),h(t.user_id===e)}),()=>{N.unsubscribe("conversation-".concat(c))}),[c]);let j=async()=>{try{let e=localStorage.getItem("user_data");if(e){let s=JSON.parse(e);t(s.userId);let a="".concat(i.Z.url_api,"/conversations/user/").concat(s.userId),r=await fetch(a,{method:"GET",headers:{"Content-Type":"application/json"}});if(!r.ok)throw Error("HTTP error! Status: ".concat(r.status));let l=await r.json();n(l.conversations);let o=l.conversations[0];_(o._id)}}catch(e){console.error("Error fetching data:",e.message)}},_=async e=>{try{let t="".concat(i.Z.url_api,"/conversations/").concat(e),s=await fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}});if(!s.ok)throw Error("HTTP error! Status: ".concat(s.status));let a=await s.json();f(a.data.messages)}catch(e){console.error("Error fetching data:",e.message)}};return(0,a.jsxs)("div",{className:" flex-grow w-full flex flex-row overflow-auto",children:[(0,a.jsx)(d,{chats:l,currentId:e,handleClickBox:(e,t)=>{_(e),u(e),g(t)},handleDefaultConversation:(e,t)=>{g(e),u(t)}}),(0,a.jsx)(v,{chatdetail:m,currentId:e,otherUser:p,conversationId:c})]})}var w=s(4033),S=s(8073);function E(){let e=(0,w.useRouter)();return(0,r.useEffect)(()=>{localStorage.getItem("user_data")||e.push("/auth")},[]),(0,a.jsx)(o.zt,{store:S.Z,children:(0,a.jsx)(_,{})})}},6701:function(e,t){"use strict";t.Z={url_api:"https://messenger-jhnv.onrender.com/api/v1",url_local_api:"http://127.0.0.1:8000/api/v1"}},8073:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var a=s(4483);let r={messages:[],messageSent:!1,userIdAuth:null,emoji:""};var l=(0,a.MT)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":return{...e,messages:[...e.messages,t.payload],messageSent:!1};case"MESSAGE_SENT":return{...e,messageSent:!0};case"SET_USER_ID":return{...e,userIdAuth:t.payload};case"EMOJI_SENT":return{...e,emoji:t.payload};default:return e}})}},function(e){e.O(0,[676,560,35,759,971,938,744],function(){return e(e.s=7596)}),_N_E=e.O()}]);