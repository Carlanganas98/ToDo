import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';
import Fila from './Fila.js';

class TablaToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {getFunct: props.getFunct, addFunct: props.addFunct};
        this.htmlv = null;
    }

    render() {
        var set = this.props.setselec;
        console.log("rendertabla");
        console.log(this.state.getFunct());
        let filas = this.props.getFunct().map(function(t) {
            return html`
            <${Fila} tarea="${t.tarea}" prioridad="${t.prioridad}" status="${t.status}" 
            numero="${t.id}" setselec="${set}" />`
        })
        return html`<table>
        <tr>
            <th class="selectores"></th>
            <th>TASK NAME</th>
            <th>PRIORITY</th>
            <th>STATUS</th>
            <th class="chstatus"></th>
        </tr>
        ${filas}
        </table>`;
    }
}

export default TablaToDo;