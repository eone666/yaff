import {fragmentSymbol} from "./render.ts";

export type YaffText = string | number;

export type YaffChild = YaffElement | YaffText;

export type YaffNodeArray = YaffNode[]

export type YaffFragmentTag = typeof fragmentSymbol;

export type YaffNode = YaffChild | YaffNodeArray | null | undefined;

export type JSXElementConstructor<P> = ((props: P) => YaffElement<any, any>);

export interface YaffElement<P = any, T extends keyof HTMLElementTagNameMap | YaffFragmentTag | JSXElementConstructor<any> = keyof HTMLElementTagNameMap | YaffFragmentTag> {
    tag: T;
    props: P;
    children: YaffChild[];
}