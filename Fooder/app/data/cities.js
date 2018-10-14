class city
{
    constructor(ime,kvartovi)
    {
    this.ime = ime;
    this.kvartovi = kvartovi;
    }
}
var SplitKvarts= [
    "Centar","Split 3","Pujanke","Žnjan"
  ];
var ZagrebKvarts = [
    "Centar","Černomerec","Cvjetno naselje","Dubrava","Trešnjevka"
];
var RijekaKvarts = [
    "Centar","Grobnik","Kantrida"
];
export var ListOfCities = [
    new city('Split' , SplitKvarts),
    new city('Zagreb' , ZagrebKvarts),
    new city('Rijeka' , RijekaKvarts)
];
