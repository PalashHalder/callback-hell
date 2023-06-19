// Callback Hell

// 1. Log: From BD bring EmployeeIDs
// 2. Log: Employee Biodata
// 3. Log: Employee History
/*
function getBio(id){
    setInterval(() => {
        const bio = {
            name: "Palash Halder",
            email: "halder.palash08@gmail.com"
        }
        console.log(bio);
    }, 2000);
}
*/

/*
function getEmployeesID() {
    setTimeout(() => {
        const ids = [10, 20, 30, 40, 50];
        console.log(ids);

        setTimeout(() => {
            const bio = {
                name: "Palash Halder",
                email: "halder.palash08@gmail.com"
            }
            console.log(bio);

            setTimeout(() => {
                const history = ["Pubali Bank", "Agrani Bank", "Ansar-VDP Bank"];
                console.log(history);
            }, 3000);
                  
        }, 2000)
    }, 3000)
}

getEmployeesID();
*/

//=================================

//উপরের কাজটাই নিচের উপায়ে করা যায়:

// Callback Hell

// 1. Log: From BD bring EmployeeIDs
// 2. Log: Employee Biodata single employee
// 3. Log: Employee History

// We => Promise => Work/output => (solution: Resolve, Error: Reject)

const employee = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // Code Here
    try {
      resolve([10, 20, 30, 40, 50]);
    } catch (error) {
      reject("Data not found");
    }
  }, 2000);
});

employee
  .then(function (data) {
    console.log("Success:", data);

    const bio = new Promise(function (resolve, reject) {
      setTimeout(function () {
        const biodata = {
          name: "Palash Halder",
          email: "palashavub@gmail.com",
        };
        resolve(biodata);
      }, 2000);
    });
    bio.then(function (data) {
      console.log("Success:", data);
    });

    const historyInfo = new Promise(function (resolve, reject) {
      setTimeout(function () {
        const historyInfo = ["Morning Glory", "Saifur Bangladesh"];
        resolve(historyInfo);
      }, 4000);
    });

    historyInfo
      .then(function (data) {
        console.log("Success:", data);
      })
      .catch(function (data) {
        console.log("Error:", data);
      })
      .catch(function (data) {
        console.log("Error:", data);
      });
  })
  .catch(function (data) {
    console.log("Error:", data);
  });
