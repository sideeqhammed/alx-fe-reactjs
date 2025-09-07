export default function UserProfile (props) {
  return (
    <div style={{backgroundColor: 'gray', border: 'solid', borderRadius: '10px', width: '30em', margin: 'auto'}}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  )
}