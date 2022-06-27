#! /usr/bin/env node

// const commander = require('child_process')
// // const repoName = process.argv(2)
//  const gitCheckoutCommand = "git clone --depth 1 https://github.com/jimbits/starter-kits.git"
//  const installDependancies = `cd ${repoName} && npm install`

// function runCommand (command){
//     try{
//        commander.execSync(command, {stdio:'inherit'})
//     }
//     catch(e){
//         console.log(`Failed to execute the following command ${command}`)
//         return false
//     }
//     return true
// }

// runCommand(gitCheckoutCommand)

// const kitName = process.argv[2];
// console.log(`which template do you want to use ${kitName}`)
import {  readdirSync} from 'fs'  
import {join, dirname} from 'path'
import {fileURLToPath} from 'url'
import inquirer from 'inquirer';
 
 const templatePath = join(dirname(fileURLToPath(import.meta.url)), '../templates')
 const availableKits = readdirSync(templatePath)

 

 
 const questions = [
    {
      type: 'rawlist',
      name: 'kittype',
      message: 'What type of kit do you want to install',
      default: 'web-starter-kit',
      choices: availableKits
    },
    {
        type: 'input',
        name: 'name',
        message: 'what is the name of the project',
        default: 'f',
      },
]

inquirer.prompt(questions).then((answers) => {
    console.log('\nTemplate Starter Kit:');
    console.log(JSON.stringify(answers, null, '  '));
  });
 