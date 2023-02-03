import React from "react"
interface IbaseComponents {
    children: React.ReactNode;
    className?: string;
    tag: string;
    htmlFor?:string;
}

export const BaseTypography = ({ children, className, tag }: IbaseComponents) => {
    
    return (
        <>
            {tag === "h1" && <h1 className={className}>{children}</h1>}
            {tag === "h2" && <h2 className={className}>{children}</h2>}
            {tag === "h3" && <h3 className={className}>{children}</h3>}
            {tag === "h4" && <h4 className={className}>{children}</h4>}
            {tag === "h5" && <h5 className={className}>{children}</h5>}
            {tag === "h6" && <h6 className={className}>{children}</h6>}
            {tag === "p" && <p className={className}>{children}</p>}
            {tag === "span" && <p className={className}>{children}</p>}
        </>
    )
}