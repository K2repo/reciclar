import React from 'react';
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
//import $ from 'jquery'; //window.$ = window.jQuery = $;
import '/resources/css/Datarangerpicker.css';
import { DatePicker , Stack } from 'rsuite';
//import moment from "moment";
//import 'daterangepicker';





export default function Create(props) {

    const [value, setValue] = React.useState([
        new Date('2023-06-01 00:00:00'),
        new Date('2023-06-01 14:00:00')
      ]);

    const { data, setData, post, processing, errors, reset } = useForm({
        //nombre: '',
        //descripcion: '',
        fecha_programacion: new Date(),
        cod_zona: '',
        cod_vehiculo: '',
        //sw_estado: '',
        cod_recolector_1: 0,
        cod_recolector_2: 0,
        cod_recolector_3: 0,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('rutas.store'), { onSuccess: () => reset() }  );
    };



    return (
        <AuthenticatedLayoutK2D user={props.auth.user} >

                <div className="bg-ruta-interior sizem">
                <h1 className="heading-47">Nueva Ruta</h1>
                <div>
                    <div className="w-form">
                    <form onSubmit={submit} id="email-form" name="email-form" data-name="Email Form" method="get">
                        <div>
                        <div className="div-block-551">
                            <div className="div-block-552"><label htmlFor="name" className="field-label-13">Fecha de ruta:</label>


                                {/* <DateRangePicker className="" style={{ background:'transparent' }} /> */}

                                <Stack direction="column" spacing={8} alignItems="flex-start">
                                    {/* <DateRangePicker value={value} onChange={setValue} /> */}
                                <DatePicker
                                format="yyyy-MM-dd HH:mm"
                                onChange={(e) => setData('fecha_programacion', e) }
                                />
                                </Stack>

                            {/* <input
                            type="text"
                            className="campo-rutas w-input"
                            maxLength={256}
                            name="name"
                            data-name="Name"
                            placeholder
                            data-toggle="datepicker"
                            id="fecha-rango-grafica"
                            required /> */}

                            <div className="div-block-567"><img src="/images/Group-195.png" loading="lazy" alt className="image-120" /></div>
                            </div>
                            <div className="div-block-552 hidespace"><label htmlFor="field" className="field-label-13">Zona:</label>
                            <select
                            onChange={(e) => setData('cod_zona', e.target.value)}
                            id="field" name="field" data-name="Field" className="select campo-rutas w-select">
                                            { props.zonas.map((zona,index) => {
                                                return  <option value={zona.id}>{zona.nombre}</option>;
                                                } )
                                            }
                            </select>

                            <input type="text" className="campo-rutas hides w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2"  /></div>
                        </div>
                        <div className="div-block-551">
                            <div className="div-block-552"><label htmlFor="name-3" className="field-label-13">Placa de Vehículo Asignado:</label>
                            {/* <input type="text" className="campo-rutas w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder id="name-3"  /> */}
                            <select
                            onChange={(e) => setData('cod_vehiculo', e.target.value)}
                            id="field" name="field" data-name="Field" className="select campo-rutas w-select">
                                            { props.vehiculos.map((conductores,index) => {
                                                return  <option value={conductores.id}>{ conductores.placa }</option>;
                                                } )
                                            }
                            </select>

                            </div>
                            <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13">Recolector Asignado:</label>

                            {/* <input type="text" className="campo-rutas w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2"  /> */}

                            <select
                            onChange={(e) => setData('cod_recolector_1', e.target.value)}
                            id="field" name="field" data-name="Field" className="select campo-rutas w-select">
                                            { props.conductores.map((conductores,index) => {
                                                return  <option value={conductores.id}>{conductores.numero_documento + ' / ' + conductores.name + ' ' + conductores.last_name??''}</option>;
                                                } )
                                            }
                            </select>

                            </div>
                        </div>
                        <div className="div-block-551">
                            <div className="div-block-552"><label htmlFor="name-3" className="field-label-13">Sector Asignado:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder id="name-3"  /></div>
                            <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13">Recolector Asignado:</label>

                            {/* <input type="text" className="campo-rutas w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2"  /> */}

                            <select
                            onChange={(e) => setData('cod_recolector_2', e.target.value)}
                            id="field" name="field" data-name="Field" className="select campo-rutas w-select">
                                            { props.conductores.map((conductores,index) => {
                                                return  <option value={conductores.id}>{conductores.numero_documento + ' / ' + conductores.name + ' ' + conductores.last_name??''}</option>;
                                                } )
                                            }
                            </select>

                            </div>
                        </div>
                        <div className="div-block-551">
                            <div className="div-block-552"><label htmlFor="name-3" className="field-label-13">Ruta Asignada:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder id="name-3"  /></div>
                            <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13">Recolector Asignado:</label>
                            {/* <input type="text" className="campo-rutas w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2"  /> */}
                            <select
                            onChange={(e) => setData('cod_recolector_3', e.target.value)}
                            id="field" name="field" data-name="Field" className="select campo-rutas w-select">
                                            { props.conductores.map((conductores,index) => {
                                                return  <option value={conductores.id}>{conductores.numero_documento + ' / ' + conductores.name + ' ' + conductores.last_name??''}</option>;
                                                } )
                                            }
                            </select>
                            </div>
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
                            {/* <a className="btn-rutas-enviar w-inline-block">
                            <div className="text-block-187">Crea nueva ruta</div>
                            </a> */}
                                    <button type="submit" className="btn-rutas-enviar w-inline-block">
                                        <div className="text-block-187">Crea nueva ruta</div>
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
