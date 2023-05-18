import '/resources/css/normalize.css';
import '/resources/css/reciclar.webflow.css';
import '/resources/css/webflow.css';
import '/resources/css/vehiculos-create.css';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayoutK2D from '@/Layouts/AuthenticatedLayoutK2D';

export default function Create(props) {
    const { data, setData, post, processing, errors, reset, get } = useForm({
        placa: '',
        linea: '',
        marca: '',
        cilindraje: '',
        modelo: '',
        descripcion: '',
        tarjeta_propieda: '',
        soat: '',
        tecno_mecanica: '',
        cod_usuario: '',
        sector: '',
        cod_ruta: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('vehiculos.store'), { onSuccess: () => reset() });
    };

    $(function () {
        $(`.selectZona`).trigger('change');
    });

    const cargarRutas = (id) => {
        $.ajax({
            type: 'GET',
            url: route('vehiculos.buscarRutas', id),
            success: function(response) {
                console.log(response);
                let rutas = response?.rutas ?? [];
                let select = $(`.selectRuta`);
                select.empty();
                let opcion = new Option('Seleccione la ruta', '', true, true);
                select.append(opcion);
                rutas.forEach((ruta) => {
                    let selected = false;
                    opcion = new Option(ruta.text, ruta.id, selected, selected);
                    select.append(opcion);
                });
                select.attr('disabled', false);
            }
        });
    }

    return (
        <AuthenticatedLayoutK2D>
            <div className="bg-ruta-interior sizem">
                <h1 className="heading-47">Nuevo Vehículo</h1>
                <div>
                    <div className="w-form">
                        <form onSubmit={submit}>
                            <div>
                                <div className="div-block-551">
                                    <div className="div-block-552">
                                        <label htmlFor="placa" className="field-label-13">Placa*:</label>
                                        <input type="text" className="campo-rutas w-input" maxLength={256} name="placa" data-name="placa" 
                                         data-toggle="datepicker" id="placa"  
                                            onChange={(e) => setData('placa', e.target.value)} required/>
                                    </div>
                                    <div className="div-block-552 hidespace">
                                        <label htmlFor="linea" className="field-label-13">Línea:</label>
                                        <input type="text" className="campo-rutas w-input" maxLength={256} name="linea" 
                                            data-name="linea" id="linea"  
                                            onChange={(e) => setData('linea', e.target.value)} required/>
                                    </div>
                                </div>
                                <div className="div-block-551">
                                    <div className="div-block-552">
                                        <label htmlFor="name-3" className="field-label-13">Marca*:</label>
                                        <input type="text" className="campo-rutas w-input"  maxLength={256} name="name-3" 
                                            data-name="Name 3" id="name-3"  
                                            onChange={(e) => setData('marca', e.target.value)} required/>
                                    </div>
                                    <div className="div-block-552 hidespace">
                                        <label htmlFor="name-2" className="field-label-13">Cilindraje:</label>
                                        <input type="text" className="campo-rutas w-input" maxLength={5} name="name-2" 
                                            data-name="Name 2" id="name-2"  
                                            onChange={(e) => setData('cilindraje', e.target.value)} required/>
                                    </div>
                                </div>
                                <div className="div-block-551">
                                    <div className="div-block-552">
                                        <label htmlFor="name-3" className="field-label-13">Modelo*:</label>
                                        <input type="text" className="campo-rutas w-input" maxLength={256} name="name-3" 
                                            data-name="Name 3" id="name-3"  
                                            onChange={(e) => setData('modelo', e.target.value)} required/>
                                    </div>
                                    <div className="div-block-552 hidespace">
                                        <label htmlFor="name-2" className="field-label-13 hide">Ejemplo Campo:</label>
                                        <input type="text" className="campo-rutas w-input hide" maxLength={256} name="name-2"
                                            data-name="Name 2" id="name-2"  
                                            onChange={(e) => setData('', e.target.value)}/>
                                    </div>
                                </div>
                                <div className="div-block-551 hide">
                                    <div className="div-block-552 hide">
                                        <label htmlFor="name-3" className="field-label-13 hide">Estado*:</label>
                                        <input type="text" className="campo-rutas w-input hide" maxLength={256} name="name-3" 
                                            data-name="Name 3" id="name-3"  
                                            onChange={(e) => setData('', e.target.value)}/>
                                    </div>
                                    <div className="div-block-552 hide space">
                                        <label htmlFor="name-2" className="field-label-13 hide">Ejemplo Campo:</label>
                                        <input type="text" className="campo-rutas w-input hide" maxLength={256} name="name-2"
                                            data-name="Name 2" id="name-2" onChange={(e) => setData('', e.target.value)}/>
                                    </div>
                                </div>
                                <div>
                                    <div className="div-block-552 hidespace">
                                        <label htmlFor="name-2" className="field-label-13 labelsize">Descripción:</label>
                                        <input  type="text" className="campo-rutas hide w-input" maxLength={256}  name="name-2"
                                            data-name="Name 2" id="name-2"/>
                                        <textarea maxLength={5000} id="field-2" name="field-2" data-name="Field 2"
                                            className="text-area campo-rutas w-input" defaultValue={""} onChange={(e) => setData('descripcion', e.target.value)} required/>
                                    </div>
                                </div>
                            </div>
                            <div className="div-block-554">
                                <div className="div-block-551">
                                    <div className="div-block-552">
                                        <label htmlFor="name-4" className="field-label-13 labelsize">Tarjeta de Propiedad:</label>
                                        <input type="text" className="campo-rutas hide w-input" maxLength={256} name="name-4"
                                            data-name="Name 4" id="name-4"   
                                            onChange={(e) => setData('tarjeta_propieda', e.target.value)}/>
                                        <div className="div-block-574">
                                            <img src="/images/cambiar-imagen.svg" loading="lazy"/>
                                        </div>
                                    </div>
                                    <div className="div-block-552 hidespace">
                                        <label htmlFor="name-2" className="field-label-13"><strong>SOAT:</strong></label>
                                        <input type="text" className="campo-rutas w-input" maxLength={256} name="name-2"
                                            data-name="Name 2" id="name-2" required
                                            onChange={(e) => setData('soat', e.target.value)}/>
                                    </div>
                                </div>
                                <div className="div-block-551 hide">
                                    <div className="div-block-552 hide">
                                        <label htmlFor="name-3" className="field-label-13 hide">Seguro:</label>
                                        <input type="text" className="campo-rutas w-input hide" maxLength={256} name="name-3"
                                            data-name="Name 3" id="name-3"  
                                            onChange={(e) => setData('', e.target.value)}/>
                                    </div>
                                    <div className="div-block-552 hide space">
                                        <label htmlFor="name-2" className="field-label-13 hide">Ejemplo Campo:</label>
                                        <input type="text" className="campo-rutas w-input hide" maxLength={256} name="name-2"
                                            data-name="Name 2" id="name-2"  
                                            onChange={(e) => setData('', e.target.value)}/>
                                    </div>
                                </div>
                                <div className="div-block-551">
                                    <div className="div-block-552">
                                        <label htmlFor="name-5" className="field-label-13">Tecno-mecánica:</label>
                                        <input type="text" className="campo-rutas w-input" maxLength={256} name="name-3"
                                            data-name="Name 3"  id="name-3"  
                                            onChange={(e) => setData('tecno_mecanica', e.target.value)} required/>
                                    </div>
                                    <div className="div-block-552 hidespace">
                                        <label htmlFor="name-5" className="field-label-13 hide">Ejemplo Campo:</label>
                                        <input type="text" className="campo-rutas w-input hide" maxLength={256} name="name-2"
                                            data-name="Name 2" id="name-2"  
                                            onChange={(e) => setData('', e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="div-block-554 hide-line">
                                <div className="div-block-551">
                                    <div className="div-block-552">
                                        <label htmlFor="name-5" className="field-label-13">Conductor Asignado:</label>
                                        <select name="field" data-name="Field" className="select-field-2 c-p-p w-select"
                                            onChange={(e) => setData('cod_usuario', e.target.value)} required>
                                            <option value="">Seleccione la ruta</option>
                                            { props.conductores.map((conductor,index) => {
                                                return  <option value={conductor.id}>{conductor.name}</option>;
                                                } )
                                            }
                                        </select>
                                    </div>
                                    <div className="div-block-552 hidespace">
                                        <label htmlFor="name-5" className="field-label-13 hide"><strong>Ejemplo Campo:</strong></label>
                                        <input type="text" className="campo-rutas w-input hide" maxLength={256} name="name-2"
                                            data-name="Name 2" id="name-2"  
                                            onChange={(e) => setData('', e.target.value)}/>
                                    </div>
                                </div>
                                <div className="div-block-551">
                                    <div className="div-block-552">
                                        <label htmlFor="name-5" className="field-label-13">Sector Asignado:</label>
                                        <select id="selectZona" name="field" data-name="Field" className="select-field-2 c-p-p w-select selectZona"
                                            onChange={(e) => cargarRutas(e.target.value)} required>
                                            <option value="">Seleccione la ruta</option>
                                            { props.zonas.map((zona,index) => {
                                                return  <option value={zona.id}>{zona.nombre}</option>;
                                                } )
                                            }
                                        </select>
                                    </div>
                                    <div className="div-block-552 hidespace">
                                        <label htmlFor="name-5" className="field-label-13 hide">Ejemplo Campo:</label>
                                        <input type="text" className="campo-rutas w-input hide" maxLength={256} name="name-2"
                                            data-name="Name 2" id="name-2"  
                                            onChange={(e) => setData('', e.target.value)}/>
                                    </div>
                                </div>
                                <div className="div-block-551">
                                    <div className="div-block-552">
                                        <label htmlFor="name-5" className="field-label-13">Ruta Asignada:</label>
                                        <select name="field" data-name="Field" className="select-field-2 c-p-p w-select selectRuta"
                                            onChange={(e) => setData('cod_ruta', e.target.value)} disabled required>
                                                <option value="">Seleccione la ruta</option>
                                        </select>
                                    </div>
                                    <div className="div-block-552 hidespace">
                                        <label htmlFor="name-5" className="field-label-13 hide">Ejemplo Campo:</label>
                                        <input type="text" className="campo-rutas w-input hide" maxLength={256} name="name-2" 
                                            data-name="Name 2" id="name-2"  
                                            onChange={(e) => setData('', e.target.value)}/>
                                    </div>
                                </div>
                                <div className="div-block-577">
                                    <button type="submit" className="btn-rutas-enviar w-inline-block">
                                        <div className="text-block-187">Crea nuevo vehículo</div>
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
