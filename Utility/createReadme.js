function createReadme(data) { //this template literal takes data from the index.js file and uses is to write the ReadMe. The "#" are supposed to be used to set headings but they don't look right in the actual file ¯\_(ツ)_/¯
    return `# ${data.title}
    ## Purpose
    ${data.description}
    ## Function
    ${data.function}
    ## License
    ${data.license}
    ## Collaborators
    ${data.collaborators}`
}

module.exports = createReadme;