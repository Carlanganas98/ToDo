import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

class Fila extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tarea: props.tarea,
            prioridad: props.prioridad,
            status: props.status
        }
    }

    render() {
        return html`
        <tr>
            <td class="selectores"><input type="checkbox" name="sel" /></td>
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