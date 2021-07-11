name_of_the_student = [];
var names_concat;

function submit()
{
    var name_input= document.getElementById("names_area").value;
    name_of_the_student.push(name_input);
    console.log(name_of_the_student);
    document.getElementById("display_names").innerHTML = name_of_the_student;
}
function show()
{
    var array_size = name_of_the_student.length;
    console.log(array_size);
 
    names_concat= name_of_the_student[0]+'<br />';
    for(var i=0; i<array_size-1;)
   
    {
        i=i+1;
        
        names_concat=names_concat.concat(name_of_the_student[i])+'<br />';

       
       
    }
    console.log(names_concat);
    document.getElementById("show_names").innerHTML =names_concat;
    document.getElementById("sort").style.visibility="visible";
}
function sort()
{
    console.log(name_of_the_student);

  var names_sort=[];
  names_sort=name_of_the_student.sort();
  var array_size = names_sort.length;
   var names_concat2= names_sort[0]+'<br />';
   for(var i=0; i<array_size-1;)
  
   {
       i=i+1;
       
       names_concat2=names_concat2.concat(names_sort[i])+'<br />';

      
      
   }
   console.log(names_concat2);
  // document.getElementById("show_names").innerHTML =names_concat2;

   //var names_concat2= name_of_the_student[0]+'<br />';

    
    document.getElementById("displaySort").innerHTML= names_concat2;
    //document.getElementById("sort").style.visibility="visible";

}
function searching()
{
    var s= document.getElementById("search area").value;
    var found=0;
    var j;
    for(j=0; j<name_of_the_student.length; j++)
    {
        
        if(s==name_of_the_student[j])
        {
            found=found+1
        }
    }
    document.getElementById("p2").innerHTML="The name was found "+found+" time/s on the list.";
    console.log("The name was found "+found+" time/s on the list.");
}