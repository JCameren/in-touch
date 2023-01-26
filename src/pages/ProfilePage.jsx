import { useSelector } from "react-redux"

export default function ProfilePage() {
  const user = useSelector((state) => state.user.user)
  const { name, createdAt } = user
  const date = new Date(createdAt)
  const formattedDate = date.toLocaleDateString('en-US', {day:'numeric', month: 'long', year:'numeric'})
  return (
    <>
    <h2>Signed in as { name }</h2>
    <h3>Member since { formattedDate }</h3>
    </>
  )
}
