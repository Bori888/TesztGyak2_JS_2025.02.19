import { szamjegyekOsszege } from "./fuggveny.js";

export function szamjegyekOszegeTeszt() {
  let tesztEsetekLista = [
    {
        szam: 12,
        vart: 3,
      },
    {
      szam: 20,
      vart: 2,
    },
    {
        szam: 25,
        vart: 7,
      },
    {
      szam: 300,
      vart: 3,
    },
    {
      szam: 400,
      vart: 4,
    },
    {
      szam: 21,
      vart: 3,
    },
    {
      szam: 301,
      vart: 4,
    },

    {
      szam: 321,
      vart: 6,
    },
    {
        szam: 324,
        vart: 9,
      },
    {
        szam: 1111111111,
        vart: 10,
      },
    
  ];

  for (let index = 0; index < tesztEsetekLista.length; index++) {
    let szam = tesztEsetekLista[index].szam;
    let vart = tesztEsetekLista[index].vart;
    let kapott = szamjegyekOsszege(szam);
    console.assert(
      vart === kapott,
      `szam:${szam}, vart:${szam},kapott:${kapott}`
    );
  }
}