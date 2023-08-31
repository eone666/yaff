import {Header} from "./components/header.tsx";
import {Footer} from "./components/footer.tsx";

export default function App () {
    return <div className="grid grid-rows-body min-h-screen">
        <Header/>
        <main className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold text-5xl">YAFF</h1>
            <span className="font-bold text-3xl">Yet Another Frontend Framework</span>
            <span className="font-bold text-2xl">Dumb React Re-Implementation</span>
            <div className="mt-10">
                <div className="text-center font-bold">TODO</div>
                <ul className="text-center">
                    <li>Hooks</li>
                    <li>Router</li>
                    <li>Changes Detection</li>
                    <li>Partial Update</li>
                </ul>
            </div>
        </main>
        <Footer/>
    </div>
}