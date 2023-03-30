import React, { useContext } from 'react'
import LocationsComponent from '../../components/LocationsComponent/LocationsComponent'
import { RMcontext } from '../../context/context'

export const LocationsPage = () => {
    const { locations} = useContext(RMcontext)
    console.log(locations)
  return (
    <LocationsComponent></LocationsComponent>
  )
}
