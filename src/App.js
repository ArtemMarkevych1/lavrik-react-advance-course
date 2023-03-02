import React from 'react'
import './App.css';

function App() {

    const [data, setData] = React.useState({})

    const apiUrl = 'https://jsonplaceholder.typicode.com/comments'

    React.useEffect(() => {
        const onLoad = async () => {
            const response = await fetch(apiUrl)
            const json = await response.json()
            setData(json)
        }
        onLoad()
    }, [])

    return (
        <div className="App" style={{maxWidth: '1240px', width: '100%', margin: '0 auto', overflow: 'hidden'}}>
            <p>test text</p>
            <pre style={{textAlign: 'left'}}>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    );
}

export default App;
