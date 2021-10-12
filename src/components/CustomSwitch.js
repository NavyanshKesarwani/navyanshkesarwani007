import React, { useEffect, useState } from "react"
import { Switch, useLocation } from "react-router-dom"
import TopBarProgress from "react-topbar-progress-indicator"

export const CustomSwitch = ({ children }) => {
   const [progress, setProgress] = useState(false)
   const [prevLoc, setPrevLoc] = useState("")
   const location = useLocation()
   TopBarProgress.config({
       barColors: {
           "1.0":"#0075FF"
       },
       barThickness: 5,
   })

   useEffect(() => {
      setPrevLoc(location.pathname)
      setProgress(true)
      if(location.pathname===prevLoc){
          setPrevLoc('')}
   }, [location])

   useEffect(() => {
      setProgress(false)
   }, [prevLoc]) // eslint-disable-next-line

   return (
      <>
         {progress && <TopBarProgress />}
         <Switch>{children}</Switch>
      </>
   )
}
