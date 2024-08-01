import ghpages from 'gh-pages';

const DOMAIN = 'owenwang.dev';

ghpages.publish(
	'build',
	{
		nojekyll: true,
		cname: DOMAIN
	},
	(err) => {
		if (err) {
			console.error(err);
		} else {
			console.log('Published successfully' + (DOMAIN ? ` to https://${DOMAIN}` : ''));
		}
	}
);
