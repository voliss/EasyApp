import React, { Fragment } from 'react';

import MenuSvg from './MainNavi/MenuSvg';
import ButtonShop from './ButtonShop';
import OrderItem from './OrderItem';

const burgery = [
  {
    id: 'b1',
    nazev: 'Lípák',
    cena: 169,
    obsah:
      'Domácí bulka, 180g BIO hovězí, cheddar, BBQ omáčka, salát, kys. okurky',
    popis:
      'Českolipskej odchovanec. Labužnický zážitek ze severu Čech, cena/výkon TOP.',
  },
  {
    id: 'b2',
    nazev: 'Divočák',
    cena: 169,
    obsah:
      'Domácí bulka, trhané BIO vepřové, rozteklý cheddar, sweetchilli omáčka',
    popis: 'Pro milovníky trhaného masa ta nejlepší volba. Senzace k pivu.',
  },
  {
    id: 'b3',
    nazev: 'Mejdej',
    cena: 209,
    obsah:
      'Domácí bulka, 2x 140g BIO hovězí, cheddar, rozteklý cheddar, Voli omáčka, salát, žampiony, červená cibule',
    popis:
      'Pořádná porce, možná se u něj trochu zašpiníš, ale jinak to je nedocenitelná pochoutka za férovou cenu.',
  },
  {
    id: 'b4',
    nazev: 'Lejdy',
    cena: 149,
    obsah:
      'Domácí bulka, 140g BIO hovězí, eidam, kečup, majonéza, salát, rajčata, smažené cibulové kroužky',
    popis:
      'Nejmenší z naší rodiny burgerů. U něj se nezašpiníš ani nezapotíš, ideální na první rande.',
  },
];

const MenuKatalog = () => {
  return (
    <Fragment>
      <MenuSvg />
      {burgery.map((burger) => (
        <OrderItem
          key={burger.id}
          nazev={burger.nazev}
          cena={burger.cena}
          popis={burger.popis}
          obsah={burger.obsah}
        />
      ))}
      <ButtonShop>Objednej</ButtonShop>
    </Fragment>
  );
};

export default MenuKatalog;
