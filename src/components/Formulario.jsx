import 'bulma/css/bulma.css';
import { useEffect, useState } from 'react';

function Input(props) {
    return (
        <div className="column">
            <label>{props.titulo}</label>
            <input name={props.name} placeholder={props.titulo} className="input" value={props.value} disabled={props.disabled} 
            onChange={props.onChange} onKeyUp={props.onKeyUp} maxLength={props.maxLength}/>
        </div>
    )
}

export default function Formulario(props) {
    const [codigo, setcodigo] = useState('');
    const [mapColonia, setmapColonia] = useState([]);

    
    useEffect(() => {
        const x = localStorage.getItem('Cupones');
        let z = JSON.parse(x);
        if (x) {
            setcodigo(z[0].codigo);
        }
        setmapColonia(props.mapColonia)
    });
    if (props.title === 'remitente') {
        return (
            <Remitente
                valueCodigo={codigo}
                onChange={props.onChange}
                valueNombre={props.nombrer}
                valueCompania={props.Companiar}
                valueTelefono={props.telefonor}
                valueCalle={props.caller}
                valueColonia={props.coloniar}
                valueReferencias={props.referenciasr}
                valueExterior={props.exteriorr}
                valueCp={props.cpr}
                valueCiudad={props.ciudadr}
                valueEmail={props.emailr}
                valueEstado={props.estador}
                validaTelefono={props.validaTelefono}
                validacp={props.validacp}
                keycpR={props.keycpR}
                mapColonia={props.mapColonia}
            />
        )
    } else {
        return <Destinatario
            onChange={props.onChange}
            valueNombre={props.nombred}
            valueCompania={props.Companiad}
            valueTelefono={props.telefonod}
            valueCalle={props.called}
            valueColonia={props.coloniad}
            valueReferencias={props.referenciasd}
            valueExterior={props.exteriord}
            valueCp={props.cpd}
            valueCiudad={props.ciudadd}
            valueEmail={props.emaild}
            valueEstado={props.estadod}
            validacp={props.validacp}
            validaTelefono={props.validaTelefono}
            keycpD={props.keycpD}
            mapColonia={props.mapColonia}
        />
    }
}

const Remitente = (props) => {
    const [mapColonia, setmapColonia] = useState([]);
    useEffect(() => {
        setmapColonia(props.mapColonia)
    });

        const List =mapColonia.map((option) => (
            <option value={option.colonia}>{option.colonia}</option>
        ))
    return (
        <form>
            <div className="container"
                style={{ marginLeft: '15%', marginRight: '15%' }}
            >
                <div className="columns is-desktop">
                    <Input titulo='Numero de cupon:' disabled={true} value={props.valueCodigo} />
                    <Input titulo='Nombre:' onChange={props.onChange} value={props.valueNombre} name='nombreRemitente' maxLength={29}/>
                    <Input titulo='Compañia:' onChange={props.onChange} value={props.valueCompania} name='CompaniaRemitente' maxLength={35} />
                    <div className="column is-2">
                        <label>Telefono:</label>
                        <input name="telefonoRemitente"  placeholder="5589369568" className="input" onChange={props.onChange} value={props.valueTelefono}
                        onKeyUp={props.validaTelefono}
                        maxLength={10}
                         />
                    </div>
                    <Input titulo='Calle:' onChange={props.onChange} name='calleRemitente' value={props.valueCalle} maxLength={35}/>
                </div>
                <div className="columns is-desktop" >
                <Input titulo='Codigo postal:' onChange={props.onChange} name="cpRemitente"
                      value={props.valueCp} onKeyUp={props.keycpR} maxLength={5}/>
                    <div className="column">
                    <label>Colonia:</label><br />
                        <div className="select">
                            <select onChange={props.onChange} name="coloniaRemitente" value={props.valueColonia}>
                                <option value="0" selected>Seleccione una Colonia</option>
                                {List}
                            </select>
                    </div>
                    </div>
                    <Input titulo='Referencias:' onChange={props.onChange} name="referenciasRemitente" value={props.valueReferencias} maxLength={35}/>
                    <Input titulo='Numero exterior:' onChange={props.onChange} name="exteriorRemitente" value={props.valueExterior} maxLength={35}/>
                    
                    <Input titulo='Ciudad:' onChange={props.onChange} name="ciudadRemitente" value={props.valueCiudad} maxLength={35}/>
                </div>
                <div className="columns is-desktop">

                    <div className="column is-one-quarter" >
                        <label>Estado:</label><br />
                        <div className="select">
                            <select onChange={props.onChange} name="estadoRemitente" value={props.valueEstado}>
                                <option value="" selected>Selecciona un estado</option>
                                <option value="AGS">Aguascalientes</option>
                                <option value="BCN">Baja California Norte</option>
                                <option value="BCS">Baja California Sur</option>
                                <option value="CAMP">Campeche</option>
                                <option value="CHIS">Chiapas</option>
                                <option value="CHIH">Chihuahua</option>
                                <option value="COAH">Coahuila</option>
                                <option value="COL">Colima</option>
                                <option value="CDMX">Ciudad de México</option>
                                <option value="DGO">Durango</option>
                                <option value="MEX">Estado de México</option>
                                <option value="GTO">Guanajuato</option>
                                <option value="GRO">Guerrero</option>
                                <option value="HGO">Hidalgo</option>
                                <option value="JAL">Jalisco</option>
                                <option value="MICH">Michoacán</option>
                                <option value="MOR">Morelos</option>
                                <option value="NAY">Nayarit</option>
                                <option value="N.L.">Nuevo León</option>
                                <option value="OAX">Oaxaca</option>
                                <option value="PUE">Puebla</option>
                                <option value="QRO">Querétaro</option>
                                <option value="Q.ROO">Quintana Roo</option>
                                <option value="S.L.P">San Luis Potosí</option>
                                <option value="SIN">Sinaloa</option>
                                <option value="SON">Sonora</option>
                                <option value="TAB">Tabasco</option>
                                <option value="TAMPS">Tamaulipas</option>
                                <option value="TLAX">Tlaxcala</option>
                                <option value="VER">Veracruz</option>
                                <option value="YUC">Yucatán</option>
                                <option value="ZAC">Zacatecas</option>
                            </select>
                        </div>
                    </div>
                    <div className="column is-one-quarter">
                        <label>Email:</label>
                        <input maxLength={35} name="emailRemitente" placeholder="ejemplo@gmail.com" className="input" onChange={props.onChange} value={props.valueEmail} />
                    </div>
                </div>

            </div>
        </form>
    )
}




