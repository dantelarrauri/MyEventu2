import{T as n,o as d,c as l,w as t,a,u as o,Z as c,b as e,d as p,n as u,e as f}from"./app-38f2c534.js";import{_}from"./GuestLayout-79715010.js";import{_ as w,a as b}from"./InputLabel-3a9c24a5.js";import{P as x}from"./PrimaryButton-e51ddc93.js";import{_ as g}from"./TextInput-213f1a5e.js";import"./ApplicationLogo-51028e35.js";import"./_plugin-vue_export-helper-c27b6911.js";const h=e("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),y=["onSubmit"],P={class:"flex justify-end mt-4"},j={__name:"ConfirmPassword",setup(V){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(v,r)=>(d(),l(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),h,e("form",{onSubmit:f(i,["prevent"])},[e("div",null,[a(w,{for:"password",value:"Password"}),a(g,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=m=>o(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(b,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",P,[a(x,{class:u(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[p(" Confirm ")]),_:1},8,["class","disabled"])])],40,y)]),_:1}))}};export{j as default};
