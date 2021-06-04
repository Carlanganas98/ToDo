import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state={nomtar: "", esconder: props.esconder, prioridad: "High"};
    }

    render() {
        return html`<br />
        <section id="dropdown" class=${this.props.escondido ? "escondido" : null}>
            <input type="text" name="tarea" placeholder="Escriba la tarea a añadir" onInput="${this.guardatext.bind(this)}" />
            <select name="prio" onchange="${this.guardaprio.bind(this)}">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        <br />
        <button onclick="${this.savetsk.bind(this)}">Save</button>
        <button onclick="${this.canceltsk.bind(this)}">Cancel</button>
        </section>`
    }
    guardatext(e) {
        this.setState({nomtar: e.target.value},() => console.log(this.state));
    }
    guardaprio(e) {
        this.setState({prioridad: e.target.value},() => console.log(this.state));
    }
    savetsk() {
        console.log(this.state);
        console.log("savetsk");
        if(this.state.nomtar != "") {
            totalTasks.push({
                tarea: this.state.nomtar,
                prioridad: this.state.prioridad,
                status: "Pending"
            });
        }
        this.canceltsk();
    }
    canceltsk() {
        var cajatexto = document.getElementsByName("tarea")[0];
        cajatexto.value = "";
        console.log("canc");
        this.state.esconder();
    }
}

export default DropDown;