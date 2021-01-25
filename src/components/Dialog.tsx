import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';

const DialogTitle =((props:any) => {
  const { children, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography  {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" onClick={onClose}>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props:any) {
  const [pdf,setPdf]= React.useState();
  return (
    <div>
      <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
          Importante
        </DialogTitle>
        <DialogContent dividers>
          <Alert severity="warning">Si tiene algun bloqueador de anuncios tendra que deshabilitarlo sin recargar la pagina.</Alert>
          <Typography gutterBottom>
            No olvides guardar tu tracking para su futuro rastreo.
          </Typography>
          <Typography gutterBottom>
            <strong>Tracking: </strong>{props.tracking}
          </Typography>
          {props.recoleccion == ''?<div></div>: 
            <Typography gutterBottom>
              <strong>Recoleccion: </strong>{props.recoleccion}
            </Typography>

          }
          {/* <Typography gutterBottom>
            <a href={props.href} target="_blank" rel="noopener noreferrer" download="foo.pdf">Imprimir mi guia</a>
            
          </Typography> */}
          <button 
          style={{border:'none',fontSize:20,color:'#58bdf9',background:'transparent',cursor:'pointer'}}
            onClick={(res) => {
             console.log(props.href);
              fetch('https://plantillas.globalpaq.mx/imprimirGuia/imprimir.php?tracking=' + props.href)
              .then(resp => resp.blob())
              .then(respuesta => {
                console.log(respuesta);
                let url =URL.createObjectURL(respuesta);
                console.log(url);
                let a=document.createElement('a');
                a.href=url;
                a.click();
              })
            }}>
            Imprimir mi guia
                 </button>
                 
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}