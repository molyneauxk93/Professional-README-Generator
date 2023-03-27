// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    // let licenseBadge = license.replace(' ', '%20');

    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    if (license === 'MIT') {
        return 'https://opensource.org/licenses/MIT';
    } else if (license === 'Apache') {
        return 'https://opensource.org/licenses/Apache-2.0';
    } else if (license === 'ISC') {
        return 'https://opensource.org/licenses/ISC';
    } else if (license === 'Boost Software License') {
        return 'https://www.boost.org/LICENSE_1_0.txt';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        return `## License
${license}`;
    } else {
        return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

let licenseLink = renderLicenseLink(data.license);


return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${data.installation}

## Usage 
${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

Link to GitHub: https://github.com/${data.github}

If you would like to contact me with any questions you might have. Please email me @ ${data.email} and I will get back to you as soon as I am able to. Thanks!

${renderLicenseSection(licenseLink)}
`;
}

module.exports = generateMarkdown;