import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

class CompleteTsk extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return html`<a id="botoncompleta">Complete</a>`
    }
}

export default CompleteTsk;