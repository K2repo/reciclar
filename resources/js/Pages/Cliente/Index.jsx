import '/resources/css/normalize.css';
import '/resources/css/reciclar.webflow.css';
import '/resources/css/webflow.css';
import '/resources/css/admin-perfil.css';
import '/resources/css/datatables.css';
import '/resources/css/clientes-index.css';
import $ from "jquery";
import '../../datatable';
import Dropdown from '@/Components/Dropdown';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayoutK2D from '@/Layouts/AuthenticatedLayoutK2D';

export default function Index(props) {
    const { data, setData, post, processing, errors, reset} = useForm({
        nombre: '',
        estado: '',
        unidad_medida: '',
        codigo_material: '',
        descripcion: '',
        precio: 0
    });

    window.registrosSeleccionados = [];
    $(function () {
        var table = $('#tablaCliente').DataTable();
        marcarSeleccionados();
        marcarRegistroPrincipal();
        table.columns(1).every(function(){
            let that = this;
            $('input#BuscarCliente').on('keyup change', function(){
                if (that.search() !== this.value) {
                    that.search(this.value).draw();
                    marcarRegistroPrincipal();
                }
            });
        });
        table.columns(3).every(function(){
            let that = this;
            $('select#BuscarEstado').on('keyup change', function(){
                if (that.search() !== this.value) {
                    that.search(this.value).draw();
                    marcarRegistroPrincipal();
                }
            });
        });
    });

    const marcarSeleccionados = () => {
        // activar el evento del click del check de seleccionar todos.
        $(document).on("change", ".checkSeleccionarTodos", function () {
            let seleccionado = this.checked;
            $(".checkSeleccionado").each(function () {
                if (this.checked == seleccionado) {
                    return;
                }

                this.checked = seleccionado;
                $(this).trigger('change');
            });
        });

        $(document).on("change", ".checkSeleccionado", function () {
            let idRegistro = $(this).attr("data-registro");

            if (this.checked) {
                registrosSeleccionados.push(idRegistro);
            } else {
                registrosSeleccionados = registrosSeleccionados.filter((registro) => registro != idRegistro);
            }

            let cantidadChecks = $(`#tablaCliente .checkSeleccionado`).length;
            $(`#tablaCliente .checkSeleccionarTodos`).prop("checked", cantidadChecks === registrosSeleccionados.length);
        });
    }

    const marcarRegistroPrincipal = () => {
        $('#tablaCliente tbody tr').each(function(index){
            $(this).removeClass('thead-reciclar-green-1').removeClass('thead-reciclar-orange-1');
            if ((index % 2) == 0) {
                $(this).addClass('thead-reciclar-orange-1');
            }
        });
        $('#tablaCliente tbody tr:first').removeClass('thead-reciclar-orange-1').addClass('thead-reciclar-green-1');
    }

    return (
        <AuthenticatedLayoutK2D  user={props.auth.user}   >
            <div className="bg-sombra-materiales">
            <h1 className="heading-47">Clientes</h1>
            <div className="form-block-7 w-form">
                <form>
                    <div className="div-block-551">
                        <div className="div-block-552">
                            <label htmlFor="Buscar-Cliente" className="field-label-16">Buscar:</label>
                            <input type="text" className="campo-perfiles c-p-p w-input" maxLength={256} name="Buscar-Cliente"
                                data-name="Buscar Placa" placeholder="Ingrese el nombre" id="BuscarCliente"/>
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
                <a href={route('clientes.create')} className="btn-nueva-r w-inline-block">
                <div className="div-block-585"><img src="images/cruz.svg" loading="lazy" width={38}/></div>
                <div className="text-block-191">Nuevo</div>
                </a>
            </div>

            <div className="div-block-554">
                <table id='tablaCliente' className="table" style= {{ position:'relative', width:'100%', textAlign:'center', fontFamily: 'Nexa, sans-serif' }}>
                    <thead className="thead table-title ">
                        <tr>
                            <th><input type={'checkbox'} className='checkSeleccionarTodos'></input> Todos</th>
                            <th>Nombre</th>
                            <th>N° documento</th>
                            <th>Estado</th>
                            <th>Perfil</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody style={{ marginTop:'2rem' }}>
                        { props.clientes.map((cliente,index) => {
                            return  <tr>
                                        <th><input type={'checkbox'} className='checkSeleccionado' data-registro={cliente.id}></input></th>
                                        <td>{cliente.name+" "+cliente.last_name}</td>
                                        <td>{cliente.numero_documento.toLocaleString()}</td>
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
                                                    <a type='button' className='block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700
                                                        hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'
                                                        href={route('clientes.edit',  cliente.id)}>Editar</a>
                                                    {cliente.sw_estado ?
                                                    <Dropdown.Link as="button" href={route('clientes.destroy', cliente.id)} method="delete">
                                                        Eliminar
                                                    </Dropdown.Link> : ''}
                                                </Dropdown.Content>
                                            </Dropdown>
                                        </td>
                                    </tr>;
                            } )
                        }
                    </tbody>
                </table>
            </div>
            {/* <a href="admin-perfil.html" className="link-block-2 w-inline-block"><img src="images/clientes.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 79vw, (max-width: 991px) 83vw, (max-width: 1279px) 72vw, (max-width: 1439px) 75vw, (max-width: 1919px) 81vw, 95vw" srcSet="images/clientes-p-500.png 500w, images/clientes-p-800.png 800w, images/clientes.png 937w" className="imagen-rutas" /></a> */}
            </div>

        </AuthenticatedLayoutK2D>
    );
}
