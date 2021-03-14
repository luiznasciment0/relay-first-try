import React, { Suspense } from 'react' 
import graphql from 'babel-plugin-relay/macro'
import {
  RelayEnvironmentProvider,
  usePreloadedQuery,
  loadQuery,
} from 'react-relay/hooks'

import './App.css';
import RelayEnvironment from './RelayEnvironment'

const RepositoryDataQuery = graphql`
  query AppRepositoryNameQuery {
    repository(owner: "luiznasciment0" name: "saving-goal") {
      name
      collaborators {
        totalCount
      }
    }
  }
`

const preloadedQuery = loadQuery(RelayEnvironment, RepositoryDataQuery, {
  owner: 'luiznasciment0',
  name: 'saving-goal'
})

function App(props) {
  const data = usePreloadedQuery(RepositoryDataQuery, props.preloadedQuery)
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Repo Name: {data.repository.name}
        </p>
        <p>
          Total collaborators: {data.repository.collaborators.totalCount}
        </p>
      </header>
    </div>
  );
}

const AppRoot = (props) => (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={'Loading...'}>
      <App preloadedQuery={preloadedQuery} />
    </Suspense>
  </RelayEnvironmentProvider>
)

export default AppRoot;
