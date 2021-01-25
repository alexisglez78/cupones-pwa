import 'bulma/css/bulma.css';
import { useEffect, useState } from 'react';

function Input(props) {
    return (
        <div className="column">
            <label>{props.label}:</label>
            <input name={props.name} placeholder="" className="input" onChange={props.onChange} value={props.value} onKeyUp={props.onKeyUp} maxLength={props.maxLength}/>
        </div>
    )
}

export default function Package(props) {
    const [seguro, setSeguro] = useState();
    const [recoleccion, setrecoleccion] = useState();
    useEffect(() => {
        const x = localStorage.getItem('Cupones');
        let z = JSON.parse(x);
        if (x) {
            setSeguro(parseInt(z[0].seguro));
            setrecoleccion(parseInt(z[0].recoleccion));
        }
    }, [seguro]);

    return (
        <div className="columns is-desktop">
            <Input label='Peso' onChange={props.onChange} name="peso" value={props.peso} onKeyUp={props.onKeyUp} maxLength={3}/>
            <Input label='Largo' onChange={props.onChange} name="largo" value={props.largo} onKeyUp={props.onKeyUp} maxLength={3}/>
            <Input label='Ancho' onChange={props.onChange} name="ancho" value={props.ancho} onKeyUp={props.onKeyUp} maxLength={3}/>
            <Input label='Alto' onChange={props.onChange} name="alto" value={props.alto} onKeyUp={props.onKeyUp} maxLength={3}/>
            <Input label='Contenido' onChange={props.onChange} name="contenido" value={props.contenido} maxLength={30}/>
            {/* {props.paqueteria === 'fedex'
                ?
                <div className="column is-one-quarter" >
                    <label>Tipo de papel:</label><br />
                    <div className="select">
                        <select onChange={props.onChange} name="tipoPapel" value={props.valuePapel}>
                            <option >0</option>
                            <option>1</option>
                        </select>
                    </div>
                </div>
                : <div></div>
            } */}
            {seguro === 0 || seguro < 999 ? <div></div> :
                <Input label='Valor' onChange={props.onChange} name="valor" value={props.valor} />
            }
            {recoleccion === 0 ? <div></div> :
                <div className="column">
                    <label className="checkbox">
                        Generar recoleccion
                </label>
                    <input type="checkbox" name="recoleccion" checked={props.checkedRecoleccion} onChange={props.onChangeC} />
                </div>
            }
        </div>
    )
}