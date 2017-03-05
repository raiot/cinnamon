import {Component} from 'react';

class CinnamonUTils extends Component {

    static cleanStringAndLowerCase(str) {
        if(typeof str === 'string') {
            return this.cleanString(str.toLowerCase());
        }
        throw 'A not "string" variable was passed to "cleanStringAndLowerCase"';
    }

    static cleanString(str) {
        if(typeof str === 'string') {
            return str.replace(/[^A-Z0-9]+/ig, '_');
        }
        throw 'A not "string" variable was passed to "cleanString"';
    }
}

export default CinnamonUTils;