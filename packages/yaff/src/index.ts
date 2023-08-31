type YaffElement = any;

type YaffNodeArray = YaffNode[];

type YaffNode = YaffElement | YaffNodeArray | string | number | null | undefined;

type YaffChild = YaffElement | string | number;

function createElement(element: any, props: any, ...children: YaffChild[]): YaffElement{

    let propsWithChildren = {...props, children: [...(props?.children || []), ...children]}

    if(typeof element === 'function'){
        return element(propsWithChildren)
    }
    return {element, props: propsWithChildren}
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