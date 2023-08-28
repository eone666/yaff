import {YaffElement} from "./index";


export const fragment = Symbol('Yaff.Fragment')

function checkIsStringOrNum(yaffElement: YaffElement | string | number): yaffElement is string | number {
    return ['number', 'string'].includes(typeof yaffElement);
}
export function render(yaffElement: YaffElement | string | number, container: HTMLElement){
    if(checkIsStringOrNum(yaffElement)) {
        container.appendChild(document.createTextNode(String(yaffElement)))
        return;
    }
    if(yaffElement.tag === fragment){
        if(yaffElement.children){
            yaffElement.children.forEach(child=>{
                if(child){
                    render(child, container)
                }
            })
        }
        return;
    }
    const domElement = document.createElement(yaffElement.tag);
    if(yaffElement.props){
        Object.keys(yaffElement.props).forEach((p)=> {
            domElement.setAttribute(p, yaffElement.props[p])
        })
    }
    if(yaffElement.children){
        yaffElement.children.forEach(child=>{
            if(child){
                render(child, domElement)

            }
        })
    }
    container.appendChild(domElement);
}