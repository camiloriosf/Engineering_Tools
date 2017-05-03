
import { gql, graphql } from 'react-apollo'

function Test({ data }) {
    if (data) {
        return (
            <div>
                {data.user.email}
            </div>
        )
    }
    return <div>Loading</div>
}

const user = gql`
  query user($token: String!) {
    user(token: $token) {
      id
      email
    }
  }
`

export default graphql(user, {
    options: {
        variables: {
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OGZkMmE1NTllZmQzNzJkNWMyNWQ0NmUiLCJpYXQiOjE0OTM3NTU0NTk3NzR9.Qrk2pbSP_-_WZXC_CgbKm1PZ2BAeWxj7Ujxvv8X9HWQ"
        }
    },
    props: ({ data }) => ({
        data
    })
})(Test)