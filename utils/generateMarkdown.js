let licenseName = '';
let licenseBadge = '';
let licenseLink = '';
let licenseSection = '';
let tocSection = '';

function renderLicenseSection(license) {
  switch (license) {
    case "NONE":
      licenseName = '';
      licenseBadge = '';
      licenseLink = '';
      break;
    case "Apache 2.0":
      licenseName = 'License';
      licenseBadge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
      licenseLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case "Boost Softare License 1.0":
      licenseName = 'License';
      licenseBadge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
      licenseLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case "BSD 3-Clause":
      licenseName = 'License',
      licenseBadge = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause'
      break;
    case "BSD 2-Clause":
      licenseName = 'License',
      licenseBadge = 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
      licenseLink = 'https://opensource.org/licenses/BSD-2-Clause'
      break;
    case "IBM Public License Version 1.0":
      licenseName = 'License: IPL 1.0',
      licenseBadge = 'https://img.shields.io/badge/License-IPL_1.0-blue.svg',
      licenseLink = 'https://opensource.org/licenses/IPL-1.0'
      break;
    case "ISC License":
      licenseName = 'License: ISC';
      licenseBadge = 'https://img.shields.io/badge/License-ISC-blue.svg';
      licenseLink = 'https://opensource.org/licenses/ISC';
      break;
    case "MIT License":
      licenseName = 'License: MIT';
      licenseBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case "Mozilla Public License 2.0":
      licenseName = 'License: MPL 2.0';
      licenseBadge = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
      licenseLink = 'https://opensource.org/licenses/MPL-2.0';
      break;
    case "Perl":
      licenseName = 'License: Artistic-2.0';
      licenseBadge = 'https://img.shields.io/badge/License-Perl-0298c3.svg';
      licenseLink = 'https://opensource.org/licenses/Artistic-2.0';
      break;
    case "Artistic 2.0":
      licenseName = 'License: Artistic-2.0';
      licenseBadge = 'https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg';
      licenseLink = 'https://opensource.org/licenses/Artistic-2.0';
      break;
    case "SIL Open Font License 1.1":
      licenseName = 'License: Open Font-1.1';
      licenseBadge = 'https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg';
      licenseLink = 'https://opensource.org/licenses/OFL-1.1';
      break;
    case "The Unlicense":
      licenseName = 'License: Unlicense';
      licenseBadge = 'https://img.shields.io/badge/license-Unlicense-blue.svg';
      licenseLink = 'http://unlicense.org/';
      break;
    case "The Do What the Fuck You Want to Public License":
      licenseName = 'License: WTFPL';
      licenseBadge = 'https://img.shields.io/badge/License-WTFPL-brightgreen.svg';
      licenseLink = 'http://www.wtfpl.net/about/';
      break;
    case "zlib/libpng":
      licenseName = 'License: Zlib';
      licenseBadge = 'https://img.shields.io/badge/License-Zlib-lightgrey.svg';
      licenseLink = 'https://opensource.org/licenses/Zlib';
      break;
  }

  if (license == "NONE" || license == null) {
    licenseSection = '';
  } else {
    licenseSection = `## License\n[![${licenseName}](${licenseBadge})](${licenseLink})\n`;
    return licenseSection;
  }
}

function generateTOC(data) {
  let descriptionTOC = '';
  let installationTOC = '';
  let usageTOC = '';
  let contributionTOC = '';
  let testTOC = '';
  
  if (data.projectDescription == '' || data.projectDescription == null) {
    descriptionTOC = '';
  } else {
    descriptionTOC = `- [Description](#description)`;
  }

  if (data.installationInstructions == '' || data.installationInstructions == null) {
    installationTOC = '';
  } else {
  installationTOC = '- [Installation Instructions](#intallation-instructions)';
  }

  if (data.usageInformation == '' || data.usageInformation == null) {
    usageTOC = '';
  } else {
    usageTOC = `- [Usage Information](#usage-information)`;
  }

  if (data.contributionGuidelines == '' || data.contributionGuidelines == null) {
    contributionTOC = '';
  } else {
    contributionSection = `- [Contribution Guidelines](#contribution-guidelines)`;
  }
  
  if (data.testInstructions == '' || data.testInstructions == null) {
    testTOC = '';
  } else {
    testTOC = `- [Test Instructions](#test-instructions)`;
  }

  if (descriptionTOC == '' && installationTOC == '' && usageTOC == '' && contributionTOC == '' && testTOC == '' && testTOC == '') {
    tocSection = '';
    return tocSection;
  } else {
    tocSection = `## Table of Contents\n${descriptionTOC}\n${installationTOC}\n${usageTOC}\n${contributionTOC}\n${testTOC}\n`;
    return tocSection;
  }
}

function generateMarkdown(data) {

  const license = data.license;
  renderLicenseSection(license);

  generateTOC(data);
  
  if (data.projectTitle == '' || data.projectTitle == null) {
    titleSection = '';
  } else {
    titleSection = `# ${data.projectTitle}\n`;
  }
  
  if (data.projectDescription == '' || data.projectDescription == null) {
    descriptionSection = '';
  } else {
    descriptionSection = `\n## Description \n${data.projectDescription}`;
  }
  
  if (data.installationInstructions == '' || data.installationInstructions == null) {
    installationSection = '';
  } else {
    installationSection = `\n## Installation Instructions\n${data.installationInstructions}`;
  }
  
  if (data.usageInformation == '' || data.usageInformation == null) {
    usageSection = '';
  } else {
    usageSection = `\n## Usage Information\n${data.usageInformation}`;
  }

  if (data.contributionGuidelines == '' || data.contributionGuidelines == null) {
    contributionSection = '';
  } else {
    contributionSection = `\n## Contribution Guidelines\n${data.contributionGuidelines}`;
  }
  
  if (data.testInstructions == '' || data.testInstructions == null) {
    testSection = '';
  } else {
    testSection = `\n## Test Instructions\n${data.testInstructions}`;
  }

  return `${titleSection}${licenseSection}${tocSection}${descriptionSection}${installationSection}${usageSection}${contributionSection}${testSection}`;
}

module.exports = generateMarkdown;
