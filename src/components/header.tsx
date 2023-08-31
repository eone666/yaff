import Container from "./ui/container.tsx";
import Link from "./link.tsx";

export function Header(){
    return <header className="border-b border-gray-500 h-[50px]">
        <Container className="h-full gap-[8px] flex justify-between items-center">
            <span className="font-extrabold text-2xl">YAFF</span>
            <span> Check it on <Link className="hover:no-underline underline" href="https://github.com/eone666/yaff">Github</Link></span>
        </Container>
    </header>
}