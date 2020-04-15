import { useState, useEffect } from 'react'
import axios from 'axios'
export default function useFetcher() {
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:3000/movies')
    .then(({ data }) => {
      setData(data)
    })
    .catch(err => setError(err))
    .finally(() => {
      setLoading(false)
    })
  }, [])

  return { data, loading, error }
}
