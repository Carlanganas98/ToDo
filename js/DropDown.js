import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

class DropDown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return html`<br />
        <section id="nuevoT">
            <input type="text" name="tarea" placeholder="Escriba la tarea a añadir"/>
            <select name="prio">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        <br />
        <input type="submit" value="New task"/>
        <a href="#">New Task</a>
        </section>`
    }
}

export default DropDown;