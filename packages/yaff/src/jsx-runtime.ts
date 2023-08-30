declare global {
    namespace JSX {
        export interface IntrinsicElements {
            [elemName: string]: any;
        }
    }
}

export {}
