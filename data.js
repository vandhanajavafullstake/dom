let employees = [{ Id: 1001, Name: "Asha", Salary: 45000 },
 { Id: 1002, Name: "bhanu", Salary: 25000 },
 { Id: 1003, Name: "chitra", Salary: 67000 },
 { Id: 1004, Name: "dini", Salary: 34000 },
 { Id: 1005, Name: "hema", Salary: 55000 },
 { Id: 1006, Name: "purtvi", Salary: 55000 },
 { Id: 1007, Name: "Shalini", Salary: 25000 },
 { Id: 1008, Name: "rekha", Salary: 85000 },
 { Id: 1009, Name: "surjan", Salary: 65000 },
 { Id: 1010, Name: "navya", Salary: 34000 }]

 function display_Data() {
    let rows=""
 
    for (employee of employees) 
       
    
        rows = rows + `<tr>
            <td> ${employee.Id} </td >
            <td> ${employee.Name} </td >
            <td> ${employee.Salary} </td >
    </tr >`
    
    document.getElementById('abc').innerHTML=rows;
    }