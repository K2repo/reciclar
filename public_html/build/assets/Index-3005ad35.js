import{W as d,j as r,a as s,b as l}from"./app-0ed7a3ee.js";import{A as p}from"./AuthenticatedLayout-db69ae8a.js";import{I as g}from"./InputError-ebed38d5.js";import{P as f}from"./PrimaryButton-4728db53.js";import"./ApplicationLogo-47d074b3.js";import"./Dropdown-93122a3c.js";import"./transition-022df018.js";function w({auth:a}){const{data:o,setData:t,post:i,processing:m,reset:n,errors:c}=d({message:""}),u=e=>{e.preventDefault(),i(route("chirps.store"),{onSuccess:()=>n()})};return r(p,{user:a.user,children:[s(l,{title:"Chirps"}),s("div",{className:"max-w-2xl mx-auto p-4 sm:p-6 lg:p-8",children:r("form",{onSubmit:u,children:[s("textarea",{value:o.message,placeholder:"What's on your mind?",className:"block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",onChange:e=>t("message",e.target.value)}),s(g,{message:c.message,className:"mt-2"}),s(f,{className:"mt-4",disabled:m,children:"Chirp"})]})})]})}export{w as default};