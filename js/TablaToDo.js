import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

class TablaToDo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return html`<table>
            <tr>
                <th id="selectores"></th>
                <th>TASK NAME</th>
                <th>PRIORITY</th>
                <th>STATUS</th>
                <th id="chstatus"></th>
            </tr>
            <tr>
                <td id="selectores"><input type="checkbox" name="sel"></td>
                <td>Examen</td>
                <td>High</td>
                <td>Pending</td>
                <td id="chstatus">
                    <select name="...">
                        <option value="...">...</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select></td>
            </tr>
            <tr>
                <td id="selectores"><input type="checkbox" name="sel"></td>
                <td>Examen</td>
                <td>High</td>
                <td>Pending</td>
                <td id="chstatus">
                    <select name="...">
                        <option value="...">...</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select></td>
            </tr>
        </table>`
    }
}

export default TablaToDo;