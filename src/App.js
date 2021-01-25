import 'bulma/css/bulma.css';
import Formulario from './components/Formulario';
import React, {  useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Snackbar } from '@material-ui/core';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Person from '@material-ui/icons/Person';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Package from './components/Package';
import Recoleccion from './components/Recoleccion'
import SearchCupon from './components/SearchCupon';
import Dialog from './components/Dialog';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={7} variant="filled" {...props} />;
}



const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundColor: '#e85f0c',
    },
  },
  completed: {
    '& $line': {
      backgroundColor: '#e85f0c',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#02305d',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#e85f0c',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundColor: '#e85f0c',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <Person />,
    2: <PersonPinIcon />,
    3: <AirportShuttleIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    alignContent: 'center'
  },
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: '#e85f0c',
    "&:hover": {
      backgroundColor: 'transparent',
      color: '#e85f0c',
      border: '1px solid #e85f0c'
    },
    color: '#fff'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function validarEmail( email ) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

function validaPaquete (param) {

  if (param.peso === '' || isNaN(param.peso) || param.peso === 0) {
          return {
                  'error': true,
                  'message': 'Debe de ingresar el peso de su paquete'
          }
  }
  if (param.largo  === '' || isNaN(param.largo) || param.largo === 0) {
          return {
                  'error': true,
                  'message': 'Debe de ingresar el largo de su paquete'
          }
  }
  if (param.ancho  === '' || isNaN(param.ancho) || param.ancho === 0) {
          return {
                  'error': true,
                  'message': 'Debe de ingresar el ancho de su paquete'
          }
  }
  if (param.alto  === '' || isNaN(param.alto) || param.alto === 0) {
          return {
                  'error': true,
                  'message': 'Debe de ingresar el alto de su paquete'
          }
  }
  if (param.contenido  ==='') {
          return {
                  'error': true,
                  'message': 'Debe de ingresar el contenido de su paquete'
          }
  }
  if (param.valor  === '' || isNaN(param.valor)) {
          return {
                  'error': true,
                  'message': 'Debe de ingresar el valor de su paquete'
          }
  }
  return { 'error': false }
}

function validaRemitente (param1) {
  if(validarEmail(param1.emailRemitente) ===false){
    return {
      'error': true,
      'message': 'Debe de ingresar un email valido'
}
  }
if (param1.nombreRemitente.trim()  === '') {
      return {
              'error': true,
              'message': 'Debe de ingresar un nombre'
      }
}
if (param1.CompaniaRemitente.trim()  === '') {
      return {
              'error': true,
              'message': 'Debe de ingresar la compañia '
      }
}
if (param1.telefonoRemitente  === 0 || isNaN(param1.telefonoRemitente)) {
      return {
              'error': true,
              'message': 'Debe de ingresar un numero de telefono valido'
      }
}
if (!Number.isInteger(param1.telefonoRemitente )) {
      return {
              'error': true,
              'message': 'Su telefono debe de ser numerico'
      }
}
if (param1.calleRemitente.trim()  === '') {
      return {
              'error': true,
              'message': 'Debe de ingresar la calle'
      }
}
if (param1.coloniaRemitente.trim()  === '') {
      return {
              'error': true,
              'message': 'Debe de ingresar la colonia'
      }
}
if (param1.referenciasRemitente.trim()  === '') {
      return {
              'error': true,
              'message': 'Debe de ingresar una referencia'
      }
}
if (param1.exteriorRemitente.trim()  === '') {
      return {
              'error': true,
              'message': 'Debe de ingresar un numero exterior'
      }
}
if (param1.cpRemitente  === '' || isNaN(param1.cpRemitente )) {
      return {
              'error': true,
              'message': 'Debe de ingresar un codigo postal valido'
      }
}
if (!Number.isInteger(param1.cpRemitente )) {
      return {
              'error': true,
              'message': 'Su codigo postal debe de ser numerico'
      }
}
if (param1.ciudadRemitente.trim()  === '') {
      return {
              'error': true,
              'message': 'Debe de ingresar la ciudad'
      }
}
if (param1.emailRemitente.trim()  === '') {
      return {
              'error': true,
              'message': 'Debe de ingresar el email'
      }
}
if (param1.estadoRemitente.trim()  === '') {
      return {
              'error': true,
              'message': 'Debe de ingresar el estado'
      }
}

return { 'error': false }
}


function validaDestinatario(param1) {
  if(validarEmail(param1.emailDestinatario) ===false){
    return {
      'error': true,
      'message': 'Debe de ingresar un email valido'
}
  }

if (param1.nombreDestinatario.trim()  === '') {
      return {
              'error': true,
              'message': 'Debe de ingresar un nombre'
      }
}
if (param1.CompaniaDestinatario.trim()  === '') {
      return {
              'error': true,
              'message': 'Debe de ingresar la compañia '
      }
}
if (param1.telefonoDestinatario  === '' || isNaN(param1.telefonoDestinatario)) {
      return {
              'error': true,
              'message': 'Debe de ingresar un numero de telefono valido'
      }
}
if (!Number.isInteger(param1.telefonoDestinatario )) {
      return {
              'error': true,
              'message': 'Su telefono debe de ser numerico'
      }
}
if (param1.calleDestinatario.trim()  === '') {
      return {
              'error': true,
              'message': 'Debe de ingresar la calle'
      }
}
if (param1.coloniaDestinatario.trim()  === '') {
      return {
              'error': true,
              'message': 'Debe de ingresar la colonia'
      }
}
if (param1.referenciasDestinatario.trim()  === '') {
      return {
              'error': true,
              'message': 'Debe de ingresar una referencia'
      }
}
if (param1.exteriorDestinatario.trim()  === '') {
      return {
              'error': true,
              'message': 'Debe de ingresar un numero exterior'
      }
}
if (param1.cpDestinatario  === '' || isNaN(param1.cpDestinatario)) {
      return {
              'error': true,
              'message': 'Debe de ingresar un codigo postal valido'
      }
}
if (!Number.isInteger(param1.cpDestinatario )) {
      return {
              'error': true,
              'message': 'Su codigo postal debe de ser numerico'
      }
}
if (param1.ciudadDestinatario.trim()  === '') {
      return {
              'error': true,
              'message': 'Debe de ingresar la ciudad'
      }
}
if (param1.emailDestinatario.trim()  === '') {
      return {
              'error': true,
              'message': 'Debe de ingresar el email'
      }
}
if (param1.estadoDestinatario.trim()  === '') {
      return {
              'error': true,
              'message': 'Debe de ingresar el estado'
      }
}

return { 'error': false }
}



function validaSobrepeso(largo, ancho, alto, peso) {
let peso_volumetrico = (largo * ancho * alto) / 5000;
if (peso_volumetrico > peso) {
      return {
              'error': true,
              'peso_volumetrico': peso_volumetrico
      }
} else {
      return { 'error': false }
}
}
async function generarGuia (datos,paqueteria) {
const data = new FormData();
data.append('cupon', datos.cupon);
data.append('shipper_nombre', datos.nombreRemitente);
data.append('shipper_compania', datos.CompaniaRemitente);
data.append('shipper_telefono', datos.telefonoRemitente);
data.append('shipper_calle', datos.calleRemitente);
data.append('shipper_calle2', datos.referenciasRemitente);
data.append('shipper_calle3', datos.coloniaRemitente);
data.append('shipper_numeroext', datos.exteriorRemitente);
data.append('shipper_cp', datos.cpRemitente);
data.append('shipper_ciudad', datos.ciudadRemitente);
data.append('shipper_estado', datos.estadoRemitente);
data.append('shipper_email', datos.emailRemitente);
data.append('recipient_nombre', datos.nombreDestinatario);
data.append('recipient_compania', datos.CompaniaDestinatario);
data.append('recipient_telefono', datos.telefonoDestinatario);
data.append('recipient_calle', datos.calleDestinatario);
data.append('recipient_calle2', datos.referenciasDestinatario);
data.append('recipient_calle3', datos.coloniaDestinatario);
data.append('recipient_numeroext', datos.exteriorDestinatario);
data.append('recipient_cp', datos.cpDestinatario);
data.append('recipient_ciudad', datos.ciudadDestinatario);
data.append('recipient_estado', datos.estadoDestinatario);
data.append('recipient_email', datos.emailDestinatario);
data.append('packageLineItem_peso', datos.peso);
data.append('packageLineItem_largo', datos.largo);
data.append('packageLineItem_ancho', datos.ancho);
data.append('packageLineItem_alto', datos.alto);
data.append('packageLineItem_contenido', datos.contenido);
data.append('packageLineItem_valor', datos.valor);
data.append('guia_rec', (datos.check === true)?'si':'no');
data.append('date_pickup', datos.fecha);
data.append('package_time_ready', datos.hora1+':00');
data.append('last_available_hour', datos.hora2+':00');
data.append('shipper_instructions', datos.referenciasRemitente);
data.append('shipper_colonia', datos.coloniaRemitente);
data.append('emailR', datos.emailRemitente);

const x = await fetch('https://sistema.globalpaq.mx/api/v2/public/codigo/generar', {
      method: 'POST',
      body: data
})
var res = await x.json();
console.log(res);

if (res.ok === true) {
  if(res.recoleccion){
    return {
      'error': false,
      'label': res.message.label,
      'tracking': res.message.tracking,
      'recoleccion': res.recoleccion
}
  }

      return {
              'error': false,
              'label': res.message.label,
              'tracking': res.message.tracking,
             
      }
}
if (res.error === true) {
      return {
              'error': true,
              'message': res.message,
              'dst': 'base'

      }
}
if (res.error === false) {
  if(paqueteria === 'estafeta'){
    return {
      'error': false,
      'label': res.message.label,
      'tracking': res.message.tracking,
  }}else{

    return {
      'error': false,
      'label': res.label,
      'tracking': res.tracking,
     
  }
  }
}
if (res.ok === false) {
      if (res.message.message) {
              return {
                      'error': true,
                      'message': res.message.message,
                      'dst': 'api'
              }
      } else {
              return {
                      'error': true,
                      'message': res.message,
                      'dst': 'api'
              }
      }
}
if (!res.ok || !res.error) {
      return {
              'error': true,
              'message': res.message,
              'dst': 'de cupon'
      }
}

}
async function validaZonaExtendida(remitente, destinatario, descripcion) {
var resultado;

let fedex = descripcion.indexOf('FEDEX');
let dhl = descripcion.indexOf('DHL');
let estafeta = descripcion.indexOf('ESTAFETA');
let redpack = descripcion.indexOf('REDPACK');

if (fedex !== -1) resultado = 'fedex'
if (dhl !== -1) resultado = 'dhl'
if (redpack !== -1) resultado = 'redpack'
if (estafeta !== -1) resultado = 'estafeta'



const resp = await fetch("https://sistema.globalpaq.mx/api/v2/public/cobertura-" + resultado + "?cp_origen=" +
      remitente + "&cp_destino=" + destinatario + "", {
      method: 'GET'
})
const res = await resp.json();

if (res.error === true) {
      return {
              'error': true,
      }
} else {
      return {
              'error': false,
              'cobertura': res.data.message
      }
}

}
function getSteps() {
  return ['Datos del remitente', 'Datos del destinatario', 'Finalizar pedido'];
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [cupon, setCupon] = useState(false);
  const [info, setInfo] = useState(false);
  const steps = getSteps();
  const [pesodeguia, setPesodeguia] = useState();
  const [paqueteria, setPaqueteria] = useState();
  const [open, setOpen] = React.useState(false);
  const [snack, setSnack] = useState();
  const [generarActivo, setgenerarActivo] = useState(false);
  const [descripcion, setdescripcion] = useState();
  const [usado, setusado] = useState();
  const [extendida, setExtendida] = useState();
  const [sobrepeso, setsobrepeso] = useState();
  const [dialog, setdialog] = useState(false);
  const [tracking, settracking] = useState(false);
  const [numeroRecoleccion, setnumeroRecoleccion] = useState(false);

  const [label, setlabel] = useState(false);
  const [snackMesagge, setSnackMessage] = useState();
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal } = state;

  const [data, setData] = useState({
    cupon: '',
    nombreRemitente: '',
    CompaniaRemitente: '',
    telefonoRemitente: '',
    calleRemitente: '',
    coloniaRemitente: '',
    referenciasRemitente: '',
    exteriorRemitente: '',
    cpRemitente: '',
    ciudadRemitente: '',
    emailRemitente: '',
    estadoRemitente: '',
    nombreDestinatario: '',
    CompaniaDestinatario: '',
    telefonoDestinatario: '',
    calleDestinatario: '',
    coloniaDestinatario: '',
    referenciasDestinatario: '',
    exteriorDestinatario: '',
    cpDestinatario: '',
    ciudadDestinatario: '',
    emailDestinatario: '',
    estadoDestinatario: '',
    peso: '',
    largo: '',
    ancho: '',
    alto: '',
    contenido: '',
    valor: 0,
    fecha: '',
    hora1: '',
    hora2: '',
    email: '',
    tipoPapel: 0,
    check: false,
    arrayColoniaR:[],
    arrayColoniaD:[],
  });

  function handlecheck(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setData({
      ...data,
      'check': value
    })
  }
  function handleInputChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  
 const validaTelefono =(event) =>{
  event.preventDefault()
  const x =event.target.value.replace(/[^0-9]*/g, '');
  setData({
    ...data,
    [event.target.name]:x
  })
}

 const validaDecimal =(event) =>{
  event.preventDefault()
  
  const x =event.target.value.replace(/[^0-9]*/g, '');
      setData({
        ...data,
        [event.target.name]:x
      })
}

 const llenarCp =(event) =>{
  event.preventDefault()
  const x =event.target.value.replace(/[^0-9]*/g, '');
  const tamaño =x.length;
  if(tamaño == 5){
   fetch(`https://sistema.globalpaq.mx/api/v0/public/cp/${x}`, {
      method: 'GET',
    })
    .then((respuesta) => respuesta.json())
    .then((resp) => {
        if(resp.error == true){
          return alert('No se Encontro su Codigo Postal, Favor de Verificar')
        }
        if(event.target.name == 'cpRemitente'){
          setData({
            ...data,
            ciudadRemitente:resp.data[0].ciudad,
            estadoRemitente:resp.data[0].aestado,
            arrayColoniaR:resp.data,
          })
        }
        if(event.target.name == 'cpDestinatario'){
          setData({
            ...data,
            ciudadDestinatario:resp.data[0].ciudad,
            estadoDestinatario:resp.data[0].aestado,
            arrayColoniaD:resp.data,
          })
        }
      // setData({...data,
      //   arrayColonia:resp.data,
      // })
      console.log(data);

    })
  }
  
  setData({
    ...data,
    [event.target.name]:x
  })

}
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Formulario title='remitente'
          nombrer={data.nombreRemitente}
          Companiar={data.CompaniaRemitente}
          telefonor={data.telefonoRemitente}
          caller={data.calleRemitente}
          coloniar={data.coloniaRemitente}
          referenciasr={data.referenciasRemitente}
          exteriorr={data.exteriorRemitente}
          cpr={data.cpRemitente}
          ciudadr={data.ciudadRemitente}
          emailr={data.emailRemitente}
          estador={data.estadoRemitente}
          validaTelefono={validaTelefono}
          onChange={(e) => { handleInputChange(e) }}
          keycpR={llenarCp}
          mapColonia={data.arrayColoniaR}
        />;
      case 1:
        return <Formulario title='destinatario'
          nombred={data.nombreDestinatario}
          Companiad={data.CompaniaDestinatario}
          telefonod={data.telefonoDestinatario}
          called={data.calleDestinatario}
          coloniad={data.coloniaDestinatario}
          referenciasd={data.referenciasDestinatario}
          exteriord={data.exteriorDestinatario}
          cpd={data.cpDestinatario}
          ciudadd={data.ciudadDestinatario}
          emaild={data.emailDestinatario}
          validaTelefono={validaTelefono}
          estadod={data.estadoDestinatario}
          onChange={(e) => { handleInputChange(e) }}
          keycpD={llenarCp}
          mapColonia={data.arrayColoniaD}
        />;
      case 2:
        return <div className="container" style={{ marginLeft: '15%', marginRight: '15%' }}>
          <Package
            onChange={(e) => { handleInputChange(e) }}
            onChangeC={(e) => { handlecheck(e) }}
            peso={data.peso}
            largo={data.largo}
            ancho={data.ancho}
            alto={data.alto}
            contenido={data.contenido}
            valor={data.valor}
            checkedRecoleccion={data.check}
            valuePapel={data.tipoPapel}
            paqueteria={paqueteria}
            onKeyUp={validaDecimal}

          />
          {data.check === true ? <Recoleccion
            onChange={(e) => handleInputChange(e)}
            fecha={data.fecha}
            hora1={data.hora1}
            hora2={data.hora2}
            email={data.email}
          /> : <div></div>}
        </div>;
      default:
        return 'Paso desconocido';
    }
  }
  
  function dosDecimales(n) {
    let t=n.toString();
    let regex=/(\d*.\d{0,2})/;
    return t.match(regex)[0];
  }


  const handleNext = async () => {
    const arra1 = {
      nombreRemitente: data.nombreRemitente,
      CompaniaRemitente: data.CompaniaRemitente,
      telefonoRemitente: parseInt(data.telefonoRemitente),
      calleRemitente: data.calleRemitente,
      coloniaRemitente: data.coloniaRemitente,
      referenciasRemitente: data.referenciasRemitente,
      exteriorRemitente: data.exteriorRemitente,
      cpRemitente: parseInt(data.cpRemitente),
      ciudadRemitente: data.ciudadRemitente,
      emailRemitente: data.emailRemitente,
      estadoRemitente: data.estadoRemitente,
    };
    const arra2 = {
      nombreDestinatario: data.nombreDestinatario,
      CompaniaDestinatario: data.CompaniaDestinatario,
      telefonoDestinatario: parseInt(data.telefonoDestinatario),
      calleDestinatario: data.calleDestinatario,
      coloniaDestinatario: data.coloniaDestinatario,
      referenciasDestinatario: data.referenciasDestinatario,
      exteriorDestinatario: data.exteriorDestinatario,
      cpDestinatario: parseInt(data.cpDestinatario),
      ciudadDestinatario: data.ciudadDestinatario,
      emailDestinatario: data.emailDestinatario,
      estadoDestinatario: data.estadoDestinatario,
    };
    const arr3 = {
      peso: parseInt(data.peso),
      largo: parseInt(data.largo),
      ancho: parseInt(data.ancho),
      alto: parseInt(data.alto),
      contenido: data.contenido,
      valor: parseInt(data.valor),
    }
    if (activeStep === 0) {
      getData();
      let x = validaRemitente(arra1);
      if (x.error === true) {
        return alert(x.message);
      }
    }
    if (activeStep === 1) {
      let x = validaDestinatario(arra2);
      if (x.error === true) {
        return alert(x.message);
      }
    }
    if (activeStep === 2) {
      setgenerarActivo(true);
      let x = validaPaquete(arr3);
      if (x.error === true) {
        setgenerarActivo(false);
        return alert(x.message);
      }
      const ext = await validaZonaExtendida(data.cpRemitente, data.cpDestinatario, descripcion);
      if (ext.error === true) {
        setgenerarActivo(false);
        return alert('hubo un error al verificar tu cobertura');
      }
      if (ext.cobertura === 'Cobertura Extendida') {
        if (extendida === 0) 
        setgenerarActivo(false);
        return alert('No tiene permiso para generar una zona  extendida')
      }

      let ressobrepeso = validaSobrepeso(data.largo, data.ancho, data.alto, pesodeguia);
      if (ressobrepeso.error === true) {
        if (sobrepeso === 0) {
          setgenerarActivo(false);
          return alert('El limite amparado por el servicio contratado es de ' + dosDecimales(ressobrepeso.peso_volumetrico) + 'Kg');
        }
      }
      let guia = await generarGuia(data,paqueteria);
      console.log('respuesta',guia);
      if (guia.error === true) {
        setgenerarActivo(false);
        return alert(guia.message)
      }
      if(guia.recoleccion){
        setnumeroRecoleccion(guia.recoleccion);
      }
      console.log(numeroRecoleccion);
      setData({
        ...data,
        'check': false
      })
      settracking(guia.tracking);
      const xx = await fetch(`https://sistema.globalpaq.mx/api/v2/public/${paqueteria}-pdf/${guia.tracking}`)
      const res = await xx.json();
      setlabel(res.data);
      setSnack('success');
      setSnackMessage('Guia generada correctamente')
      setdialog(true);
      handleClick();
      setgenerarActivo(false);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () =>setActiveStep((prevActiveStep) => prevActiveStep - 1);
  const handleReset = () => {
    setCupon(false)
    setActiveStep(0);
  };
  const handleEnvio = () =>{
    setCupon(true);
  
  };
  const handleClickOpen = () =>setdialog(true);
  const handleClickClose = () => {setdialog(false); setnumeroRecoleccion('');};

  function getData() {
    const x = localStorage.getItem('Cupones');
    if (x) {
      let z = JSON.parse(x);
      setdescripcion(z[0].descripcion);
      setusado(z[0].usado);
      setExtendida(parseInt(z[0].zona_extendida));
      setPesodeguia(parseInt(z[0].pesoguia));
      setsobrepeso(parseInt(z[0].sobrepeso));
      setData({
        ...data,
        'cupon': z[0].codigo
      })

      let descripcion = z[0].descripcion;
      let fedex = descripcion.indexOf('FEDEX');
      let dhl = descripcion.indexOf('DHL');
      let estafeta = descripcion.indexOf('ESTAFETA');
      let redpack = descripcion.indexOf('REDPACK');
      let resultado;
      if (fedex !== -1) resultado = 'fedex'
      if (dhl !== -1) resultado = 'dhl'
      if (redpack !== -1) resultado = 'redpack'
      if (estafeta !== -1) resultado = 'estafeta'
      setPaqueteria(resultado);
    }
  }
  if (cupon === false) {
    return (
      <div style={{marginTop:'10%'}}>
        {/* <Header></Header> */}
        <Dialog
          open={dialog}
          handleClickOpen={handleClickOpen}
          handleClose={handleClickClose}
          tracking={tracking}
          href={label}
          recoleccion={numeroRecoleccion}
        />
        <h1 className="title is-capitalized" style={{ textAlign: 'center' }}>Generacion de guias por cupones</h1>
        <div className="container" style={{ textAlign: 'center', alignContent: 'center' }} >
          <SearchCupon
            nombreBoton={info}
            Clickb={handleEnvio}
          />
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
          <Alert onClose={handleClose} severity={snack}>
            {snackMesagge}
          </Alert>
        </Snackbar>
      </div>
    )
  }
  return (
    <div style={{marginTop:'10%'}}>
      {/* <Header></Header> */}
      <h1 className="title is-capitalized" style={{ textAlign: 'center' }}>Generacion de guias globalpaq por cupones</h1>
      <div className={classes.root}>

        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div style={{ textAlign: 'center' }}>
              <Typography className={classes.instructions} >
                Gracias por generar su guia con Globalpaq buen dia.
            </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Ver datos de mi guia
            </Button>
            </div>
          ) : (
              <div style={{ textAlign: 'center', marginRight: '2em', marginTop: '1em' }}>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div style={{ marginTop: '2em' }}>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Regresar
              </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    disabled={generarActivo}>
                    {activeStep === steps.length - 1 ? 'Generar' : 'Siguiente'}
                  </Button>
                </div>
              </div>
            )}
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
        <Alert onClose={handleClose} severity={snack}>
          {snackMesagge}
        </Alert>
      </Snackbar>
    </div>
  );
}

