import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';

class TablaToDo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return html`<table>
        <tr>
            <th class="selectores"></th>
            <th>TASK NAME</th>
            <th>PRIORITY</th>
            <th>STATUS</th>
            <th class="chstatus"></th>
        </tr>
        <tr>
            <td class="selectores"><input type="checkbox" name="sel" /></td>
            <td>Examen</td>
            <td>High</td>
            <td>Pending</td>
            <td class="chstatus">
                <select name="...">
                    <option value="...">...</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select></td>
        </tr>
        <tr>
            <td class="selectores"><input type="checkbox" name="sel" /></td>
            <td>Examen</td>
            <td>High</td>
            <td>Pending</td>
            <td class="chstatus">
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