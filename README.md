# George Ryder - Team Profile Generator

## Description

There were many motivations behind building this project. My main motivation behind building this project was to learn more about javascript classes and object orientated programming and how they can be used to make better code that adheres to DRY (don't repeat yourself) principles. This was an area I knew very little about before making this project and was an area of programming that seemed quite intimdating. Using classes to create a team profile generation allowed me to confront this and practice with classes to a point where I understand them a lot more. One thing I struggled with especially was class inheritence, by completing this project I gained a far greater understanding of it and how it can be used to create more complex objects from multiple single classes. I also gained a further understanding of working in the command line using node and also dynamically creating files similar to the readme generator I have made previously. This has allowed me to build upon my learning from previous projects as well which has helped me to further my understanding.

I also gained a greater understanding of test driven development, primarily focused on how to use jest. This was useful as it allowed me to do checks to make sure everything was functioning as it should do. This helped me to keep a greater focus on the project whilst ensuring I did not over extend in scope. Using jest was particularly useful for the classes as I was able to test that everything in each class used returned what it was meant to when created. It also allowed me to test if class methods were being returned properly.

This projet also solves the real world issue of team profile generation. In a real world instance, an organisation would need a way to generate team profiles to increase visibility within the company whilst ensuring everyone knew eachothers roles. This project would allow a team to do this. In future iterations of this project I believe it could be good to add new classes for different type of employees and adding also adding styling. This could perhaps be done through dynamic generation so only elements that are called into the html page have styling applied; Ie: if the dynamically created HTML page has only a manager and engineers, a CSS page would also only have manager and engineer styling and not additional styling such as for interns etc... I learnt a lot whilst doing this project to equip me for the future particularly in regards to object orientated programming and testing to ensure a complete product.

## Installation

GitHub profile: https://github.com/NotGeorgeHere/Team-Profile-Generator

To install this, clone a copy to your local computer and ensure node.js is installed. From there, open the integrated terminal and using command npm install to ensure all node modules needed are in place.

## Usage

To use this project use the integrated terminal and type node ./index.js to start the application, the HTML output will be in the folder named output.

**Webpage example:**

![HTMLPage](/images/htmlwebpage.png)

## Testing

This project was created using test driven development, the tests can be run using the command NPM test in the integrated terminal.

**Example of Testing:**

![Testing](/images/tests.png)

## License

Jest - MIT

Inquirer - MIT