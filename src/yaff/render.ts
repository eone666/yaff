import {YaffElement} from "yaff";


function checkIsYaffStringOrNum(yaffElement: YaffElement | string | number): yaffElement is string | number {
    return ['number', 'string'].includes(typeof yaffElement);
}
export function render(yaffElement: YaffElement | string | number, container: HTMLElement){
    if(checkIsYaffStringOrNum(yaffElement)) {
        container.appendChild(document.createTextNode(String(yaffElement)))
        return;
    }
    const domElement = document.createElement(yaffElement.tag);
    if(yaffElement.props){
        Object.keys(yaffElement.props).forEach((p)=> {
            domElement.setAttribute(p, yaffElement.props[p])
        })
    }
    if(yaffElement.children){
        // @ts-ignore
        yaffElement.children.forEach(child=>{
            if(child){
                // @ts-ignore
                render(child, domElement)

            }
        })
    }
    container.appendChild(domElement);
}