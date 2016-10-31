let fs = require('fs');
let Rx = require('../../../rxjs/5.0.0-rc.1/Rx.min.js');

let readFileAsObservable = Rx.Observable.bindNodeCallback(fs.readFile);
let result = readFileAsObservable('../converting-to-observables.js', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));