Brute Force Solver for math24.herokuapp.com
==============

first you have to launch the java selenium standalone server with

	$ java -jar selenium-server-standalone-2.53.0.jar



then

	$ nightwatch --test tests/math24-test.js




Use below command to handle "Selenium is already running on port 4444"

	http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer
