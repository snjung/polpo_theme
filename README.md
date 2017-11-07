# polpo_theme

A Typo3-Extension housing the template for the website of the Canoe and Rowing Club JKRV e.V. in Jena Germans

## Getting Started

This Project might be of little use to the world. However I tried to follow the best practice approaches I could find regarding TYPO3-templating as much as possible. Please be aware, that I am an amateur webdesigner working with TYPO3 in my spare time. If you find parts of this package useful feel free to copy and use it freely!

### Prerequisites

I guess everything above TYPO3 7 should be fine as a base system. I tried to use 3rd party extensions as little as possible. So far I am using Georg Ringers News extension and gridelements.


### Installing

After cloning the repository in your Typo3_conf/ext/ folder you should be good to go. Just activate the extension in the backend. It might be wise to clone the dependency extensions from their github-repositories as well in order to get the latest stable release. This has to be done before activating this extension, since otherwise the extension browser would fetch the dependencies from the TER.


## Development of the Extension

This is sort of a development documentation for myself. However, this might be interesting for some of you as well.

### My Webspace and Development Environment

For developing and testing I rely on a webspace from uberspace.de It provides all the tools I need including SSH-access, git-support, node-js and PHP / mySQL. The webspace requires some setting-up including changing the PHP-version to at least PHP7 and using a current SQL database. You can use a MariaDB on a separate uberspace-server for that. Their Wiki can help you doing that:

* [MariaDB](https://wiki.uberspace.de/database:mysql) - Standalone MariaDB-Server
* [PHP](https://wiki.uberspace.de/development:php) - Set the required PHP-version

For the development I really enjoy codeanywhere.com because I can work on my project from any client connected to the Web.


## The Extension in Details

### ext_emconf.php
This file contains sort of meta data of the extension alongside with dependencies that will be evaluated during the installation process.

### ext_localconf.php
For some time, TYPO3 backend-layouts can be defined within an extension instead of heaving to configure them in the backend. To declare Page- and User-TSConfig-Code within the extension, one has to add a ext_localconf.php defining the folder- and file-name to be included. According to best-practice, TSconfig was stored in /Configuration/TSconfig/Page.txt and User.txt. It is also used to declare the Gridelements used for the template as well as setting some options for the TYPO3-system

### Configuration/TypoScript
This folder contains all TypoScript code. The behaviour is similar to writing the code in the constants and setup field for the template in the backend of TYPO3. The Files constants.txt and setup.txt are evaluated by standard. To organize the code, I have created a subfolder Library distributing the code over various files. The files are included in alphabetical order, thus the numeric nomenclature lets me control the order in which files are evaluated.


## Contributing


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Sebastian Jung** - *Initial work* - [snjung](https://github.com/snjung)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thank's to the awesome TYPO3 community for leaving tutorials all over the web and providing a fruitfull slack-channel