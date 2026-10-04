function App() {
  // 1. Define variables and functions in the component body
  const name = 'fs lab'
  const imageURL = "/src/kubuntu-logo.jpg"
  const imageStyle = { width: '200px', height: '200px' } 
  {/* jsx styling used */}

  function alertMsg() {
    alert('button clicked')
  }

  return (
    <>
      <h1>Inside fragment 1 - parent fragment</h1>
      <h1>Hello, Welcome to {name}</h1>

      <h2>fragment 2 inside fragment 1</h2>

      {/* Static Image Attribute */}
      <img src="kubuntu-logo.jpg" alt="image" />

      {/* className */}
      <h2 className="customHeading">Custom heading with className</h2>

      {/* Dynamic Image URL */}
      <img src={imageURL} alt="image2" style={imageStyle}/>

      {/* JSX Event Handler */}
      <br />
      <button onClick={alertMsg}>Click to alert</button>
    </>
  )
}

export default App