import{W as n,j as t,a as e,b as d}from"./app-0ed7a3ee.js";import{G as u}from"./GuestLayout-50bc5d80.js";import{I as c}from"./InputError-ebed38d5.js";import{P as p}from"./PrimaryButton-4728db53.js";import{T as f}from"./TextInput-2fdba6b3.js";import"./ApplicationLogo-47d074b3.js";function v({status:s}){const{data:o,setData:r,post:m,processing:i,errors:l}=n({email:""});return t(u,{children:[e(d,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),s&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:s}),t("form",{onSubmit:a=>{a.preventDefault(),m(route("password.email"))},children:[e(f,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",isFocused:!0,onChange:a=>r("email",a.target.value)}),e(c,{message:l.email,className:"mt-2"}),e("div",{className:"flex items-center justify-end mt-4",children:e(p,{className:"ml-4",disabled:i,children:"Email Password Reset Link"})})]})]})}export{v as default};