import React from "react";
import styles from './styles.module.scss';
import { ContentContainer } from "../../components/contentContainer";
import { Trans } from "react-i18next";

export default class TermsAndConditionsComponent extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <header>
                    <h1><Trans i18nKey="common:links.terms-conditions" /></h1>
                </header>
                <section className={styles.content}>
                    <ContentContainer>
                    </ContentContainer>
                </section>
            </div>
        )
    }
}
