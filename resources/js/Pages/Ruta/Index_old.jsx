import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import './../../../css/normalize.css';
import './../../../css/reciclar.webflow.css';
import './../../../css/webflow.css';
import './../../../css/admin-perfil.css';

export default function Dashboard({ auth }) {

    //Logica Js

    const registrarMaterial = (e) => {
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
            <div className="div-block-575">
                <div className="container-2">
                <div className="mobile-nav">
                    <a href="#" className="logo-link mobile w-inline-block"><img src="images/logo-reciclar.svg" loading="lazy" alt className="logo" /></a>
                    <div data-w-id="b3e5de0d-d105-a27c-6479-2c5e5a399315" className="hamburger">
                    <div data-w-id="b3e5de0d-d105-a27c-6479-2c5e5a399316" className="hamburger-line top" />
                    <div data-w-id="b3e5de0d-d105-a27c-6479-2c5e5a399317" className="hamburger-line middle" />
                    <div data-w-id="b3e5de0d-d105-a27c-6479-2c5e5a399318" className="hamburger-line bot" />
                    </div>
                </div>
                <div className="wrapper-2">
                    <div data-w-id="b3e5de0d-d105-a27c-6479-2c5e5a39931a" className="nav-wrap">
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
                    <div className="bg-ruta-interior sizem">
                        <h1 className="heading-47">Nuevo Material</h1>
                        <div>
                        <div className="w-form">
                            <form id="email-form" name="email-form" data-name="Email Form" method="get">
                            <div className="div-block-591"><img src="images/foto-material.png" loading="lazy" alt /></div>
                            <div className="div-block-554">
                                <div className="div-block-551">
                                <div className="div-block-552"><label htmlFor="name-4" className="field-label-13 labelsize d n-r">Nombre de Material:</label><input type="text" className="campo-rutas hide w-input" maxLength={256} name="name-4" data-name="Name 4" placeholder id="name-4" required />
                                    <div className="div-block-574"><input type="text" className="campo-rutas w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder="Nombre Material*" id="name-2" required /></div>
                                </div>
                                <div className="div-block-552 hidespace"><label htmlFor="field" className="field-label-13 t-s-c"><strong>Estado:</strong></label><select id="field" name="field" data-name="Field" className="select-c campo-rutas w-select">
                                    <option value="Estado de Material*">Estado de Material*</option>
                                    </select></div>
                                </div>
                                <div className="div-block-551">
                                <div className="div-block-552"><label htmlFor="name-3" className="field-label-13 t-s-c">Unidad de medida:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder="Unidad de medida*" id="name-3" required /></div>
                                <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13">Precio:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder="Precio*" id="name-2" required /></div>
                                </div>
                                <div className="div-block-551">
                                <div className="div-block-552"><label htmlFor="name-3" className="field-label-13 t-s-c">Código de Material:</label><input type="text" className="campo-rutas w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder="Codigo*" id="name-3" required /></div>
                                <div className="div-block-552 hidespace"><label htmlFor="name-2" className="field-label-13 hide">Ejemplo Campo:</label></div>
                                </div>
                                <div className="div-block-551">
                                <div className="div-block-552"><label htmlFor="field-3" className="field-label-13 t-s-c p">Descripción:</label><textarea placeholder="Descripción de material" maxLength={5000} id="field-3" name="field" data-name required className="text-a campo-rutas w-input" defaultValue={""} /></div>
                                </div>
                            </div>
                            <div className="div-block-554 hide-line">
                                <div className="div-block-577">
                                <a href="#" className="btn-rutas-enviar w-inline-block">
                                    <div className="text-block-187">Crea nuevo Material</div>
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

