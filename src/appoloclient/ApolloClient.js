import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";


const client = new ApolloClient({
    uri:`https://fancy-monitor-11.hasura.app/v1/graphql`,
    cache:  new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': 'FMS03flqwFjQ1wxd9oXQhhjeldmVVnHjruDqrvlnCmiRY5M0W2yeCeE2QMu3P3vp'
    }
})

export default client