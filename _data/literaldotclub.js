// required packages
const fetch = require("node-fetch");

// module.exports = async function() {
//   console.log( "Fetching literal.club info…" );

//   // GitHub API: https://developer.github.com/v3/repos/#get
//   return fetch("https://literal.club/graphql/")
//     .then(res => res.json()) // node-fetch option to transform to json
//     .then(json => {
//       // prune the data to return only what we want
//       return {
//         stargazers: json.stargazers_count
//       };
//     });
// };



const getProfile = async function() {
  
  // make queries until makeNewQuery is set to false

      // initiate fetch
      return fetch("https://literal.club/graphql/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: `mutation login($email: String!, $password: String!) {
						login(email: $email, password: $password) {
							token
							email
							languages
							profile {
								id
								handle
								name
								bio
								image
							}
						}
					}`,
					variables: {
						email: 'hello@matthew-jackson.com',
						password: process.env.LITERAL_API_KEY
					},
        })
			})
			.then(res => res.json()) // node-fetch option to transform to json
			.then(json => {
				// prune the data to return only what we want
				return json.data.login;
			});

}

const getRead = async function() {
	
	const profile = await getProfile();

	// initiate fetch
	return fetch("https://literal.club/graphql/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${profile.token}`,
		},
		body: JSON.stringify({
			query: `query booksByReadingStateAndProfile(
				$limit: Int!
				$offset: Int!
				$readingStatus: ReadingStatus!   # find fragments below
				$profileId: String!
			) {
				booksByReadingStateAndProfile(
					limit: $limit
					offset: $offset
					readingStatus: $readingStatus
					profileId: $profileId
				) {
					id
					slug
					title
					subtitle
					description
					cover
					authors {
						id
						name
					}
					gradientColors
				}
			}`,
			variables: {
				limit: 99999,
				offset: 0,
				readingStatus: 'FINISHED',
				profileId: profile.profile.id
			}
		})
	})
	.then(res => res.json()) // node-fetch option to transform to json
	.then(json => {
		// prune the data to return only what we want
		// console.log(json.data.booksByReadingStateAndProfile);
		return json.data.booksByReadingStateAndProfile
	});

}


const getReading = async function() {
	
	const profile = await getProfile();

	// initiate fetch
	return fetch("https://literal.club/graphql/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${profile.token}`,
		},
		body: JSON.stringify({
			query: `query booksByReadingStateAndProfile(
				$limit: Int!
				$offset: Int!
				$readingStatus: ReadingStatus!   # find fragments below
				$profileId: String!
			) {
				booksByReadingStateAndProfile(
					limit: $limit
					offset: $offset
					readingStatus: $readingStatus
					profileId: $profileId
				) {
					id
					slug
					title
					subtitle
					description
					cover
					authors {
						id
						name
					}
					gradientColors
				}
			}`,
			variables: {
				limit: 999999,
				offset: 0,
				readingStatus: 'IS_READING',
				profileId: profile.profile.id
			}
		})
	})
	.then(res => res.json()) // node-fetch option to transform to json
	.then(json => {
		// prune the data to return only what we want
		// console.log(json.data.booksByReadingStateAndProfile);
		return json.data.booksByReadingStateAndProfile
	});

}

const getBooks = async function() {

	console.log( "Fetching literal.club info…" );

	const read = await getRead();
	const reading = await getReading()

	return {
		reading: reading,
		read: read
	}

}

module.exports = getBooks();