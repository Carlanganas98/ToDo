import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

class TotalTsk extends Component {
    constructor(props) {
        super(props);
        this.state = {getFunct: props.getFunct, addFunct: props.addFunct};
    }

    render() {
        return html`<h1>Total Tasks: <span id="numTareas"></span></h1>`
    }
}

export default TotalTsk;