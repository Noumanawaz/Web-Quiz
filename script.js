var Quotes=[
"The greatest glory in living lies not in never falling, but in rising every time we fall.",
"The way to get started is to quit talking and begin doing",
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",
"If life were predictable it would cease to be life, and be without flavor.",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
"Life is what happens when you're busy making other plans."];
var Authors=["Nelson Mandela","Walt Disney","Steve Jobs","Eleanor Roosevelt",
"James Cameron","John Lennon"];
var no;
function RandNo() {
    return Math.round((Math.random()*10)%5);
}
no=RandNo();
    $("p").text('"'+Quotes[no]+'" by '+Authors[no]);
    $(".author").addClass(".style");
$(".btn").click(function () {
    no=RandNo();
    $("p").slideUp();
    setTimeout(function () {
        $("p").text('"'+Quotes[no]+'" by '+Authors[no]);
        $("p").slideDown();
    },1000)
})