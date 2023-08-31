import {YaffChild, YaffNode} from "./index";

declare global {
    namespace JSX {
        export type ElementType = any;
        export type Element = any;
        export type ElementClass = any;
        export type ElementAttributesProperty = any;
        export type ElementChildrenAttribute = any;
        export type LibraryManagedAttributes<C, P> = any;
        export type IntrinsicAttributes = any;
        export type IntrinsicClassAttributes<T> = any;
        export interface IntrinsicElements {
            [elemName: string]: {children?: YaffNode, [key: string]: any};
        }
    }
}

export {}
