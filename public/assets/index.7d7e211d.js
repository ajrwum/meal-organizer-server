var ae=Object.defineProperty,se=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var Z=(t,a,r)=>a in t?ae(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,q=(t,a)=>{for(var r in a||(a={}))oe.call(a,r)&&Z(t,r,a[r]);if(X)for(var r of X(a))re.call(a,r)&&Z(t,r,a[r]);return t},H=(t,a)=>se(t,ne(a));import{r as i,j as K,N as _,a as le,u as S,b as ie,O as ce,L as k,c as I,R as de,d as D,e as me,f as ue,B as he}from"./vendor.7a1b9b76.js";const pe=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))m(o);new MutationObserver(o=>{for(const h of o)if(h.type==="childList")for(const u of h.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&m(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const h={};return o.integrity&&(h.integrity=o.integrity),o.referrerpolicy&&(h.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?h.credentials="include":o.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function m(o){if(o.ep)return;o.ep=!0;const h=r(o);fetch(o.href,h)}};pe();const $=i.exports.createContext(),Q=()=>i.exports.useContext($);const e=K.exports.jsx,s=K.exports.jsxs,M=K.exports.Fragment,fe=()=>{const{isLoggedIn:t,currentUser:a,removeUser:r}=Q(),m=new Date;return s("nav",{className:"NavMain",children:[e(_,{className:"logo",to:"/",children:"MO"}),t&&s(M,{children:[s("div",{className:"navItems",children:[e(_,{className:"menu",to:"/profile",children:a&&a.email}),e(_,{className:"menu",to:`/meals/${m.toISOString()}`,children:"Mes repas"}),e(_,{className:"menu",to:"/foods",children:"Mes Aliments"})]}),e("div",{className:"navLogout",children:e("button",{onClick:r,children:"D\xE9connexion"})})]}),!t&&e(M,{children:s("div",{className:"navActions",children:[e(_,{to:"/signin",children:"Connexion"}),e(_,{to:"/signup",children:"Inscription"})]})})]})},ge="mobile",ve="desktop";function Y(){const[t,a]=i.exports.useState("");return i.exports.useEffect(()=>{let r=!1;if("maxTouchPoints"in navigator)r=navigator.maxTouchPoints>0;else if("msMaxTouchPoints"in navigator)r=navigator.msMaxTouchPoints>0;else{const o=window.matchMedia&&matchMedia("(pointer:coarse)");if(o&&o.media==="(pointer:coarse)")r=!!o.matches;else if("orientation"in window)r=!0;else{var m=navigator.userAgent;r=/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(m)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(m)}}a(r?ge:ve)}),t}var Ne="/assets/mo-0-semaine.326bdcf6.png",xe="/assets/mo-0-semaine-mobile.ded71e7b.png",ye="/assets/mo-1-categories-aliment.2a2bac9d.png",De="/assets/mo-2-liste-aliments.b4848a05.png";const be=()=>{const t=Y();return s("div",{className:"home-page",children:[e("h1",{children:"Adoptez M O !"}),s("div",{className:"home-block",children:[s("div",{className:"text",children:[e("p",{className:"mo",children:"\xAB Meal Organizer \xBB"}),e("p",{children:"Avec MO, planifiez vos repas des semaines \xE0 venir"})]}),e("div",{className:"img",children:t==="mobile"?e("img",{src:xe,alt:"Semaine planifi\xE9e de repas"}):e("img",{src:Ne,alt:"Semaine planifi\xE9e de repas"})})]}),s("div",{className:"home-block",children:[s("div",{className:"text",children:[e("p",{children:"Vous pouvez cr\xE9er les aliments de votre quotidien."}),e("p",{children:"Ils sont associ\xE9s \xE0 une cat\xE9gorie reconnaissable \xE0 sa couleur."})]}),s("div",{className:"img",children:[e("img",{className:"duo",src:ye,alt:"Cr\xE9ation d'alimment - Cat\xE9gories des aliments"}),e("img",{className:"duo",src:De,alt:"Cr\xE9ation d'alimment - Cat\xE9gories des aliments"})]})]}),s("div",{className:"home-block",children:[s("div",{className:"text",children:[e("p",{children:"Une fois vos aliments cr\xE9\xE9s, composez vos repas jour par jour."}),e("p",{children:"\xC0 chaque heure du jour son repas."}),e("p",{children:"MO s'adapte \xE0 votre rythme de vie."})]}),e("div",{className:"img"})]})]})},ee=t=>{const[a,r]=i.exports.useState(t);return[a,o=>{r(H(q({},a),{[o.target.name]:o.target.value}))}]},T=le.create({baseURL:"https://meal-organizer.herokuapp.com",withCredentials:!0});//! Error handling to use in the catch
function O(t){throw t.response.data&&console.log(t.response&&t.response.data),t}const v=H(q({},T),{signup(t){return T.post("/api/auth/signup",t).then(a=>a.data).catch(O)},isLoggedIn(){return T.get("/api/auth/is-loggedin").then(t=>t.data).catch(O)},signin(t){return T.post("/api/auth/signin",t).then(a=>a.data).catch(O)},signout(){return T.get("/api/auth/signout").then(t=>t.data).catch(O)}});const Ee=()=>{const[{email:t,password:a},r]=ee({email:"",password:""}),[m,o]=i.exports.useState(null),h=S(),{authenticateUser:u}=Q(),g=c=>{c.preventDefault();const f=new Date;v.signin({email:t,password:a}).then(N=>{u(()=>h(`/meals/${f.toISOString()}`))}).catch(N=>{o(N.response.data)})};return s(M,{children:[m&&e("h3",{className:"error",children:m.message}),s("form",{onSubmit:g,children:[e("h2",{className:"title",children:"Connexion"}),s("div",{className:"form-group",children:[e("label",{htmlFor:"email",children:"Email :"}),e("br",{}),e("input",{className:"form-control",type:"email",id:"email",name:"email",onChange:r,value:t})]}),s("div",{className:"form-group",children:[e("label",{htmlFor:"password",children:"Mot de passe :"}),e("br",{}),e("input",{className:"form-control",type:"password",id:"password",name:"password",onChange:r,value:a})]}),e("button",{className:"submit-btn",children:"Connexion"})]})]})},Ce=()=>e(Ee,{}),Se=()=>{const[t,a]=ee({name:"",email:"",password:""}),[r,m]=i.exports.useState(null),o=S(),h=u=>{u.preventDefault(),v.signup(t).then(()=>{o("/signin")}).catch(g=>{m(g.response.data)})};return s(M,{children:[r&&e("h3",{className:"error",children:r.message}),s("form",{onSubmit:h,children:[e("h2",{className:"title",children:"S'inscrire"}),s("div",{className:"form-group",children:[e("label",{htmlFor:"name",children:"Nom :"}),e("br",{}),e("input",{className:"form-control",onChange:a,value:t.name,type:"text",id:"name",name:"name"})]}),s("div",{className:"form-group",children:[e("label",{htmlFor:"email",children:"Email :"}),e("br",{}),e("input",{className:"form-control",onChange:a,value:t.email,type:"email",id:"email",name:"email"})]}),s("div",{className:"form-group",children:[e("label",{htmlFor:"password",children:"Mot de passe :"}),e("br",{}),e("input",{className:"form-control",onChange:a,value:t.password,type:"password",id:"password",name:"password"})]}),e("button",{className:"submit-btn",children:"S'inscrire"})]})]})},we=()=>e(Se,{}),_e=()=>e("div",{children:e("p",{children:"This is a protected profile"})}),ke=()=>{const{isLoggedIn:t,isLoading:a}=Q();return a?e("p",{children:"Loading..."}):t?e(ce,{}):e(ie,{to:"/signin"})},Le=({food:t,viewClbk:a,editClbk:r,deleteClbk:m})=>{var o;return s("div",{className:"box",children:[s("div",{className:"left-items",children:[e("div",{className:"catColor",style:{backgroundColor:(o=t.category)==null?void 0:o.color}}),e("span",{className:"food",children:t.name})]}),s("div",{className:"actionBtn",children:[e("span",{children:e(k,{to:`/foods/food/view/${t._id}`,children:e("i",{className:"fa-solid fa-eye"})})}),e("span",{children:e(k,{to:`/foods/food/edit/${t._id}`,children:e("i",{className:"fa-solid fa-pencil"})})}),e("span",{children:e("i",{id:t._id,className:"fa-solid fa-trash-can",onClick:m})})]})]},t._id)};const Fe=()=>{const[t,a]=i.exports.useState([]),[r,m]=i.exports.useState(null),[o,h]=i.exports.useState(!1);i.exports.useEffect(()=>{v.get("/foods").then(({data:c})=>{a(c)})},[o]),i.exports.useEffect(()=>{v.get("/foods/categories").then(c=>{console.log("response :>> ",c),m(c.data)})},[]);const u=c=>{v.delete(`/foods/food/${c.target.id}`).then(f=>{a(t.filter(N=>N._id!==c.target.id))})},g=c=>{console.log("filtering... :>> "),c.preventDefault(),v.get(`/foods/${c.target.id}`).then(f=>{console.log("***response*** :>> ",f),a(f.data)})};return s("div",{className:"container",children:[s("div",{className:"foodTitle",children:[e("h2",{children:"Tous mes Aliments "}),e("span",{className:"addFood",children:e(k,{to:"/foods/food/new",children:e("i",{className:"fa-solid fa-plus"})})})]}),s("div",{className:"filters",children:[e("button",{className:"allFoodBtn",onClick:()=>h(!o),children:"Tous"}),r&&r.map(c=>e("button",{id:c._id,className:"filterBtn",style:{backgroundColor:c.color},onClick:g,children:c.name},c._id))]}),t&&t.map(c=>e(Le,{food:c,viewClbk:!0,editClbk:!0,deleteClbk:u},c._id))]})},Ie=()=>{var g,c;const[t,a]=i.exports.useState({}),[r,m]=i.exports.useState([]),{id:o}=I(),h=S();i.exports.useEffect(()=>{v.get(`/foods/food/${o}`).then(f=>{console.log("***response*** :>> ",f),a(f.data)}).catch(f=>console.error(f))},[]);const u=f=>{v.delete(`/foods/food/${f.target.id}`).then(N=>{m(r.filter(d=>d._id!==f.target.id)),h("/foods")})};return e(M,{children:s("div",{className:"container",children:[s("div",{className:"nameWrapper",children:[e("div",{className:"nameLeft",children:e("h2",{className:"foodName",children:t==null?void 0:t.name})}),s("div",{className:"actionsBtn",children:[e(k,{to:`/foods/food/edit/${o}`,children:e("i",{className:"fa-solid fa-pencil"})}),e("i",{id:o,className:"fa-solid fa-trash-can",onClick:u})]})]}),s("div",{className:"categoryWrapper",children:[s("div",{className:"categoryLeft",children:[e("p",{children:e("b",{children:"Cat\xE9gorie : "})}),e("span",{children:(g=t.category)==null?void 0:g.name})]}),e("div",{className:"catColor",style:{backgroundColor:(c=t.category)==null?void 0:c.color}})]}),s("div",{className:"descriptionWrapper",children:[e("p",{children:e("b",{children:"Description :"})}),e("p",{children:t.description})]}),e("div",{className:"return",children:e(_,{to:"/foods",className:"submit-btn",children:"Retour"})})]})})},Me=({action:t})=>{const[a,r]=i.exports.useState(""),[m,o]=i.exports.useState(null),[h,u]=i.exports.useState(""),[g,c]=i.exports.useState([]),f=S();return i.exports.useEffect(()=>{v.get("/foods/categories").then(d=>{console.log("response :>> ",d),c(d.data)})},[]),s("div",{children:[e("h2",{className:"title",children:"Cr\xE9er un Aliment"}),s("form",{className:"form",onSubmit:d=>{d.preventDefault();const y={name:a,category:m,description:h};v.post("/foods/food",y).then(x=>{console.log("response :>> ",x),f("/foods")}).catch(x=>console.error(x))},children:[s("div",{className:"form-group",children:[e("label",{htmlFor:"name",children:"Nom :"}),e("br",{}),e("input",{className:"form-control",type:"text",name:"name",id:"name",value:a,onChange:d=>r(d.target.value)})]}),s("div",{className:"form-group",children:[e("label",{htmlFor:"category",children:"Cat\xE9gorie :"}),e("br",{}),s("select",{className:"form-control",name:"category",id:"category",onChange:d=>o(d.target.value),children:[e("option",{value:"-1",disabled:!0,selected:!0,children:"Selectionnez une cat\xE9gorie"}),g&&g.map(d=>e("option",{value:d._id,children:d.name},d._id))]})]}),s("div",{className:"form-group",children:[e("label",{htmlFor:"description",children:"Description :"}),e("br",{}),e("textarea",{className:"form-control",name:"description",id:"description",value:h,onChange:d=>u(d.target.value),cols:"70",rows:"5"})]}),e("button",{className:"submit-btn",children:"Cr\xE9er"})]})]})},Te=()=>{const[t,a]=i.exports.useState(""),[r,m]=i.exports.useState(""),[o,h]=i.exports.useState(""),[u,g]=i.exports.useState([]),{id:c}=I(),f=S();i.exports.useEffect(()=>{v.get("/foods/categories").then(d=>{console.log("response :>> ",d),g(d.data)})},[]),i.exports.useEffect(()=>{v.get(`/foods/food/${c}`).then(d=>{console.log("response :>>",d.data),a(d.data.name),m(d.data.category._id),h(d.data.description)})},[]);const N=d=>{d.preventDefault();const y={name:t,category:r,description:o};v.patch(`/foods/food/${c}`,y).then(x=>{console.log("response :>> ",x),f("/foods")}).catch(x=>console.error(x))};return s("form",{children:[e("h2",{children:"Editer l'aliment"}),s("div",{className:"form-group",children:[e("label",{htmlFor:"name",children:"Nom :"}),e("br",{}),e("input",{type:"text",name:"name",id:"name",className:"form-control",value:t,onChange:d=>a(d.target.value)})]}),s("div",{className:"form-group",children:[e("label",{htmlFor:"name",children:"Cat\xE9gorie :"}),e("br",{}),e("select",{name:"category",id:"category",value:r,onChange:d=>m(d.target.value),children:u&&u.map(d=>e("option",{value:d._id,children:d.name},d._id))})]}),s("div",{className:"form-group",children:[e("label",{htmlFor:"name",children:"Description :"}),e("br",{}),e("textarea",{className:"form-control",name:"description",id:"description",value:o,onChange:d=>h(d.target.value),cols:"70",rows:"5"})]}),e("button",{className:"submit-btn",onClick:N,children:"Mettre \xE0 jour"})]})},G=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function $e(t){const a=t.toISOString().slice(0,10);return new Date(a)}function Oe(t){const a=t.slice(0,10);return new Date(a)}function A(t){let a;if(typeof t=="string")a=Oe(t);else if(t instanceof Date)a=$e(t);else return-1;const r=a.getDay(),m=(G.indexOf("Monday")-r-G.length)%G.length;let o=new Date(a);return o.setDate(a.getDate()+m),o}function Ae(t){const a=[],r=A(t);a.push(r);for(let m=1;m<7;m++){let o=new Date(r);o.setDate(r.getDate()+m),a.push(o)}return a}function Be(t){const a=A(t),r={previous:null,next:null};let m=new Date(a);m.setDate(a.getDate()-7),r.previous=m;let o=new Date(a);return o.setDate(a.getDate()+7),r.next=o,r}const je=({dayDate:t,meals:a,deleteClbk:r})=>{const m=S(),o=t.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}),h=u=>{const g=u.target.id;m(`/meals/meal/new/${g}`)};return s("div",{className:"day-container",children:[s("div",{className:"day-title",children:[e("h4",{children:o}),e("i",{id:t.toISOString(),className:"fa-solid fa-plus",onClick:h})]}),e("div",{className:"day-meals",children:a&&a.map((u,g)=>e("div",{children:s("div",{className:"meal-card",children:[s("div",{className:"meal-card-title",children:[e("div",{children:u.type.name}),s("div",{className:"meal-card-btn actionBtn",children:[e("span",{children:e(k,{to:`/meals/meal/edit/${u._id}`,children:e("i",{className:"fa-solid fa-pencil"})})}),e("span",{children:e("i",{id:u._id,className:"fa-solid fa-trash-can",onClick:r})})]})]}),u.foods&&u.foods.map((c,f)=>{var N;return s("div",{className:"food-info",children:[e("div",{className:"catColor",style:{backgroundColor:(N=c.category)==null?void 0:N.color}}),e("span",{className:"meal-food",children:c.name})]},`${c._id}_${g}_${f}`)})]},u._id)},u._id))})]})},te=()=>{let t;const a=I();if(a==null?void 0:a.date)t=A(a.date);else{const N=new Date;t=A(N)}const r=Be(t),m=Ae(t),o=t.toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),[h,u]=i.exports.useState([]),[g,c]=i.exports.useState(!1);i.exports.useEffect(()=>{v.get(`/meals/${t.toISOString()}`).then(({data:N})=>{N.forEach(d=>d.sort((y,x)=>y.type.position-x.type.position)),u(N)})},[a.date,g]);const f=N=>{const d=N.target.id;v.delete(`/meals/meal/${d}`).then(y=>{u(h.filter(x=>x._id!==d)),c(!g)})};return s("div",{className:"meals-display",children:[s("h2",{children:["Semaine du ",o]}),s("div",{className:"meal-week-nav",children:[e(k,{className:"actionBtn",to:`/meals/${r.previous.toISOString()}`,children:"Semaine pr\xE9c\xE9dente"}),e(k,{className:"actionBtn",to:`/meals/${r.next.toISOString()}`,children:"Semaine suivante"})]}),e("div",{className:"meal-week",children:h&&m.map((N,d)=>e(je,{dayDate:N,meals:h[d],deleteClbk:f},d))})]})};const Ue=()=>{const{mealDate:t}=I(),a=Y(),[r,m]=i.exports.useState([]),[o,h]=i.exports.useState([]),[u,g]=i.exports.useState(""),[c,f]=i.exports.useState([]),[N,d]=i.exports.useState(new Date(t.slice(0,10))),[y,x]=i.exports.useState([]),[E,C]=i.exports.useState(null),L=S(),w=i.exports.useContext($),{currentUser:B}=w,j=N.toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"});i.exports.useEffect(()=>{v.get("/meals/mealtypes").then(({data:l})=>{m(l)})},[]),i.exports.useEffect(()=>{v.get("/foods").then(({data:l})=>{h(l)})},[c,y]);const U=l=>{l.dataTransfer.setData("id",l.target.id),l.dataTransfer.effectAllowed="copy"},P=l=>(l.preventDefault&&l.preventDefault(),l.dataTransfer.dropEffect="copy",!1),R=l=>{C(null),l.target.parentElement.classList.toggle("over"),l.preventDefault(),l.stopPropagation(),l.dataTransfer.dropEffect="copy";const n=l.dataTransfer.getData("id");return l.dataTransfer.dropEffect="copy",c.includes(n)?C({type:"warning",text:"Cet aliment a d\xE9j\xE0 \xE9t\xE9 ajout\xE9"}):(f([...c,n]),v.get(`/foods/food/${n}`).then(({data:p})=>{x([...y,p])})),!1},z=l=>{l.preventDefault(),C(null);const n=l.target.id;return c.includes(n)?C({type:"warning",text:"Cet aliment a d\xE9j\xE0 \xE9t\xE9 ajout\xE9"}):(f([...c,n]),v.get(`/foods/food/${n}`).then(({data:p})=>{x([...y,p])})),!1},W=l=>{l.preventDefault();const n=l.target.parentElement.id.split("_")[1],p=c.filter(F=>F!=n);f(p);const b=y.filter(F=>F._id!=n);x(b)};return s("form",{className:"meal-form create",onSubmit:l=>{l.preventDefault();const n={type:u,foods:c,user:B.currentUser._id,date:N};v.post("/meals/meal",n).then(p=>{L(`/meals/${t}`)}).catch(p=>{console.error(p),C({type:"error",text:"Erreur, veuillez v\xE9rifier le repas et r\xE9essayer."})})},children:[e("h2",{children:"Cr\xE9ation de repas"}),E&&e("div",{className:`msg ${E.type}`,children:e("span",{children:E.text})}),s("div",{className:"form-content-div",children:[s("div",{className:"meal-date",children:[e("label",{htmlFor:"date",children:"Date : "}),e("span",{children:j})]}),s("div",{className:a==="mobile"?"meal-type mobile":"meal-type",children:[e("label",{htmlFor:"type",children:"Type de repas : "}),e("select",{name:"type",id:"type",value:u,onChange:l=>g(l.target.value),children:r&&r.map(l=>s("option",{value:l._id,children:[l.name," - ",l.timeslot]},l._id))})]}),s("div",{className:"dnd-action-div",children:[s("div",{className:"meal-drag-div",children:[e("h3",{children:"Tous les aliments :"}),e("div",{className:"ref-food-list",children:a==="mobile"?o&&o.map(l=>{var n;return s("div",{value:l._id,className:"draggable-food meal-food mobile",children:[s("div",{className:"food-info",children:[e("div",{className:"catColor",style:{backgroundColor:(n=l.category)==null?void 0:n.color}}),e("span",{className:"food-name",children:l.name})]}),e("button",{id:l._id,className:"actionBtn",onClick:z,children:"Ajouter"})]},l._id)}):o&&o.map(l=>{var n;return s("div",{id:l._id,value:l._id,className:"draggable-food meal-food",draggable:"true",onDragStart:U,children:[e("div",{className:"catColor",style:{backgroundColor:(n=l.category)==null?void 0:n.color}}),e("span",{className:"food-name",children:l.name})]},l._id)})})]}),s("div",{className:"meal-drop-div",children:[s("div",{children:[e("label",{htmlFor:"foods",children:"Aliments du repas : "}),s("div",{name:"foods",id:"foods",value:c,className:"drop-zone",droppable:"true",onDragEnter:l=>l.target.parentElement.classList.toggle("over"),onDragLeave:l=>l.target.parentElement.classList.toggle("over"),onDragOver:P,onDrop:R,children:[e("div",{id:"drop-target1",children:s("span",{children:["D\xE9poser ici les aliments souhait\xE9s depuis la liste"," ",a==="mobile"?"ci-dessous":"ci-contre"," :"]})},"-1"),y&&y.map(l=>{var n;return s("div",{id:`added_${l._id}`,value:l._id,className:"added-food meal-food",children:[s("div",{className:"food-info",children:[e("div",{className:"catColor",style:{backgroundColor:(n=l.category)==null?void 0:n.color}}),e("span",{className:"food-name",children:l.name})]}),e("button",{className:"actionBtn",onClick:W,children:"Retirer"})]},`added_${l._id}`)})]})]}),e("button",{className:"submit-btn",children:"Ok"})]})]})]})]})},Pe=()=>{const{mealId:t}=I(),a=Y(),[r,m]=i.exports.useState([]),[o,h]=i.exports.useState([]),[u,g]=i.exports.useState(""),[c,f]=i.exports.useState([]),[N,d]=i.exports.useState(null),[y,x]=i.exports.useState(""),[E,C]=i.exports.useState([]),[L,w]=i.exports.useState(null),B=S(),j=i.exports.useContext($),{currentUser:U}=j;new Date(y).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),i.exports.useEffect(()=>{v.get(`/meals/meal/${t}`).then(({data:n})=>{g(n.type._id),d(new Date(n.date.slice(0,10))),x(n.date.slice(0,10));const p=n.foods?n.foods.map(b=>b._id):[];f(p),C(n.foods)})},[]),i.exports.useEffect(()=>{v.get("/meals/mealtypes").then(({data:n})=>{m(n)})},[]),i.exports.useEffect(()=>{v.get("/foods").then(({data:n})=>{h(n)})},[c,E]);const P=n=>{n.dataTransfer.setData("id",n.target.id),n.dataTransfer.effectAllowed="copy"},R=n=>(n.preventDefault&&n.preventDefault(),n.dataTransfer.dropEffect="copy",!1),z=n=>{w(null),n.target.parentElement.classList.toggle("over"),n.preventDefault(),n.stopPropagation(),n.dataTransfer.dropEffect="copy";const p=n.dataTransfer.getData("id");return n.dataTransfer.dropEffect="copy",c.includes(p)?w({type:"warning",text:"Cet aliment a d\xE9j\xE0 \xE9t\xE9 ajout\xE9"}):(f([...c,p]),v.get(`/foods/food/${p}`).then(({data:b})=>{C([...E,b])})),!1},W=n=>{n.preventDefault(),w(null);const p=n.target.id;return c.includes(p)?w({type:"warning",text:"Cet aliment a d\xE9j\xE0 \xE9t\xE9 ajout\xE9"}):(f([...c,p]),v.get(`/foods/food/${p}`).then(({data:b})=>{C([...E,b])})),!1},J=n=>{n.preventDefault();const p=n.target.parentElement.id.split("_")[1],b=c.filter(V=>V!=p);f(b);const F=E.filter(V=>V._id!=p);C(F)};return s("form",{className:"meal-form edit",onSubmit:n=>{n.preventDefault();const p={type:u,foods:c,user:U.currentUser._id,date:new Date(y)};v.patch(`/meals/meal/${t}`,p).then(b=>{B(`/meals/${new Date(N).toISOString()}`)}).catch(b=>{console.error(b),w({type:"error",text:"Erreur, veuillez v\xE9rifier le repas et r\xE9essayer."})})},children:[e("h2",{children:"Modification de repas"}),L&&e("div",{className:`msg ${L.type}`,children:e("span",{children:L.text})}),s("div",{className:"form-content-div",children:[s("div",{className:"meal-date",children:[e("label",{htmlFor:"date",children:"Date : "}),e("input",{type:"date",name:"date",id:"date",value:y,onChange:n=>x(n.target.value)})]}),s("div",{className:a==="mobile"?"meal-type mobile":"meal-type",children:[e("label",{htmlFor:"type",children:"Type de repas : "}),e("select",{name:"type",id:"type",value:u,onChange:n=>g(n.target.value),children:r&&r.map(n=>s("option",{value:n._id,children:[n.name," - ",n.timeslot]},n._id))})]}),s("div",{className:"dnd-action-div",children:[s("div",{className:"meal-drag-div",children:[e("h3",{children:"Tous les aliments :"}),e("div",{className:"ref-food-list",children:a==="mobile"?o&&o.map(n=>{var p;return s("div",{value:n._id,className:"draggable-food meal-food mobile",draggable:"true",children:[s("div",{className:"food-info",children:[e("div",{className:"catColor",style:{backgroundColor:(p=n.category)==null?void 0:p.color}}),e("span",{className:"food-name",children:n.name})]}),e("button",{id:n._id,className:"actionBtn",onClick:W,children:"Ajouter"})]},n._id)}):o&&o.map(n=>{var p;return s("div",{id:n._id,value:n._id,className:"draggable-food meal-food",draggable:"true",onDragStart:P,children:[e("div",{className:"catColor",style:{backgroundColor:(p=n.category)==null?void 0:p.color}}),e("span",{className:"food-name",children:n.name})]},n._id)})})]}),s("div",{className:"meal-drop-div",children:[s("div",{children:[e("label",{htmlFor:"foods",children:"Aliments du repas : "}),s("div",{name:"foods",id:"foods",value:c,className:"drop-zone",droppable:"true",onDragEnter:n=>n.target.parentElement.classList.toggle("over"),onDragLeave:n=>n.target.parentElement.classList.toggle("over"),onDragOver:R,onDrop:z,children:[e("div",{id:"drop-target1",children:s("span",{children:["D\xE9poser ici les aliments souhait\xE9s depuis la liste"," ",a==="mobile"?"ci-dessous":"ci-contre"," :"]})},"-1"),E&&E.map(n=>{var p;return s("div",{id:`added_${n._id}`,value:n._id,className:"added-food meal-food",children:[s("div",{className:"food-info",children:[e("div",{className:"catColor",style:{backgroundColor:(p=n.category)==null?void 0:p.color}}),e("span",{className:"food-name",children:n.name})]}),e("button",{className:"actionBtn",onClick:J,children:"Retirer"})]},`added_${n._id}`)})]})]}),e("button",{className:"submit-btn",children:"Ok"})]})]})]})]})};function Re(){return s("div",{className:"App",children:[e(fe,{}),s(de,{children:[e(D,{path:"/",element:e(be,{})}),e(D,{path:"/signin",element:e(Ce,{})}),e(D,{path:"/signup",element:e(we,{})}),s(D,{element:e(ke,{}),children:[e(D,{path:"/meals",element:e(te,{})}),e(D,{path:"/meals/:date",element:e(te,{})}),e(D,{path:"/meals/meal/new/:mealDate",element:e(Ue,{})}),e(D,{path:"/meals/meal/edit/:mealId",element:e(Pe,{})}),e(D,{path:"/foods",element:e(Fe,{})}),e(D,{path:"/foods/food/view/:id",element:e(Ie,{})}),e(D,{path:"/foods/food/new",element:e(Me,{})}),e(D,{path:"/foods/food/edit/:id",element:e(Te,{})}),e(D,{path:"/profile",element:e(_e,{})})]})]})]})}const ze=({children:t})=>{const[a,r]=i.exports.useState({currentUser:null,isLoading:!0,isLoggedIn:!1});i.exports.useEffect(()=>{m()},[]);const m=u=>{v.isLoggedIn().then(g=>{r({currentUser:g,isLoading:!1,isLoggedIn:!0}),u&&typeof u=="function"&&u()}).catch(g=>{console.error(g),r({currentUser:null,isLoading:!1,isLoggedIn:!1})})},o=()=>{v.signout().finally(()=>r({currentUser:null,isLoading:!1,isLoggedIn:!1}))},h={currentUser:a.currentUser,isLoading:a.isLoading,isLoggedIn:a.isLoggedIn,removeUser:o,authenticateUser:m};return e($.Provider,{value:h,children:t})};me.render(e(ue.StrictMode,{children:e(he,{children:e(ze,{children:e(Re,{})})})}),document.getElementById("root"));