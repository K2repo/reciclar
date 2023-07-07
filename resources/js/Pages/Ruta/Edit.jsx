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
    console.log(props)
    const { data, setData, put, processing, errors, reset } = useForm({
        id: props.material.id,
        nombre: props.material.nombre,
        estado: props.material.estado,
        unidad_medida: props.material.unidad_medida?? '',
        codigo_material: '',
        descripcion: props.material.descripcion??'',
        precio: 0
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('materiales.update', props.material.id), { onSuccess: () => reset() });
    };


    return (
        <AuthenticatedLayoutK2D user={props.auth.user} >

            <div>
            <div className="bg-ruta-interior sizem">
                <h1 className="heading-47">Rutas</h1>
                <div>
                <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get">
                    <div>
                        <div className="div-block-551">
                        <div className="div-block-552"><label htmlFor="name" className="field-label-13">Fecha:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name" data-name="Name" placeholder data-toggle="datepicker" id="name" required /></div>
                        <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13">Zona:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" required /></div>
                        </div>
                        <div className="div-block-551">
                        <div className="div-block-552"><label htmlFor="name-3" className="field-label-13">Placa de Vehículo Asignado:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder id="name-3" required /></div>
                        <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13">Recolector Asignado:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" required /></div>
                        </div>
                        <div className="div-block-551">
                        <div className="div-block-552"><label htmlFor="name-3" className="field-label-13">Ruta Asignada:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder id="name-3" required /></div>
                        <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13">Recolector Asignado:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" required /></div>
                        </div>
                        <div className="div-block-551">
                        <div className="div-block-552"><label htmlFor="name-3" className="field-label-13">Estado Visita:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder id="name-3" required /></div>
                        <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13">Recolector Asignado:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" required /></div>
                        </div>
                        <div>
                        <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13 labelsize c-t">Recolector Asignado:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" required /></div>
                        </div>
                    </div>
                    <div className="div-block-554">
                        <div className="div-block-551">
                        <div className="div-block-552"><label htmlFor="name-4" className="field-label-13">Ejemplo Campo:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-4" data-name="Name 4" placeholder id="name-4" required /></div>
                        <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13"><strong>Ejemplo Campo:</strong></label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" required /></div>
                        </div>
                        <div className="div-block-551">
                        <div className="div-block-552"><label htmlFor="name-3" className="field-label-13">Ejemplo Campo:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder id="name-3" required /></div>
                        <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13">Ejemplo Campo:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" required /></div>
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
            <div className="space-ruta bg-ruta-interior">
                <div className="div-block-555">
                <h1 className="heading-47">Programación de Rutas</h1>
                <div className="div-block-557">
                    <div className="btn-ruta-i space"><img src="images/cruz.svg" loading="lazy" alt className="image-113" />
                    <div className="div-block-556">
                        <div className="text-block-172">Exportar Reporte</div>
                    </div>
                    </div>
                    <div className="btn-ruta-i"><img src="images/cruz.svg" loading="lazy" alt className="image-113" />
                    <div>
                        <div className="text-block-172">Nueva Ruta</div>
                    </div>
                    </div>
                </div>
                </div>
                <div>
                <div className="w-form">
                    <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" className="form-7">
                    <div className="div-block-558"><label htmlFor="Buscar-Zona" className="field-label-14">Buscar:</label><input type="text" className="text-field-4 campo-rutas w-input" maxLength={256} name="Buscar-Zona" data-name="Buscar Zona" placeholder="Buscar Zona" id="Buscar-Zona" required /></div>
                    <div className="div-block-558"><label htmlFor="field" className="field-label-14">Filtrar por:</label><select id="field" name="field" data-name="Field" required className="campo-rutas w-select">
                        <option value="Filtro">Filtro</option>
                        </select></div>
                    </form>
                    <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                </div>
                <div className="div-block-559">
                    <div id="w-node-_7729d95b-f78b-9fd6-763d-a44e7448afa1-73bcb1c1" className="div-block-560"><img src="images/table.png" loading="lazy" sizes="(max-width: 479px) 87vw, (max-width: 767px) 98vw, (max-width: 991px) 89vw, (max-width: 1279px) 37vw, (max-width: 1439px) 38vw, (max-width: 1919px) 41vw, 45vw" srcSet="images/table-p-500.png 500w, images/table.png 539w" alt className="image-117" /></div>
                    <div id="w-node-_68d574fb-2927-12fc-c545-1388670e2602-73bcb1c1" className="bg-mapa"><img src="images/mapa.png" loading="lazy" alt /></div>
                </div>
                </div>
            </div>
            </div>


        </AuthenticatedLayoutK2D>
    );
}






