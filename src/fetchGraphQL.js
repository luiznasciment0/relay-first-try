const fetchGraphQL = async (text,variables) => {
    const REACT_APP_GITHUB_AUTH_TOKEN = '4e5acdcafd78cc9ba797907d406423702469a0c5'
    console.log('REACT_APP_GITHUB_AUTH_TOKEN', REACT_APP_GITHUB_AUTH_TOKEN)
    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: text,
            variables,
        })
    })

    return await response.json()
}

export default fetchGraphQL