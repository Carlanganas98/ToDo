import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

class DelTsk extends Component {
    constructor(props) {
        super(props);
        this.state = {delFunct: props.delFunct}
    }

    render() {
        return html`<button id="del" onclick="${this.props.delFunct}">Delete</button>`
    }
}

export default DelTsk;