import{W as c,a as e,j as a}from"./app-0ed7a3ee.js";/* empty css                *//* empty css                     */import{I as n}from"./AuthenticatedLayoutK2D-ac2737a9.js";function N(i){const{data:s,setData:d,put:m,processing:r,errors:o,reset:t}=c({id:"",nombre:"",estado:"",unidad_medida:"",codigo_material:"",descripcion:"",precio:0});return e(n,{children:a("div",{className:"bg-ruta-interior sizem",children:[e("h1",{className:"heading-47",children:"Materiales - Papel"}),e("div",{children:a("div",{className:"w-form",children:[a("form",{id:"email-form",name:"email-form","data-name":"Email Form",method:"get",onSubmit:l=>{l.preventDefault(),m(route("materiales.update",i.material.id),{onSuccess:()=>t()})},children:[a("div",{className:"div-block-593",children:[e("div",{className:"div-block-594",children:e("img",{src:"/images/materiales.jpg",loading:"lazy",sizes:"(max-width: 479px) 130px, (max-width: 767px) 23vw, 130px",srcSet:"/images/materiales-p-500.jpg 500w, /images/materiales.jpg 640w",className:"image-124"})}),e("div",{className:"div-block-595",children:e("img",{src:"/images/cambiar-imagen-material.svg",loading:"lazy"})})]}),a("div",{children:[a("div",{className:"div-block-551",children:[a("div",{className:"div-block-552",children:[e("label",{htmlFor:"name",className:"editar-m",children:"Fecha Registro:"}),e("input",{type:"text",className:"campo-rutas w-input",maxLength:256,name:"name","data-name":"Name",value:i.material.created_at,"data-toggle":"datepicker",id:"name"})]}),a("div",{className:"div-block-552 hidespace",children:[e("label",{htmlFor:"name-3",className:"field-label-13",children:"Vigencia:"}),e("input",{type:"text",className:"campo-rutas w-input",maxLength:256,name:"name-3","data-name":"Name 3",placeholder:"21 Febrero 2023",id:"name-3"})]})]}),a("div",{className:"div-block-551",children:[a("div",{className:"div-block-552",children:[e("label",{htmlFor:"name-3",className:"field-label-13 editar-m",children:"Estado:"}),e("input",{type:"text",className:"campo-rutas red w-input",maxLength:256,name:"name-3","data-name":"Name 3",value:i.material.sw_estado?"Activo":"Inactivo",id:"name-3"})]}),a("div",{className:"div-block-552 hidespace",children:[e("label",{htmlFor:"name-2",className:"field-label-13 hide",children:"Peso Recolectado:"}),e("input",{type:"text",className:"campo-rutas hide w-input",maxLength:256,name:"name-2","data-name":"Name 2",placeholder:"",id:"name-2"})]})]})]}),a("div",{className:"div-block-592",children:[a("div",{className:"div-block-551",children:[a("div",{className:"div-block-552",children:[e("label",{htmlFor:"Material",className:"field-label-13-copy editar-m",children:"Nombre de Material:"}),e("input",{maxLength:256,name:"id","data-name":"id","data-toggle":"datepicker",id:"id",className:"campo-rutas w-input",defaultValue:i.material.id,onChange:l=>d("nombre",l.target.value),style:{display:"none"}}),e("input",{maxLength:256,name:"nombre","data-name":"nombre","data-toggle":"datepicker",id:"nombre",className:"campo-rutas w-input",defaultValue:i.material.nombre,onChange:l=>d("nombre",l.target.value)})]}),a("div",{className:"div-block-552 hidespace",children:[e("label",{htmlFor:"Unidad",className:"field-label-13",children:"Unidad de medida:"}),e("input",{type:"text",className:"campo-rutas w-input",maxLength:256,name:"Unidad","data-name":"Unidad",placeholder:i.material.nombre,id:"Unidad"}),e("input",{type:"text",className:"campo-rutas hides w-input",maxLength:256,name:"name-2","data-name":"Name 2",placeholder:"",id:"name-2"})]})]}),a("div",{className:"div-block-551",children:[a("div",{className:"div-block-552",children:[e("label",{htmlFor:"precio",className:"field-label-13 editar-m",children:"Precio:"}),e("input",{type:"text",className:"campo-rutas w-input",maxLength:256,name:"precio","data-name":"precio",placeholder:"000000",id:"precio"})]}),a("div",{className:"div-block-552 hidespace",children:[e("label",{htmlFor:"field-2",className:"field-label-13",children:"Estado:"}),e("select",{id:"field-2",name:"field-2","data-name":"Field 2",className:"select campo-rutas w-select"})]})]}),a("div",{className:"div-block-551",children:[a("div",{className:"div-block-552",children:[e("label",{htmlFor:"name-3",className:"field-label-13 editar-m",children:"Código de Material:"}),e("input",{type:"text",className:"campo-rutas w-input",maxLength:256,name:"name-3","data-name":"Name 3",value:i.material.id,id:"name-3"})]}),e("div",{className:"div-block-552 hidespace",children:e("label",{htmlFor:"name-4",className:"field-label-13 hide",children:"Ejemplo Campo:"})})]}),e("div",{className:"div-block-551",children:a("div",{className:"div-block-552",children:[e("label",{htmlFor:"field-3",className:"field-label-13 editar-m cambiar-s",children:"Descripción:"}),e("textarea",{value:i.material.descripcion,maxLength:5e3,id:"field-3",name:"field-3","data-name":"Field 3",className:"e campo-rutas w-input",defaultValue:""})]})})]}),e("div",{className:"div-block-554 hide-line",children:e("div",{className:"div-block-577",children:e("button",{type:"submit",className:"btn-rutas-enviar w-inline-block",children:e("div",{className:"text-block-187",children:"Actualizar Material"})})})})]}),e("div",{className:"w-form-done",children:e("div",{children:"Thank you! Your submission has been received!"})}),e("div",{className:"w-form-fail",children:e("div",{children:"Oops! Something went wrong while submitting the form."})})]})})]})})}export{N as default};