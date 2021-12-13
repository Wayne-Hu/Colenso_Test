import React from "react";
import styles from "./FForm.module.scss";
import { FormikFormProps, Form } from "formik";
import classNames from "classnames";

const FForm = ( props: FormikFormProps) => {
   return (
      <Form className={classNames(styles.form, props?.className)} { ...props } ></Form>
   )
}

export default FForm;