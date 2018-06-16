import { createOauthFlow } from 'react-oauth-flow'

const {Sender, Receiver} = createOauthFlow({
	authorizeUrl: 'https://github.com/login/oauth/authorize',
	tokenUrl: 'https://github.com/login/oauth/access_token',
	clientId: '3c9756a2ed212663d418',
	clientSecret: '92a04d645fc1131e2af9f3245a0714b9a0035b42',
	redirectUri: 'http://spectre.local:3000/github/callback'
});

const GithubSender = Sender;
const GithubReceiver = Receiver;

export {
	GithubSender,
	GithubReceiver
}