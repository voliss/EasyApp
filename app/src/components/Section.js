import React, { Fragment } from 'react';

import Images from './Images/Images';
import classes from './Section.module.css';
import TopSvg from './MainNavi/TopSvg';
import ButtonMenu from './ButtonMenu';

const Section = () => {
  return (
    <Fragment>
      <Images />
      <TopSvg />
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
        <ButtonMenu>MENU</ButtonMenu>
      </section>
    </Fragment>
  );
};

export default Section;
