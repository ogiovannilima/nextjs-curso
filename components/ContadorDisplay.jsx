export default function ContadorDisplay(props) {
  console.log(props)
  return (
    <div style={{
      height: '200px',
      width: '200px',
      borderRadius: '100px',
      backgroundColor: '#222',
      color: '#FFF',
      fontSize: '4rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {props.contador}
    </div>
  )
}