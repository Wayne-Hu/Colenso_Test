import React from "react";
import { FieldAttributes, Field } from "formik";
import styles from "./TextField.module.scss";

const TextField = ( props: FieldAttributes<any>  ) => {
  return (
    <div className={styles.fieldWrapper}>
      {props.title && <h3>{props.title}</h3>}
      <Field type="text" className={styles.inputText}  { ...props }></Field>
    </div>
  )
}

export default TextField;