const Destinatario = (props) => {
    const [mapColonia, setmapColonia] = useState([]);
    useEffect(() => {
        setmapColonia(props.mapColonia)
    });

        const List =mapColonia.map((option) => (
            <option value={option.colonia}>{option.colonia}</option>
        ))
    return (
        <form>
            <div className="container" style={{ marginLeft: '15%', marginRight: '15%' }}>
                <div className="columns is-desktop">
                    <Input titulo='Nombre:' onChange={props.onChange} value={props.valueNombre} name='nombreDestinatario' maxLength={29}/>
                    <Input titulo='Compañia:' onChange={props.onChange} value={props.valueCompania} name='CompaniaDestinatario' maxLength={35}/>
                    <div className="column is-2">
                        <label>Telefono:</label>
                        <input name="telefonoDestinatario"  placeholder="5589369568" className="input" onChange={props.onChange} value={props.valueTelefono}
                        onKeyUp={props.validaTelefono}
                        maxLength={10}
                        />
                    </div>
                    <Input titulo='Calle:' onChange={props.onChange} name='calleDestinatario' value={props.valueCalle} maxLength={35}/>
                </div>
                <div className="columns is-desktop" >
                <Input titulo='Codigo postal:' maxLength={5} onChange={props.onChange} name="cpDestinatario" value={props.valueCp} onKeyUp={props.keycpD}/>
                <div className="column">
                    <label>Colonia:</label><br />
                        <div className="select">
                            <select onChange={props.onChange} name="coloniaDestinatario" value={props.valueColonia}>
                                <option value="0" selected>Seleccione una Colonia</option>
                                {List}
                            </select>
                    </div>
                    </div>
                    <Input titulo='Referencias:' maxLength={35} onChange={props.onChange} name="referenciasDestinatario" value={props.valueReferencias} />
                    <Input titulo='Numero exterior:' maxLength={35} onChange={props.onChange} name="exteriorDestinatario" value={props.valueExterior} />
                    
                    <Input titulo='Ciudad:' maxLength={35} onChange={props.onChange} name="ciudadDestinatario" value={props.valueCiudad} />
                </div>
                <div className="columns is-desktop">
                   
                    <div className="column is-one-quarter" >
                        <label>Estado:</label><br />
                        <div className="select">
                            <select onChange={props.onChange} name="estadoDestinatario" value={props.valueEstado}>
                                <option value="" selected>Selecciona un estado</option>
                                <option value="AGS">Aguascalientes</option>
                                <option value="BCN">Baja California Norte</option>
                                <option value="BCS">Baja California Sur</option>
                                <option value="CAMP">Campeche</option>
                                <option value="CHIS">Chiapas</option>
                                <option value="CHIH">Chihuahua</option>
                                <option value="COAH">Coahuila</option>
                                <option value="COL">Colima</option>
                                <option value="CDMX">Ciudad de México</option>
                                <option value="DGO">Durango</option>
                                <option value="MEX">Estado de México</option>
                                <option value="GTO">Guanajuato</option>
                                <option value="GRO">Guerrero</option>
                                <option value="HGO">Hidalgo</option>
                                <option value="JAL">Jalisco</option>
                                <option value="MICH">Michoacán</option>
                                <option value="MOR">Morelos</option>
                                <option value="NAY">Nayarit</option>
                                <option value="N.L.">Nuevo León</option>
                                <option value="OAX">Oaxaca</option>
                                <option value="PUE">Puebla</option>
                                <option value="QRO">Querétaro</option>
                                <option value="Q.ROO">Quintana Roo</option>
                                <option value="S.L.P">San Luis Potosí</option>
                                <option value="SIN">Sinaloa</option>
                                <option value="SON">Sonora</option>
                                <option value="TAB">Tabasco</option>
                                <option value="TAMPS">Tamaulipas</option>
                                <option value="TLAX">Tlaxcala</option>
                                <option value="VER">Veracruz</option>
                                <option value="YUC">Yucatán</option>
                                <option value="ZAC">Zacatecas</option>
                            </select>
                        </div>
                    </div>
                    <div className="column is-one-quarter">
                        <label>Email:</label>
                        <input name="emailDestinatario" maxLength={35} placeholder="ejemplo@gmail.com" className="input" onChange={props.onChange} value={props.valueEmail} />
                    </div>
                </div>
            </div>
        </form>

    )

}