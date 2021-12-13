import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { Formik } from "formik";
import { object, string } from "yup";
import TextField from "../../components/inputs/textField";
import RectangleButton from "../../components/inputs/buttons/rectangle";
import FForm from "../../components/form/FForm";
import { useHistory, Link } from "react-router-dom";
import { ContentContainer } from "../../components/contentContainer";
import { PoweredByLogo } from "./PoweredByLogo";
import projectLogo from "./project-logo.png";
import styles from "./styles.module.scss";

const FormSchema = object().shape({
  firstName: string()
    .min(2, "First name is not short")
    .max(50, "First name is not long")
    .required("First name is required"),
  lastName: string()
    .min(2, "Last name is too short")
    .max(50, "Last name is too long")
    .required("Last name is required"),
});

export function LandingComponent() {
  const { t } = useTranslation();
  const history = useHistory();

  const validateName =
    (fieldName: string) =>
    (value: string): string | undefined => {
      let error;
      if (!/^[a-zA-Z]{2,30}$/.test(value)) {
        return `Invalid ${fieldName}`;
      }
      return error;
    };

  return (
    <ContentContainer>
      <div className={styles.main}>
        <img className={styles.projectLogo} alt="logo" src={projectLogo} />

        <header>
          <h1>Hi there!</h1>
          <p>
            <Trans i18nKey="page-welcome:main-blurb" />
          </p>
        </header>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
          }}
          validationSchema={FormSchema}
          isInitialValid={false}
          onSubmit={(values) => {
            history.push({
              pathname: "/form",
              state: {
                firstName: values.firstName,
                lastName: values.lastName,
              },
            });
          }}
        >
          {({ errors, touched, isValid }) => (
            <FForm autoComplete="off">
              <TextField
                name="firstName"
                placeholder="First Name"
                validate={validateName("first name")}
              />
              {errors.firstName && touched.firstName && (
                <div className={styles.errorField}>{errors.firstName}</div>
              )}
              <TextField
                name="lastName"
                placeholder="Last Name"
                validate={validateName("last name")}
              />
              {errors.lastName && touched.lastName && (
                <div className={styles.errorField}>{errors.lastName}</div>
              )}
              <RectangleButton type="submit" disabled={!isValid}>
                Start
              </RectangleButton>
            </FForm>
          )}
        </Formik>

        <hr />

        <div className={styles.footerLinks}>
          <Link to="/privacypolicy">{t("common:links.privacy-policy")}</Link>
          <Link to="/termsandconditions">
            {t("common:links.terms-conditions")}
          </Link>
        </div>

        <div className={styles.footerTag}>
          <p>{t("common:other.powered-by")}</p>
          <PoweredByLogo />
        </div>
      </div>
    </ContentContainer>
  );
}
