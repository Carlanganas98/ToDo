import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

class CompleteTsk extends Component {
    constructor(props) {
        super(props);
        this.state = {getFunct: props.getFunct, addFunct: props.addFunct}
    }

    render() {
        return html`<button id="complete" onclick="${this.props.compFunct}">Complete</button>`
    }
}

export default CompleteTsk;