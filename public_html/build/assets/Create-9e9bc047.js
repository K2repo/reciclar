import{W as s,a as e,j as l}from"./app-0ed7a3ee.js";/* empty css                */import{$ as c}from"./select2-d6f25bc2.js";import{I as r}from"./AuthenticatedLayoutK2D-ac2737a9.js";/* empty css                     */function k(d){const{data:o,setData:i,post:n,processing:h,errors:p,reset:t}=s({nombre:"",apellido:"",tipo_documento:"CC",numero_documento:"",email:"",password:"",telefono:"",direccion_residencia:"",direccion_residencia_2:"",cod_ciudad:""}),m=a=>{a.preventDefault(),n(route("clientes.store"),{onSuccess:()=>t()})};return c(document).ready(function(){c("#selectRol").select2()}),e(r,{children:l("div",{className:"bg-ruta-interior sizem",children:[e("h1",{className:"heading-47",children:"Nuevo Cliente"}),e("div",{children:l("div",{className:"w-form",children:[l("form",{onSubmit:m,children:[e("div",{className:"div-block-591",children:e("img",{src:"/images/subir-imagen.png",loading:"lazy",alt:!0})}),l("div",{className:"div-block-554",children:[l("div",{className:"div-block-551",children:[l("div",{className:"div-block-552",children:[e("label",{htmlFor:"name-4",className:"field-label-13 labelsize d n-r l",children:"Nombres:"}),e("input",{type:"text",className:"campo-rutas w-input",maxLength:256,name:"name-2","data-name":"Name 2",placeholder:"Nombre*",id:"name-2",required:!0,onChange:a=>i("nombre",a.target.value)})]}),l("div",{className:"div-block-552",children:[e("label",{htmlFor:"field-4",className:"field-label-13 t-s-c t",children:"Apellidos:"}),e("input",{type:"text",className:"campo-rutas w-input",maxLength:256,name:"field","data-name":"",placeholder:"Apellido*",id:"field-4",required:!0,onChange:a=>i("apellido",a.target.value)})]})]}),l("div",{className:"div-block-551",children:[l("div",{className:"div-block-552",children:[e("label",{htmlFor:"name-2",className:"field-label-13 space",children:"Tipo Identificación:"}),l("select",{id:"field-3",name:"field-3","data-name":"Field 3",className:"select-c campo-rutas w-select",onChange:a=>i("tipo_documento",a.target.value),children:[e("option",{value:"CC",children:"Cedula de ciudadania"}),e("option",{value:"TI",children:"Tarjeta de Identificación"}),e("option",{value:"PS",children:"Pasaporte"}),e("option",{value:"NIT",children:"NIT"})]})]}),l("div",{className:"div-block-552",children:[e("label",{htmlFor:"name-2",className:"field-label-13 t-s-c",children:e("strong",{children:"No. de Identificación o NIT:"})}),e("input",{type:"text",className:"campo-rutas w-input",maxLength:256,name:"name-2","data-name":"Name 2",placeholder:"Número de Id*",id:"name-2",required:!0,onChange:a=>i("numero_documento",a.target.value)})]})]}),l("div",{className:"div-block-551",children:[l("div",{className:"div-block-552",children:[e("label",{htmlFor:"field-3",className:"field-label-13 t-s-c t",children:"Rol:"}),e("select",{id:"selectRol",name:"field-3","data-name":"Field 3",className:"select-c campo-rutas w-select",children:d.roles.map((a,u)=>e("option",{value:a.id,children:a.nombre}))})]}),l("div",{className:"div-block-552",children:[e("label",{htmlFor:"name-2",className:"field-label-13 hide space",children:"Código de Usuario:"}),e("input",{type:"text",className:"campo-rutas w-input",maxLength:256,name:"name-2","data-name":"Name 2",placeholder:"Código*",id:"name-2",onChange:a=>i("",a.target.value)})]})]})]}),l("div",{className:"div-block-554 quitar-lin",children:[l("div",{className:"div-block-551",children:[l("div",{className:"div-block-552",children:[e("label",{htmlFor:"name-5",className:"field-label-13 labelsize d n-r",children:"Teléfono:"}),e("input",{type:"text",className:"campo-rutas w-input",maxLength:256,name:"name-2","data-name":"Name 2",placeholder:"000 0000000",id:"name-2",onChange:a=>i("telefono",a.target.value)})]}),l("div",{className:"div-block-552",children:[e("label",{htmlFor:"name-2",className:"field-label-13 t-s-c",children:e("strong",{children:"Correo electrónico:"})}),e("input",{type:"text",className:"campo-rutas w-input",maxLength:256,name:"name-2","data-name":"Name 2",placeholder:"correo@corre.com",id:"name-2",required:!0,onChange:a=>i("email",a.target.value)})]})]}),l("div",{className:"div-block-551",children:[l("div",{className:"div-block-552",children:[e("label",{htmlFor:"field-3",className:"field-label-13 t-s-c s",children:"Departamento:"}),e("select",{id:"field-3",name:"field-3","data-name":"Field 3",className:"select-c campo-rutas w-select",children:e("option",{value:"Departamento*",children:"Departamento*"})})]}),l("div",{className:"div-block-552",children:[e("label",{htmlFor:"name-2",className:"field-label-13 hide space",children:"Contraseña:"}),e("input",{type:"text",className:"campo-rutas w-input",maxLength:256,name:"name-2","data-name":"Name 2",placeholder:"***********",id:"name-2",onChange:a=>i("",a.target.value)})]})]}),l("div",{className:"div-block-551",children:[l("div",{className:"div-block-552",children:[e("label",{htmlFor:"field-3",className:"field-label-13 t-s-c s",children:"Ciudad:"}),e("select",{id:"field-3",name:"cod_ciudad","data-name":"Field 3",className:"select-c campo-rutas w-select",onChange:a=>i("cod_ciudad",a.target.value),children:e("option",{value:"Ciudad*",children:"Ciudad*"})})]}),e("div",{className:"div-block-552",children:e("label",{htmlFor:"name-5",className:"field-label-13 hide",children:"Ejemplo Campo:"})})]})]}),l("div",{className:"div-block-554 remove-line",children:[l("div",{className:"div-block-551",children:[l("div",{className:"div-block-552",children:[e("label",{htmlFor:"name-5",className:"field-label-13 labelsize d n-r",children:"Dirección:"}),e("input",{type:"text",className:"campo-rutas w-input",maxLength:256,name:"name-2","data-name":"Name 2",placeholder:"Dirección*",id:"name-2",onChange:a=>i("direccion_residencia",a.target.value)})]}),l("div",{className:"div-block-552",children:[e("label",{htmlFor:"name-2",className:"field-label-13 t-s-c",children:e("strong",{children:"Dirección 2:"})}),e("input",{type:"text",className:"campo-rutas w-input",maxLength:256,name:"name-2","data-name":"Name 2",placeholder:"Dirección*",id:"name-2",onChange:a=>i("direccion_residencia_2",a.target.value)})]})]}),l("div",{className:"div-block-551",children:[l("div",{className:"div-block-552",children:[e("label",{htmlFor:"name-3",className:"field-label-13 t-s-c s",children:"Dirección 3:"}),e("input",{type:"text",className:"campo-rutas w-input",maxLength:256,name:"name-3","data-name":"Name 3",placeholder:"Dirección*",id:"name-3",onChange:a=>i("",a.target.value)})]}),e("div",{className:"div-block-552",children:e("input",{type:"text",className:"campo-rutas hide w-input",maxLength:256,name:"name-2","data-name":"Name 2",placeholder:"Precio*",id:"name-2",onChange:a=>i("",a.target.value)})})]}),e("div",{className:"div-block-551",children:e("div",{className:"div-block-552",children:e("label",{htmlFor:"name-5",className:"field-label-13 hide",children:"Ejemplo Campo:"})})})]}),e("div",{className:"div-block-554 remove",children:l("div",{className:"div-block-551",children:[l("div",{className:"div-block-552",children:[e("label",{htmlFor:"name-5",className:"field-label-13 labelsize d n-r",children:"Ejemplo Campo:"}),e("div",{className:"div-block-574",children:e("input",{type:"text",className:"campo-rutas w-input",maxLength:256,name:"name-2","data-name":"Name 2",placeholder:"Campo *",id:"name-2",onChange:a=>i("",a.target.value)})})]}),l("div",{className:"div-block-552",children:[e("label",{htmlFor:"name-2",className:"field-label-13 t-s-c",children:e("strong",{children:"Ejemplo Campo:"})}),e("input",{type:"text",className:"campo-rutas w-input",maxLength:256,name:"name-2","data-name":"Name 2",placeholder:"Campo *",id:"name-2",onChange:a=>i("",a.target.value)})]})]})}),e("div",{className:"div-block-554 hide-line",children:e("div",{className:"div-block-577",children:e("button",{type:"submit",className:"btn-rutas-enviar w-inline-block",children:e("div",{className:"text-block-187",children:"Crea nuevo cliente"})})})})]}),e("div",{className:"w-form-done",children:e("div",{children:"Thank you! Your submission has been received!"})}),e("div",{className:"w-form-fail",children:e("div",{children:"Oops! Something went wrong while submitting the form."})})]})})]})})}export{k as default};