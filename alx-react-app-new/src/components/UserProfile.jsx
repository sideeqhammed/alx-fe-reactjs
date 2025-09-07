export default function UserProfile (props) {
  return (
    <div style={{backgroundColor: 'gray', padding: '10px', border: 'solid', borderRadius: '10px', width: '30em', margin: 'auto'}}>
      <h2 style={{color: 'blue'}}>{props.name}</h2>
      <p>Age: <span style={{fontWeight: 'bold'}}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
    </div>
  )
}