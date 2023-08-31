import {WithChildren} from "../types.ts";
import cn from "../utils/cn.ts";

export interface LinkProps extends WithChildren {
    href: string;
    className?: string;
}

export default function Link({href, children, className}:LinkProps) {
    return <a href={href} className={cn(className)}>{children}</a>
}