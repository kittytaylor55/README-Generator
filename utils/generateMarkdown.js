function generateMarkdown(data) {
    
    return `# ${data.title}

  ## Table of Contents:

  [Description](#Description)
  [Tech](#Technology Used)
  [Installation](#Installation)
  [Usage](#Usage)
  [Contributers](#Contributers)
  [Contact](#Contact)
  [License](#License)
  ## Description:
  ${data.description}
  ## Technology Used:
  ${data.tech}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ##Contributers
  ${data.contributers}
  ## Contact:
  If there are any questions, contact me at ${data.contact}
  ## License:
  Covered under the [${data.license}].  For more information about licenses, please visit: https://www.fastcompany.com/3014553/what-coders-should-know-about-copyright-licensing
  `;
  }
  
  module.exports = generateMarkdown;