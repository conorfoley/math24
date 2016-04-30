module.exports = {
	'Test Math24' : function(browser){
		
		browser.url('http://math24.herokuapp.com');
		browser.waitForElementVisible('body', 1000);
		browser.pause(1000);
		browser.assert.containsText('button', 'generate');
		browser.assert.elementPresent('div.App-nums');
		browser.assert.elementPresent('div.App-nums-num');
	},

	'Try to Solve' : function(browser){
		
		function verifyWin(){
			browser.pause(500);
			browser.getText('body > div > div.App-result', function(result){
				
				console.log(result.value);
				if (result.value === '24'){
					this.pause(1000);

					console.log('you win!');
					process.exit();
					
				}
			});		
				
		}

		function tryAdd(){
			browser.clearValue('input');
			//browser.click('button');
			browser.pause(500);
			browser.getText('body > div > div.App-nums > div:nth-child(1)', function(result){
				this.setValue('input', '(' + result.value + ')' + '+');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(2)', function(result){
				this.setValue('input', '(' + result.value + ')' + '+');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(3)', function(result){
				this.setValue('input', '(' + result.value + ')' + '+');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(4)', function(result){
				this.setValue('input', '(' + result.value + ')');
			});
		}
		function tryMultLast(){
			browser.clearValue('input');
			//browser.click('button');
			browser.pause(500);
			browser.getText('body > div > div.App-nums > div:nth-child(1)', function(result){
				this.setValue('input', '(' + result.value + ')' + '+');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(2)', function(result){
				this.setValue('input', '(' + result.value + ')' + '+');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(3)', function(result){
				this.setValue('input', '(' + result.value + ')' + '*');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(4)', function(result){
				this.setValue('input', '(' + result.value + ')');
			});

		}
		function tryMultMiddle(){
			browser.clearValue('input');
			//browser.click('button');
			browser.pause(500);
			browser.getText('body > div > div.App-nums > div:nth-child(1)', function(result){
				this.setValue('input', '(' + result.value + ')' + '+');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(2)', function(result){
				this.setValue('input', '(' + result.value + ')' + '*');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(3)', function(result){
				this.setValue('input', '(' + result.value + ')' + '+');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(4)', function(result){
				this.setValue('input', '(' + result.value + ')');
			});

		}
		function tryMultFirst(){
			browser.clearValue('input');
			//browser.click('button');
			browser.pause(500);
			browser.getText('body > div > div.App-nums > div:nth-child(1)', function(result){
				this.setValue('input', '(' + result.value + ')' + '*');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(2)', function(result){
				this.setValue('input', '(' + result.value + ')' + '+');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(3)', function(result){
				this.setValue('input', '(' + result.value + ')' + '+');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(4)', function(result){
				this.setValue('input', '(' + result.value + ')');
			});

		}
		function trySubtractLast(){
			browser.clearValue('input');
			//browser.click('button');
			browser.pause(500);
			browser.getText('body > div > div.App-nums > div:nth-child(1)', function(result){
				this.setValue('input', '(' + result.value + ')' + '+');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(2)', function(result){
				this.setValue('input', '(' + result.value + ')' + '+');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(3)', function(result){
				this.setValue('input', '(' + result.value + ')' + '-');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(4)', function(result){
				this.setValue('input', '(' + result.value + ')');
			});
		}
		function trySubtractThird(){
			browser.clearValue('input');
			//browser.click('button');
			browser.pause(500);
			browser.getText('body > div > div.App-nums > div:nth-child(1)', function(result){
				this.setValue('input', '(' + result.value + ')' + '+');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(2)', function(result){
				this.setValue('input', '(' + result.value + ')' + '-');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(3)', function(result){
				this.setValue('input', '(' + result.value + ')' + '+');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(4)', function(result){
				this.setValue('input', '(' + result.value + ')');
			});
		}
		function trySubtractSecond(){
			browser.clearValue('input');
			//browser.click('button');
			browser.pause(500);
			browser.getText('body > div > div.App-nums > div:nth-child(1)', function(result){
				this.setValue('input', '(' + result.value + ')' + '-');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(2)', function(result){
				this.setValue('input', '(' + result.value + ')' + '+');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(3)', function(result){
				this.setValue('input', '(' + result.value + ')' + '+');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(4)', function(result){
				this.setValue('input', '(' + result.value + ')');
			});
		}
		function trySubtractFirst(){
			browser.clearValue('input');
			//browser.click('button');
			browser.pause(500);
			browser.getText('body > div > div.App-nums > div:nth-child(1)', function(result){
				this.setValue('input', '(' + '-' + result.value + ')' + '+');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(2)', function(result){
				this.setValue('input', '(' + result.value + ')' + '+');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(3)', function(result){
				this.setValue('input', '(' + result.value + ')' + '+');
			});
			browser.getText('body > div > div.App-nums > div:nth-child(4)', function(result){
				this.setValue('input', '(' + result.value + ')');
			});
		}
		function tryAddAndVerify(){
			tryAdd();
			verifyWin();
		}
		function tryMultAndVerify(){
			tryMultLast();
			verifyWin();
			tryMultMiddle();
			verifyWin();
			tryMultFirst();
			verifyWin();
		}
		function trySubtractAndVerify(){
			trySubtractLast();
			verifyWin();
			trySubtractThird();
			verifyWin();
			trySubtractSecond();
			verifyWin();
			trySubtractFirst();
			verifyWin();
		}
		function mainLoop(){
			for (var j = 0; j <= 24; j++) {
				tryAddAndVerify();
				browser.getText('body > div > div.App-result', function(result){

				if (result.value > '24'){
					trySubtractAndVerify();	
				}
				else if (result.value < '24'){
					tryMultAndVerify();
				}
				browser.pause(500);
				browser.click('button');
			});
			}
		}
		mainLoop();	
	}
};