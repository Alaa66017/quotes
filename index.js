var quote =[
    { 'Quote':"Be yourself; everyone else is already taken.",
        'author':" Oscar Wilde"
    },
    { 'Quote':"“So many books, so little time.”",
    'author':" ― Frank Zappa"
},
{ 'Quote':"“A room without books is like a body without a soul.”",
'author':" ― Marcus Tullius Cicero"
},


]
 function getQuote(){
    var num= Math.floor( Math.random()*quote.length)
    console.log(num)
    document.getElementById("Quote").innerHTML=quote[num].Quote;
    document.getElementById("author").innerHTML=quote[num].author;

 }
