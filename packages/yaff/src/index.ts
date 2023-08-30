type YaffElement = any;

type YaffNodeArray = YaffNode[];

type YaffNode = YaffElement | YaffNodeArray | string | number | null | undefined;

type YaffChild = YaffElement | string | number;

function createElement(element: any, props: any, children: any){
    if(typeof element === 'function'){
        return element(props)
    }
    return {element, props: {...props, children}}
}

const Fragment = Symbol("Yaff.Fragment");

export {
    createElement,
    Fragment
}

export type {
    YaffElement,
    YaffNode,
    YaffChild
}