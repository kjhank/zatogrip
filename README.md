# Zatogrip 1.1.0

## Gatsby SSG site pulling data from Wordpress' REST API

## Quick-start 🏎:

1. ### Clone the repo 👯:

	```sh
	git clone git@github.com:kjhank/zatogrip.git
	```

2. ### Set up environment variables as per .env.example:

* `GATSBY_BACKEND_URL` - URL of the REST API (including version number, without the trailing slash), usually `https://foo.bar/api/v2`
* `BACKEND_USER` - WP user with permissions to get global page data from the API
* `BACKEND_USER_PASS` - their password
* `GA_ID` - Google Analytics ID, optional
* `GTM_ID` - Google tag manager ID, optional

3. ### Install everything

	```sh
	yarn
	```

4. ### Start your development environment: 💻

	```sh
	cd zatogrip
	yarn dev
	```

	Now you can navigate to `http://localhost:8000` in your browser and view the page.

4. ### Start coding! 👩‍💻

	Open any of the files in your favorite editor and see any changes you make as soon as you save the file.

