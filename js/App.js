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
        allTasks = allTasks.filter(function(t){
            if(!t.seleccionado) {
                return t;
            }
        });
        
        this.setState({allTasks: allTasks},() => this.forceUpdate());
    }

    completeItems() {
        allTasks = allTasks.map(function(t){
            if(t.seleccionado) {
                t.status = "Completed";
            }
            t.seleccionado = false;
            return t;
        });
        this.setState({allTasks: allTasks});
    }

    setSelecionado(id, seleccionado) {
        allTasks = allTasks.map(function(t){
            if(t.id == id) {
                t.seleccionado = seleccionado;
            }
            return t;
        });
        this.setState({allTasks: allTasks});
    }

    setPrior(id, prioridad){
        allTasks = allTasks.map(function(t){
            if(t.id == id) {
                t.prioridad = prioridad;
            }
            return t;
        });
        this.setState({allTasks: allTasks});
    }

    modifTarea(id, tarea) {
        allTasks = allTasks.map(function(t){
            if(t.id == id) {
                t.tarea = tarea;
            }
            return t;
        });
        this.setState({allTasks: allTasks});
    }

    render() {
        return html`<header>
        <${TotalTsk} getFunct="${this.getItems.bind(this)}" addFunct="${this.addItem.bind(this)}" />
        <${CreaTsk} getFunct="${this.getItems.bind(this)}" addFunct="${this.addItem.bind(this)}" />
        </header>
        <main>
        <${DelTsk} delFunct="${this.deleteItems.bind(this)}" />
        <${CompleteTsk} compFunct="${this.completeItems.bind(this)}" />
        <${TablaToDo} getFunct="${this.getItems.bind(this)}" addFunct="${this.addItem.bind(this)}" 
        setselec="${this.setSelecionado.bind(this)}" 
        setprior="${this.setPrior.bind(this)}" 
        cambiatarea="${this.modifTarea.bind(this)}" />
        </main>`
    }
}

export default App;