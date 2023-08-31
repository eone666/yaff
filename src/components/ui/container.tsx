import {WithChildren} from "../../types.ts";
import cn from "../../utils/cn.ts";

export interface ContainerProps extends WithChildren{
    className?: string;
}

export default function Container({children, className}: ContainerProps){
    return <div className={cn("max-w-[1200px] mx-auto px-3", className)}>{children}</div>
}