"use strict";

module.exports = Franz => class ClassDojo extends Franz {
	  overrideUserAgent() {
		      const useragent = window.navigator.userAgent;
		      const parts = useragent.split('(KHTML, like Gecko)');
		      return parts.join('(KHTML, like Gecko) classdojo').replace('Electron', 'ClassDojo').replace('Franz', 'ClassDojo');
		    }

};
