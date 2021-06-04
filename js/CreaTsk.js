import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';
import BotonCrea from './BotonCrea.js';
import DropDown from './DropDown.js';

class CreaTsk extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return html`<${BotonCrea}/> 
            <${DropDown}/>`
    }
}

export default CreaTsk;