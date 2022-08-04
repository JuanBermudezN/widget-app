import { useEffect, useState } from "react"

const Route = ({path, children}) => {
    const [currentPAth, setCurrentPath] = useState(window.location,path)
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', onLocationChange)
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])
    return window.location.pathname === path 
    ? children 
    : null
}
export default Route