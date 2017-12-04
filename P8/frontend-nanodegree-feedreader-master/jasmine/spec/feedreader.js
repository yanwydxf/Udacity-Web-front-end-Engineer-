/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*  Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url defined and url not empty',function(){
            //Define the loop, the loop length is less than the length of the array
            for(var i=0;i<allFeeds.length;i++)
            {
               expect(allFeeds[i].url).not.toBe('');//Verify URL cannot be empty
               expect(allFeeds[i].url).toBeDefined();//Verify URL must be defined
            }
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name defined and name not empty',function(){
            //Define the loop, the loop length is less than the length of the array
            for(var i=0;i<allFeeds.length;i++)
            {
                expect(allFeeds[i].name).not.toBe('');//Verify name cannot be empty
                expect(allFeeds[i].name).toBeDefined();//Verify name must be defined
            }
        });
    });


    /*  Write a new test suite named "The menu" */
    describe('The menu', function() {
        /*  Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu hidden by default',function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);//menu default hide
        });
        /*  Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('the menu icon is clicked',function(){
            //First simulate the call to click on the event, and then determine whether to display the state
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();

            //Once again call the click event, to determine whether the hidden state
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();

        });
    });
    /* Write a new test suite named "Initial Entries" */

        /*  Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0,done);//Call loadFeed incoming asynchronous function done ()
        });
        it('is asynchronous', function() {
            expect($(".feed .entry").length).toBeGreaterThan(0);//To determine whether the presence of entry feed
        });

    });


    /* Write a new test suite named "New Feed Selection"

        /*  Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    var num1 ; //Num1 represents the data acquired by fees[0]
    var num2 ;//Num1 represents the data acquired by fees[length-1]
    describe('New Feed Selection', function() {
        it('async test example', function (done) {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;//Due to network problems, set time out
             //Default is 0
            loadFeed(0, function () {
                num1 = $('.feed').html();//Perform a callback function to obtain data
                var num = allFeeds.length - 1;//Take the last value of the array
                loadFeed(num, function () {

                    num2 = $('.feed').html();//Perform a callback function to obtain data

                    expect(num1).not.toBe(num2);//The two results were compared
                    done();


                });
            });
        });


    });
}());
