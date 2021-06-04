import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

class BotonCrea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return html`<h2><button onclick="${this.props.pulsado}" id="botoncrea">creaTask</button></h2>`
    }
}

export default BotonCrea;