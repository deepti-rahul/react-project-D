/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import axios from 'axios'
function Axios1() {
  const [userData, setdata] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response)
        setdata(response.data)
      })
  }, [])
  return (
    <> Axios api
      {userData.map((data) => <h4>{data.name}</h4>)}
    </>
  )
}

export default Axios1