export default function SideBar(props) {
    return (
        <div data-w-id="b3e5de0d-d105-a27c-6479-2c5e5a39931a" className="nav-wrap">
            <div className="nav">
                <div className="nav-top">
                    <a href="#" className="logo-link w-inline-block"><img src="/images/logo-reciclar.svg" loading="lazy" width={120} alt={""} className="logo" /></a>
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


                        <a href={route('clientes.index')}  className="nav-link-2 w-inline-block">
                            <div className="embed-icon w-embed"><svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.33367 0.371565C8.2473 0.256213 8.13523 0.162574 8.00637 0.0980772C7.8775 0.0335803 7.73538 0 7.59128 0C7.44717 0 7.30505 0.0335803 7.17618 0.0980772C7.04732 0.162574 6.93525 0.256213 6.84888 0.371565C4.93847 2.91551 0 6.53485 0 12.4696C0.016115 14.4723 0.823009 16.3876 2.2449 17.798C3.66679 19.2085 5.58846 20 7.59128 20C9.59409 20 11.5158 19.2085 12.9377 17.798C14.3595 16.3876 15.1664 14.4723 15.1826 12.4696C15.1826 6.53485 10.2441 2.91551 8.33367 0.371565Z" fill="#32AC5E" />
                            </svg></div>
                            <div>Clientes</div>
                        </a>
                        <a href={route('rutas.index')} className="nav-link-2 w-inline-block">
                            <div className="embed-icon w-embed"><svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.33367 0.371565C8.2473 0.256213 8.13523 0.162574 8.00637 0.0980772C7.8775 0.0335803 7.73538 0 7.59128 0C7.44717 0 7.30505 0.0335803 7.17618 0.0980772C7.04732 0.162574 6.93525 0.256213 6.84888 0.371565C4.93847 2.91551 0 6.53485 0 12.4696C0.016115 14.4723 0.823009 16.3876 2.2449 17.798C3.66679 19.2085 5.58846 20 7.59128 20C9.59409 20 11.5158 19.2085 12.9377 17.798C14.3595 16.3876 15.1664 14.4723 15.1826 12.4696C15.1826 6.53485 10.2441 2.91551 8.33367 0.371565Z" fill="#32AC5E" />
                            </svg></div>
                            <div>Rutas</div>
                        </a>
                        <a href={route('vehiculos.index')}  className="nav-link-2 w-inline-block">
                            <div className="embed-icon w-embed"><svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.33367 0.371565C8.2473 0.256213 8.13523 0.162574 8.00637 0.0980772C7.8775 0.0335803 7.73538 0 7.59128 0C7.44717 0 7.30505 0.0335803 7.17618 0.0980772C7.04732 0.162574 6.93525 0.256213 6.84888 0.371565C4.93847 2.91551 0 6.53485 0 12.4696C0.016115 14.4723 0.823009 16.3876 2.2449 17.798C3.66679 19.2085 5.58846 20 7.59128 20C9.59409 20 11.5158 19.2085 12.9377 17.798C14.3595 16.3876 15.1664 14.4723 15.1826 12.4696C15.1826 6.53485 10.2441 2.91551 8.33367 0.371565Z" fill="#32AC5E" />
                            </svg></div>
                            <div>Vehiculos</div>
                        </a>
                        <a href={route('materiales.index')}  className="nav-link-2 w-inline-block">
                            <div className="embed-icon w-embed"><svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.33367 0.371565C8.2473 0.256213 8.13523 0.162574 8.00637 0.0980772C7.8775 0.0335803 7.73538 0 7.59128 0C7.44717 0 7.30505 0.0335803 7.17618 0.0980772C7.04732 0.162574 6.93525 0.256213 6.84888 0.371565C4.93847 2.91551 0 6.53485 0 12.4696C0.016115 14.4723 0.823009 16.3876 2.2449 17.798C3.66679 19.2085 5.58846 20 7.59128 20C9.59409 20 11.5158 19.2085 12.9377 17.798C14.3595 16.3876 15.1664 14.4723 15.1826 12.4696C15.1826 6.53485 10.2441 2.91551 8.33367 0.371565Z" fill="#32AC5E" />
                            </svg></div>
                            <div>Materiales</div>
                        </a>

                    </div>
                </div>
                <a href="#" className="help-center w-inline-block">
                    <div className="hc-wrap"><img src="/images/img-persona.webp" loading="lazy" alt={""} className="hc-icon" />
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
    );
}
