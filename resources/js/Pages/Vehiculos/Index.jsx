import '/resources/css/normalize.css';
import '/resources/css/reciclar.webflow.css';
import '/resources/css/webflow.css';
import '/resources/css/datatables.css';
import '/resources/css/vehiculos-index.css';
import $ from "jquery";
import '../../datatable';
import Dropdown from '@/Components/Dropdown';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayoutK2D from '@/Layouts/AuthenticatedLayoutK2D';

export default function Index(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        placa: '',
        sw_estado: '',
    });

    const submit = (e) => {
        e.preventDefault();
    };

    $(function () {
        var table = $('#tablaVehiculo').DataTable();
        marcarRegistroPrincipal();
        table.columns(1).every(function(){
            let that = this;
            $('input#BuscarPlaca').on('keyup change', function(){
                if (that.search() !== this.value) {
                    that.search(this.value).draw();
                    marcarRegistroPrincipal();
                }
            });
        });
        table.columns(4).every(function(){
            let that = this;
            $('select#BuscarEstado').on('keyup change', function(){
                if (that.search() !== this.value) {
                    that.search(this.value).draw();
                    marcarRegistroPrincipal();
                }
            });
        });
    });

    const marcarRegistroPrincipal = () => {
        $('#tablaVehiculo tbody tr').each(function(index){
            $(this).removeClass('thead-reciclar-green-1').removeClass('thead-reciclar-orange-1');
            if ((index % 2) == 0) {
                $(this).addClass('thead-reciclar-orange-1');
            }
        });
        $('#tablaVehiculo tbody tr:first').removeClass('thead-reciclar-orange-1').addClass('thead-reciclar-green-1');
    }

    return (
        <AuthenticatedLayoutK2D>
            <div className="bg-sombra-perfiles">
                <div className="text-block-169">Vehículos</div>
                <div className="div-block-568">
                    <div className="form-block-7 w-form">
                        <form onSubmit={submit}>
                            <div className="div-block-551">
                                <div className="div-block-552">
                                    <label htmlFor="Buscar-Placa" className="field-label-16">Placa:</label>
                                    <input type="text" className="campo-perfiles c-p-p w-input" maxLength={256} name="Buscar-Placa"
                                        data-name="Buscar Placa" placeholder="Buscar Placa" id="BuscarPlaca"/>
                                </div>
                                <div className="div-block-552">
                                    <label htmlFor="field" className="field-label-16">Filtrar por:</label>
                                    <select id="BuscarEstado" name="field" data-name="Field" className="select-field-2 c-p-p w-select">
                                        <option value="Activo">Activo</option>
                                        <option value="Inactivo">Inactivo</option>
                                    </select>
                                </div>
                                <div className="div-block-571">
                                    <a href="#" className="div-block-570 w-inline-block"><img src="images/buscar.png" loading="lazy"/></a>
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
                    <div className="div-block-584">
                        <a href={route('vehiculos.create')} className="btn-nueva-r w-inline-block">
                            <div className="div-block-585"><img src="images/cruz.svg" loading="lazy" width={38}/></div>
                            <div className="text-block-191">Nuevo vehiculo</div>
                        </a>
                    </div>
                </div>

                <div className="div-block-554">
                    <table id='tablaVehiculo' className="table" style={{ position: 'relative', width: '100%', textAlign: 'center', fontFamily: 'Nexa, sans-serif' }}>
                        <thead className="thead table-title ">
                            <tr>
                                <th className='fw-100' scope="col"><input type={'checkbox'}></input> Todos</th>
                                <th className='fw-100' scope="col">Placa</th>
                                <th className='fw-100' scope="col">Marca</th>
                                <th className='fw-100' scope="col">Modelo</th>
                                <th className='fw-100' scope="col">Estado</th>
                                <th className='fw-100' scope="col">Acciones</th>
                            </tr>
                        </thead><br />
                        <tbody style={{ marginTop: '2rem' }}>
                            {props.vehiculos.map((vehiculo, index) => {
                                return <tr>
                                    <th><input type={'checkbox'} className='checkboxVehiculo' data-vehiculo={vehiculo.id}></input></th>
                                    <td>{vehiculo.placa}</td>
                                    <td>{vehiculo.marca}</td>
                                    <td>{vehiculo.modelo}</td>
                                    <td>{vehiculo.sw_estado ? <span className="text-success"> Activo </span> : <span className="text-danger"> Inactivo </span>}</td>
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
                                                <a type='button' className='block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 
                                                        hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out' 
                                                        href={route('vehiculos.edit', vehiculo.id)}>Editar </a>
                                                {vehiculo.sw_estado ? <Dropdown.Link as="button" href={route('vehiculos.destroy', vehiculo.id)} method="delete">
                                                    Eliminar
                                                </Dropdown.Link> : ''}
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </td>
                                </tr>;
                            })
                            }
                        </tbody>
                    </table>
                </div>
                {/* <a href="editar-vehiculos.html" className="div-block-530 w-inline-block"><img src="images/admin-vehiculos.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 87vw, (max-width: 1279px) 72vw, (max-width: 1439px) 75vw, (max-width: 1919px) 81vw, 1300px" srcSet="images/admin-vehiculos-p-500.png 500w, images/admin-vehiculos-p-800.png 800w, images/admin-vehiculos.png 949w" className="image-110" /></a> */}
            </div>
        </AuthenticatedLayoutK2D>
    );
}
