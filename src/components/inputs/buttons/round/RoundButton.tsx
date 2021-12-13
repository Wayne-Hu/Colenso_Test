import React from "react";
import styles from "./RoundButton.module.scss";


const RoundButton = ( props: any ) => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.buttonBase} { ...props } />
    </div>
  )
}

export default RoundButton;