import { useEffect, useState } from 'react'
import { getUserCity } from '../services/getUserCity'

export const useGetWeather = () => {
  // Variables de entorno
  const apikey = import.meta.env.VITE_API_KEY
  const baseUrl = import.meta.env.VITE_BASE_URL

  // Estados del fetch
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Traer el clima según ciudad (String)
  const fetchData = async (query) => {
    try {
      // Validación y actualización de los estados
      if (!query) return
      setIsLoading(true)
      setError(null)
      // Inicio del fetching
      const response = await fetch(`${baseUrl}weather?q=${query}&appid=${apikey}`)
      // Valicadión del estado de la petición
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

  const getWeather = async () => {
    setIsLoading(true)
    const { city } = await getUserCity()
    fetchData(city)
  }

  useEffect(() => {
    getWeather()
  }, [])

  return { data, isLoading, error, fetchData }
}
