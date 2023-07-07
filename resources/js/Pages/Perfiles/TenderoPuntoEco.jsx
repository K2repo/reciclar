import { useForm } from '@inertiajs/react';
import AuthenticatedLayoutK2D from '@/Layouts/AuthenticatedLayoutK2D';
import '/resources/css/dtablebase.css';
import '/resources/css/normalize.css';
import '/resources/css/reciclar.webflow.css';
import '/resources/css/webflow.css';
import '/resources/css/admin-perfil.css';
import '/resources/css/tenderoPuntoEco.css';
import $ from "jquery";
import DataTable from 'datatables.net-dt';
import 'bootstrap';
import moment from 'moment';
import '/resources/css/materiales-index.css';
import '/resources/css/dtablebase.css';
import Swal from 'sweetalert2';


let init = () => {

    $(".clickable-row").click(function () {
        window.location = $(this).data("href");
    });


    if ($.fn.DataTable.isDataTable('#lista-rutas')) {
        $("#lista-rutas").DataTable().clear()
        $("#lista-rutas").DataTable().destroy();
    }

    let table1 = new DataTable('#lista-rutas', {
        "dom": 'lrtip',
        language: {
            "processing": "Procesando...",
            "lengthMenu": "_MENU_",
            "zeroRecords": "No se encontraron resultados",
            "emptyTable": "Ningún dato disponible en esta tabla",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "search": "Buscar:",
            "infoThousands": ",",
            "loadingRecords": "Cargando...",
            "paginate": {
                "first": "Primero",
                "last": "Último",
                "next": "Siguiente",
                "previous": "Anterior"
            },
            "pageLength": {
                "_": "Mostrar %d filas",
                "-1": "Mostrar Todo"
            }
        },
    });


    if (document.getElementById("lista-rutas")) {
        document.getElementById("lista-rutas").classList.remove("dataTable");
    }


    /*if ($.fn.DataTable.isDataTable('#lista-materiales-recolectados')) {
        $("#lista-materiales-recolectados").DataTable().clear()
        $("#lista-materiales-recolectados").DataTable().destroy();
    }

    let table2 = new DataTable('#lista-materiales-recolectados', {
        "dom": 'lrtip',
        language: {
            "processing": "Procesando...",
            "lengthMenu": "_MENU_",
            "zeroRecords": "No se encontraron resultados",
            "emptyTable": "Ningún dato disponible en esta tabla",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "search": "Buscar:",
            "infoThousands": ",",
            "loadingRecords": "Cargando...",
            "paginate": {
                "first": "Primero",
                "last": "Último",
                "next": "Siguiente",
                "previous": "Anterior"
            },
            "pageLength": {
                "_": "Mostrar %d filas",
                "-1": "Mostrar Todo"
            }
        },
    });

    if (document.getElementById("lista-materiales-recolectados")) {
        document.getElementById("lista-materiales-recolectados").classList.remove("dataTable");
    }*/


    /*$('#Buscar-Placa').keyup(function () {
        table1.column('value').search().draw();
        //table.search(this.value).draw();
    })*/

}

