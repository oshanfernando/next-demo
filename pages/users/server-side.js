const ServerSideUsers = ({ users }) => {
  return (
    <div>
      <h1>Server-side example</h1><br />

      {users.map(user => <li>{user.first_name}</li>)}
    </div>
  )

}

export async function getServerSideProps(context) {
  const users = await fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(resUsers => resUsers.data)

  return {
    props: {
      users
    }
  }
}

export default ServerSideUsers