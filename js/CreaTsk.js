import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

class CreaTsk extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return html`${BotonCrea} ${DropDown}`
    }
}

export default CreaTsk;