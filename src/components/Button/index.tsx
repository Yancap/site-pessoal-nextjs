import React, { MouseEvent, ReactElement } from 'react'
import styles from './Button.module.scss'
interface ButtonProps {
    icon?: string;
    text?: string;
    children?: ReactElement;
    mouseRight?: () => void;
    onClick: (event: MouseEvent) => void;
}
export const Button = ({text, icon, onClick, mouseRight, children, ...props}: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} onContextMenu={mouseRight} {...props}>
        {icon && 
        <div className={styles.icon}>
            <img src={icon} alt="i" />
        </div>}
        {children}
        {text && 
        <div>
            <span>{text}</span>
        </div>}
    </button>
  )
}