export default function Index(props) {

    console.log(props)

    const { data, setData, post, processing, errors, reset } = useForm({
        materiales_recolectados: [],
        cod_ruta: 0,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('recoleccion_materiales.store'), {
            onSuccess: () => {

                //console.log(response);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'El material recolectado fue registrado exitosamente!',
                    showConfirmButton: false,
                    timer: 1500
                })

                setTimeout(()=>{
                    return window.location.href = './tenderoPuntoEco';
                }, 1000)
                //reset();
            }
        });
    };

    init();

    let materialesRecolectados = [];

    const cargarMaterialAListado = () => {

        let cargarMateriales = false;

        let rutaSeleccionada = [];
        $("input[name='rutaSeleccionada[]']:checked").each(function () {
            rutaSeleccionada.push(($(this).val()).toUpperCase());
        })

        console.log(rutaSeleccionada);
        //alert(rutaSeleccionada.length)

        if (rutaSeleccionada.length > 0) {

            if (rutaSeleccionada.length === 1) {
                cargarMateriales = true;
                //alert(rutaSeleccionada[0])
                data.cod_ruta = parseInt(rutaSeleccionada[0]);
                //setData('cod_ruta', parseInt(rutaSeleccionada[0]))
            } else {
                //alert('hay mas de una ruta')
                Swal.fire({
                    icon: 'error',
                    title: 'Hay mas de una ruta seleccionada!',
                    text: 'Marca una sola ruta por favor',
                    //footer: ''
                })
            }

        } else {
            //alert('seleccione ruta')
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Selecciona una ruta por favor',
                //footer: '<a href="">Why do I have this issue?</a>'
            })

        }


        if (cargarMateriales) {
            let material = document.getElementById('materialRecolectado').value.split(',');
            console.log(document.getElementById('materialRecolectado').value);
            let cantidad_recolectada = document.getElementById('cantidadRecolectada').value;
            cantidad_recolectada = isNaN(parseInt(cantidad_recolectada)) ? 0 : parseInt(cantidad_recolectada);

            if (cantidad_recolectada > 0) {
                materialesRecolectados.push(material);
                //str.split(',')
                data.materiales_recolectados = [...data.materiales_recolectados, { cod_material: parseInt(material[0]), cantidad: cantidad_recolectada }];
                //setData('materiales_recolectados', [...data.materiales_recolectados, { cod_material: parseInt(material[0]), cantidad: cantidad_recolectada }])
                console.log(materialesRecolectados);
                document.getElementById('container-listado-materiales-en-progreso').innerHTML +=
                    `<tr>
                <td className='fw-100' scope="col">${material[1]} </td>
                <td className='fw-100' scope="col">${cantidad_recolectada}</td>
                </tr>`;


                /*document.getElementById('container-listado-materiales-en-progreso-ultimo').innerHTML =
                `<div className="div-block-548">
                <div className="text-block-175">${material}: </div>
                <div className="text-block-175">${cantidad_recolectada} Kilos</div>
                </div>`;*/

                document.getElementById('container-listado-materiales-en-progreso-ultimo-material').innerText = material[1] + ': ';
                document.getElementById('container-listado-materiales-en-progreso-ultimo-cantidad').innerText = cantidad_recolectada + ' Kilos';
                //alert('cargar material' + material + cantidad_recolectada)

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingresa la cantidad recolectada del material',
                    //footer: '<a href="">Why do I have this issue?</a>'
                })
            }

        }




    }

    //document.getElementById('container-listado-materiales-en-progreso').addEventListener('click', function(){

    //})

    return (
        <AuthenticatedLayoutK2D user={props.auth.user}   >

            <div>
                <div className="div-block-540">
                    <div className="bg-perfil-u">
                        <div className="text-block-170">Ekoméritos</div>
                        <div className="div-block-531">
                            <div id="w-node-_40588ff8-a02b-d8ee-dcf6-7bcfdbd02579-5b71bad0" className="div-block-532">
                                <div className="div-block-533">
                                    <div className="div-block-535"><img src="images/oso.png" loading="lazy" alt className="image-111" />
                                    </div>
                                </div>
                                <div className="div-block-534"><img src="images/cambiar-foto.png" loading="lazy" alt className="image-112" /></div>
                            </div>
                            <div className="w-form">
                                <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form-5">
                                    <div className="div-block-539">
                                        <div className="div-block-538">
                                            <div className="div-block-536">
                                                <div className="div-block-537"><label htmlFor="name" className="field-label-11">Nombres:</label><input type="text" className="campo-perfil-admin w-input" maxLength={256} name="name" data-name="Name" placeholder id="name" required defaultValue={props.auth.user.name} /></div>
                                                <div className="div-block-537"><label htmlFor="name-2" className="field-label-11">Apellidos:</label><input type="text" className="campo-perfil-admin w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" required defaultValue={props.auth.user.last_name} /></div>
                                                <div className="div-block-537"><label htmlFor="field-3" className="field-label-11">Rol:</label><input defaultValue={'Ekoméritos'} id="field-3" name="field-3" data-name="Field 3" required className="selecion campo-perfil-admin w-select" /><input type="text" className="campo-perfil-admin hide w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" /></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="div-block-536">
                                                <div className="div-block-537"><label htmlFor="name-3" className="field-label-11">No. de
                                                    Identificación o NIT:</label><input type="text" className="campo-perfil-admin w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder id="name-3" required defaultValue={props.auth.user.numero_documento} /></div>
                                                <div className="div-block-537"><label htmlFor="name-3" className="field-label-11">Código de
                                                    Usuario:</label><input type="text" className="campo-perfil-admin w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder id="name-3" required defaultValue={props.auth.user.id} /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-block-539">
                                        <div className="div-block-538">
                                            <div className="div-block-536">
                                                <div className="div-block-537 hide"><label htmlFor="name-4" className="field-label-11">Teléfono:</label><input type="tel" className="campo-perfil-admin w-input" maxLength={256} name="name-4" data-name="Name 4" placeholder id="name-4" required defaultValue={props.auth.user.telefono} /></div>
                                                <div className="div-block-537"><label htmlFor="name-3" className="field-label-11">Departamento:</label><input type="text" className="campo-perfil-admin hide w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" /><select id="field" name="field" data-name="Field" required className="selecion campo-perfil-admin w-select" />
                                                </div>
                                                <div className="div-block-537"><label htmlFor="name-5" className="field-label-11">Ciudad:</label><input type="text" className="campo-perfil-admin hide w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" /><select id="field-6" name="field-6" data-name="Field 6" required className="selecion campo-perfil-admin w-select" />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="div-block-536">
                                                <div className="div-block-537"><label htmlFor="name-3" className="field-label-11">Correo
                                                    electrónico:</label><input type="email" className="campo-perfil-admin w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder id="name-3" required defaultValue={props.auth.user.email} /></div>
                                                <div className="div-block-537"><label htmlFor="name-2" className="field-label-11">Contraseña:</label><input type="password" className="campo-perfil-admin w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" required /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-block-539">
                                        <div className="div-block-538">
                                            <div className="div-block-536">
                                                <div className="div-block-537 hide"><label htmlFor="name-4" className="field-label-11">Dirección
                                                    1:</label><input type="text" className="campo-perfil-admin w-input" maxLength={256} name="name-4" data-name="Name 4" placeholder id="name-4" required defaultValue={props.auth.user.direccion_residencia} /></div>
                                                <div className="div-block-537"><label htmlFor="name-5" className="field-label-11">Dirección
                                                    2:</label><input type="text" className="campo-perfil-admin hide w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" /><select id="field-7" name="field-7" data-name="Field 7" required className="selecion campo-perfil-admin w-select" /></div>
                                                <div className="div-block-537"><label htmlFor="name-5" className="field-label-11">Dirección
                                                    3:</label><input type="text" className="campo-perfil-admin hide w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" /><select id="field-6" name="field-6" data-name="Field 6" required className="selecion campo-perfil-admin w-select" /></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="div-block-536">
                                                <div className="div-block-537"><label htmlFor="name-3" className="field-label-11">Zona
                                                    1:</label><input type="text" className="campo-perfil-admin w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder id="name-3" required /></div>
                                                <div className="div-block-537"><label htmlFor="name-2" className="field-label-11">Zona
                                                    2:</label><input type="text" className="campo-perfil-admin w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" required /></div>
                                                <div className="div-block-537"><label htmlFor="name-2" className="field-label-11">Zona
                                                    3:</label><input type="text" className="campo-perfil-admin w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder id="name-2" required /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-block-539 line-hide">
                                        <div className="div-block-538">
                                            <div className="div-block-536">
                                                <div className="div-block-537"><label htmlFor="name-4" className="field-label-11">Ejemplo
                                                    Campo:</label><input type="text" className="campo-perfil-admin w-input" maxLength={256} name="name-4" data-name="Name 4" placeholder id="name-4" required /></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="div-block-536 hide m">
                                                <div className="div-block-537"><label htmlFor="name-3" className="field-label-11">Ejemplo
                                                    Campo:</label><input type="text" className="campo-perfil-admin w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder id="name-3" required /></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="bg-puntos">
                                        <div className="text-block-176">Puntos Acumulado:</div>
                                        <div className="text-block-177">115 puntos</div>
                                    </div> */}
                                </form>
                                <div className="success-message-11 w-form-done">
                                    <div className="text-block-186">¡Gracias! ¡Su propuesta ha sido recibida!</div>
                                    <div className="div-block-563"><img src="images/svg-logo.svg" loading="lazy" alt="Logo Reciiclar" />
                                    </div>
                                </div>
                                <div className="error-message-10 w-form-fail">
                                    <div>¡Ups! Algo salió mal al enviar el formulario.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="div-block-544">
                    <div className="bg-perfil-u">
                        <div className="div-block-541">
                            <div className="text-block-171">Programación de Rutas</div>
                            <div className="btn-ruta"><img src="images/cruz.svg" loading="lazy" alt className="image-113" />
                                <div>
                                    <div className="text-block-172">Nueva Ruta</div>
                                </div>
                            </div>
                        </div>
                        <table id='lista-rutas' className="table" style={{ position: 'relative', width: '100%', textAlign: 'center', fontFamily: 'Nexa, sans-serif' }}>
                            <thead className="thead table-title ">
                                <tr>
                                    <th className='fw-100' scope="col">Todos</th>
                                    <th className='fw-100' scope="col">Nombre</th>
                                    <th className='fw-100' scope="col">Programación</th>
                                    <th className='fw-100' scope="col">Fecha</th>
                                    <th className='fw-100' scope="col">Zona</th>
                                    {/* <th className='fw-100' scope="col">Precio</th> */}
                                    <th className='fw-100' scope="col">Lider de Recolección</th>
                                    {/* <th className='fw-100' scope="col">Vigencia</th> */}
                                    <th className='fw-100' scope="col">Horario</th>
                                    <th className='fw-100' scope="col">Visita</th>
                                </tr>
                            </thead>
                            <tbody style={{ marginTop: '2rem' }}>
                                {props.rutas.map((material, index) => {

                                    {/* return  <tr key={material.id} data-href={route('materiales.edit', material.id)}  className = {(index===0)?'thead-reciclar-green-1 clickable-row':'clickable-row'}> */ }
                                    return <tr key={material.id} className={''}>
                                        <th><input type={'checkbox'} name='rutaSeleccionada[]' value={material.id}></input></th>
                                        <td>{ (material.nombre) }</td>
                                        <td>{ (material.fecha_programacion) }</td>
                                        <td>{moment(material.fecha_programacion).format('MMMM-DD-YYYY')}</td>
                                        <td>{(material.zona??'') + ' de ' + (material.ciudad??'')}</td>
                                        <td>{material.recolector??''}</td>
                                        <td>{moment(material.fecha_programacion).format('h:mm a')}</td>
                                        <td>{material.sw_estado === 1 ? <span className="text-success"> Visitado </span> : <span className="text-danger"> No Visitado  </span>}</td>
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
                        {/* <div className="div-block-550"><img src="images/tabla.svg" loading="lazy" alt className="image-115" /></div> */}
                    </div>
                </div>


                <div className="div-block-549">

                    <div className="div-block-545 bg-perfil-u">
                        <div className="text-block-173">Progreso de los materiales</div>

                        <div className=''>
                            <div id="w-node-_373a566f-623e-61a9-825b-9daa2c57e62b-5b71bad0" className=''>
                                <div style={{ display:'flex' }}>
                                    <div style={{ width:'50%' }}>

                                        <div className="w-form">
                                            <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" className="form-6">
                                                <div className="div-block-546"><label htmlFor="field-4" className="field-label-12">Material:</label>
                                                    <select id="materialRecolectado" name="field-4" data-name="Field 4" className="select-m campo-perfil-admin w-select" >
                                                        {props.materiales.map(material => <option value={[material.id, material.nombre]}>{material.nombre}</option>)}
                                                    </select>
                                                </div>
                                                <div className="div-block-546"><label htmlFor="field-5" className="field-label-12">Cantidad:</label><input type="number" className="text-field campo-perfil-admin w-input" maxLength={256} name="field-5" data-name="Field 5" placeholder="0" id="cantidadRecolectada" required /></div>
                                                <div className="div-block-584" style={{ justifyContent:'center' }}>
                                                    <a onClick={cargarMaterialAListado} className="btn-nueva-r w-inline-block">
                                                        <div className="div-block-585"><img src="images/cruz.svg" loading="lazy" width={38} alt={""} /></div>
                                                        <div className="text-block-191">Cargar material recolectado a la lista</div>
                                                    </a>
                                                </div>
                                            </form>
                                            <div className="w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>

                                        <div className="texto titulo-p-u">Último ingreso:</div>
                                        <div id='container-listado-materiales-en-progreso-ultimo'>
                                            <div className="div-block-548">
                                                {/* <div className="text-block-175" id='container-listado-materiales-en-progreso-ultimo-material'>Plástico: </div>
                                                    <div className="text-block-175" id='container-listado-materiales-en-progreso-ultimo-cantidad'>256 Kilos</div> */}
                                                <div className="text-block-175" id='container-listado-materiales-en-progreso-ultimo-material'>- : </div>
                                                <div className="text-block-175" id='container-listado-materiales-en-progreso-ultimo-cantidad'>- Kilos</div>
                                            </div>
                                        </div>
                                        <div className="texto">Enero 25, 2023</div>
                                    </div>
                                    <div style={{ width:'50%' }}>

                                        <div style={{ display:'flex', justifyContent:'center' }}>
                                            <table id='lista-materiales-recolectados' className="table" style={{ position: 'relative', width: '50%', textAlign: 'center', fontFamily: 'Nexa, sans-serif' }}>
                                                <thead className="thead table-title ">
                                                    <tr>
                                                        <th className='fw-100' scope="col">Material</th>
                                                        <th className='fw-100' scope="col">Peso</th>
                                                    </tr>
                                                </thead>
                                                <tbody style={{ marginTop: '2rem' }} id='container-listado-materiales-en-progreso'>


                                                    {/* <tr>
                                                    <td className='fw-100' scope="col">Plástico</td>
                                                    <td className='fw-100' scope="col">256</td>
                                                </tr> */}


                                                </tbody>


                                            </table>
                                        </div>


                                        <div className="div-block-584" style={{ justifyContent:'center' }}>
                                            <a onClick={submit} className="btn-nueva-r w-inline-block">
                                                <div className="div-block-585"><img src="images/cruz.svg" loading="lazy" width={38} alt={""} /></div>
                                                <div className="text-block-191">Registrar recolección de materiales</div>
                                            </a>
                                        </div>



                                    </div>
                                </div>


                            </div>
                            <div id="w-node-_519daf3b-43cb-e74c-49d3-f0494bd701b0-5b71bad0" className="row">
                                {/* <img src="images/tabla.png" loading="lazy" alt className="col-6" /> */}


                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </AuthenticatedLayoutK2D>
    );
}
