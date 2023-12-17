import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'BlueLine',
    Svg: require('@site/static/img/icon.svg').default,
    description: (
      <>
          <code>BlueLine</code> är ett omfattande projekt och dokumentation som riktar sig till GTA V-entusiaster och spelare som vill fördjupa sin spelupplevelse genom att installera LSPDFR (Los Santos Police Department First Response).
      </>
    ),
  },

  {
    title: 'Installation',
    Svg: require('@site/static/img/download.svg').default,
    description: (
      <>
        BlueLine täcker steg-för-steg-installationen av LSPDFR och dess komponenter som installation av <code>uniformer</code>, <code>bilar</code> och <code>scripts</code>. Detta säkerställer att användarna får en heltäckande och autentisk spelupplevelse.
      </>
    ),
  },

  {
    title: 'Lätthet',
    Svg: require('@site/static/img/book.svg').default,
    description: (
      <>
        Dokumentationen innehåller även <code>bilder</code> och <code>videor</code> (på diverse steg) som täcker steg som kan vara svåra att förstå.
      </>
    ),
  },

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
