import Container from "./ui/container.tsx";
import Link from "./link.tsx";

export function Footer(){
    return <footer className="border-t border-gray-500 h-[50px]">
        <Container className="h-full gap-[8px] flex justify-center items-center">
            <span>Made with</span>
            <Link href="https://github.com/eone666/yaff" className="hover:no-underline underline">YAFF</Link>
        </Container>
    </footer>
}