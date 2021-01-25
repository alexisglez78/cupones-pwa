import 'bulma/css/bulma.css';

function Input(props:any) {
    return (
        <div className="column">
            <label>{props.label}:</label>{props.br===true?<div><br/></div>:<div></div>}
            <input name={props.name} placeholder="" className="input" onChange={props.onChange} value={props.value}  type={props.type} required/>
        </div>
    )
}
export default function Recoleccion(props:any) {

    return (
        <div className="columns is-desktop">
            <Input label='Fecha de recoleccion' onChange={props.onChange} name="fecha" value={props.fecha} br={true} type='date'/>
            <Input label='Hora en el que el paquete estara listo' onChange={props.onChange} name="hora1" value={props.hora1} type='time'/>
            <Input label='ultima hora en la que puede pasar recoleccion' onChange={props.onChange} name="hora2" value={props.hora2} type='time'/>
            <Input label='Email' onChange={props.onChange} name="email" value={props.email} br={true} type='email'/>
        </div>
    )
}