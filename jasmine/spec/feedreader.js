// feedreader.js

// all tests within $() function; runs when DOM is ready
$(function() {
    
    // first test suite 'RSS Feeds'
    describe('RSS Feeds', function() {
        
        // tests that allFeeds variable is defined & not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         // test for name defined
		it ('name defined and not empty', function() {
			for (var x = 0; x < allFeeds.length; x++){
				expect(allFeeds[x].name).toBeDefined();
				expect(allFeeds[x].name).not.toBe('');
			}
		});

        // test for URL defined
		it ('URL defined and not empty', function() {
			for (var x = 0; x < allFeeds.length; x++){
				expect(allFeeds[x].url).toBeDefined();
				expect(allFeeds[x].url).not.toBe('');
			}
		});
    });

// second test suite 'The Menu'

	describe('The Menu', function() {
    	var menu = document.body;
    	
    	// test for menu hidden by default
    	it ('menu is hidden by default', function(){
        	expect(menu.className).toContain('menu-hidden');
    	});

		// test for menu changing visibility when clicked on; toggle on off
		it ('menu changes visibility when clicked on', function() {
			var menu = document.body;
			var icon = document.querySelector('.menu-icon-link');
			icon.click();
			expect(menu.className).not.toContain('menu-hidden');
			icon.click();
			expect(menu.className).toContain('menu-hidden');
			
		});
	});

	// third test suite 'Initial Entries'
	describe('Initial Entries', function() {
		
        // when loadFeed function is done, there is 1 .entry element within .feed
		beforeEach(function(done){
			loadFeed(0, function(){
				done();
			});
		});
		
		// checks for first entry
		it ('loads single entry element', function(done) {
			var feed = document.querySelector('.feed');
			expect(feed.getElementsByClassName('entry').length).not.toBe(0);
			done();
		});
	});
	
    // fourth test suite 'New Feed Selection'
    describe ('New Feed Selection', function() {
    	  
    	// test for content changing within loadFunction
        var feedOld,feedNew;

        beforeEach(function(done){
			loadFeed(0, function(){
               feedOld= document.querySelector(".feed").innerHTML;
           
               loadFeed(1, function(){
                   feedNew= document.querySelector(".feed").innerHTML;
                   done();
               });
           });
       });        
       
       // expect the old feed not to match the new feed
       it('when a new feed is loaded, content changes', function(done){
           expect(feedOld).not.toBe(feedNew);
           done();
        });
    });
         
}());
