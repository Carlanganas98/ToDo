import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

class DelTsk extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return html`<button>Delete</button>`
    }
}

export default DelTsk;