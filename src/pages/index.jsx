//import { getUsers } from "@/api/users";
//import { jsonify } from "@/modules/db";
import Container from "@/ui/container";
import {useState} from 'react'

export default function HomePage({ users = [] }) {
  const [username, setUsername] = useState(undefined)
  const [password, setPassword] = useState(undefined)

  return (
    <Container className="mt-16 text-white text-2xl flex flex-col gap-8">
      <div>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
        <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
      </div>
    </Container>
  );
}

/*
export async function getServerSideProps({ ctx }) {
  const users = await getUsers();

  return {
    props: {
      users: jsonify(users),
    },
  };
}
*/
// export function withValidations(Component) {
//   return function wrappedComponent({}) {
//     const [errors, setErrors] = useState([]);
//     return (
//       <>
//         <Component />
//         {errors.length > 0 && <div>{errors.join(", ")}</div>}
//       </>
//     );
//   };
// }
