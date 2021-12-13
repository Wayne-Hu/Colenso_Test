import React from "react";
import styles from "./RectangleButton.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const RectangleButton = ( props: ButtonProps ) => {
   return (
    <button className={styles.buttonBase} { ...props } />
   )
}

export default RectangleButton;