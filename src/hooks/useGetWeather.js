import { useEffect, useState } from 'react'

export const useGetWeather = () => {
  const apikey = import.meta.env.VITE_API_KEY
  const baseUrl = import.meta.env.VITE_BASE_URL

  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // [ ] Que el query inicial sea la ciudad en la que se encuentra el usuario
  const fetchData = async (query = 'Londres') => {
    try {
      if (!query) return
      setIsLoading(true)
      // Limpiar errores
      setError(null)
      const response = await fetch(`${baseUrl}weather?q=${query}&appid=${apikey}`)
      if (!response.ok) {
        throw new Error('Error fetching data')
      }
      const newData = await response.json()
      setData(newData)
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, isLoading, error, fetchData }
}
