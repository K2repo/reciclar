import AuthenticatedLayoutK2D from '@/Layouts/AuthenticatedLayoutK2D';
import '/resources/css/dtablebase.css';
import '/resources/css/normalize.css';
import '/resources/css/reciclar.webflow.css';
import '/resources/css/webflow.css';
import '/resources/css/admin-perfil.css';
import '/resources/css/materiales-index.css';
import '/resources/css/perfilUsuario.css';
import '/resources/js/webflow.js';




export default function Dashboard(props) {

    //Logica Js

    console.log(props)

    /*const submitForm = (e) => {
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
    };*/







    return (
        <div user={props.auth.user}   >

            <div>
                {/* <div className="transition">
                    <div className="transition-trigger" />
                    <div className="transition-content">
                        <div className="transition-bg">
                            <div className="transition-color">
                                <div className="transition-color-border" />
                                <div className="div-block-360" />
                            </div>
                            <div data-is-ix2-target={1} className="transition-lottie" data-w-id="47a3d7ff-15bf-4d2d-0690-2d6d349ae32f" data-animation-type="lottie" data-src="documents/new-wave.json" data-loop={0} data-direction={1} data-autoplay={0} data-renderer="svg" data-default-duration="0.7333333333333333" data-duration={0} />
                        </div><img src="images/Logo_Oficial_reciiclar_blanco.svg" loading="lazy" alt className="transition-logo-img" />
                    </div>
                </div> */}
                <div className="div-block-213">
                    <div className="hero-perfil-u">
                        <div className="container-p-u">
                            <div className="bg-h-p">
                                <div className="div-block-203"><img src="images/gota_1.webp" loading="lazy" alt className="image-59" />
                                    <div className="div-block-204"><img src="images/Frame-2.webp" loading="lazy" alt className="image-60" /></div>
                                </div>
                                <div className="div-block-194">
                                    <div className="div-block-195">
                                        <div className="div-block-199">
                                            <h1 className="heading-21">Bienvenido</h1>
                                            <div className="text-block-31">{props.auth.user.name}</div>
                                            <div className="div-block-197">
                                                <div className="div-block-198"><img src="images/Vector.svg" loading="lazy" alt className="image-58" /></div>
                                                <div>
                                                    <div className="text-block-32">Usuario</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-block-196">
                                        <div className="div-block-268"><img src="images/codigo-qr.webp" loading="lazy" alt className="image-69" /></div>
                                    </div>
                                </div>
                                <div className="div-block-200">
                                    <div className="div-block-202">
                                        <div id="w-node-a4fac99f-2619-f50b-2fc4-b481870d6752-98a8cd36" className="div-block-205">
                                            <div className="form-block-3 w-form">
                                                <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form-2">
                                                    <div className="div-block-206">
                                                        <div className="div-block-208"><label htmlFor="name" className="field-label-2">CC o NIT:</label><input type="text" className="campo-perfil w-input" maxLength={256} name="name" data-name="Name" placeholder defaultValue={props.auth.user.numero_documento } id="name" required /></div>
                                                        <div className="div-block-207"><label htmlFor="email" className="field-label">Dirección:</label><input type="text" className="campo-perfil w-input" maxLength={256} name="email" data-name="Email" placeholder  defaultValue={props.auth.user.direccion_residencia }   id="email" required /></div>
                                                    </div>
                                                    <div className="div-block-206">
                                                        <div className="div-block-208"><label htmlFor="name-2" className="field-label-2">Código de usuario:</label><input type="text" className="campo-perfil w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder defaultValue={props.auth.user.id }  id="name-2" /></div>
                                                        <div className="div-block-207"><label htmlFor="email-2" className="field-label">Teléfono:</label><input type="tel" className="campo-perfil w-input" maxLength={256} name="email-2" data-name="Email 2" placeholder id="email-2" required defaultValue={props.auth.user.telefono } /></div>
                                                    </div>
                                                    <div className="div-block-206">
                                                        <div className="div-block-208"><label htmlFor="field" className="field-label-2">Departamento:</label><select id="field" name="field" data-name="Field" required className="select-field campo-perfil c w-select">
                                                            <option value="Quindio">Quindio</option>
                                                        </select></div>
                                                        <div className="div-block-207"><label htmlFor="email-2" className="field-label">Correo electrónico:</label><input type="email" className="campo-perfil w-input" maxLength={256} name="email-2" data-name="Email 2" placeholder id="email-2" required defaultValue={props.auth.user.email } /></div>
                                                    </div>
                                                    <div className="div-block-206">
                                                        <div className="div-block-208"><label htmlFor="field-2" className="field-label-2">Ciudad:</label><select id="field-2" name="field-2" data-name="Field 2" required className="select-field campo-perfil c w-select">
                                                            <option value="Armenia">Armenia</option>
                                                        </select></div>
                                                        <div className="div-block-207"><label htmlFor="email-2" className="field-label">Contraseña:</label><input type="password" className="campo-perfil w-input" maxLength={256} name="email-2" data-name="Email 2" placeholder id="email-2" required /></div>
                                                    </div>
                                                    {/* <input type="submit" defaultValue="Submit" data-wait="Please wait..." className="submit-button-4 w-button" /> */}
                                                </form>
                                                <div className="success-message-4 w-form-done">
                                                    <div className="text-block-95">¡Gracias! ¡Su solicitud ha sido recibida!</div>
                                                </div>
                                                <div className="error-message-3 w-form-fail">
                                                    <div className="text-block-96">¡Ups! Algo salió mal al enviar el formulario.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="div-block-342">
                                            <a href="#" className="div-block-341 w-inline-block">
                                                <div className="text-block-94">Enviar</div>
                                                <div className="div-block-343"><img src="images/h.webp" loading="lazy" alt className="image-83" /></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="div-block-209">
                                    <div><img src="images/editar.webp" loading="lazy" alt className="image-84" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-calendar">
                        <div className="content-calendar">
                            <div className="div-block-339">
                                <div className="div-block-210">
                                    <div className="div-block-212">
                                        <h2 className="heading-22">Programe su Recolección</h2>
                                        <div className="texto-p">Tienes programado la recogida de tu reciclaje: <span className="text-span-2">2 días al mes</span></div>
                                        <div className="texto-p">Próxima recogida: <span className="text-span-3">17 de Diciembre</span></div>
                                    </div>
                                </div>
                                <div className="div-block-211">
                                    <div className="card-flowbase">
                                        <div className="form-block-4 w-form">
                                            <form id="email-form" name="email-form" data-name="Email Form" method="get">
                                                <div className="form-line-break" />
                                                <div className="input-field-wrap">
                                                    <div className="field-wrap"><input type="text" className="text-field-left-icon w-input" autoComplete="off" maxLength={256} name="Date" data-name="Date" placeholder="Selecionar fecha" data-toggle="datepicker" id="Date" /><img loading="lazy" src="https://uploads-ssl.webflow.com/63d2f94a6f8ea2c7751291fa/63d2f9526f8ea221641293b1_Date.svg" alt className="field-icon" /></div>
                                                </div><input type="submit" defaultValue="Enviar" data-wait className="submit-button-5 w-button" />
                                            </form>
                                            <div className="success-message-3 w-form-done">
                                                <div>I guess its a date, you'll pick me up?</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-progreso">
                        <div className="container-progreso">
                            <div className="bg-progreso">
                                <div className="div-block-217">
                                    <div className="text-block-34">Tu progreso es de 5/10 en curso</div>
                                    <div className="text-block-35">Te mostraremos los porcentajes de materiales que has reciclado con nosotros:</div>
                                    <div className="div-block-214">


                                        {props.materiales_reciclados.map(material=>{
                                            console.log(material);
                                            return <div id="w-node-_5a799591-f23e-9a2a-85bc-7cc08078cbbc-98a8cd36" className="div-block-215">
                                            <div className="div-block-216"><img src={material.photo} loading="lazy" alt className="img-f" /></div>
                                            <div className="div-block-219">
                                                <div className="text-block-36">{material.nombre + ' ' + material.descripcion}:</div>
                                                <div className="text-block-37">{material.cantidad_recolectada} Kilos</div>
                                            </div>
                                            </div>;
                                        })}


                                        {/* <div id="w-node-_5a799591-f23e-9a2a-85bc-7cc08078cbbc-98a8cd36" className="div-block-215">
                                            <div className="div-block-216"><img src="images/papel.webp" loading="lazy" alt className="img-f" /></div>
                                            <div className="div-block-219">
                                                <div className="text-block-36">Papel:</div>
                                                <div className="text-block-37">86 Kilos</div>
                                            </div>
                                        </div>
                                        <div id="w-node-_7f49f8f0-a6a8-241d-5e52-1184559909e2-98a8cd36" className="div-block-215">
                                            <div className="div-block-216"><img src="images/Group-130.webp" loading="lazy" alt className="img-f" /></div>
                                            <div>
                                                <div className="text-block-36">Cartón:</div>
                                                <div className="text-block-37">86 Kilos</div>
                                            </div>
                                        </div>
                                        <div id="w-node-_41e9557d-b2f6-ee01-3345-b928d445f790-98a8cd36" className="div-block-215">
                                            <div className="div-block-216"><img src="images/Group-124.webp" loading="lazy" alt className="img-f" /></div>
                                            <div>
                                                <div className="text-block-36">Chatarra:</div>
                                                <div className="text-block-47">Metal Ferroso</div>
                                                <div className="text-block-37">86 Kilos</div>
                                            </div>
                                        </div>
                                        <div id="w-node-_751d4332-60a2-e52a-19ea-5b1a5060ddf8-98a8cd36" className="div-block-215">
                                            <div className="div-block-216"><img src="images/Group-135.webp" loading="lazy" alt className="img-f" /></div>
                                            <div>
                                                <div className="text-block-36">Chatarra:</div>
                                                <div className="text-block-47">Metal No Ferroso</div>
                                                <div className="text-block-37">86 Kilos</div>
                                            </div>
                                        </div>
                                        <div id="w-node-bb808c6d-28d8-1a38-43e0-9b0193971f77-98a8cd36" className="div-block-215">
                                            <div className="div-block-216"><img src="images/Group-129.webp" loading="lazy" alt className="img-f" /></div>
                                            <div>
                                                <div className="text-block-36">AUC:</div>
                                                <div className="text-block-47">Aceite Usado de Cocina:</div>
                                                <div className="text-block-37">86 Kilos</div>
                                            </div>
                                        </div>
                                        <div id="w-node-d7975abc-ed67-5579-9db9-a2eda80b0de1-98a8cd36" className="div-block-215">
                                            <div className="div-block-216"><img src="images/Group-136.webp" loading="lazy" alt className="img-f" /></div>
                                            <div>
                                                <div className="text-block-36">Plástico:</div>
                                                <div className="text-block-47">Pet</div>
                                                <div className="text-block-37">86 Kilos</div>
                                            </div>
                                        </div>
                                        <div id="w-node-f8c199d8-3d19-645e-cd2d-1ebc1b9ea2c3-98a8cd36" className="div-block-215">
                                            <div className="div-block-216"><img src="images/Group-134.webp" loading="lazy" alt className="img-f" /></div>
                                            <div>
                                                <div className="text-block-36">PP soplado:</div>
                                                <div className="text-block-37">86 Kilos</div>
                                            </div>
                                        </div>
                                        <div id="w-node-c31ffc13-6590-5482-6e65-3a992d6cbf03-98a8cd36" className="div-block-215">
                                            <div className="div-block-216"><img src="images/Group-128.webp" loading="lazy" alt className="img-f" /></div>
                                            <div>
                                                <div className="text-block-36">PL Bolsas</div>
                                                <div className="text-block-47">Plásticas:</div>
                                                <div className="text-block-37">86 Kilos</div>
                                            </div>
                                        </div>
                                        <div id="w-node-_5699866f-b204-b7f8-8eff-dbff105b4878-98a8cd36" className="div-block-215">
                                            <div className="div-block-216"><img src="images/Group-125.webp" loading="lazy" alt className="img-f" /></div>
                                            <div>
                                                <div className="text-block-36">Vidrio:</div>
                                                <div className="text-block-37">86 Kilos</div>
                                            </div>
                                        </div>
                                        <div id="w-node-c6c02032-c2ce-0e5b-6943-5f3f1cf4725f-98a8cd36" className="div-block-215">
                                            <div className="div-block-216"><img src="images/Group-133.webp" loading="lazy" alt className="img-f" /></div>
                                            <div>
                                                <div className="text-block-36">Plegadiza:</div>
                                                <div className="text-block-37">86 Kilos</div>
                                            </div>
                                        </div>
                                        <div id="w-node-_7c749267-11e5-0a9a-3315-d67b3f2b4bc4-98a8cd36" className="div-block-215">
                                            <div className="div-block-216"><img src="images/Group-127.webp" loading="lazy" alt className="img-f" /></div>
                                            <div className="div-block-218">
                                                <div className="text-block-36">Tetrapak:</div>
                                                <div className="text-block-37">86 Kilos</div>
                                            </div>
                                        </div>
                                        <div id="w-node-ece4957a-b35c-d352-cdb6-0a4d65decee8-98a8cd36" className="div-block-215">
                                            <div className="div-block-216"><img src="images/Group-126.webp" loading="lazy" alt className="img-f" /></div>
                                            <div>
                                                <div className="text-block-36">Reutilizables:</div>
                                                <div className="text-block-37">86 Kilos</div>
                                            </div>
                                        </div>
                                        <div id="w-node-_7a66c1ef-84a8-3135-f41a-940844d4ed0d-98a8cd36" className="div-block-215">
                                            <div className="div-block-216"><img src="images/Group-132.webp" loading="lazy" alt className="img-f" /></div>
                                            <div>
                                                <div className="text-block-36">Palos:</div>
                                                <div className="text-block-37">86 Kilos</div>
                                            </div>
                                        </div>
                                        <div id="w-node-_495a23d3-ea2d-bf50-00a0-ebb2d0751ed8-98a8cd36" className="div-block-215">
                                            <div className="div-block-216"><img src="images/Group-131.webp" loading="lazy" alt className="img-f" /></div>
                                            <div>
                                                <div className="text-block-36">Otros:</div>
                                                <div className="text-block-37">86 Kilos</div>
                                            </div>
                                        </div> */}



                                    </div>
                                </div>
                                <div className="linea-d" />
                                <div className="div-block-220">
                                    <div className="div-block-222">
                                        <div className="div-block-223"><img src="images/hoja.svg" loading="lazy" alt className="image-61" /></div>
                                        <div className="div-block-601">
                                            <div className="text-block-38">Tienes acumulados:</div>
                                            <div className="text-block-39">{props.meritos[0].numero_puntos} Méritos</div>
                                            {/* <div className="div-block-225">
                                                <div className="text-block-41">$223.500 en Meritos</div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="div-block-221">
                                        <div className="div-block-224">
                                            <div className="text-block-40">Cada botella, cada lata, cada papel que recicles cuenta. ¡Haz tu parte!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-puntuacion">
                        <div className="container-puntuacion">
                            <div className="div-block-226">
                                <div className="div-block-227">
                                    <div id="w-node-_31f759d1-2a32-27a7-dddb-47f3e6bbd3cb-98a8cd36" className="bg-pa">
                                        <div className="div-block-229">
                                            <div className="texto-d-p space">Tu puntuación es de</div>
                                            <div className="div-block-228">
                                                <div className="texto-puntaje">4,7</div>
                                                <div className="texto-puntaje">/</div>
                                                <div className="texto-puntaje">10</div>
                                            </div>
                                            <div className="texto-d-p s">Texto de ejemplo</div>
                                        </div>
                                        <a href="https://reciclar.webflow.io/ecommerce" className="btn-meritos w-inline-block">
                                            <div className="div-block-231"><img src="images/hojas_1.webp" loading="lazy" alt /></div>
                                            <div>
                                                <div className="text-block-45">Canjear Meritos</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div id="w-node-_386d4b44-ad1c-0379-48a0-d5e67d6eae09-98a8cd36" className="bg-pa">
                                        <div className="div-block-229">
                                            <div className="texto-d-p">Generación de objetivos</div>
                                            <div className="div-block-228">
                                                <div className="div-block-369"><img src="images/Capa-3.webp" loading="lazy" alt className="image-92" /></div>
                                                <div>
                                                    <div className="text-block-109">Huella de Carbono:</div>
                                                    <div className="text-block-110">Resultado Huella de Carbono</div>
                                                </div>
                                            </div>
                                            <div className="div-block-228">
                                                <div className="div-block-369"><img src="images/Capa-7.webp" loading="lazy" alt className="image-92" /></div>
                                                <div>
                                                    <div className="text-block-109">Ahorro de Agua:</div>
                                                    <div className="text-block-110">Resultado ahorro de agua</div>
                                                </div>
                                            </div>
                                            <div className="div-block-228">
                                                <div className="div-block-369"><img src="images/lightbuld-1.webp" loading="lazy" alt className="image-92" /></div>
                                                <div>
                                                    <div className="text-block-109">Ahorro de Energía:</div>
                                                    <div className="text-block-110">Resultado ahorro de energía</div>
                                                </div>
                                            </div>
                                            <div className="div-block-228">
                                                <div className="div-block-369"><img src="images/Capa-1.webp" loading="lazy" alt className="image-92" /></div>
                                                <div>
                                                    <div className="text-block-109">Árboles Salvados:</div>
                                                    <div className="text-block-110">Se han salvado 15 árboles</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="seccion-calltoaction">
                        <div className="bg-call-to">
                            <div className="div-block-234">
                                <div className="div-block-236">
                                    <div className="text-block-46">¿Tienes una duda, queja o reclamo?</div>
                                </div>
                            </div>
                            <div className="div-block-235">
                                <div>
                                    <a href="#" className="btn-meritos ancho w-inline-block">
                                        <div className="div-block-231"><img src="images/hojas_1.webp" loading="lazy" alt /></div>
                                        <div>
                                            <div className="text-block-45">Canjear Meritos</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="seccion-pdf">
                        <div className="container-pdf">
                            <div className="div-block-365">
                                <div className="text-block-106">Obtén tu certificado de Recolección y Aprovechamiento</div>
                                <div className="text-block-107">Ver aquí Informes detallados por año de Recolección general por Reciiclar</div>
                            </div>
                            <div className="div-block-366">
                                <div className="div-block-367">
                                    <div className="div-block-368"><img src="images/documento.webp" loading="lazy" alt className="image-91" /></div>
                                    <div>
                                        <div className="text-block-108">Descargar PDF</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div-block-232">
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
                                                <a href="perfil-usuario.html" aria-current="page" className="link-f w--current">Perfil Usuario</a>
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

    );
}
