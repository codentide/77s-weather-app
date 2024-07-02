import { useState } from 'react'
import { useGetWeather } from '../hooks/useGetWeather'

export const App = () => {
  const { data, error, isLoading, fetchData } = useGetWeather()
  const [query, setQuery] = useState('')

  // Cuando se haga click, cambie el query y se busque el clima
  const handleClick = () => {
    fetchData(query)
  }

  return (
    <main>
      <h1>App</h1>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleClick}>Buscar</button>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data &&
        <div>
          <strong>{data.name}, {data.sys.country}</strong>
          <ul>
            <li>{data.weather[0].main}</li>
            <li>{data.weather[0].description}</li>
          </ul>
        </div>}
    </main>
  )
}
