
//import './../../css/normalize.css';
//import './../../css/reciclar.webflow.css';
//import './../../css/webflow.css';
//import './../../css/admin-perfil.css';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayoutK2D from '@/Layouts/AuthenticatedLayoutK2D';
import '/resources/css/dtablebase.css';
import '/resources/css/normalize.css';
import '/resources/css/reciclar.webflow.css';
import '/resources/css/webflow.css';
import '/resources/css/admin-perfil.css';
import '/resources/css/materiales-index.css';

export default function Dashboard(props) {

    //Logica Js

    const submitForm = (e) => {
        e.preventDefault();
        const form = document.forms.namedItem("programacionRutas");
        const formData = new FormData(form);
        axios
            .post(route('programacionRutas.store'), formData)
            .then(response => {
                return response;
            })
            .then(json => {
                console.log(json)
            })
            .catch(error => {
                console.log(error);
            });
    };




    return (
        <AuthenticatedLayoutK2D user={props.auth.user}   >

            <div className="div-block-540">
                <div className="bg-perfil-u">
                    <div className="text-block-170">Administrador</div>
                    <div className="div-block-531">
                        <div id="w-node-_40588ff8-a02b-d8ee-dcf6-7bcfdbd02579-1afbe241" className="div-block-532">
                            <div className="div-block-533">
                                <div className="div-block-535"><img src="images/img-persona.webp" loading="lazy" alt className="image-111" /></div>
                            </div>
                            <div className="div-block-534"><img src="images/cambiar-foto.png" loading="lazy" alt className="image-112" /></div>
                        </div>
                        <div className="w-form">
                            <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form-5">
                                <div className="div-block-539">
                                    <div className="div-block-538">
                                        <div className="div-block-536">
                                            <div className="div-block-537"><label htmlFor="name" className="field-label-11">Nombres:</label><input type="text" className="campo-perfil-admin w-input" maxLength={256} name="name" data-name="Name" placeholder id="name" required /></div>
                                            <div className="div-block-537"><label htmlFor="name-2" className="field-label-11">Apellidos:</label><input type="text" className="campo-perfil-admin w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" required /></div>
                                            <div className="div-block-537"><label htmlFor="field-3" className="field-label-11">Rol:</label><select id="field-3" name="field-3" data-name="Field 3" required className="selecion campo-perfil-admin w-select" /></div>
                                            <div className="div-block-537"><label htmlFor="Correo-electr-nico" className="field-label-11">Correo electrónico:</label><input type="email" className="campo-perfil-admin w-input" maxLength={256} name="Correo-electr-nico" data-name="Correo electrónico:" placeholder id="Correo-electr-nico" required /></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="div-block-536">
                                            <div className="div-block-537"><label htmlFor="name-3" className="field-label-11">Teléfono:</label><input type="tel" className="campo-perfil-admin w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder id="name-3" required /></div>
                                            <div className="div-block-537"><label htmlFor="field-2" className="field-label-11">Departamento:</label><select id="field-2" name="field-2" data-name="Field 2" required className="selecion campo-perfil-admin w-select" /><input type="text" className="campo-perfil-admin hide w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" /></div>
                                            <div className="div-block-537"><label htmlFor="name-3" className="field-label-11">Ciudad:</label><input type="text" className="campo-perfil-admin hide w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" /><select id="field" name="field" data-name="Field" required className="selecion campo-perfil-admin w-select" /></div>
                                            <div className="div-block-537"><label htmlFor="name-5" className="field-label-11">Contraseña:</label><input type="text" className="campo-perfil-admin hide w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" />
                                                <div className="text-block-189">*********</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="success-message-9 w-form-done">
                                <div className="text-block-183">¡Gracias! ¡Su propuesta ha sido recibida!</div>
                                <div><img src="images/svg-logo.svg" loading="lazy" alt="Logo Reciiclar" /></div>
                            </div>
                            <div className="error-message-7 w-form-fail">
                                <div className="text-block-180">¡Ups! Algo salió mal al enviar el formulario.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-block-544">
                <div className="bg-perfil-u">
                    <div className="div-block-541">
                        <div className="text-block-171">Programación de Rutas</div>
                        <div className="btn-ruta"><img src="images/cruz.svg" loading="lazy" alt className="image-113" />
                            <div>
                                <div className="text-block-172">Nuevo Reporte</div>
                            </div>
                        </div>
                    </div>
                    <div className="div-block-578">
                        <div className="text-block-188"><strong>Historial de Reportes:</strong></div>
                    </div>
                    <div><img src="images/historial-de-reportes.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 84vw, (max-width: 991px) 87vw, (max-width: 1279px) 75vw, (max-width: 1439px) 78vw, (max-width: 1919px) 83vw, 1100px" srcSet="images/historial-de-reportes-p-500.png 500w, images/historial-de-reportes-p-800.png 800w, images/historial-de-reportes.png 919w" alt className="image-121" /></div>
                </div>
            </div>
            <div>
                <div className="div-block-545 bg-perfil-u">
                    <div id="w-node-_00330222-d459-fe6c-9efa-0f6d933456ff-1afbe241" className="div-block-579">
                        <div id="w-node-_373a566f-623e-61a9-825b-9daa2c57e62b-1afbe241">
                            <div className="text-block-173">Progreso de los materiales</div>
                            <div>
                                <div className="w-form">
                                    <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" className="form-6">
                                        <div className="div-block-546"><label htmlFor="field-4" className="field-label-12">Material:</label><select id="field-4" name="field-4" data-name="Field 4" required className="select-m campo-perfil-admin w-select" /></div>
                                        <div className="div-block-546"><label htmlFor="field-5" className="field-label-12">Cantidad:</label><input type="text" className="text-field campo-perfil-admin w-input" maxLength={256} name="field-5" data-name="Field 5" placeholder="0kg" id="field-5" required /></div>
                                    </form>
                                    <div className="success-message-8 w-form-done">
                                        <div className="text-block-181">Thank you! Your submission has been received!</div>
                                    </div>
                                    <div className="error-message-8 w-form-fail">
                                        <div className="text-block-182">Oops! Something went wrong while submitting the form.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="texto titulo-p-u">Último ingreso:</div>
                            <div className="div-block-548">
                                <div className="text-block-175">Plástico: </div>
                                <div className="text-block-175">256 Kilos</div>
                            </div>
                            <div className="texto">Enero 25, 2023</div>
                        </div>
                        <div id="w-node-_519daf3b-43cb-e74c-49d3-f0494bd701b0-1afbe241" className="div-block-547"><img src="images/tabla.png" loading="lazy" alt className="image-114" /></div>
                    </div>
                    <div className="div-block-580">
                        <div className="text-block-171">Solicitudes de Recolección</div>
                        <div className="div-block-581"><img src="images/solicitud-de-recoleccion.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 84vw, (max-width: 991px) 87vw, (max-width: 1279px) 75vw, (max-width: 1439px) 78vw, (max-width: 1919px) 83vw, 1120px" srcSet="images/solicitud-de-recoleccion-p-500.png 500w, images/solicitud-de-recoleccion-p-800.png 800w, images/solicitud-de-recoleccion.png 919w" alt className="image-122" /></div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayoutK2D>

    );
}
