//import { getUsers } from "@/api/users";
//import { jsonify } from "@/modules/db";
import Container from "@/ui/container";
import {useState} from 'react'

export default function HomePage({ users = [] }) {
  const [username, setUsername] = useState(undefined)
  const [password, setPassword] = useState(undefined)

  const user = {username, password}
  return (
    <Container className="mt-16 text-white text-2xl flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <div className="">
          <label className="block text-md relative left-3  text-sky-600">Username</label>
          <input className="w-1/4 rounded-lg" type="text" value={username} onChange={e => setUsername(e.target.value)}/>
        </div>
        <div>
          <label className="block relative left-3  text-sky-600">Password</label>
          <input className="w-1/4 rounded-lg" type="text" value={password} onChange={e => setPassword(e.target.value)}/>
        </div> 
        <div className="flex items-center justify-center border-2 border-red-500 rounded-lg p-4 w-40" 
        onClick={() => {}}
        >Sign Up </div>
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
