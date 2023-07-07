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
import '/resources/css/material-create.css';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayoutK2D from '@/Layouts/AuthenticatedLayoutK2D';

export default function Create(props) {

    console.log(props);

    const { data, setData, post, processing, errors, reset } = useForm({
        nombre: '',
        estado: '',
        unidad_medida: '',
        codigo_material: '',
        descripcion: '',
        precio: 0
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('materiales.store'), { onSuccess: () => reset() }  );
    };


    return (
        <AuthenticatedLayoutK2D user={props.auth.user} >
            <div className="bg-ruta-interior sizem">
                <h1 className="heading-47">Nuevo Material</h1>
                <div>
                    <div className="w-form">
                        <form onSubmit={submit}>
                            <div className="div-block-591"><img src="/images/foto-material.png" loading="lazy" alt /></div>
                            <div className="div-block-554">
                                <div className="div-block-551">
                                    <div className="div-block-552"><label htmlFor="name-4" className="field-label-13 labelsize d n-r">Nombre de Material:</label><input type="text" className="campo-rutas hide w-input" maxLength={256} name="name-4" data-name="Name 4" placeholder id="name-4" />
                                        <div className="div-block-574">
                                        <input
                                        onChange={(e) => setData('nombre', e.target.value)}
                                        type="text"
                                        className="campo-rutas w-input"
                                        maxLength={256}
                                        name="name-2"
                                        data-name="Name 2"
                                        placeholder="Nombre Material*"
                                        id="name-2" />
                                        </div>
                                    </div>
                                    <div className="div-block-552 hidespace"><label htmlFor="field" className="field-label-13 t-s-c"><strong>Estado:</strong></label>
                                    <select id="field"
                                            name="field"
                                            data-name="Field"
                                            onChange={(e) => setData('estado', e.target.value)}
                                            className="select-c campo-rutas w-select">
                                        <option value="Estado de Material*">Estado de Material*</option>
                                        <option value="Estado de Material**">Estado de Material*</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="div-block-551">
                                    <div className="div-block-552"><label htmlFor="name-3" className="field-label-13 t-s-c">Unidad de medida:</label>
                                    <input id="name-3"
                                    onChange={(e) => setData('unidad_medida', e.target.value)}
                                    type="text"
                                    className="campo-rutas w-input"
                                    maxLength={256}
                                    name="name-3"
                                    data-name="Name 3"
                                    //placeholder="Unidad de medida*"
                                    defaultValue={'KG'}
                                    disabled
                                    />
                                    </div>
                                    <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13">Precio:</label>
                                    <input
                                    type="text"
                                    onChange={(e) => setData('precio', e.target.value)}
                                    className="campo-rutas w-input"
                                    maxLength={256}
                                    name="name-2"
                                    data-name="Name 2"
                                    placeholder="Precio*"
                                    id="name-2" /></div>
                                </div>

                                {/* <div className="div-block-551">
                                    <div className="div-block-552"><label htmlFor="name-3" className="field-label-13 t-s-c">Código de Material:</label>
                                    <input
                                    id="name-3"
                                    onChange={(e) => setData('codigo_material', e.target.value)}
                                    type="text"
                                    className="campo-rutas w-input"
                                    maxLength={256}
                                    name="name-3"
                                    data-name="Name 3"
                                    placeholder="Codigo*" />
                                    </div>
                                    <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13 hide">Ejemplo Campo:</label></div>
                                </div> */}

                                <div className="div-block-551">
                                    <div className="div-block-552"><label htmlFor="field-3" className="field-label-13 t-s-c p">Descripción:</label>
                                    <textarea
                                    onChange={(e) => setData('descripcion', e.target.value)}
                                    placeholder="Descripción de material"
                                    maxLength={5000} id="field-3"
                                    name="field"
                                    data-name
                                    className="text-a campo-rutas w-input"
                                    defaultValue={""} /></div>
                                </div>
                            </div>
                            <div className="div-block-554 hide-line">
                                <div className="div-block-577">
                                    <button type="submit" className="btn-rutas-enviar w-inline-block">
                                        <div className="text-block-187">Crea nuevo Material</div>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        {/* <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div> */}
                        <div className="w-form-fail" style={ Object.entries(props.errors).length === 0 ? {display:'none'} : {display:'block'}}>
                            <div>¡Ups! Algo salió mal al enviar el formulario.</div>
                            { Object.entries(props.errors).map(element=><li> {element[0] + ': ' + element[1]}.</li>) }
                                    {/* <div>Oops! Something went wrong while submitting the form.</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayoutK2D>
    );
}
