$(document).ready(function (){
    $('#blanks form').submit(function(event){
        var q1 = $("input:radio[name=question1]:checked").val();
        var q2 = $("input:radio[name=question2]:checked").val();
        var q3 = $("input:radio[name=question3]:checked").val();
        var q4 = $("input:radio[name=question4]:checked").val();
        var q5 = $("input:radio[name=question5]:checked").val();
        var marks=0;
        if(q1=="script")
        {
           marks=marks+5;
           }
        if(q2=="document.getElementById("demo").innerHTML = "Hello World!";")
        {
           marks=marks+5;
           }
        if(q3=="The <"body"> section")
        {
           marks=marks+5;
        }
        if(q4=="False")
        {
           marks=marks+5;
        }
        if(q5=="alert("Hello World");")
        {
           marks=marks+5;
        }
        $(".Output").show();
        $("#display").text("Your score is: " + marks);
 event.preventDefault();
 })
 });
 