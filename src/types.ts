import {YaffNode} from "yaff";

export type WithChildren<T = unknown> = {children: YaffNode} & T