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
        this.state.setselec(this.state.id, e.target.checked);
    }

    render() {
        console.log(this.props.setselec);
        console.log("renderfila");
        return html`
        <tr>
            <td class="selectores"><input type="checkbox" name="sel" value="${this.state.seleccionado ? 'on':'off'}" 
            onchange="${this.setfila.bind(this)}" /></td>
            <td>${this.state.tarea}</td>
            <td>${this.state.prioridad}</td>
            <td>${this.state.status}</td>
            <td class="chstatus">
                <select name="...">
                    <option value="...">...</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select></td>
        </tr>`
    }
}

export default Fila;