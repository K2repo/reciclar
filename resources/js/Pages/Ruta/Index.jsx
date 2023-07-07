//import '/resources/css/normalize.css';
//import '/resources/css/reciclar.webflow.css';
//import '/resources/css/webflow.css';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayoutK2D from '@/Layouts/AuthenticatedLayoutK2D';
import '/resources/css/normalize.css';
import '/resources/css/reciclar.webflow.css';
import '/resources/css/webflow.css';
import '/resources/css/admin-perfil.css';
import '/resources/css/materiales-index.css';
import '/resources/css/dtablebase.css';

import moment from 'moment';
import $ from "jquery";
import DataTable from 'datatables.net-dt';


let init = ()=>{

    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });


    if ($.fn.DataTable.isDataTable('#lista-rutas')) {
        $("#lista-rutas").DataTable().clear()
        $("#lista-rutas").DataTable().destroy();
    }

    let table = new DataTable('#lista-rutas',{
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

    if(document.getElementById("lista-rutas")){
        document.getElementById("lista-rutas").classList.remove("dataTable");
    }


    $('#Buscar-Placa').keyup(function(){
        table.column('value').search().draw();
        //table.search(this.value).draw();
    })

}

export default function Index(props) {

    //moment.locale('es')
    init();
    console.log(props);

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
        <AuthenticatedLayoutK2D  user={props.auth.user}   >
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



                <table id='lista-rutas' className="table" style= {{ position:'relative', width:'100%', textAlign:'center', fontFamily: 'Nexa, sans-serif' }}>
                <thead className="thead table-title ">
                    <tr>
                    <th className='fw-100' scope="col">Todos</th>
                    <th className='fw-100' scope="col">Nombre</th>
                    <th className='fw-100' scope="col">Programación</th>
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
                                    <td>{ (material.nombre) }</td>
                                    <td>{ (material.fecha_programacion) }</td>
                                    <td>{ moment(material.fecha_programacion).format('MMMM-DD-YYYY') }</td>
                                    <td>{(material.zona??'') + ' de ' + (material.ciudad??'')}</td>
                                    <td>{material.recolector??''}</td>
                                    <td>{ moment(material.fecha_programacion).format('h:mm a') }</td>
                                    <td>{material.sw_estado === 1 ? <span className="text-success"> Visitado </span> : <span className="text-danger"> No Visitado </span>  }</td>
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


                {/* <a href="editar-rutas.html" className="w-inline-block"><img src="images/rutas.png" loading="lazy" sizes="100vw" srcSet="images/rutas-p-500.png 500w, images/rutas-p-800.png 800w, images/rutas.png 949w" alt className="imagen-rutas" /></a> */}










            </div>

        </AuthenticatedLayoutK2D>
    );
}
