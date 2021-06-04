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
            setselec: props.setselec
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

    cambiaprio() {
        
    }

    render() {
        console.log("renderfila");
        return html`
        <tr>
            <td class="selectores"><input type="checkbox" checked="${this.props.inicial}" 
            onchange="${this.setfila.bind(this)}" /></td>
            <td>${this.props.tarea}</td>
            <td>${this.props.prioridad}</td>
            <td>${this.props.status}</td>
            <td class="chstatus">
                <select name="..." onchange=${this.cambiaprio}>
                    <option value="...">...</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select></td>
        </tr>`
    }
}

export default Fila;