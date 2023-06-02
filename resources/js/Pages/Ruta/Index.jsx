//import '/resources/css/normalize.css';
//import '/resources/css/reciclar.webflow.css';
//import '/resources/css/webflow.css';
import '/resources/css/normalize.css';
import '/resources/css/reciclar.webflow.css';
import '/resources/css/webflow.css';
import '/resources/css/admin-perfil.css';
import '/resources/css/materiales-index.css';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayoutK2D from '@/Layouts/AuthenticatedLayoutK2D';


export default function Index(props) {

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
            <div className="bg-sombra-materiales">
                <h1 className="heading-47">Rutas</h1>
                <div className="form-block-7 w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form-8">
                    <div className="div-block-569"><label htmlFor="Buscar-Placa" className="field-label-16">Buscar:</label><input type="text" className="campo-perfiles c-p-p w-input" maxLength={256} name="Buscar-Placa" data-name="Buscar Placa" placeholder="Buscar Placa" id="Buscar-Placa" /></div>
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
                    <a href={route('rutas.create')} className="btn-nueva-r w-inline-block">
                    <div className="div-block-585"><img src="images/cruz.svg" loading="lazy" width={38} alt /></div>
                    <div className="text-block-191">Nueva ruta</div>
                    </a>
                </div>



                <table id='lista-materiales' className="table" style= {{ position:'relative', width:'100%', textAlign:'center', fontFamily: 'Nexa, sans-serif' }}>
                <thead className="thead table-title ">
                    <tr>
                    <th className='fw-100' scope="col">Todos</th>
                    <th className='fw-100' scope="col">Fecha</th>
                    <th className='fw-100' scope="col">Zona</th>
                    {/* <th className='fw-100' scope="col">Precio</th> */}
                     <th className='fw-100' scope="col">Recolector Asignado</th>
                    {/* <th className='fw-100' scope="col">Vigencia</th> */}
                    <th className='fw-100' scope="col">Horario</th>
                    <th className='fw-100' scope="col">Visita</th>
                    </tr>
                </thead>
                <tbody style={{ marginTop:'2rem' }}>
                    { props.materiales.map((material,index) => {
                        {/* return  <tr key={material.id} data-href={route('materiales.edit', material.id)}  className = {(index===0)?'thead-reciclar-green-1 clickable-row':'clickable-row'}> */}
                        return  <tr key={material.id} data-href={route('materiales.edit', material.id)}  className = {'clickable-row'}>
                                    <th><input type={'checkbox'}></input></th>
                                    {/* <td>{material.id}</td>
                                    <td>{material.nombre}</td>
                                    <td>{material.unidad_medida}</td>
                                    <td>{material.descripcion}</td>
                                    <td>{material.sw_estado === 1 ? <span className="text-success"> Activo </span> : <span className="text-danger"> Inhabilitado </span>  }</td> */}
                                </tr>;
                        })
                    }
                </tbody>
                </table>


                <a href="editar-rutas.html" className="w-inline-block"><img src="images/rutas.png" loading="lazy" sizes="100vw" srcSet="images/rutas-p-500.png 500w, images/rutas-p-800.png 800w, images/rutas.png 949w" alt className="imagen-rutas" /></a>










            </div>

        </AuthenticatedLayoutK2D>
    );
}
