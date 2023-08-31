// @ts-ignore FIXME
import {YaffElement, Fragment, YaffChild} from "yaff";


function checkIsStringOrNum(element: YaffChild): element is string | number {
    return ['number', 'string'].includes(typeof element);
}

function renderChildren (element: YaffElement, container: HTMLElement): void {
    if(element.props.children){
        if(checkIsStringOrNum(element.props.children)) {
            container.appendChild(document.createTextNode(element.props.children.toString()))
            return;
        }
        if(Array.isArray(element.props.children)){
            element.props.children.forEach((child: YaffChild)=>{
                if(child !== undefined && child !== null){
                    render(child, container)
                }
            })
        }
    }
}
export function render(child: YaffChild, container: HTMLElement){
    if(checkIsStringOrNum(child)) {
        return container.appendChild(document.createTextNode(child.toString()));
    }

    const element = child as YaffElement;

    if(element.element === Fragment){
        return renderChildren(element,container);
    }

    const domElement = document.createElement(element.element);

    if(element.props){
        Object.keys(element.props).filter(k=>k !== "children").forEach((p)=> {
            domElement.setAttribute(p, element.props[p])
        })
    }

    renderChildren(element, domElement)

    container.appendChild(domElement);
}