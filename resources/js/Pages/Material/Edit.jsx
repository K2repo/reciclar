//import React from 'react';
//import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
//import { Head } from '@inertiajs/react';
//import '../../../css/normalize.css';
//import './../../../css/reciclar.webflow.css';
//import './../../../css/webflow.css';
//import './../../../css/admin-perfil.css';
import '/resources/css/normalize.css';
import '/resources/css/reciclar.webflow.css';
import '/resources/css/webflow.css';
import '/resources/css/admin-perfil.css';
import '/resources/css/material-edit.css';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayoutK2D from '@/Layouts/AuthenticatedLayoutK2D';

export default function Edit(props) {
    //console.log(props)
    const { data, setData, put, processing, errors, reset } = useForm({
        id: '',
        nombre: '',
        estado: '',
        unidad_medida: '',
        codigo_material: '',
        descripcion: '',
        precio: 0
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('materiales.update', props.material.id), { onSuccess: () => reset() });
    };


    return (
        <AuthenticatedLayoutK2D>


            <div className="bg-ruta-interior sizem">
                <h1 className="heading-47">Materiales - Papel</h1>
                <div>
                    <div className="w-form">

                        <form id="email-form" name="email-form" data-name="Email Form" method="get" onSubmit={submit}>


                            <div className="div-block-593">
                                <div className="div-block-594"><img src="/images/materiales.jpg" loading="lazy" sizes="(max-width: 479px) 130px, (max-width: 767px) 23vw, 130px" srcSet="/images/materiales-p-500.jpg 500w, /images/materiales.jpg 640w" className="image-124" /></div>
                                <div className="div-block-595"><img src="/images/cambiar-imagen-material.svg" loading="lazy" /></div>
                            </div>

                            <div>
                                <div className="div-block-551">
                                    <div className="div-block-552"><label htmlFor="name" className="editar-m">Fecha Registro:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name" data-name="Name" value={props.material.created_at} data-toggle="datepicker" id="name" /></div>
                                    <div className="div-block-552 hidespace"><label htmlFor="name-3" className="field-label-13">Vigencia:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder={"21 Febrero 2023"} id="name-3" /></div>
                                </div>
                                <div className="div-block-551">
                                    <div className="div-block-552"><label htmlFor="name-3" className="field-label-13 editar-m">Estado:</label><input type="text" className="campo-rutas red w-input" maxLength={256} name="name-3" data-name="Name 3" value={props.material.sw_estado ? 'Activo' : 'Inactivo'} id="name-3" /></div>
                                    <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13 hide">Peso Recolectado:</label><input type="text" className="campo-rutas hide w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder={""} id="name-2"
                                    /></div>
                                </div>
                            </div>

                            <div className="div-block-592">
                                <div className="div-block-551">

                                    <div className="div-block-552"><label htmlFor="Material" className="field-label-13-copy editar-m">Nombre de Material:</label>
                                    <input

                                    maxLength={256}
                                    name="id"
                                    data-name="id"
                                    data-toggle="datepicker"
                                    id="id"
                                    className="campo-rutas w-input"
                                    defaultValue={props.material.id}
                                    onChange={(e) => setData('nombre', e.target.value)}
                                    style={{ display:'none' }}
                                    />

                                    <input

                                    maxLength={256}
                                    name="nombre"
                                    data-name="nombre"
                                    data-toggle="datepicker"
                                    id="nombre"
                                    className="campo-rutas w-input"
                                    defaultValue={props.material.nombre}
                                    onChange={(e) => setData('nombre', e.target.value)}

                                    />

                                    </div>
                                    <div className="div-block-552 hidespace"><label htmlFor="Unidad" className="field-label-13">Unidad de medida:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="Unidad" data-name="Unidad" placeholder={props.material.nombre} id="Unidad" /><input type="text" className="campo-rutas hides w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder={""} id="name-2" /></div>
                                </div>
                                <div className="div-block-551">
                                    <div className="div-block-552"><label htmlFor="precio" className="field-label-13 editar-m">Precio:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="precio" data-name="precio" placeholder={"000000"} id="precio" /></div>
                                    <div className="div-block-552 hidespace"><label htmlFor="field-2" className="field-label-13">Estado:</label><select id="field-2" name="field-2" data-name="Field 2" className="select campo-rutas w-select" /></div>
                                </div>
                                <div className="div-block-551">
                                    <div className="div-block-552"><label htmlFor="name-3" className="field-label-13 editar-m">Código de Material:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-3" data-name="Name 3" value={props.material.id} id="name-3" /></div>
                                    <div className="div-block-552 hidespace"><label htmlFor="name-4" className="field-label-13 hide">Ejemplo Campo:</label></div>
                                </div>
                                <div className="div-block-551">
                                    <div className="div-block-552"><label htmlFor="field-3" className="field-label-13 editar-m cambiar-s">Descripción:</label><textarea value={props.material.descripcion} maxLength={5000} id="field-3" name="field-3" data-name="Field 3" className="e campo-rutas w-input" defaultValue={""} /></div>
                                </div>
                            </div>

                            <div className="div-block-554 hide-line">
                                <div className="div-block-577">
                                    <button type="submit" className="btn-rutas-enviar w-inline-block">
                                        <div className="text-block-187">Actualizar Material</div>
                                    </button>
                                </div>
                            </div>



                        </form>

                        <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                        </div>

                        <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>

                    </div>
                </div>
            </div>



        </AuthenticatedLayoutK2D>
    );
}






