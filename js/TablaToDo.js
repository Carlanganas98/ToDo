import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';
import Fila from './Fila.js';

class TablaToDo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return html`<table>
        <tr>
            <th class="selectores"></th>
            <th>TASK NAME</th>
            <th>PRIORITY</th>
            <th>STATUS</th>
            <th class="chstatus"></th>
        </tr>
        <${Fila} tarea="hola" prioridad="High" status="Peding"/>
    </table>`
    }
}

export default TablaToDo;