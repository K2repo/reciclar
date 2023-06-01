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

export default function Create({ auth }) {

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
        <AuthenticatedLayoutK2D>

                <div className="bg-ruta-interior sizem">
                <h1 className="heading-47">Nueva Ruta</h1>
                <div>
                    <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get">
                        <div>
                        <div className="div-block-551">
                            <div className="div-block-552"><label htmlFor="name" className="field-label-13">Fecha de ruta:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name" data-name="Name" placeholder data-toggle="datepicker" id="name" required />
                            <div className="div-block-567"><img src="/images/Group-195.png" loading="lazy" alt className="image-120" /></div>
                            </div>
                            <div className="div-block-552 hidespace"><label htmlFor="field" className="field-label-13">Zona:</label><select id="field" name="field" data-name="Field" className="select campo-rutas w-select" /><input type="text" className="campo-rutas hides w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" required /></div>
                        </div>
                        <div className="div-block-551">
                            <div className="div-block-552"><label htmlFor="name-3" className="field-label-13">Placa de Vehículo Asignado:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder id="name-3" required /></div>
                            <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13">Recolector Asignado:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" required /></div>
                        </div>
                        <div className="div-block-551">
                            <div className="div-block-552"><label htmlFor="name-3" className="field-label-13">Sector Asignado:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder id="name-3" required /></div>
                            <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13">Recolector Asignado:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" required /></div>
                        </div>
                        <div className="div-block-551">
                            <div className="div-block-552"><label htmlFor="name-3" className="field-label-13">Ruta Asignada:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder id="name-3" required /></div>
                            <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13">Recolector Asignado:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" required /></div>
                        </div>
                        </div>
                        <div className="div-block-554">

                        {/* <div className="div-block-551">
                            <div className="div-block-552"><label htmlFor="name-4" className="field-label-13">Ejemplo Campo:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-4" data-name="Name 4" placeholder id="name-4" required /></div>
                            <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13"><strong>Ejemplo Campo:</strong></label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" required /></div>
                        </div>

                        <div className="div-block-551">
                            <div className="div-block-552"><label htmlFor="name-3" className="field-label-13">Ejemplo Campo:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder id="name-3" required /></div>
                            <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13">Ejemplo Campo:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" required /></div>
                        </div> */}

                        <div className="div-block-566">
                            <a href="#" className="btn-rutas-enviar w-inline-block">
                            <div className="text-block-187">Crea nueva ruta</div>
                            </a>
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
