import React, { useState, useEffect } from 'react'
import Title from '../components/Title'
import Summary from '../components/Summary'
import Geography from '../components/Geography'

const Content = (props) => {
  const [countryData, setCountryData] = useState({})
  const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      fetch(`http://localhost:3000/countries/${props.activeCountry}`)
      .then(res => res.json())
      .then(country => {
        setCountryData(country)
        setLoading(false)
      })
    }, [props.activeCountry])

  return(
    loading ?
    <h1>loading...</h1>
    :
    <div>
      <Title countryName={countryData.name} />
      <Summary countryData={countryData} />
      <Geography countryData={countryData} />
    </div>
  )
}

export default Content