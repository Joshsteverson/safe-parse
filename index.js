'use strict';

function safeParse(jsonString){
	if(jsonString === null) return {};
	if(typeof jsonString === 'object') return jsonString;
	try{
		return JSON.parse(jsonString);
	}catch(e) {
		return {};
	}
}

module.exports = safeParse;
