import {render} from "@/yaff/render.ts";

function Component () {
    return <>aaa</>
}

function App () {
    return <div class="123">Hello world <Component/></div>
}

render(<App/>, document.getElementById('app')!)