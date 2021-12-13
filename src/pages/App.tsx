import React from 'react'
import { Route, Switch } from "react-router-dom"
import styles from './App.module.scss';
import Landing from './Landing';
import Questionnaire from './Questionnaire';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';

export function App() {

  return (
    <React.StrictMode>
      <main className={styles.main}>
        <Switch>
          <Route key={`landing`} path={`/`} exact component={Landing} />
          <Route key={`form`} path={`/form`} exact component={Questionnaire} />
          <Route key={`privacypolicy`} path={`/privacypolicy`} exact component={PrivacyPolicy} />
          <Route key={`tac`} path={`/termsandconditions`} exact component={TermsAndConditions} />
        </Switch>
      </main>
    </React.StrictMode>
  )
}
