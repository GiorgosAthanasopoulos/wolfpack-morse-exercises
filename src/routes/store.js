import { readable } from 'svelte/store';

export const _imagesFolder = readable('images/');
export const _videosFolder = readable('videos/');

export const _wolfpackDiscordLink = readable('https://discord.gg/SH2Rg42');
export const _duyfkenDiscordLink = readable('https://discord.gg/dcdXgRz2hD');
export const _wpOpsDiscordLink = readable('https://discord.com/invite/uxWJM8dzmh');
export const _vailDuyfkenLink = readable('https://vail.woozle.org/#duyfken_pact');
export const _morseCodeMeLink = readable('https://morsecode.me');
export const _foxGuideLink = readable(
	'https://steamcommunity.com/sharedfiles/filedetails/?id=2842875340'
);
export const _foxSpeedLink = readable(
	'https://steamcommunity.com/sharedfiles/filedetails/?id=2595952369'
);
export const _foxCourseLink = readable(
	'https://steamcommunity.com/sharedfiles/filedetails/?id=2553649456'
);
export const _sourceCodeLink = readable(
	'https://github.com/giorgosathanasopoulos/wolfpack-morse-exercises'
);
export const _talk4dewsDownloadLink = readable(
	'https://github.com/giorgosathanasopoulos/wolfpack-morse-exercises/tree/master/static/files/Morse_Code_Syntax_Guide_for_Wolfpack.pdf'
);
export const _frostDownloadLink = readable(
	'https://github.com/giorgosathanasopoulos/wolfpack-morse-exercises/tree/master/static/files/Radio_Syntax_Guide.pdf'
);
export const _morseWikiLink = readable('https://en.wikipedia.org/wiki/Morse_code');
export const _prosignsWikiLink = readable('https://en.wikipedia.org/wiki/Prosigns_for_Morse_code');

export const _discordUsername = readable('georglassen');

export const _smallImageSize = readable(32);
export const _largeImageSize = readable(96);

export const _alphabetPage = readable('/alphabet');
export const _numbersPage = readable('/numbers');
export const _wordsSentencesPage = readable('/words-sentences');
export const _wpSentencesSimplePage = readable('/wp-sentences-simple');
export const _wpSentencesAdvancedPage = readable('/wp-sentences-advanced');
export const _syntaxPage = readable('/syntax');
