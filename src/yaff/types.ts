export type YaffText = string | number;

export type YaffChild = YaffElement | YaffText;

export type YaffNodeArray = YaffNode[]

export type YaffFragment = YaffNodeArray;

export type YaffNode = YaffChild | YaffFragment | boolean | null | undefined;

export type JSXElementConstructor<P> = ((props: P) => YaffElement<any, any>);

export interface YaffElement<P = any, T extends keyof HTMLElementTagNameMap | JSXElementConstructor<any> = keyof HTMLElementTagNameMap> {
    tag: T;
    props: P;
    children: YaffNode[];
}