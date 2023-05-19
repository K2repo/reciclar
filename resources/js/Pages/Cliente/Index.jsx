import '/resources/css/normalize.css';
import '/resources/css/reciclar.webflow.css';
import '/resources/css/webflow.css';
import '/resources/css/admin-perfil.css';
import '/resources/css/clientes-index.css';
import Dropdown from '@/Components/Dropdown';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayoutK2D from '@/Layouts/AuthenticatedLayoutK2D';

export default function Index(props) {
    console.log(props);
    const { data, setData, post, processing, errors, reset} = useForm({
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
            <h1 className="heading-47">Clientes</h1>
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
                <a href={route('clientes.create')} className="btn-nueva-r w-inline-block">
                <div className="div-block-585"><img src="images/cruz.svg" loading="lazy" width={38} alt /></div>
                <div className="text-block-191">Nuevo</div>
                </a>
            </div>

            <table className="table" style= {{ position:'relative', width:'100%', textAlign:'center', fontFamily: 'Nexa, sans-serif' }}>
                    <thead className="thead table-title ">
                        <tr>
                            <th className='fw-100' scope="col"><input type={'checkbox'}></input> Todos</th>
                            <th className='fw-100' scope="col">Nombre</th>
                            <th className='fw-100' scope="col">N° documento</th>
                            <th className='fw-100' scope="col">Estado</th>
                            <th className='fw-100' scope="col">Perfil</th>
                            <th className='fw-100' scope="col">Acciones</th>
                        </tr>
                    </thead><br />
                    <tbody style={{ marginTop:'2rem' }}>
                        { props.clientes.map((cliente,index) => {
                            return  <tr className = {(index===0)?'thead-reciclar-green-1':''}>
                                        <th><input type={'checkbox'} className='checkboxCliente' data-cliente={cliente.id}></input></th>
                                        <td>{cliente.name+" "+cliente.last_name}</td>
                                        <td>{cliente.numero_documento}</td>
                                        <td>{cliente.sw_estado ? <span className="text-success"> Activo </span> : <span className="text-danger"> Inactivo </span>}</td>
                                        <td>{cliente.es_cliente.cod_rol ? 'Cliente' : 'N/A'}</td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Trigger>
                                                    <button>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                                        </svg>
                                                    </button>
                                                </Dropdown.Trigger>
                                                <Dropdown.Content>
                                                    <a className='text-dark' href={route('clientes.edit',  cliente.id)}>Editar </a>
                                                    <Dropdown.Link as="button" href={route('clientes.destroy', cliente.id)} method="delete">
                                                        Eliminar
                                                    </Dropdown.Link>
                                                </Dropdown.Content>
                                            </Dropdown>
                                        </td>
                                    </tr>;
                            } )
                        }
                    </tbody>
                </table>
            {/* <a href="admin-perfil.html" className="link-block-2 w-inline-block"><img src="images/clientes.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 79vw, (max-width: 991px) 83vw, (max-width: 1279px) 72vw, (max-width: 1439px) 75vw, (max-width: 1919px) 81vw, 95vw" srcSet="images/clientes-p-500.png 500w, images/clientes-p-800.png 800w, images/clientes.png 937w" alt className="imagen-rutas" /></a> */}
            </div>

        </AuthenticatedLayoutK2D>
    );
}
