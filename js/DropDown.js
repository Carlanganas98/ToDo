import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {escondido: props.escondido}
    }

    render() {
        return html`<br />
        <section id="dropdown" className=${!this.state.escondido ? null : "escondido"}>
            <input type="text" name="tarea" placeholder="Escriba la tarea a añadir"/>
            <select name="prio">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        <br />
        <input type="submit" value="Save"/>
        <button>Cancel</button>
        </section>`
    }

}

export default DropDown;