import {render} from "@/yaff/render.ts";

function Component () {
    return <div class="123">LOL</div>
}

function App () {
    return <div class="123">Hello world <Component/></div>
}

render(<App/>, document.getElementById('app')!)