const baseUrl = import.meta.env.VITE_LOCATION_BASE_URL
const apiKey = import.meta.env.VITE_LOCATION_API_KEY

const getUserCoords = () => {
  // [ ] Investigar el objeto promise
  return new Promise((resolve, reject) => {
    const geoSuccess = (pos) => {
      const coords = pos.coords
      resolve(coords)
    }
    const geoError = (error) => {
      reject(error)
    }
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
  })
}

export const getUserCity = async () => {
  // Traer coordenadas del usuario
  const coords = await getUserCoords()

  if (!coords) return

  // Realizar el inverse geocode
  const res = await fetch(`${baseUrl}?key=${apiKey}&lat=${coords.latitude}&lon=${coords.longitude}&format=json`)
  const data = await res.json()
  const city = data.address.city
  const country = data.address.country

  // console.log('city:', city, 'país:', country)

  return { city, country }
}
