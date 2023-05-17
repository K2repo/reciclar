import '/resources/css/normalize.css';
import '/resources/css/reciclar.webflow.css';
import '/resources/css/webflow.css';
import '/resources/css/vehiculos-index.css';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayoutK2D from '@/Layouts/AuthenticatedLayoutK2D';

export default function Index({ auth }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        nombre: '',
        estado: '',
        unidad_medida: '',
        codigo_material: '',
        descripcion: '',
        precio: 0
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('chirps.store'), { onSuccess: () => reset() });
    };


    return (
        <AuthenticatedLayoutK2D>
            <div className="bg-sombra-perfiles">
                <div className="text-block-169">Vehículos</div>
                <div className="div-block-568">
                    <div className="form-block-7 w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form-8">
                            <div className="div-block-569"><label htmlFor="Buscar-Placa" className="field-label-16">Placa:</label><input type="text" className="campo-perfiles c-p-p w-input" maxLength={256} name="Buscar-Placa" data-name="Buscar Placa" placeholder="Buscar Placa" id="Buscar-Placa" /></div>
                            <div className="div-block-569"><label htmlFor="field" className="field-label-16">Filtrar por:</label><select id="field" name="field" data-name="Field" className="select-field-2 c-p-p w-select">
                                <option value="Estado">Estado</option>
                            </select></div>
                            <div className="div-block-571">
                                <a href="#" className="div-block-570 w-inline-block"><img src="images/buscar.png" loading="lazy" alt /></a>
                            </div>
                        </form>
                        <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                    <div className="div-block-584">
                        <a href="crear-vehiculos.html" className="btn-nueva-r w-inline-block">
                            <div className="div-block-585"><img src="images/cruz.svg" loading="lazy" width={38} alt /></div>
                            <div className="text-block-191">Nuevo vehiculo</div>
                        </a>
                    </div>
                </div>
                <a href="editar-vehiculos.html" className="div-block-530 w-inline-block"><img src="images/admin-vehiculos.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 87vw, (max-width: 1279px) 72vw, (max-width: 1439px) 75vw, (max-width: 1919px) 81vw, 1300px" srcSet="images/admin-vehiculos-p-500.png 500w, images/admin-vehiculos-p-800.png 800w, images/admin-vehiculos.png 949w" alt className="image-110" /></a>
            </div>
        </AuthenticatedLayoutK2D>
    );
}
