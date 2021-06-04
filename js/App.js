import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';
import CompleteTsk from './CompleteTsk.js';
import CreaTsk from './CreaTsk.js';
import DelTsk from './DelTsk.js';
import TablaToDo from './TablaToDo.js';
import TotalTsk from './TotalTsk.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allTasks: []
        }
    }

    render() {
        return html`<header>
        <${TotalTsk} />
        <${CreaTsk} />
        </header>
        <main>
        <${DelTsk} />
        <${CompleteTsk} />
        <${TablaToDo} />
        </main>`
    }
}

export default App;