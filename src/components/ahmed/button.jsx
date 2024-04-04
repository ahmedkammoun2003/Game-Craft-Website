import React from 'react'
import ButtonSvg from '../../assets/svg/ButtonSvg'
const Button = ({className,href,onClick,children,px,white}) => {
  const classes='button relative infline-flex item-center justify-center h-44 transition-colors hover:text-color-1 ${px || "px-7 } ${white ? "text-n-8" : "text-n-1"} ${className || ""}} left-[100px] top-[450px] scale-200';
  const spanClasses ='relative z-10';
  const renderButton =()=>(
    <button className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg()}
    </button>
  );
  const renderLink =() =>{
    <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg()}
    </a>
  }
  return href ? renderLink():renderButton();
}

export default Button
