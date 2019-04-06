var sr=null;

function onFormSubmit()
{
     debugger;
  var formData=readFormData();
  if(sr==null)
  {
      debugger
  CheckDOB();
  validation();   
  insertNewRecord(formData); 
   }
  else
  UpdateRecord(formData);
}

function readFormData()
{
   debugger;
    var formData={};
    formData["fullname"]=document.getElementById("fullname").value;
    formData["dob"]=document.getElementById("dob").value;
    formData["Gender"]=document.querySelector('input[name="Gender"]:checked').value;
    formData["edu"]=document.getElementById("edu").value;
    formData["sub"]=document.getElementById("sub").checked;
    return formData;
}

function insertNewRecord(data)
{
    //debugger;
    var table=document.getElementById('plist').getElementsByTagName('tbody')[0];
    var newrow=table.insertRow(table.length);
    cell1=newrow.insertCell(0);
    cell1.innerHTML=data.fullname;
    cell2=newrow.insertCell(1);
    cell2.innerHTML=data.dob;
    cell3=newrow.insertCell(2);
    cell3.innerHTML=data.Gender;
    cell4=newrow.insertCell(3);
    cell4.innerHTML=data.edu;
    cell5=newrow.insertCell(4);
    cell5.innerHTML=data.sub;
    cell6=newrow.insertCell(5);
    cell6.innerHTML=`<a onclick="OnEdit(this);">Edit</a><a onClick="OnDel(this);">Delete</a>`;
}

function ResetForm()
{
    document.getElementById("fullname").value="";
}

function OnEdit(td)
{
    //debugger;
    sr=td.parentElement.parentElement;
    document.getElementById("fullname").value=sr.cells[0].innerHTML;
    document.getElementById("dob").value=sr.cells[1].innerHTML;
    document.querySelector('input[name="Gender"]:checked').value=sr.cells[2].innerHTML;
    document.getElementById("edu").value=sr.cells[3].innerHTML;
    document.getElementById("sub").value=sr.cells[4].innerHTML;      
    
}

function UpdateRecord(formData)
{
    sr.cells[0].innerHTML=formData.fullname;
    sr.cells[1].innerHTML=formData.dob;
    sr.cells[2].innerHTML=formData.Gender;
    sr.cells[3].innerHTML=formData.edu;
    sr.cells[4].innerHTML=formData.sub;
}

function OnDel(td)
{
    if(confirm('Are you sure you want to delete this record ?'))
    {
    row=td.parentElement.parentElement;
    document.getElementById('plist').deleteRow(row.rowIndex);
    ResetForm();
}
}

function validation()
{
    debugger;
//    var gender=document.querySelector('input[name="Gender"]:checked').value;
    if( (form.Gender[0].checked==false && form.Gender[1].checked==false)==false)
    {
     alert('Select Gender');
    }

}
function CheckDOB()
{
    debugger;
    var dob=document.getElementById("dob").value;
    var selected_dob= new Date(dob);
    var tod=new Date();
    if(selected_dob=="Invalid Date {}")
    {
        alert('Select DOB');
    }
    if(selected_dob>tod)
    {
        alert('Date of Birth cannot be greater than System Date');
        return false;
    }
    return true;
}