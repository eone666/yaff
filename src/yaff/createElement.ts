import {YaffElement,YaffNode, JSXElementConstructor} from './types.ts'

export function createElement<P>(tag: keyof HTMLElementTagNameMap | JSXElementConstructor<P>, props: P, ...children: YaffNode[]): YaffElement<P> {
    if(typeof tag === 'function'){
        return tag(props)
    }
    return {tag, props, children}
}