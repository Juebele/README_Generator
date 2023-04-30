function createReadme(data) {
    return `# ${data.title}
    ## Purpose
    ${data.description}
    ## Function
    ${data.function}`
}

module.exports = createReadme;