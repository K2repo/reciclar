import '/resources/css/normalize.css';
import '/resources/css/reciclar.webflow.css';
import '/resources/css/webflow.css';
import '/resources/css/admin-perfil.css';
//import '/resources/css/materiales-index.css';
import SideBar from '@/Components//Reciclar/SideBar';
import FooterK2 from '@/Components//Reciclar/FooterK2';
import { useForm } from '@inertiajs/react';

export default function Index({ auth,children }) {

    return (
        <div>
            <div>
                <div>
                    <div className="div-block-575">
                        <div className="container-2">
                            <div className="mobile-nav">
                                <a href="#" className="logo-link mobile w-inline-block"><img src="/images/logo-reciclar.svg" loading="lazy" alt className="logo" /></a>
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

