import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';
import Fila from './Fila.js';

class TablaToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {getFunct: props.getFunct, addFunct: props.addFunct};
        console.log("CREATED TABLE");
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("before render table");
        console.log(nextState);
    }

    render() {
        var set = this.props.setselec;
        var pri = this.props.setprior;
        var cambia = this.props.cambiatarea;
        var numeroTasks = 0;
        console.log("rendertabla");
        let filas = this.props.getFunct().map(function(t) {
            numeroTasks++;
            return html`
            <${Fila} tarea="${t.tarea}" prioridad="${t.prioridad}" status="${t.status}" 
            numero="${t.id}" setselec="${set}" inicial="${t.seleccionado}" pri="${pri}" cambia="${cambia}" />`
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