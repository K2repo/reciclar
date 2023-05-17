import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import './../../css/normalize.css';
import './../../css/reciclar.webflow.css';
import './../../css/webflow.css';
import './../../css/admin-perfil.css';

export default function Dashboard({ auth }) {

    //Logica Js

    const submitForm = (e) => {
        e.preventDefault();
        const form = document.forms.namedItem("programacionRutas");
        const formData = new FormData(form);
        axios
            .post(route('programacionRutas.store'),formData)
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
        <div>
    <div>
        <div className="div-block-527">
        <div className="container-2">
            <div className="mobile-nav">
            <a href="#" className="logo-link mobile w-inline-block"><img src="images/logo-reciclar.svg" loading="lazy" alt className="logo" /></a>
            <div data-w-id="1d3f39d6-72fe-3645-0358-349d01115afb" className="hamburger">
                <div data-w-id="1d3f39d6-72fe-3645-0358-349d01115afc" className="hamburger-line top" />
                <div data-w-id="1d3f39d6-72fe-3645-0358-349d01115afd" className="hamburger-line middle" />
                <div data-w-id="1d3f39d6-72fe-3645-0358-349d01115afe" className="hamburger-line bot" />
            </div>
            </div>
            <div className="wrapper-2">
            <div data-w-id="1d3f39d6-72fe-3645-0358-349d01115b00" className="nav-wrap">
                <div className="nav">
                <div className="nav-top">
                    <a href="#" className="logo-link w-inline-block"><img src="images/logo-reciclar.svg" loading="lazy" width={120} alt className="logo" /></a>
                    <div className="nav-menu-2">
                    <a href="perfil-administrador.html" className="nav-link-2 w-inline-block">
                        <div className="embed-icon w-embed"><svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.33367 0.371565C8.2473 0.256213 8.13523 0.162574 8.00637 0.0980772C7.8775 0.0335803 7.73538 0 7.59128 0C7.44717 0 7.30505 0.0335803 7.17618 0.0980772C7.04732 0.162574 6.93525 0.256213 6.84888 0.371565C4.93847 2.91551 0 6.53485 0 12.4696C0.016115 14.4723 0.823009 16.3876 2.2449 17.798C3.66679 19.2085 5.58846 20 7.59128 20C9.59409 20 11.5158 19.2085 12.9377 17.798C14.3595 16.3876 15.1664 14.4723 15.1826 12.4696C15.1826 6.53485 10.2441 2.91551 8.33367 0.371565Z" fill="#32AC5E" />
                        </svg></div>
                        <div>Inicio</div>
                    </a>
                    <a href="perfiles.html" className="nav-link-2 w-inline-block">
                        <div className="embed-icon w-embed"><svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.33367 0.371565C8.2473 0.256213 8.13523 0.162574 8.00637 0.0980772C7.8775 0.0335803 7.73538 0 7.59128 0C7.44717 0 7.30505 0.0335803 7.17618 0.0980772C7.04732 0.162574 6.93525 0.256213 6.84888 0.371565C4.93847 2.91551 0 6.53485 0 12.4696C0.016115 14.4723 0.823009 16.3876 2.2449 17.798C3.66679 19.2085 5.58846 20 7.59128 20C9.59409 20 11.5158 19.2085 12.9377 17.798C14.3595 16.3876 15.1664 14.4723 15.1826 12.4696C15.1826 6.53485 10.2441 2.91551 8.33367 0.371565Z" fill="#32AC5E" />
                        </svg></div>
                        <div>Perfiles</div>
                    </a>
                    <a href="clientes.html" className="nav-link-2 w-inline-block">
                        <div className="embed-icon w-embed"><svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.33367 0.371565C8.2473 0.256213 8.13523 0.162574 8.00637 0.0980772C7.8775 0.0335803 7.73538 0 7.59128 0C7.44717 0 7.30505 0.0335803 7.17618 0.0980772C7.04732 0.162574 6.93525 0.256213 6.84888 0.371565C4.93847 2.91551 0 6.53485 0 12.4696C0.016115 14.4723 0.823009 16.3876 2.2449 17.798C3.66679 19.2085 5.58846 20 7.59128 20C9.59409 20 11.5158 19.2085 12.9377 17.798C14.3595 16.3876 15.1664 14.4723 15.1826 12.4696C15.1826 6.53485 10.2441 2.91551 8.33367 0.371565Z" fill="#32AC5E" />
                        </svg></div>
                        <div>Clientes</div>
                    </a>
                    <div data-hover="false" data-delay={0} className="dropdown-3 w-dropdown">
                        <div className="dropdown-toggle-2 w-dropdown-toggle">
                        <div className="div-block-582">
                            <div className="html-embed-2 w-embed"><svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.33367 0.371565C8.2473 0.256213 8.13523 0.162574 8.00637 0.0980772C7.8775 0.0335803 7.73538 0 7.59128 0C7.44717 0 7.30505 0.0335803 7.17618 0.0980772C7.04732 0.162574 6.93525 0.256213 6.84888 0.371565C4.93847 2.91551 0 6.53485 0 12.4696C0.016115 14.4723 0.823009 16.3876 2.2449 17.798C3.66679 19.2085 5.58846 20 7.59128 20C9.59409 20 11.5158 19.2085 12.9377 17.798C14.3595 16.3876 15.1664 14.4723 15.1826 12.4696C15.1826 6.53485 10.2441 2.91551 8.33367 0.371565Z" fill="#32AC5E" />
                            </svg></div>
                            <div className="text-block-190">Rutas</div>
                        </div>
                        <div className="icon-3 w-icon-dropdown-toggle" />
                        </div>
                        <nav className="dropdown-list-3 w-dropdown-list">
                        <a href="#" className="dropdown-link-2 w-dropdown-link">Crear rutas</a>
                        <a href="#" className="dropdown-link-2 w-dropdown-link">Editar rutas</a>
                        <a href="#" className="dropdown-link-3 w-dropdown-link">Administrar rutas</a>
                        </nav>
                    </div>
                    <a href="admin-rutas.html" className="nav-link-2 w-inline-block">
                        <div className="embed-icon w-embed"><svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.33367 0.371565C8.2473 0.256213 8.13523 0.162574 8.00637 0.0980772C7.8775 0.0335803 7.73538 0 7.59128 0C7.44717 0 7.30505 0.0335803 7.17618 0.0980772C7.04732 0.162574 6.93525 0.256213 6.84888 0.371565C4.93847 2.91551 0 6.53485 0 12.4696C0.016115 14.4723 0.823009 16.3876 2.2449 17.798C3.66679 19.2085 5.58846 20 7.59128 20C9.59409 20 11.5158 19.2085 12.9377 17.798C14.3595 16.3876 15.1664 14.4723 15.1826 12.4696C15.1826 6.53485 10.2441 2.91551 8.33367 0.371565Z" fill="#32AC5E" />
                        </svg></div>
                        <div>Rutas</div>
                    </a>
                    <a href="vehiculos.html" className="nav-link-2 w-inline-block">
                        <div className="embed-icon w-embed"><svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.33367 0.371565C8.2473 0.256213 8.13523 0.162574 8.00637 0.0980772C7.8775 0.0335803 7.73538 0 7.59128 0C7.44717 0 7.30505 0.0335803 7.17618 0.0980772C7.04732 0.162574 6.93525 0.256213 6.84888 0.371565C4.93847 2.91551 0 6.53485 0 12.4696C0.016115 14.4723 0.823009 16.3876 2.2449 17.798C3.66679 19.2085 5.58846 20 7.59128 20C9.59409 20 11.5158 19.2085 12.9377 17.798C14.3595 16.3876 15.1664 14.4723 15.1826 12.4696C15.1826 6.53485 10.2441 2.91551 8.33367 0.371565Z" fill="#32AC5E" />
                        </svg></div>
                        <div>Vehiculos</div>
                    </a>
                    <a href="materiales.html" className="nav-link-2 w-inline-block">
                        <div className="embed-icon w-embed"><svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.33367 0.371565C8.2473 0.256213 8.13523 0.162574 8.00637 0.0980772C7.8775 0.0335803 7.73538 0 7.59128 0C7.44717 0 7.30505 0.0335803 7.17618 0.0980772C7.04732 0.162574 6.93525 0.256213 6.84888 0.371565C4.93847 2.91551 0 6.53485 0 12.4696C0.016115 14.4723 0.823009 16.3876 2.2449 17.798C3.66679 19.2085 5.58846 20 7.59128 20C9.59409 20 11.5158 19.2085 12.9377 17.798C14.3595 16.3876 15.1664 14.4723 15.1826 12.4696C15.1826 6.53485 10.2441 2.91551 8.33367 0.371565Z" fill="#32AC5E" />
                        </svg></div>
                        <div>Materiales</div>
                    </a>
                    </div>
                </div>
                <a href="#" className="help-center w-inline-block">
                    <div className="hc-wrap"><img src="images/img-persona.webp" loading="lazy" alt className="hc-icon" />
                    <div className="hc-info">
                        <div className="hc-info_h">Jose miguel</div>
                        <div className="hc-info_label">Cargo</div>
                    </div>
                    </div>
                    <div className="embed-icon w-embed"><svg width={7} height={11} viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1669_50)">
                        <path d="M1.41602 1.41602L5.58268 5.58268L1.41602 9.74935" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                        <clipPath id="clip0_1669_50">
                            <rect width={7} height={11} fill="white" />
                        </clipPath>
                        </defs>
                    </svg></div>
                </a>
                </div>
                <div className="nav-spacer" />
                <div className="nav-shadow" />
            </div>
            <div className="content-2">
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
                <div className="footer-k2">
                <div>
                    <div className="div-block-498">
                    <div className="div-block-503">
                        <div id="w-node-_99310552-82ee-bc04-f73c-bd9ce167ced9-c02c9406" className="div-block-508">
                        <div>
                            <div className="text-block-156"><strong>SOMOS RECICLAR</strong></div>
                            <div className="div-block-504 div-block-505 div-block-506 div-block-507">
                            <a href="index.html" className="link-f">Inicio</a>
                            <a href="quienes-somos.html" className="link-f">Quienes somos</a>
                            <a href="servicios.html" className="link-f">Servicios</a>
                            <a href="contacto.html" className="link-f">Contacto</a>
                            </div>
                        </div>
                        </div>
                        <div id="w-node-_228294de-25d4-d4c5-6b8b-12126d77c679-c02c9406" className="div-block-508">
                        <div>
                            <div className="text-block-156"><strong>APRENDE A RECICLAR</strong></div>
                            <div className="div-block-504 div-block-505 div-block-506 div-block-507">
                            <a href="metodos-de-reciclaje.html" className="link-f">Método de reciclar</a>
                            <a href="haz-parte-de-nosotros.html" className="link-f">Haz parte de nosotros</a>
                            <a href="soporte-social.html" className="link-f">Soporte social</a>
                            <a href="aprendemos-del-planeta.html" className="link-f">Aprendamos del planeta</a>
                            </div>
                        </div>
                        </div>
                        <div id="w-node-f232ebe7-a354-8c55-ceb7-757f7bdf5db1-c02c9406" className="div-block-508">
                        <div>
                            <div className="text-block-156"><strong>PERFIL</strong></div>
                            <div className="div-block-504 div-block-505 div-block-506 div-block-507">
                            <a href="iniciar-sesion.html" className="link-f">Iniciar sesión</a>
                            <a href="record-de-reciclaje.html" className="link-f">Récord de reciclaje</a>
                            <a href="perfil-usuario.html" className="link-f">Perfil Usuario</a>
                            <a href="perfil-recicladores.html" className="link-f">Perfil Administrador</a>
                            </div>
                        </div>
                        </div>
                        <div id="w-node-ed99cb5a-1fab-6049-650f-ec63993a6567-c02c9406" className="div-block-508">
                        <div>
                            <div className="text-block-156"><strong>LEGAL</strong></div>
                            <div className="div-block-504 div-block-505 div-block-506 div-block-507">
                            <a href="nota-legal.html" className="link-f">Nota legal</a>
                            <a href="politica-de-cookies.html" className="link-f">Politica de cookies</a>
                            <a href="#" className="link-f hide">Text Link</a>
                            <a href="#" className="link-f hide">Text Link</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="footer">
                    <div className="div-block-38">
                        <div className="div-block-34">
                        <div className="div-block-36"><img src="images/miniam_01b.webp" loading="lazy" alt className="image-12" /></div>
                        <div className="div-block-37"><img src="images/miniam_02b.webp" loading="lazy" alt className="image-12" /></div>
                        <div><img src="images/vigilado_ssp-300x127b.webp" loading="lazy" alt className="image-12" /></div>
                        </div>
                        <div className="div-block-39">
                        <div className="text-block-5">Copyright © 2022 Reciiclar ESP</div>
                        </div>
                    </div>
                    <div className="div-block-35">
                        <div className="div-block-40"><img src="images/Logo_Oficial_reciiclar_blanco.svg" loading="lazy" alt className="image-13" /></div>
                        <div className="div-block-42">
                        <div className="div-block-41"><img src="images/youtube.webp" loading="lazy" alt className="image-14" /></div>
                        <div className="div-block-41"><img src="images/facebook.webp" loading="lazy" alt className="image-14" /></div>
                        <div className="div-block-41"><img src="images/instagram.webp" loading="lazy" alt className="image-14" /></div>
                        </div>
                        <div className="wrapper-social">
                        <a href="https://twitter.com/Tycreated" target="_blank" className="social-icon w-inline-block">
                            <div className="button-text">TW</div>
                            <div className="circle-link-hover" /><img src="images/Group-12.svg" loading="lazy" alt className="image-87" />
                        </a>
                        <a href="https://www.instagram.com/tycreated/" target="_blank" className="social-icon w-inline-block">
                            <div className="button-text">IG</div>
                            <div className="circle-link-hover" /><img src="images/Vector_1.svg" loading="lazy" alt className="image-86" />
                        </a>
                        <a href="https://twitter.com/Tycreated" target="_blank" className="social-icon w-inline-block">
                            <div className="button-text">FB</div>
                            <div className="circle-link-hover" /><img src="images/Group-13.svg" loading="lazy" alt className="image-88" />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="div-block-43"><img src="images/Powered_by_K2.webp" loading="lazy" alt sizes="(max-width: 767px) 100vw, 80vw" srcSet="images/Powered_by_K2-p-500.png 500w, images/Powered_by_K2-p-800.png 800w, images/Powered_by_K2-p-1080.png 1080w, images/Powered_by_K2-p-1600.png 1600w, images/Powered_by_K2-p-2000.png 2000w, images/Powered_by_K2.webp 2104w" className="image-15" /></div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
                            </div>
    );
}
