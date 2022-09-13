import { useEffect, useState } from 'react'

export default function useGet(asyncFunc, dep) {
  const [data, setData] = useState(null)
  const [loading, isLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    isLoading(true)
    setData(null)
    setError(null)

    asyncFunc()
      .then(res => {
        setData(res)
        isLoading(false)
        setError(null)
      })
      .catch(err => {
        setError(err)
        isLoading(false)
        setData(null)
      })
  }, [dep, asyncFunc])

  return {
    data,
    error,
    loading
  }
}
