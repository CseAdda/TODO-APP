mysubmit = document.getElementById('submit');
mysubmit.addEventListener('click', addtask);
let input1, input2;


function addtask() {
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;
    if (input1 == '' && input2 == '') {
        alert('Please fill all the field');
    } else {
        localtask = localStorage.getItem('items');
        if (localtask == null) {
            myarray = []
            myarray.push([input1, input2])
            localStorage.setItem('items', JSON.stringify(myarray));
        } else {
            myarraystr = localStorage.getItem('items');
            myarray = JSON.parse(myarraystr);
            myarray.push([input1, input2])
            localStorage.setItem('items', JSON.stringify(myarray));
            
        }

    }
    added()
    document.getElementById("input1").value=''
    document.getElementById("input2").value=''
    alert('Task Added Successfully');
}

function added() {
    localtask = localStorage.getItem('items');
    if(localtask==null){
        myarray=[]
    }
    else{
    myarray = JSON.parse(localtask);
    }
    let str = '';
    additem = document.getElementById("tablebody");
    if(myarray==[]){
        
    }
    else{
        myarray.forEach((items, index) => {
            str += `<tr>
                    <th scope="row">${index+1}</th>
                    <td >${myarray[index][0]}</td>
                    <td >${myarray[index][1]}</td>
                    <td>
                    
                        <button type="button " class="btn btn-danger " onclick="deletetask('${index}')">Delete</button>
                        <button type="button " class="btn btn-info " onclick="taskedit('${index}')">Edit</button>
                    </td>
                </tr>`
        })
        additem.innerHTML = str;
    }
}

function deletetask(index) {
    alert("delete")
    myarraystr = localStorage.getItem('items');
    myarray = JSON.parse(myarraystr);
    myarray.splice(index,1);
    localStorage.setItem('items', JSON.stringify(myarray))
    added();
}

function deletealltask() {
    confirm("Do Yor really want to delete all task.")
    localStorage.clear()
    added();
}

function taskedit(index) {
    addtskbtn = document.getElementById('submit');
    addtskbtn.style.display = "none";
    document.getElementById('savetask').style.display = "block"
    myarraystr = localStorage.getItem('items');
    myarray = JSON.parse(myarraystr);
    input1 = document.getElementById('input1');
    input2 = document.getElementById('input2');
    input1.value = myarray[index][0];
    input2.value = myarray[index][1];
    savetskbtn = document.getElementById('savetask');
    savetskbtn.addEventListener('click',()=> savetask(index));
}

function savetask(index) {
    myarraystr = localStorage.getItem('items');
    myarray = JSON.parse(myarraystr);
    input1 = document.getElementById('input1').value;
    input2 = document.getElementById('input2').value;
    myarray[index] = ([input1, input2]);
    localStorage.setItem('items', JSON.stringify(myarray));
    addtskbtn = document.getElementById('submit');
    addtskbtn.style.display = "block";
    document.getElementById('savetask').style.display = "none"
    alert("save task")
    document.getElementById("input1").value=''
    document.getElementById("input2").value=''

    added()
}
added()