//import React from 'react';
//import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
//import { Head } from '@inertiajs/react';
//import '../../../css/normalize.css';
//import './../../../css/reciclar.webflow.css';
//import './../../../css/webflow.css';
//import './../../../css/admin-perfil.css';
import '/resources/css/normalize.css';
import '/resources/css/reciclar.webflow.css';
import '/resources/css/webflow.css';
import '/resources/css/admin-perfil.css';
import '/resources/css/materiales-index.css';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayoutK2D from '@/Layouts/AuthenticatedLayoutK2D';
import $ from "jquery";
import DataTable from 'datatables.net-dt';

let init = ()=>{
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });


    if ($.fn.DataTable.isDataTable('#lista-materiales')) {
        $("#lista-materiales").DataTable().clear()
        $("#lista-materiales").DataTable().destroy();
    }

    let table = new DataTable('#lista-materiales',{
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

    if(document.getElementById("lista-materiales")){
        document.getElementById("lista-materiales").classList.remove("dataTable");
    }


    $('#Buscar-Placa').keyup(function(){
        //table.column('value').search().draw;
        table.search(this.value).draw();
    })
}

export default function Index(props) {

    console.log(props)

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
        post(route('materiales.store'), { onSuccess: () => reset() });
    };

    init();

    return (
        <AuthenticatedLayoutK2D>

            <div className="bg-sombra-materiales">
                <h1 className="heading-47">Materiales</h1>
                <div className="div-block-568">
                    <div className="form-block-7 w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form-8">
                            <div className="div-block-569"><label htmlFor="Buscar-Placa" className="field-label-16">Buscar:</label>
                            <input type="text" className="campo-perfiles c-p-p w-input" maxLength={256} name="Buscar-Placa" data-name="Buscar Placa" placeholder="Buscar Placa" id="Buscar-Placa" />
                            </div>
                            <div className="div-block-569"><label htmlFor="field" className="field-label-16">Filtrar por:</label><select id="field" name="field" data-name="Field" className="select-field-2 c-p-p w-select">
                                <option value="Estado">Estado</option>
                            </select></div>
                            <div className="div-block-571">
                                <a href="#" className="div-block-570 w-inline-block"><img src="images/buscar.png" loading="lazy" alt={""} /></a>
                            </div>
                        </form>
                        <div className="w-form-done" stylñ>
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                    <div className="div-block-584">
                        <a href={route('materiales.create')}  className="btn-nueva-r w-inline-block">
                            <div className="div-block-585"><img src="images/cruz.svg" loading="lazy" width={38} alt={""} /></div>
                            <div className="text-block-191">Nuevo material</div>
                        </a>
                    </div>
                </div>



                <table id='lista-materiales' className="table" style= {{ position:'relative', width:'100%', textAlign:'center', fontFamily: 'Nexa, sans-serif' }}>
                <thead className="thead table-title ">
                    <tr>
                    <th className='fw-100' scope="col">Todos</th>
                    <th className='fw-100' scope="col">Codigo</th>
                    <th className='fw-100' scope="col">Material</th>
                    {/* <th className='fw-100' scope="col">Precio</th> */}
                     <th className='fw-100' scope="col">Und. Medida</th>
                    {/* <th className='fw-100' scope="col">Vigencia</th> */}
                    <th className='fw-100' scope="col">Descripcion</th>
                    <th className='fw-100' scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody style={{ marginTop:'2rem' }}>
                    { props.materiales.map((material,index) => {
                        {/* return  <tr key={material.id} data-href={route('materiales.edit', material.id)}  className = {(index===0)?'thead-reciclar-green-1 clickable-row':'clickable-row'}> */}
                        return  <tr key={material.id} data-href={route('materiales.edit', material.id)}  className = {'clickable-row'}>
                                    <th><input type={'checkbox'}></input></th>
                                    <td>{material.id}</td>
                                    <td>{material.nombre}</td>
                                    <td>{material.unidad_medida}</td>
                                    <td>{material.descripcion}</td>
                                    <td>{material.sw_estado === 1 ? <span className="text-success"> Activo </span> : <span className="text-danger"> Inhabilitado </span>  }</td>
                                </tr>;
                        })
                    }
                </tbody>
                </table>
                {/* <a href="editar-material.html" className="w-inline-block"><img src="images/materiales.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 79vw, (max-width: 991px) 83vw, (max-width: 1439px) 72vw, 954px" srcSet="images/materiales-p-500.png 500w, images/materiales-p-800.png 800w, images/materiales.png 954w" alt className="image-116" /></a> */}
            </div>

        </AuthenticatedLayoutK2D>
    );
}
