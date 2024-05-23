import gradients from './constants/gradients.json'

const App = () => {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>BG Gradient HUB</h1>

      {/* debug */}
      <pre>{JSON.stringify(gradients, null, 2)}</pre>
    </>
  )
}

export default App
