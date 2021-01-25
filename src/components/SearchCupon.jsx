import React, {  useState } from 'react';
import 'bulma/css/bulma.css';
import { makeStyles, Snackbar } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={7} variant="filled" {...props} />;
}

const estilo = makeStyles((alx) => ({
  button: {
    marginRight: alx.spacing(1),
    backgroundColor: '#e85f0c',
    "&:hover": {
      backgroundColor: 'transparent',
      color: '#e85f0c',
      border: '1px solid #e85f0c'
    },
    "&:disabled": {
      cursor: ' no-drop',
    },
    color: '#fff',
    width: '50%',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    height: '2.5rem'
  }

}));

export default function SearchCupon(props) {
  const classes = estilo();
  const [info, setInfo] = useState(false);
  const [datos, setDatos] = useState({ cuponText: '' });
  const [codigo, setcodigo] = useState('');
  const [tipo, settipo] = useState('');
  const [peso, setpeso] = useState(0);
  const [usado, setusado] = useState(0);
  const [recoleccion, setrecoleccion] = useState(0);
  const [extendida, setextendida] = useState(0);
  const [sobrepeso, setsobrepeso] = useState(0);
  const [seguro, setseguro] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [snack, setSnack] = useState();
  const [snackMesagge, setSnackMessage] = useState();
  const [pr, setPr] = useState();
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const submit = () => {
    const x = fetch('https://plantillas.globalpaq.mx/Cupones_Globalpaq/getCupon.php', {
      method: 'POST',
      body: JSON.stringify({ 'cupon': datos.cuponText }),

    }).then((respuesta) => respuesta.json())
      .then((resp) => {
        if (resp.length === 0) {
          setSnack('error');
          setSnackMessage(' No existe el cupon ');
          handleClick();
          return;
        }
        else {
          let usado = parseInt(resp[0].usado);
          if (usado === 1) {
            setSnack('error');
            setSnackMessage(' Este cupon ya fue utilizado ');
            handleClick();
            return;
          }
          setcodigo(resp[0].codigo);
          settipo(resp[0].descripcion);
          setpeso(resp[0].pesoguia);
          setrecoleccion(parseInt(resp[0].recoleccion));
          setextendida(parseInt(resp[0].zona_extendida));
          setsobrepeso(parseInt(resp[0].sobrepeso));
          setseguro(parseInt(resp[0].seguro));
          setusado(parseInt(resp[0].usado));
          setPr(resp);
          setInfo(true);
          setSnack('success');
          setSnackMessage(' Cupon encontrado correctamente ')
          handleClick();
        }
      })
      .catch(error => console.error(error));

  }
  const GuardarLocal = () => {
    localStorage.setItem('Cupones', JSON.stringify(pr));
  }
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal } = state;
  return (
    <div className="container" style={{ marginTop: '3rem' }}>
      <div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
          <Alert onClose={handleClose} severity={snack}>
            {snackMesagge}
          </Alert>
        </Snackbar>
      </div>
      <form >
        <div className="columns is-desktop" style={{ marginLeft: '15%', marginRight: '15%' }}>
          <div className="column ">
            <input type="text" name="cuponText" placeholder="Ingrese su Cupon Globalpaq" className="input" onChange={handleInputChange} />
          </div>
          <div className="column ">
            <input type="button" defaultValue="Buscar Cupon" className={classes.button} onClick={submit} />
          </div>
        </div>
      </form>
      {info === false ? (<label></label>) : (
        <div>
          <div className="columns" style={{ marginTop: '3%' }}>
            <div className="column">
              <label className="subtitle">Codigo: </label><br />
              {codigo}
            </div>
          </div>
          <div className="container columns" style={{ marginLeft: '1em', marginRight: '1em' }}>
            <div className="column"><label className="subtitle">Tipo: </label><br />{tipo}</div>
            <div className="column is-1"><label className="subtitle">Peso: </label><br /> {peso} Kg</div>
            <div className="column"><label className="subtitle">Recoleccion: </label><br />
              {recoleccion === 1 ? (<CheckIcon htmlColor="#008000" />) : (<ClearIcon htmlColor="#ff0000" />)}
            </div>
            <div className="column "><label className="subtitle">Zona Extendida: </label><br />
              {extendida === 1 ? (<CheckIcon htmlColor="#008000" />) : (<ClearIcon htmlColor="#ff0000" />)}
            </div>
            <div className="column "><label className="subtitle">Sobrepeso: </label><br />
              {sobrepeso === 1 ? (<CheckIcon htmlColor="#008000" />) : (<ClearIcon htmlColor="#ff0000" />)}
            </div>
            <div className="column"><label className="subtitle">Seguro:</label><br />
              {seguro <= 0 ? (<ClearIcon htmlColor="#ff0000" />) : (<div>Hasta por <strong>${seguro}</strong></div>)}
            </div>
          </div>
          <button className={classes.button} style={{ marginTop: '3%', width: '10rem', marginBottom: '3%' }}
            onClick={() => {
              props.Clickb();
              GuardarLocal();
            }}>
            Ir a generar mi guia
                 </button>
        </div>
      )}
    </div>
  )
}


