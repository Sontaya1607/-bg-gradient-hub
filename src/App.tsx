import gradients from './constants/gradients.json'

const gradientCardGroup = Object.entries(gradients).map(([title, bgObj], idx) => {
  const [_, value] = bgObj.bgStyle.split(': ')
  const myBGStyle: Record<string, string> = {}
  myBGStyle.backgroundImage = value

  return (
    <div
      key={idx}
      className="rounded overflow-hidden shadow-xl"
    >
      <div
        className="aspect-video !bg-red-300"
        style={myBGStyle}
      />
      <div className="p-4 space-y-1">
        <h6 className="font-semibold tracking-wider">Name</h6>
        <span className="text-sm text-gray-900">{title}</span>

        <h6 className="font-semibold tracking-wider">Hex</h6>
        <div className="text-sm text-gray-900 flex gap-1">
          <span>#ff9a9e</span>
          <span>→</span>
          <span>#fad0c4</span>
        </div>
      </div>
    </div>
  )
})

function App() {
  return (
    <>
      <main className="min-h-screen font-dm-sans">
        <div className="container mx-auto">

          <h1 className="text-3xl font-semibold text-center">BG Gradient HUB</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gradientCardGroup}
          </div>

          {/* debug */}
          {/* <pre>{JSON.stringify(gradients, null, 2)}</pre> */}
        </div>
      </main>
    </>
  )
}

export default App
