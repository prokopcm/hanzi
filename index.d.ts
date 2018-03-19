// Type definitions for HanziJS 2.1.0
// Project: https://github.com/nieldlr/hanzi
// Definitions by: Michael Prokopchuk https://github.com/prokopcm

declare module "hanzi" {
    /**
     * Starts hanzijs and initializes all the internal components
     * @param silent whether console logs should be suppressed
     */
    function start(silent?: boolean): void;

    // TODO: return type
    function decompose(character: string,  typeOfDecomposition?: number): any;
    
    // TODO: return type
    function decomposeMany(character: string,  typeOfDecomposition?: number): any;
    function ifComponentExists(component: string): boolean;
    
    // TODO: return type
    function definitionLookup(word: string, scripttype?: "s"|"t"): any;
    
    // TODO: return type
    function dictionarySearch(character: string, type?: "only"): any;
    
    // TODO: return type
    function getExamples(character: string): any;

    // TODO: return type
    function getPinyin(character: string): any;
    
    // TODO: return type
    function segment(input_str: string): any;

    // TODO: return type
    function getCharacterFrequency(character: string): any;

    // TODO: make better type for parameters, return type
    function determinePhoneticRegularity(decomposition: string|{character: string, components1: any,
        components2: any}): any;

    // TODO: return type
    function getRadicalMeaning(radical: string): string;
    
    // TODO: return type
    function getCharactersWithComponent(component: string): any;

    // TODO: improve return type
    function getPhoneticSet(regularity_scale: 1|2): {[index: string]: any;};

    // TODO: improve return type
    function getCharacterInFrequencyListByPosition(position: number): any;

    // https://github.com/Microsoft/TypeScript/issues/5073
    namespace hanzi {}

    export = hanzi;
}