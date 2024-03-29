import './assets/endmysuffering.css';
import * as utils from './utils.js';
import * as Tweakpane from './tweakpane.js';


window.addEventListener('load', async () => {
   console.log('Hello, world!');
   
   window.Effect.apply('unified', { color: '#0009' });
   
   const div = document.createElement('div');
   let element = document.createElement('div');
   div.classList.add('tweakpane-container-wrapper');
   element.classList.add('tweakpane-container');
   element.style.width = '300px';
   element.style.top = '20px';
   element.style.left = '20px';
   div.appendChild(element);
   document.body.appendChild(div);
   utils.makeDraggable(element);
   
   // TODO: Itll sometimes show undefined
   // Find out why
   
   // Extra: Should now work? Need to investigate
   
   /*while (!(await utils.getUsername())) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
   }*/
   setTimeout(Tweakpane.getTweakPaneReady(await utils.getUsername()), 5000);
   //Tweakpane.getTweakPaneReady(await utils.getUsername());
   
});

// needs fixing. I want it to be able to
// move it back to inside the screen when
// it is dragged out of bounds

// also a bug is when you drag it out ill not react. just p[ress a boolean
// and it will react again
const element = document.getElementsByClassName('tweakpane-container')[0];

element.ondragend = function () {
   utils.checkOutOfBounds('tweakpane-container');
};

