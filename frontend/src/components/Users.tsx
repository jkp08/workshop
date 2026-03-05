import type { User } from "./AddUsers";
import Table from "./Table";

interface UsersProps {
  users: User[]
}
export const Users = ({ users }: UsersProps) => {
  return (
    <Table users={users} />
  )
}
