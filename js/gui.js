import { html, render, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';
import CompleteTsk from './CompleteTsk.js';
import CreaTsk from './CreaTsk.js';
import DelTsk from './DelTsk.js';
import TablaToDo from './TablaToDo.js';
import TotalTsk from './TotalTsk.js';

render(html`<header>
            <${TotalTsk} />
            <${CreaTsk} />
            </header>
            <main>
            <${DelTsk} />
            <${CompleteTsk} />
            <${TablaToDo} />
            </main>`, document.body)