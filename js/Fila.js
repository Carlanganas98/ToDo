import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

class Fila extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tarea: props.tarea,
            prioridad: props.prioridad,
            status: props.status,
            id: props.numero,
            seleccionado: props.seleccionado,
            setselec: props.setselec,
            cajatex: false
        }
        console.log("CONSTRUCTOR");
        console.log(this.state.setselec);
    }

    setfila(e) {
        console.log("set filaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        console.log(e)
        console.log(this.state.setselec);
        this.props.setselec(this.props.numero, e.target.checked);
    }

    cambiaprio(e) {
        if(e.target.value != "..."){
            this.props.pri(this.props.numero, e.target.value);
        }
    }

    esCajaTexto(e) {
        if(!this.state.cajatex){
            this.setState({cajatex: true});
        }
    }

    dalealenter(e) {
        if(e.key=="Enter"){
            this.setState({cajatex: false});
            this.props.cambia(this.props.numero, e.target.value);
        }
    }

    render() {
        console.log("renderfila");
        let tareatex = this.state.cajatex ? html`<input type="text" onkeypress="${this.dalealenter.bind(this)}" value="${this.props.tarea}" />` : this.props.tarea
        return html`
        <tr>
            <td class="selectores"><input type="checkbox" checked="${this.props.inicial}" 
            onchange="${this.setfila.bind(this)}" /></td>
            <td onclick="${this.esCajaTexto.bind(this)}">
            ${tareatex}
            </td>
            <td>${this.props.prioridad}</td>
            <td>${this.props.status}</td>
            <td class="chstatus">
                <select name="..." onchange="${this.cambiaprio.bind(this)}">
                    <option selected="${this.props.prioridad == 'High'}" value="High">High</option>
                    <option selected="${this.props.prioridad == 'Medium'}" value="Medium">Medium</option>
                    <option selected="${this.props.prioridad == 'Low'}" value="Low">Low</option>
                </select></td>
        </tr>`
    }
}

export default Fila;