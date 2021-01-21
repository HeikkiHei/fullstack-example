import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  console.log('Hello component called', props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  const calculation = 26 + 10

  return (
    <>
      <h1>Greetings</h1>
      <br/>
      <Hello name="Maya" age={calculation} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))