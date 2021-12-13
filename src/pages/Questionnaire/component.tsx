import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Formik, FormikValues, FormikConfig } from "formik";
import { number, object, string } from "yup";
import FForm from "../../components/form/FForm";
import { RouteProps, useHistory } from "react-router-dom";
import RoundButton from "../../components/inputs/buttons/round";
import { ContentContainer } from "../../components/contentContainer";
import TextField from "../../components/inputs/textField";
import styles from "./styles.module.scss";

type Props = {
  firstName: Text;
  lastName?: string | null;
} & RouteProps;

const FormSchema = object().shape({
  css: number().min(0, "Too small").max(5, "Too large").required("Required"),
  js: number().min(0, "Too small").max(5, "Too large").required("Required"),
  committed: number()
    .min(0, "Too small")
    .max(5, "Too large")
    .required("Required"),
});

export function QuestionnaireComponent(props: Props) {
  const { t } = useTranslation();
  const [score, setSum] = useState(0);
  const [finalMessage, setFinalMessage] = useState("");
  const history = useHistory();

  useEffect(() => {
    let timeout = setTimeout(() => {
      finalMessage && alert(finalMessage);
    }, 1000);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [finalMessage]);

  if (!props.location?.state) {
    history.replace("/");
    return <></>;
  }
  return (
    <ContentContainer>
      <FormikStepper
        initialValues={{
          css: 2,
          js: 2,
          committed: 2,
        }}
        validationSchema={FormSchema}
        isInitialValid={false}
        onSubmit={(values) => {
          let sum = values.css + values.js + values.committed;
          var message = sum > 6 ? "Yay! Well done!" : "Good effort!";
          setSum(sum);
          setFinalMessage(message);
        }}
      >
        <TextField name="css" title={t("questions:css.q")} />

        <TextField name="js" title={t("questions:js.q")} />

        <TextField name="committed" title={t("questions:committed.q")} />
      </FormikStepper>
    </ContentContainer>
  );
}

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  const { t } = useTranslation();
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];

  if (!React.isValidElement(currentChild)) return <></>;

  const { name } = currentChild.props;

  return (
    <Formik
      {...props}
      onSubmit={async (values, helpers) => {
        console.log(step, values);
        if (step === childrenArray.length - 1) {
          await props.onSubmit(values, helpers);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      {({ errors, touched, isValid }) => (
        <FForm autoComplete="off">
          {currentChild}
          {errors[name] && touched[name] && (
            <div className={styles.errorField}>{errors[name]}</div>
          )}
          <br />
          <RoundButton type="submit" disabled={!isValid}>
            {t("forms:forms-common.labels.button-next")}
          </RoundButton>
        </FForm>
      )}
    </Formik>
  );
}
