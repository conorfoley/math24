Brute Force Solver for math24.herokuapp.com
==============

first you have to launch the java selenium standalone server with

	$ java -jar selenium-server-standalone-2.53.0.jar



then

	$ nightwatch --test tests/math24-test.js




How to handle Selenium is already running on port 4444
Use below command to shut down the server.

	http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer

If selenium server is already running on port 4444 then it will shut down the server and says 
OKOK
if selenium is not running on this port 4444 then by hitting above url will give you 
"Unable to connect"