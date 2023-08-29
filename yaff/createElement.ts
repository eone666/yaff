import {YaffElement, JSXElementConstructor, YaffChild} from './types'
export function createElement<P>(tag: keyof HTMLElementTagNameMap | JSXElementConstructor<P>, props: P, ...children: YaffChild[]): YaffElement<P> {
    if(typeof tag === 'function'){
        return tag(props)
    }
    return {tag, props, children}
}