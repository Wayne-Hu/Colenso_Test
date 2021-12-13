import React from "react";
import styles from "./styles.module.scss";

export const ContentContainer: React.FC = ( props ) => {
  return (
    <div className={styles.main} {...props}>
      { props.children }
    </div>
  )
}
