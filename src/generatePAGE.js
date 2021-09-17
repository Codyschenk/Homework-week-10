// create Manager card
const generateManager = function(manager) {
    return `
    <div class="col-span-1 w-full h-auto">
    <div class="w-full h-40">
        <div class="w-full h-full bg-gray-100 border">
            <h3 class="text-2xl mt-5 ml-3">${manager.name}</h3>
            <h4 class="text-2xl mt-5 ml-3">Manager</h4>
            <i class="material-icons mt-5 ml-3">content_paste</i>
        </div>

        <div class="w-full h-32 bg-white border">
            <p class="text-lg mt-2 ml-3">ID: ${manager.id}</p>
            <p class="text-lg mt-2 ml-3">
                Email: <a href="mailto:${manager.email}">${manager.email}</a>
            </p>
            <p class="text-lg mt-2 ml-3">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
    </div>
    `;
};

// create Engineer card
const generateEngineer = function(engineer) {
    return `
    <div class="col-span-1 w-full h-auto">
                    <div class="w-full h-40">
                        <div class="w-full h-full bg-gray-100 border">
                            <h3 class="text-2xl mt-5 ml-3">${engineer.name}</h3>
                            <h4 class="text-2xl mt-5 ml-3">Engineer</h4>
                            <i class="material-icons mt-5 ml-3">laptop_mac</i>
                        </div>

                        <div class="w-full h-32 bg-white border">
                            <p class="text-lg mt-2 ml-3">ID: ${engineer.id}</p>
                            <p class="text-lg mt-2 ml-3">
                                Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
                            </p>
                            <p class="text-lg mt-2 ml-3">
                                Github:
                                <a href="https://github.com/${engineer.github}">${engineer.github}</a
                  >
                </p>
              </div>
            </div>
          </div>
    `;
};

// create Intern card
const generateIntern = function(intern) {
    return `
<div class="col-span-1 w-full h-auto">
    <div class="w-full h-40">
        <div class="w-full h-full bg-gray-100 border">
            <h3 class="text-2xl mt-5 ml-3">${intern.name}</h3>
            <h4 class="text-2xl mt-5 ml-3">Intern</h4>
            <i class="material-icons mt-5 ml-3">assignment_ind</i>
        </div>

        <div class="w-full h-32 bg-white border">
            <p class="text-lg mt-2 ml-3">ID: ${intern.id}</p>
            <p class="text-lg mt-2 ml-3">
                Email: <a href="mailto:${intern.email}">${intern.email}</a>
            </p>
            <p class="text-lg mt-2 ml-3">School: ${intern.school}</p>
        </div>
    </div>
</div>
    `;
};

// create page array
generatePAGE = (data) => {
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
        // create manager
        if (role === "Manager") {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // create engineer
        if (role === "Engineer") {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // create intern
        if (role === "Intern") {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
    }

    // joining strings
    const employeeCards = pageArray.join("");

    // return page
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
};

// generate html page
const generateTeamPage = function(employeeCards) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
  </head>
  <body class="w-screen h-screen relative">
      <header class="w-full h-1/6 bg-green-300 text-center">
      <h1 class="
      text-5xl text-white text-center
      flex
      align-middle
      justify-center
      pt-10
    ">
        Factory Workers
    </h1>
      </header>
      <main class="w-full h-5/6 relative">
      <div class="w-full h-full relative px-10 mt-10">
      <div class="w-full grid grid-cols-5 gap-12 gap-y-40" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  </html>


`;
};

// export to index
module.exports = generatePAGE;