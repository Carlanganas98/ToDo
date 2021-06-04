import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

class BotonCrea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return html`<a id="botoncrea">New Task</a>`
    }
}

export default BotonCrea;