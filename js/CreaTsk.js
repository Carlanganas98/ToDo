import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';
import BotonCrea from './BotonCrea.js';
import DropDown from './DropDown.js';

class CreaTsk extends Component {
    constructor(props) {
        super(props);
        this.state= {escondido: true, getFunct: props.getFunct, addFunct: props.addFunct};
    }
    
    render() {
        return html`<${BotonCrea}  pulsado=${this.toggleDropDown.bind(this)} /> 
            <${DropDown} escondido="${this.state.escondido}" 
            esconder=${this.toggleDropDown.bind(this)} 
            getFunct="${this.props.getFunct}" addFunct="${this.props.addFunct}"/>`
    }

    toggleDropDown(e) {
        this.setState({escondido: !this.state.escondido});
        console.log("toggledd");
    }
}

export default CreaTsk;