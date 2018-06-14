// defining the various context the app would need 
import React from 'react';

// context to note
var theme = {
	'color': "#202020",
	'backgroundColor': '#ffffff'
};

var language = {
	'currentLanguage': "us",
};

const MainContext = React.createContext({
	theme: theme,
	language: language
});

export default MainContext;
