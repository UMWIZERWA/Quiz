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
        if(q2=="document.getElementById(q2value3")
        {
           marks=marks+5;
           }
        if(q3=="q3value1")
        {
           marks=marks+5;
        }
        if(q4=="False")
        {
           marks=marks+5;
        }
        if(q5=="q5value4;")
        {
           marks=marks+5;
        }
        $(".Output").show();
        $("#display").text("Your score is: " + marks);
 event.preventDefault();
 })
 });
 