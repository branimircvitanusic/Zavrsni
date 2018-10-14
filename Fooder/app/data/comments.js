class comment
{
    constructor(author,rate,value)
    {
        this.author = author;
        this.comment_rate = rate
        this.comment_value = value;
    }
}
export var ListOfComments =[
    new comment("Mate",5,"Hrana je ukusna. Preporučam ovaj restoran!"),
    new comment("Ante",3.5,"Solidno..."),
    new comment("Ana",5,"Sve super!")
];