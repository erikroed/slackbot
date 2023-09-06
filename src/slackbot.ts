import { App } from '@slack/bolt';
import dotenv from 'dotenv';

dotenv.config();

const app = new App({
	token: process.env.SLACK_BOT_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET,
	socketMode: true,
	appToken: process.env.SLACK_APP_TOKEN,
	port: +process.env.PORT || 3000
});

app.message('hello', async ({ message, say }) =>  {
	const messageEvent = message as any;
	await say (`Halla på'rei <@${messageEvent.user}>, å erre du lurer på forno?`);
	console.log("Posted Message");
});

(async () => {
	await app.start();
	console.log(`App is running!`);
})();
