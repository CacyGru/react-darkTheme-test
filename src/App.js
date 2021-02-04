import {useState} from 'react'
import Button from './Button'



function App() {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }

  
  

  return (
    
    <div className={theme}>
    <div className="full">
        <header>
            <div className="logo">LOGO</div>
            <nav className="nav">
              <ul>
                <li><a href="/">Home</a> </li>
                <li><a href="/">About</a> </li>
                <li><a href="/">Contact</a> </li>
              </ul>
            </nav>
            <button onClick={toggleTheme} >ThemeChange</button>
        </header>
        
        <main className="container">
         
          <h1>Drum-Up</h1>
          <h2>Super Unterricht</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nisi saepe, adipisci at quos ut labore ad incidunt officiis fugit.</p>
          <Button text="hello"/>
        </main>
       </div>
    </div>
    
  );
}

export default App;
