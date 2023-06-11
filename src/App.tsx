import React from 'react';
import styles from './App.module.scss';
import { Header } from './components/header/Header';
import { Description } from './components/description/Description';
import { WrapForm } from './components/wrapForm/WrapForm';
import { AdditionalInfo } from './components/additionalInfo/AdditionalInfo';
import { Footer } from './components/footer/Footer';
import { Technologies } from './components/technologies/Technologies';
function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.description}>
            <Description />
          </div>
          <div className={styles.form}>
            <WrapForm />
          </div>
          <div className={styles.info}>
            <AdditionalInfo />
          </div>
        </div>
        <div className={styles.wrapTech}>
          <Technologies />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
