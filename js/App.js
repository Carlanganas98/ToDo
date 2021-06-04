import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';
import CompleteTsk from './CompleteTsk.js';
import CreaTsk from './CreaTsk.js';
import DelTsk from './DelTsk.js';
import TablaToDo from './TablaToDo.js';
import TotalTsk from './TotalTsk.js';

var allTasks = [];
class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            allTasks: allTasks
        }
        this.count = 1;
    }

    getItems(){
        return this.state.allTasks;
    }

    addItem(tarea, prioridad, status){
        allTasks.push({tarea: tarea, prioridad: prioridad, status: status, id: this.count, seleccionado: false});
        this.setState({allTasks: allTasks});
        this.count++;
    }

    deleteItems() {
        console.log("delitems");
        allTasks = allTasks.filter(function(t){
            if(!t.seleccionado) {
                return t;
            }
        });
        
        this.setState({allTasks: allTasks}, () => console.log(allTasks));
    }

    setSelecionado(id, seleccionado) {
        console.log("setselec");
        allTasks = allTasks.map(function(t){
            if(t.id == id) {
                t.seleccionado = seleccionado;
            }
            return t;
        });
        console.log(allTasks);
        this.setState({allTasks: allTasks});
    }

    updateItem(id, tarea, prioridad, status) {

    }

    render() {
        return html`<header>
        <${TotalTsk} getFunct="${this.getItems.bind(this)}" addFunct="${this.addItem.bind(this)}" />
        <${CreaTsk} getFunct="${this.getItems.bind(this)}" addFunct="${this.addItem.bind(this)}" />
        </header>
        <main>
        <${DelTsk} delFunct="${this.deleteItems.bind(this)}" />
        <${CompleteTsk} getFunct="${this.getItems.bind(this)}" addFunct="${this.addItem.bind(this)}" />
        <${TablaToDo} getFunct="${this.getItems.bind(this)}" addFunct="${this.addItem.bind(this)}" 
        setselec="${this.setSelecionado.bind(this)}" />
        </main>`
    }
}

export default App;