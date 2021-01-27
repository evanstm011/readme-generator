function makeLicenseBadge(License) {
    if (License != "None") {
        return `![Github License](https://img.shields.io/badge/license-${License}-orange.svg)`
    }
    return ''
}

function makeLicenseLink(license) {

}

function makeLicenseSection(license) {

}

function generateMarkdown(data) {
    return `# ${data.title}
    ${makeLicenseBadge(data.license)}
    
    ##${data.description}

    ## Table of Contents

    * [Installation](#installation)

    *[Usage](#usage)


   `
}