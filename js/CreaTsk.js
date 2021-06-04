import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';
import BotonCrea from './BotonCrea.js';
import DropDown from './DropDown.js';

class CreaTsk extends Component {
    constructor(props) {
        super(props);
        this.state= {escondido: true}
    }

    render() {
        return html`<${BotonCrea}  pulsado=${this.mostrarDD.bind(this)} /> 
            <${DropDown} escondido="${this.state.escondido}" />`
    }

    mostrarDD(e) {
        console.log("mostrardd");
        this.setState({escondido: false});
    }
}

export default CreaTsk;