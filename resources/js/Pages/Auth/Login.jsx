import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
//Reciclar
import '/resources/css/normalize.css';
import '/resources/css/reciclar.webflow.css';
import '/resources/css/webflow.css';
import '/resources/css/login-reciclar.css';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    return (

<div>
  <div className="menu-all">
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
        <a href="index.html" className="div-block-364 w-inline-block"><img src="images/logo-reciclar.svg" loading="lazy" alt className="image-3" /></a>
      </div>
      <div className="left-navbar frost">
        <div data-w-id="592e0127-88ff-b8c0-6742-ef2a2de928eb" className="full-menu-button">
          <div data-is-ix2-target={1} className="menu-lottie" data-w-id="592e0127-88ff-b8c0-6742-ef2a2de928ec" data-animation-type="lottie" data-src="documents/lottie-menu.json" data-loop={0} data-direction={1} data-autoplay={0} data-renderer="svg" data-default-duration={6} data-duration={0} data-ix2-initial-state={40} />
        </div>
        <div className="div-block-370">
          <div>Menu</div>
        </div>
      </div>
    </div>
  </div>
  <div className="transition" style={{display:'none'}}>
    <div className="transition-trigger" />
    <div className="transition-content" >
      <div className="transition-bg">
        <div className="transition-color">
          <div className="transition-color-border" />
          <div className="div-block-360" />
        </div>
        <div data-is-ix2-target={1} className="transition-lottie" data-w-id="47a3d7ff-15bf-4d2d-0690-2d6d349ae32f" data-animation-type="lottie" data-src="documents/new-wave.json" data-loop={0} data-direction={1} data-autoplay={0} data-renderer="svg" data-default-duration="0.7333333333333333" data-duration={0} />
      </div><img src="images/Logo_Oficial_reciiclar_blanco.svg" loading="lazy" alt className="transition-logo-img" />
    </div>
  </div>
  <div className="hero-login">
    <div className="content-login">
      <div className="left-i">
        <div className="bg-g-r">
          <div>
            <h1 className="heading">Iniciar sesión</h1>
          </div>
          <div className="div-block-69">
            <div className="div-block-346"><img src="images/Group-17.webp" loading="lazy" alt="SSL google" className="image-27" />
              <div className="lottie-animation-6" data-w-id="a8e49e32-9983-f0b0-0895-e8e345e903f2" data-animation-type="lottie" data-src="documents/ssl-g.json" data-loop={0} data-direction={1} data-autoplay={1} data-is-ix2-target={0} data-renderer="svg" data-default-duration={6} data-duration={0} />
            </div>
            <div><img src="images/Group-18.webp" loading="lazy" alt="SSL facebook" className="image-28" />
              <div className="lottie-animation-6" data-w-id="62bef3fe-70c9-7c1c-902c-d1eb166898e7" data-animation-type="lottie" data-src="documents/ssl-f.json" data-loop={0} data-direction={1} data-autoplay={1} data-is-ix2-target={0} data-renderer="svg" data-default-duration={6} data-duration={0} />
            </div>
          </div>
          <div className="div-block-71">
            <div className="w-form">









              <form id="email-form" name="email-form" data-name="Email Form" method="get" onSubmit={submit}>


              <input

                className="campo-i user w-input"
                maxLength={256}
                data-name="Name"
                placeholder="Usuario o Correo electrónico*"
                required
                id="email"
                type="email"
                name="email"
                value={data.email}
                autoComplete="username"
                isFocused={true}
                onChange={(e) => setData('email', e.target.value)}
              />


              <input

                className="campo-i w-input"
                maxLength={256}

                data-name="Email"
                placeholder="Contraseña*"

                required

                id="password"
                type="password"
                name="password"
                value={data.password}

                autoComplete="current-password"
                onChange={(e) => setData('password', e.target.value)}

              />



                <div className="text-r">¿Olvidaste la contraseña?</div>
                <div className="div-block-72"><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="submit-button-2 w-button" />
                  <div className="div-block-74">
                    <div className="div-block-75"><img src="images/h.webp" loading="lazy" alt className="image-30" /></div>
                    <div className="bg-w-i">
                      <div className="text-block-12">Iniciar sesión</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-c">¿No tienes una cuenta? Créala <a href="#" className="link">aquí</a>
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
      </div>
      <div className="div-block-68">
        <div className="div-block-70"><img src="images/hoja-login.webp" loading="lazy" sizes="(max-width: 767px) 300px, (max-width: 1439px) 50vw, (max-width: 1919px) 711px, 50vw" srcSet="images/hoja-login-p-500.png 500w, images/hoja-login.webp 711w" alt className="image-29" /></div>
      </div>
    </div>
  </div>
  <div className="w-embed"></div>
  <div className="div-block-103">
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
                  <a href="iniciar-sesion.html" aria-current="page" className="link-f w--current">Iniciar sesión</a>
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

            );
}
