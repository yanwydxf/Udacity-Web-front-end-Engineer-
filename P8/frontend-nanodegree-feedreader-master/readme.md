## Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

## How to use this item

1. the first open index.html page is running 
2. page in the upper left corner of the page can click to view and click on the right side of the class can refresh 
3. news you can modify the index.html or app.js to complete the test
 
## How to pass the test

1. The first test as long as the guarantee allFeed the following url are defined and are not empty can be verified by the test 
2. The second test as long as allFeed below the definition of both name and are not empty can be verified through the test 
3. The third test needs to determine whether the menu is hidden by default, this place shows and hide are the class to control the body, so this method to compare the tobe method to complete the class test 
4. The fourth test is to switch the menu , This place I simulated a two-click to complete my test. 
5. Through beforeach done function to complete the test, as long as the guarantee.feed below. Entry can be tested 
6. This test needs to determine whether there is a new feed Come in, I made two asynchronous calls in this place, to simulate the request to complete my test

