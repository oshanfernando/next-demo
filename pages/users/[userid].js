import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// dynamic page example
const User = () => {
    const router = useRouter()
    const { userid } = router.query

    const [user, setuser] = useState()

    useEffect(() => {
        if (router && router.query.userid !== undefined) {      
            fetch(`https://reqres.in/api/users/${userid}`)
            .then(res => res.json())
            .then(resJson => setuser(resJson.data))    
        }
          
    }, [router.query])

    return (
        <div>
            <h1>Dynamic Page example</h1><br/>
            <div> Name : {user === undefined ? '' : user.first_name} </div>
        </div>
        
    )
}
export default User