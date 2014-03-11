hsldeadreckon
=============

Install NodeJS and the Node Package Manager from the nodejs site: http://nodejs.org/download/. I.e. download the appropriate binaries and add the bin directory to your path. The version in your package manager may be out of date so it's better to grab it directly.

Clone the repo and use npm to install the other dependencies:

```
git clone <repo url>
cd hsldeadreckon
npm install
npm install -g grunt-cli
```

Run:
```
grunt
```

View server at localhost:9001 and hack away.
