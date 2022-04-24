const fs = require('fs');

// TODO: Create a function to generate markdown for README
function generateMarkdown( writeFile, copyFile ) {
  return '#Title ${data,title}'
    ##Description
    ${data.description}

    ##TableofContents
    * [Installation](#installationinstructions)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Lincense](#licensing)
    * [Github](#github)
    * [Questions](#questions)

    ##Installation
    ${data.installationinstructions}

    ##Usage
    ${data.usage}

    ##Contribution
    ${data.contribution}

    ##Test
    ${data.testinstructions}

    ##License
    $(data.licensing)

    ##GitHub
    ${data.github}

    ##Questions
    ${data.questions};
}


module.exports = generateMarkdown;
