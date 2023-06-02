import{a as e,W as f,r as g,j as r,b as h,d as b}from"./app-0ed7a3ee.js";import{G as x}from"./GuestLayout-50bc5d80.js";import{I as l}from"./InputError-ebed38d5.js";import{I as n}from"./InputLabel-58a52228.js";import{P as w}from"./PrimaryButton-4728db53.js";import{T as d}from"./TextInput-2fdba6b3.js";import"./ApplicationLogo-47d074b3.js";function v({className:a="",...t}){return e("input",{...t,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+a})}function L({status:a,canResetPassword:t}){const{data:m,setData:o,post:c,processing:u,errors:i,reset:p}=f({email:"",password:"",remember:!1});return g.useEffect(()=>()=>{p("password")},[]),r(x,{children:[e(h,{title:"Log in"}),a&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:a}),r("form",{onSubmit:s=>{s.preventDefault(),c(route("login"))},children:[r("div",{children:[e(n,{htmlFor:"email",value:"Email"}),e(d,{id:"email",type:"email",name:"email",value:m.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>o("email",s.target.value)}),e(l,{message:i.email,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(n,{htmlFor:"password",value:"Password"}),e(d,{id:"password",type:"password",name:"password",value:m.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>o("password",s.target.value)}),e(l,{message:i.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:r("label",{className:"flex items-center",children:[e(v,{name:"remember",checked:m.remember,onChange:s=>o("remember",s.target.checked)}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),r("div",{className:"flex items-center justify-end mt-4",children:[t&&e(b,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e(w,{className:"ml-4",disabled:u,children:"Log in"})]})]})]})}export{L as default};
