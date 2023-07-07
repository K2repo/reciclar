import '/resources/css/normalize.css';
import '/resources/css/reciclar.webflow.css';
import '/resources/css/webflow.css';
import '/resources/css/admin-perfil.css';
//import '/resources/css/materiales-index.css';
import SideBar from '@/Components//Reciclar/SideBar';
import FooterK2 from '@/Components//Reciclar/FooterK2';
import { useForm } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';

//import 'bootstrap/dist/css/bootstrap.css';

export default function Index({ user,auth,children }) {
console.log(user);

    return (
        <div>


            <div className="menu-all" style={{ background:'#FFFDED' }}>
                <div data-collapse="none" data-animation="default" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="mega-navbar w-nav">
                <div className="wrapper navbar-wrapper">
                    <div className="menu-wrapper">
                    <nav role="navigation" className="nav-menu w-nav-menu">
                        <div className="navigation-links">
                        <a href="#" className="nav-link w-inline-block">
                            <div className="nav-btn-text">RIDE</div>
                            <div className="nav-link-hover-button" />
                        </a>
                        <a href="#" className="nav-link w-inline-block">
                            <div className="nav-btn-text">STAY</div>
                            <div className="nav-link-hover-button" />
                        </a>
                        <a href="#" className="nav-link w-inline-block">
                            <div className="nav-btn-text">EAT</div>
                            <div className="nav-link-hover-button" />
                        </a>
                        <a href="#" className="nav-link bottom w-inline-block">
                            <div className="nav-btn-text">EXPLORE</div>
                            <div className="nav-link-hover-button" />
                        </a>
                        </div>
                    </nav>
                    <div className="w-nav-button">
                        <div className="w-icon-nav-menu" />
                    </div>
                    <div className="navigation-cover" />
                    </div>
                    <div className="mega-menu frost">
                    <div className="large-menu-wrapper">
                        <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de9281d-2de92802" className="projects-search-wrapper">
                        <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de9281e-2de92802" className="mega-social-wrapper" />
                        </div>
                        <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de9281f-2de92802" className="mega-category-list">
                        <div className="nav-menu-title-wrap">
                            <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92821-2de92802" className="text-block-83">SOMOS RECICLAR</div>
                        </div>
                        <div>
                            <div className="nav-collection-list w-dyn-list">
                            <div role="list" className="mega-menu-list-wrapper w-dyn-items">
                                <div role="listitem" className="menu-collection-list-item w-dyn-item" />
                            </div>
                            <div className="w-dyn-empty">
                                <div>No items found.</div>
                            </div>
                            </div>
                            <div className="mega-menu-list-wrapper">
                            <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de9282b-2de92802" className="menu-collection-list-item">
                                <a href="index.html" className="nav-item-img w-inline-block">
                                <div className="nav-item-text-wrap">
                                    <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de9282e-2de92802" className="nav-item-text">Inicio</div>
                                </div>
                                <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92830-2de92802" className="card-arrow-icon"><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" alt className="nav-link-icon" /></div>
                                <div className="nav-menu-item-img link-bg-1">
                                    <div className="nav-img-overlay" />
                                </div>
                                </a>
                            </div>
                            <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92834-2de92802" className="menu-collection-list-item">
                                <a href="quienes-somos.html" className="nav-item-img w-inline-block">
                                <div className="nav-item-text-wrap">
                                    <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92837-2de92802" className="nav-item-text">QUIENES SOMOS</div>
                                </div>
                                <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92839-2de92802" className="card-arrow-icon"><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" alt className="nav-link-icon" /></div>
                                <div className="nav-menu-item-img link-bg-2">
                                    <div className="nav-img-overlay" />
                                </div>
                                </a>
                            </div>
                            <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de9283d-2de92802" className="menu-collection-list-item">
                                <a href="servicios.html" className="nav-item-img w-inline-block">
                                <div className="nav-item-text-wrap">
                                    <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92840-2de92802" className="nav-item-text">SERVICIOS</div>
                                </div>
                                <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92842-2de92802" className="card-arrow-icon"><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" alt className="nav-link-icon" /></div>
                                <div className="nav-menu-item-img link-bg-3">
                                    <div className="nav-img-overlay" />
                                </div>
                                </a>
                            </div>
                            <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92846-2de92802" className="menu-collection-list-item">
                                <a href="contacto.html" className="nav-item-img w-inline-block">
                                <div className="nav-item-text-wrap">
                                    <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92849-2de92802" className="nav-item-text">CONTACTO</div>
                                </div>
                                <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de9284b-2de92802" className="card-arrow-icon"><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" alt className="nav-link-icon" /></div>
                                <div className="nav-menu-item-img link-bg-4">
                                    <div className="nav-img-overlay" />
                                </div>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de9284f-2de92802" className="mega-category-list middle">
                        <div className="nav-menu-title-wrap">
                            <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92851-2de92802" className="text-block-82">APRENDE SOBRE RECICLAR</div>
                        </div>
                        <div>
                            <div className="menu-collection-list-item">
                            <a href="metodos-de-reciclaje.html" className="nav-item-img w-inline-block">
                                <div className="nav-item-text-wrap">
                                <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92857-2de92802" className="nav-item-text">MÉTODOS DE RECICLAJE</div>
                                </div>
                                <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92859-2de92802" className="card-arrow-icon"><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" alt className="nav-link-icon" /></div>
                                <div className="nav-menu-item-img link-bg-5">
                                <div className="nav-img-overlay" />
                                </div>
                            </a>
                            </div>
                            <div className="menu-collection-list-item">
                            <a href="haz-parte-de-nosotros.html" className="nav-item-img w-inline-block">
                                <div className="nav-item-text-wrap">
                                <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92860-2de92802" className="nav-item-text">HAZ PARTE DE NOSOTROS</div>
                                </div>
                                <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92862-2de92802" className="card-arrow-icon"><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" alt className="nav-link-icon" /></div>
                                <div className="nav-menu-item-img link-bg-6">
                                <div className="nav-img-overlay" />
                                </div>
                            </a>
                            </div>
                            <div className="menu-collection-list-item">
                            <a href="soporte-social.html" className="nav-item-img w-inline-block">
                                <div className="nav-item-text-wrap">
                                <div id="w-node-_289e358b-0c68-2a6d-02ae-6d804e46cae0-2de92802" className="nav-item-text">SOPORTE SOCIAL</div>
                                </div>
                                <div id="w-node-_289e358b-0c68-2a6d-02ae-6d804e46cae2-2de92802" className="card-arrow-icon"><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" alt className="nav-link-icon" /></div>
                                <div className="nav-menu-item-img link-bg-7">
                                <div className="nav-img-overlay" />
                                </div>
                            </a>
                            </div>
                            <div className="menu-collection-list-item">
                            <a href="aprendemos-del-planeta.html" className="nav-item-img w-inline-block">
                                <div className="nav-item-text-wrap">
                                <div id="w-node-_57770324-bca3-9a63-71bc-461bb7260750-2de92802" className="nav-item-text">Aprendamos del planeta</div>
                                </div>
                                <div id="w-node-_57770324-bca3-9a63-71bc-461bb7260752-2de92802" className="card-arrow-icon"><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" alt className="nav-link-icon" /></div>
                                <div className="nav-menu-item-img link-bg-7">
                                <div className="nav-img-overlay" />
                                </div>
                            </a>
                            </div>
                            <div className="menu-collection-list-item">
                            <a href="#" className="nav-item-img hidden w-inline-block">
                                <div className="nav-item-text-wrap">
                                <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92872-2de92802" className="nav-item-text">PARTY&nbsp;ON</div>
                                </div>
                                <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92874-2de92802" className="card-arrow-icon"><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" alt className="nav-link-icon" /></div>
                                <div className="nav-menu-item-img link-bg-8 hidden">
                                <div className="nav-img-overlay" />
                                </div>
                            </a>
                            </div>
                        </div>
                        <div className="nav-button-wrap" />
                        </div>
                        <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92879-2de92802" className="mega-category-list">
                        <div className="nav-menu-title-wrap">
                            <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de9287b-2de92802">PERFIL</div>
                        </div>
                        <div>
                            <div className="menu-collection-list-item">
                            <a href="iniciar-sesion.html" aria-current="page" className="nav-list-item w-inline-block w--current">
                                <div className="nav-item-text-wrap">
                                <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92881-2de92802" className="nav-item-text">iniciar sesion</div>
                                </div><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92883-2de92802" alt className="list-item-arrow" />
                            </a>
                            </div>
                            <div className="menu-collection-list-item">
                            <a href="record-de-reciclaje.html" className="nav-list-item w-inline-block">
                                <div className="nav-item-text-wrap">
                                <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92887-2de92802" className="nav-item-text">record de reciclaje</div>
                                </div><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92889-2de92802" alt className="list-item-arrow" />
                            </a>
                            </div>
                            <div className="menu-collection-list-item">
                            <a href="#" className="nav-list-item w-inline-block">
                                <div className="nav-item-text-wrap">
                                <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de9288d-2de92802" className="nav-item-text">perfil</div>
                                </div><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de9288f-2de92802" alt className="list-item-arrow" />
                            </a>
                            </div>
                            <div className="menu-collection-list-item">
                            <a href="#" className="nav-list-item hidden w-inline-block">
                                <div className="nav-item-text-wrap">
                                <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92893-2de92802" className="nav-item-text">PRICES</div>
                                </div><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de92895-2de92802" alt className="list-item-arrow" />
                            </a>
                            </div>
                        </div>
                        <div className="nav-button-wrap">
                            <div className="team-social-wrapper">
                            <a href="#" target="_blank" className="nav-social-icon w-inline-block"><img src="images/Group-12_1.svg" loading="lazy" alt /></a>
                            <a href="#" target="_blank" className="nav-social-icon w-inline-block"><img src="images/Vector_2.svg" loading="lazy" alt /></a>
                            <a href="#" className="nav-social-icon w-inline-block"><img src="images/Group-13_1.svg" loading="lazy" alt /></a>
                            </div>
                        </div>
                        </div>
                        <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de9289e-2de92802" className="tablet-mobile-menu">
                        <div data-hover="false" data-delay={1300} id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de9289f-2de92802" className="dropdown top w-dropdown">
                            <div className="dropdown-toggle w-dropdown-toggle">
                            <div className="dropdown-title">Somos reciclar</div>
                            <div data-is-ix2-target={1} className="dropdown-lottie" data-w-id="592e0127-88ff-b8c0-6742-ef2a2de928a3" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/60ad127873176443b92d1c72/60ad127973176483e12d1cbb_dropdown-easey.json" data-loop={0} data-direction={1} data-autoplay={0} data-renderer="svg" data-default-duration={2} data-duration={0} data-ix2-initial-state={50} />
                            </div>
                            <nav className="dropdown-list w-dropdown-list">
                            <a href="index.html" className="nav-list-item nav-layout w-inline-block">
                                <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de928a6-2de92802" className="text-block-84">Inicio</div><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de928a8-2de92802" alt className="list-item-arrow" />
                            </a>
                            <a href="quienes-somos.html" className="nav-list-item nav-layout w-inline-block">
                                <div className="text-block-85">Quienes somos</div><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de928ac-2de92802" alt className="list-item-arrow" />
                            </a>
                            <a href="servicios.html" className="nav-list-item nav-layout w-inline-block">
                                <div className="text-block-86">servicios</div><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de928b0-2de92802" alt className="list-item-arrow" />
                            </a>
                            <a href="contacto.html" className="nav-list-item nav-layout w-inline-block">
                                <div className="text-block-87">contacto</div><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de928b4-2de92802" alt className="list-item-arrow" />
                            </a>
                            </nav>
                        </div>
                        <div data-hover="false" data-delay={1300} id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de928b5-2de92802" className="dropdown w-dropdown">
                            <div className="dropdown-toggle w-dropdown-toggle">
                            <div className="dropdown-title">Aprende <br />sobre reciclar</div>
                            <div data-is-ix2-target={1} className="dropdown-lottie" data-w-id="592e0127-88ff-b8c0-6742-ef2a2de928bb" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/60ad127873176443b92d1c72/60ad127973176483e12d1cbb_dropdown-easey.json" data-loop={0} data-direction={1} data-autoplay={0} data-renderer="svg" data-default-duration={2} data-duration={0} data-ix2-initial-state={50} />
                            </div>
                            <nav className="dropdown-list w-dropdown-list">
                            <a href="metodos-de-reciclaje.html" className="nav-list-item nav-layout w-inline-block">
                                <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de928be-2de92802" className="text-block-88">Métodos de reciclaje</div><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de928c0-2de92802" alt className="list-item-arrow" />
                            </a>
                            <a href="haz-parte-de-nosotros.html" className="nav-list-item nav-layout w-inline-block">
                                <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de928c2-2de92802" className="text-block-89">Haz parte de nosotros</div><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de928c4-2de92802" alt className="list-item-arrow" />
                            </a>
                            <a href="soporte-social.html" className="nav-list-item nav-layout w-inline-block">
                                <div className="text-block-90">Soporte social</div><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de928c8-2de92802" alt className="list-item-arrow" />
                            </a>
                            <a href="#" className="nav-list-item nav-layout hiden w-inline-block">
                                <div>PAGE 8</div><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de928cc-2de92802" alt className="list-item-arrow" />
                            </a>
                            </nav>
                        </div>
                        <div data-hover="false" data-delay={1300} id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de928cd-2de92802" className="dropdown w-dropdown">
                            <div className="dropdown-toggle w-dropdown-toggle">
                            <div className="dropdown-title">perfil</div>
                            <div data-is-ix2-target={1} className="dropdown-lottie" data-w-id="592e0127-88ff-b8c0-6742-ef2a2de928d1" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/60ad127873176443b92d1c72/60ad127973176483e12d1cbb_dropdown-easey.json" data-loop={0} data-direction={1} data-autoplay={0} data-renderer="svg" data-default-duration={2} data-duration={0} data-ix2-initial-state={50} />
                            </div>
                            <nav className="dropdown-list w-dropdown-list">
                            <a href="iniciar-sesion.html" aria-current="page" className="nav-list-item nav-layout w-inline-block w--current">
                                <div className="text-block-91">INICIAR SESIÓN</div><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de928d6-2de92802" alt className="list-item-arrow" />
                            </a>
                            <a href="record-de-reciclaje.html" className="nav-list-item nav-layout w-inline-block">
                                <div className="text-block-92">RÉCORD DE RECICLAJE</div><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de928da-2de92802" alt className="list-item-arrow" />
                            </a>
                            <a href="#" className="nav-list-item nav-layout w-inline-block">
                                <div className="text-block-93">PERFIL</div><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de928de-2de92802" alt className="list-item-arrow" />
                            </a>
                            <a href="#" className="nav-list-item nav-layout hiden w-inline-block">
                                <div>PAGE 10</div><img src="https://uploads-ssl.webflow.com/63d81f69840baf006c31ca79/63d81f69840baf200f31caa8_Arrow%20Right.svg" loading="lazy" id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de928e2-2de92802" alt className="list-item-arrow" />
                            </a>
                            </nav>
                        </div>
                        </div>
                        <div id="w-node-_592e0127-88ff-b8c0-6742-ef2a2de928e3-2de92802" className="tablet-mobile-nav-links" />
                    </div>
                    </div>
                    <div className="mega-menu-overlay" />
                </div>
                <div className="w-embed">
                    <style dangerouslySetInnerHTML={{__html: "\n                            .frost {\n                                backdrop - filter: blur(2em);\n                            -webkit-backdrop-filter: blur(2em);\n}\n                        " }} />
                </div>
                </div>
                <div className="menu">
                <div className="glass" />
                <div className="div-block-7">
                    <a href="index.html" className="div-block-364 w-inline-block"><img src="/images/logo-reciclar.svg" loading="lazy" alt className="image-3" /></a>
                </div>


                <div className="left-navbar frost">
                        <img src="/images/logo_menu_dashboard.svg" loading="lazy" alt className="full-menu-button" />

                        {/* <div data-w-id="592e0127-88ff-b8c0-6742-ef2a2de928eb" className="full-menu-button">
                        <div data-is-ix2-target={1} className="menu-lottie" data-w-id="592e0127-88ff-b8c0-6742-ef2a2de928ec" data-animation-type="lottie" data-src="documents/lottie-menu.json" data-loop={0} data-direction={1} data-autoplay={0} data-renderer="svg" data-default-duration={6} data-duration={0} data-ix2-initial-state={40} />
                        </div> */}

                        <div className="div-block-370">
                        <div style={{ position: 'relative',right: '100%' }}>{user.name}</div>
                        </div>

                        <img src="/images/Ellipse-3-user-default.svg" loading="lazy" alt className=""
                        style={{
                            position: 'relative',
                            right: '310%',
                            paddingTop: '5%',
                         }}
                         />


                        {/* <a href={route('profile.edit')}>Profile</a>
                        <a href={route('logout')} method="post" as="button">Log Out</a> */}



                    </div>

                </div>
            </div>






            <div>
                <div>
                    <div className="div-block-575">
                        <div className="container-2">
                            <div className="mobile-nav">
                                <a href="#" className="logo-link mobile w-inline-block"><img src="/images/logo-reciclar.svg" loading="lazy" className="logo" /></a>
                                <div data-w-id="b3e5de0d-d105-a27c-6479-2c5e5a399315" className="hamburger">
                                    <div data-w-id="b3e5de0d-d105-a27c-6479-2c5e5a399316" className="hamburger-line top" />
                                    <div data-w-id="b3e5de0d-d105-a27c-6479-2c5e5a399317" className="hamburger-line middle" />
                                    <div data-w-id="b3e5de0d-d105-a27c-6479-2c5e5a399318" className="hamburger-line bot" />
                                </div>
                            </div>



                            <div className="wrapper-2">

                                {/* SideBar  */}
                                <SideBar></SideBar>
                                <div className="content-2">
                                        {/* bg-ruta-interior */}
                                        <main>{children}</main>
                                    {/* footer-k2 */}
                                   <FooterK2></FooterK2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

