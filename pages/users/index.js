
const Users = ({ users }) => {
    return (
        <div>
            <h1>Static Generation example</h1><br />

            {users.map(user => <li>{user.first_name}</li>)}
        </div>
    )
}

// Static Generation example
export async function getStaticProps() {
    const users = await fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(resUsers => resUsers.data)

    return {
        props: {
            users
        }
    }
}

export default Users