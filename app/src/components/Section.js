import React, { Fragment } from 'react';

import Images from './Images';
import classes from './Section.module.css';

const Section = () => {
  return (
    <Fragment>
      <Images />
      <svg
        className={classes.svgecko}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#ffd700'
          fillOpacity='1'
          d='M0,224L60,192C120,160,240,96,360,90.7C480,85,600,139,720,144C840,149,960,107,1080,101.3C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
        ></path>
      </svg>
      <section className={classes.story}>
        <div className={classes.sec}>
          <h1>Příběh Voliho burgerů</h1>
          <p>
            Od pradávna muži všeho druhu milovali maso nebo jeho náhrady. Voli
            nebyl jiným a od narození se ládoval hambáčema. Prošel tolik
            kuchyní, tolik restaurací, tolik burg barů až si on i jeho družina
            uvědomili, že by si mohli svoje hambáče dělat sami.
          </p>
        </div>
        <div className={classes.sec}>
          <h1>Sladké léto</h1>
          <p>
            Skvadra jenž Vám přichystá lahůdku přímo na stůl anebo Vám ji doveze
            až ke dveřím si dává záležet na každém kusu hambáče stejně. To však
            neznamená, že každý burgr je stejný! Každý se liší, umístěním znaků
            a hlavně v letní sezóně také díky unikátním kódům objednávek můžete
            vyhrát dalšího zdarma. (platí pouze pro ONLINE objednávky)
          </p>
        </div>
        <div className={classes.sec}>
          <h1>Kouzelná zima</h1>
          <p>
            Dřív to byly tuhé zimy! V posledních letech se zimní měsíce díky
            klimatickým změnám mění...Jsou teplejší, ale jedno je spojuje, jsou
            stále stejně temné. Ale skvadra Vám je rozzáří. Stejně jako v létě
            je každý unikátní burger označen speciálním číslem a jednou za čas
            se stane, že se z jednoho burgru zrodí rovnou dva! (platí pouze pro
            ONLINE objednávky)
          </p>
        </div>
        <button>MENU</button>
      </section>
    </Fragment>
  );
};

export default Section;
