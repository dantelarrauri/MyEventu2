import{h as b,i as y,v as w,o as d,f as k,T as v,c as u,w as m,a,u as s,Z as x,t as V,g as c,b as r,j as B,d as p,n as C,e as $}from"./app-38f2c534.js";import{_ as P}from"./GuestLayout-79715010.js";import{_ as f,a as g}from"./InputLabel-3a9c24a5.js";import{P as q}from"./PrimaryButton-e51ddc93.js";import{_}from"./TextInput-213f1a5e.js";import"./ApplicationLogo-51028e35.js";import"./_plugin-vue_export-helper-c27b6911.js";const N=["value"],S={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const i=l,n=b({get(){return i.checked},set(t){e("update:checked",t)}});return(t,o)=>y((d(),k("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":o[0]||(o[0]=h=>n.value=h),class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"},null,8,N)),[[w,n.value]])}},U={key:0,class:"mb-4 font-medium text-sm text-green-600"},R=["onSubmit"],j={class:"mt-4"},D={class:"block mt-4"},E={class:"flex items-center"},I=r("span",{class:"ml-2 text-sm text-gray-600"},"Recuerdame",-1),M={class:"flex items-center justify-end mt-4"},G={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(l){const e=v({email:"",password:"",remember:!1}),i=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(n,t)=>(d(),u(P,null,{default:m(()=>[a(s(x),{title:"Ingresar"}),l.status?(d(),k("div",U,V(l.status),1)):c("",!0),r("form",{onSubmit:$(i,["prevent"])},[r("div",null,[a(f,{for:"email",value:"Email"}),a(_,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":t[0]||(t[0]=o=>s(e).email=o),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(g,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",j,[a(f,{for:"password",value:"Password"}),a(_,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=o=>s(e).password=o),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(g,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",D,[r("label",E,[a(S,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=o=>s(e).remember=o)},null,8,["checked"]),I])]),r("div",M,[l.canResetPassword?(d(),u(s(B),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:m(()=>[p(" Olvidaste tu contraseña? ")]),_:1},8,["href"])):c("",!0),a(q,{class:C(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[p(" Ingresar ")]),_:1},8,["class","disabled"])])],40,R)]),_:1}))}};export{G as default};
