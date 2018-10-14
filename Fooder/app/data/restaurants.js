import restImg from '../images/rest.jpg';
import fastImg from '../images/fast.jpg';
  
  class restoran {
    constructor(ime , slika, komentari,ocjena,id) {
      this.ime = ime;
      this.slika = slika;
      this.komentari = komentari;
      this.ocjena = ocjena;
      this.id = id;
    }
  }


  export var ListOfRest=[
    new restoran("Restoran 1",restImg,"3","4.5",1),
    new restoran("Restoran 2",fastImg,"3","3.5",2),
    new restoran("Restoran 3",fastImg,"3","2.0",3),
    new restoran("Restoran 4",restImg,"3","5.0",4),
  ];
