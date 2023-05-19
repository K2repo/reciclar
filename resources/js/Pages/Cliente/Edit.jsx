import '/resources/css/normalize.css';
import '/resources/css/reciclar.webflow.css';
import '/resources/css/webflow.css';
import '/resources/css/clientes-create.css';
import $ from "jquery";
import 'select2';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayoutK2D from '@/Layouts/AuthenticatedLayoutK2D';

export default function Edit(props) {
    const { data, setData, put, processing, errors, reset } = useForm({
        id: props.cliente.id,
        name: props.cliente?.name ?? '',
        last_name: props.cliente?.last_name ?? '',
        tipo_documento: props.cliente?.tipo_documento ?? '',
        numero_documento: props.cliente?.numero_documento ?? '',
        email : props.cliente?.email ?? '',
        telefono: props.cliente?.telefono ?? '',
        direccion_residencia: props.cliente?.direccion_residencia ?? '',
        direccion_residencia_2: props.cliente?.direccion_residencia_2 ?? '',
        cod_ciudad: props.cliente?.cod_ciudad ?? '',
        cod_rol: props.cliente?.rol?.cod_rol ?? '',
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('clientes.update', {cliente: props.cliente.id}), { onSuccess: () => reset() });
    };

    $(document).ready(function() {
        // $('#selectRol').select2();
    });

    return (
        <AuthenticatedLayoutK2D>
            <div className="bg-ruta-interior sizem">
                <h1 className="heading-47">Editar Cliente</h1>
                <div>
                    <div className="w-form">
                        <form onSubmit={submit}>
                            <div className="div-block-591">
                                <img src="/images/subir-imagen.png" loading="lazy" alt/>
                            </div>
                            <div className="div-block-554">
                                <div className="div-block-551">
                                    <div className="div-block-552">
                                        <label htmlFor="name-4" className="field-label-13 labelsize d n-r l">Nombres:</label>
                                            <input type="text" className="campo-rutas w-input" maxLength={256} name="name-2"
                                                data-name="Name 2" placeholder="Nombre*" id="name-2" required defaultValue={props.cliente?.name ?? ''}
                                                onChange={(e) => setData('name', e.target.value)}/>
                                    </div>
                                    <div className="div-block-552">
                                        <label htmlFor="field-4" className="field-label-13 t-s-c t">Apellidos:</label>
                                        <input type="text" className="campo-rutas w-input" maxLength={256} name="field"
                                            data-name="" placeholder="Apellido*" id="field-4" required defaultValue={props.cliente?.last_name ?? ''}
                                            onChange={(e) => setData('last_name', e.target.value)}/>
                                    </div>
                                </div>
                                <div className="div-block-551">
                                    <div className="div-block-552">
                                        <label htmlFor="name-2" className="field-label-13 space">Tipo Identificación:</label>
                                        <select id="field-3" name="field-3" required
                                            data-name="Field 3" className="select-c campo-rutas w-select" onChange={(e) => setData('tipo_documento', e.target.value)}>
                                            <option value="">Seleccione el tipo de Identificación</option>
                                            <option value="CC" selected={props.cliente?.tipo_documento == 'CC'}>Cedula de ciudadania</option>
                                            <option value="TI" selected={props.cliente?.tipo_documento == 'TI'}>Tarjeta de Identificación</option>
                                            <option value="PS" selected={props.cliente?.tipo_documento == 'PS'}>Pasaporte</option>
                                            <option value="NIT" selected={props.cliente?.tipo_documento == 'NIT'}>NIT</option>
                                        </select>
                                    </div>
                                    <div className="div-block-552">
                                        <label htmlFor="name-2" className="field-label-13 t-s-c">
                                            <strong>No. de Identificación o NIT:</strong>
                                        </label>
                                        <input type="text" className="campo-rutas w-input" maxLength={256} name="name-2"
                                            data-name="Name 2" placeholder="Número de Id*" id="name-2" required defaultValue={props.cliente?.numero_documento ?? ''}
                                            onChange={(e) => setData('numero_documento', e.target.value)}/>
                                    </div>
                                </div>
                                <div className="div-block-551">
                                    <div className="div-block-552">
                                        <label htmlFor="field-3" className="field-label-13 t-s-c t">Rol:</label>
                                        <select id="selectRol" name="field-3" onChange={(e) => setData('cod_rol', e.target.value)}
                                            data-name="Field 3" className="select-c campo-rutas w-select" required>
                                            <option value="">Seleccione el rol</option>
                                            { props.roles.map((rol,index) => {
                                                return  <option value={rol.id} selected={rol.id = props.cliente?.rol?.cod_rol}>{rol.nombre}</option>;
                                                } )
                                            }
                                        </select>
                                    </div>
                                    <div className="div-block-552">
                                        <label htmlFor="name-2" className="field-label-13 hide space">Código de Usuario:</label>
                                        <input type="text" className="campo-rutas hide w-input" maxLength={256} name="name-2"
                                            data-name="Name 2" placeholder="Código*" id="name-2"
                                            onChange={(e) => setData('', e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="div-block-554 quitar-lin">
                                <div className="div-block-551">
                                    <div className="div-block-552">
                                        <label htmlFor="name-5" className="field-label-13 labelsize d n-r">Teléfono:</label>
                                        <input type="text" className="campo-rutas w-input" maxLength={256} name="name-2"
                                            data-name="Name 2" placeholder="000 0000000" id="name-2" defaultValue={props.cliente?.telefono ?? ''}
                                            onChange={(e) => setData('telefono', e.target.value)} required/>
                                    </div>
                                    <div className="div-block-552">
                                        <label htmlFor="name-2" className="field-label-13 t-s-c"><strong>Correo electrónico:</strong></label>
                                        <input type="text" className="campo-rutas w-input" maxLength={256} name="name-2"
                                            data-name="Name 2" placeholder="correo@corre.com" id="name-2" required defaultValue={props.cliente?.email ?? ''}
                                            onChange={(e) => setData('email', e.target.value)}/>
                                    </div>
                                </div>
                                <div className="div-block-551">
                                    <div className="div-block-552">
                                        <label htmlFor="field-3" className="field-label-13 t-s-c s">Departamento:</label>
                                        <select id="field-3" name="field-3"
                                            data-name="Field 3" className="select-c campo-rutas w-select">
                                            <option value="Departamento*">Departamento*</option>
                                        </select>
                                    </div>
                                    <div className="div-block-552">
                                        <label htmlFor="name-2" className="field-label-13 hide space">Contraseña:</label>
                                        <input type="text" className="campo-rutas hide w-input" maxLength={256} name="name-2"
                                            data-name="Name 2" placeholder="***********" id="name-2"
                                            onChange={(e) => setData('', e.target.value)}/>
                                    </div>
                                </div>
                                <div className="div-block-551">
                                    <div className="div-block-552">
                                        <label htmlFor="field-3" className="field-label-13 t-s-c s">Ciudad:</label>
                                        <select id="field-3" name="cod_ciudad" data-name="Field 3" 
                                            className="select-c campo-rutas w-select" onChange={(e) => setData('cod_ciudad', e.target.value)}>
                                            <option value="Ciudad*">Ciudad*</option>
                                        </select>
                                    </div>
                                    <div className="div-block-552">
                                        <label htmlFor="name-5" className="field-label-13 hide">Ejemplo Campo:</label>
                                    </div>
                                </div>
                            </div>
                            <div className="div-block-554 remove-line">
                                <div className="div-block-551">
                                    <div className="div-block-552">
                                        <label htmlFor="name-5" className="field-label-13 labelsize d n-r">Dirección:</label>
                                            <input type="text" className="campo-rutas w-input" maxLength={256} name="name-2"
                                                data-name="Name 2" placeholder="Dirección*" id="name-2" defaultValue={props.cliente?.direccion_residencia ?? ''}
                                                onChange={(e) => setData('direccion_residencia', e.target.value)} required/>
                                    </div>
                                    <div className="div-block-552">
                                        <label htmlFor="name-2" className="field-label-13 t-s-c"><strong>Dirección 2:</strong></label>
                                        <input type="text" className="campo-rutas w-input" maxLength={256} name="name-2"
                                            data-name="Name 2" placeholder="Dirección*" id="name-2" defaultValue={props.cliente?.direccion_residencia_2 ?? ''}
                                            onChange={(e) => setData('direccion_residencia_2', e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="div-block-554 hide-line">
                                <div className="div-block-577">
                                    <button type="submit" className="btn-rutas-enviar w-inline-block">
                                        <div className="text-block-187">Actualizar</div>
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