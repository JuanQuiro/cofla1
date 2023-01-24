import './style.css'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Ejercicios junior</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
      <a href="ejercicio1.html">Uno</a>
  </div>
`


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
