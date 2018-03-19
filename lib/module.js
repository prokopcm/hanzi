var hanzi = require('./hanzidecomposer.js');
var dict = require('./dictionary.js');

/**
 * Starts hanzijs and initializes all the internal components
 * @param {Boolean} [silent] whether console logs should be suppressed
 */
function start(silent) {
  hanzi.start(silent);
  dict.start(silent);
}

exports.start = start;
exports.decompose = hanzi.decompose;
exports.decomposeMany = hanzi.decomposeMany;
exports.ifComponentExists = hanzi.ifComponentExists;
exports.definitionLookup = dict.definitionLookup;
exports.dictionarySearch = dict.dictionarySearch;
exports.getExamples = dict.getExamples;
exports.getPinyin = dict.getPinyin;
exports.segment = dict.segment;
exports.getCharacterFrequency = dict.getCharacterFrequency;
exports.determinePhoneticRegularity = dict.determinePhoneticRegularity;
exports.getRadicalMeaning = hanzi.getRadicalMeaning;
exports.getCharactersWithComponent = hanzi.getCharactersWithComponent;
exports.getPhoneticSet = dict.getPhoneticSet;
exports.getCharacterInFrequencyListByPosition =
  dict.getCharacterInFrequencyListByPosition;
