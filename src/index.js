import {Komigor} from './komigor.js'
// jsx version
/** @jsx Komigor.createElement */
const element = (<div style="display: flex"  style="background:green">
                <h3 style="margin-right: 20px">Helllo World</h3> 
                <p style="margin-right: 20px">Helllo</p>
                <p style="margin-right: 20px">Helllo wor</p> 
                <p style="margin-right: 20px">Helllo wor</p> 
                <p style="margin-right: 20px">Helllo wor</p>
                </div>);

const container = document.getElementById("root");
Komigor.render(element, container);
