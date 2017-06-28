keadatabase-front
=================

[![Build Status](https://travis-ci.org/greenstone/keadatabase-front.svg?branch=master)](https://travis-ci.org/greenstone/keadatabase-front)

Setup
-----
You will need to have Node >= 4 installed (and npm). Then run:  
`npm install`

Running
-------
To run on your local machine at <http://localhost:3000/> run:  
`npm start`

You will need to ensure that the SCSS has been compiled beforehand by running:  
`npm run watch-css`

Building
--------
To build the app for production use, run:  
`npm build-css` then `npm run build`

Testing
-------
TODO: Setup tests for Travis CI

Deploying
---------
Ensure you have the `awscli` Python package installed and configured with id and secret key.

To deploy to Amazon S3 (and hence make available at http://beta.keadatabase.nz/):  
`npm run deploy`

**This will automatically build the SCSS and source code**

Licence
-------
Kea Database  
Copyright (C) 2016 Greenstone Limited  
hello@greenstone.org.nz

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see http://www.gnu.org/licenses/.
