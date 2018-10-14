export class meal {
    constructor(name, addings, category,price) {
      this.name = name;
      this.addings = addings;
      this.category = category;
      this.price = price;
    }
  }
export var ListOfMeals=[
    new meal("Margarita","rajčica,sir","Pizza","30"),
    new meal("Miješana","rajčica,sir,šunka,gljive","Pizza","35"),
    new meal("Seljačka","rajčica,sir,šunka,gljive,kapula,slanina","Pizza","38"),
    new meal("Vegetariana","rajčica,sir,gljive,masline,paprika,tikvica","Pizza","35"),
    new meal("Dalmacija","rajčica,sir,kapula","Pizza","35"),
    new meal("Hawaii","rajčica,sir,šunka,ananas","Pizza","35"),
    new meal("Al tonno","rajčica,sir,tuna,kapula","Pizza","35"),
    new meal("Calzone","rajčica,sir,gljive,šunka","Pizza","30"),
    
  ];