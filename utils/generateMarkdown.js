// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
{
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) 
{

}

/* 
  Returns the license section of README
  If there is no license, return an empty string
*/
function renderLicenseSection(license) 
{

}

// Generates markdown text for README.md and returns it as a string.
function generateMarkdown(data) 
{
  return `# ${data[0]}  

  ## Description  
  ${data[1]}  
  
  ## Table of Contents  
  - [Installation](#installation)  
  - [Usage](#usage)  
  - [Contribution Guidelines](#contribution_guidelines)  
  - [Test Instructions](#test_instructions)  
  - [Credits](#credits)  
  - [License](#license)  
  
  ## Installation  
  ${data[2]}  
  
  ## Usage  
  ${data[3]}  
  
  ## Contribution Guidelines  
  ${data[4]}  
  
  ## Test Instructions  
  ${data[5]}  
  
  ## Credits  
  ${data[6]} 
  
  ## Questions  
  For additional questions, here is my email:  
  ${data[7]}  
    
  Link to my GitHub:
  ${data[8]}  
  
  ## License  
  ${data[9]}`;
}

module.exports = {renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown};
