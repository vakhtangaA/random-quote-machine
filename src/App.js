import React from 'react'
import './index.css';
import logo from './twitter.png'

const authors = 
[
  'Linus Torvalds', 
  'Harold Abelson',
  'John Woods',
  'Martin Fowler',
  'Larry Niven'
]
const quotes = 
[
  '“Talk is cheap. Show me the code.”', 
  '“Programs must be written for people to read, and only incidentally for machines to execute.”',
  '“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live”',
  '“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”',
  '“That\'s the thing about people who think they hate computers. What they really hate is lousy programmers.”'
]

class App extends React.Component {
  constructor(props)  {
    super(props)
    this.state = {
      author: authors[0],
      quote: quotes[0],
      // randomIndex: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    let randomIndex = Math.floor(Math.random() * quotes.length)
    this.setState ({
      author: authors[randomIndex],
      quote: quotes[randomIndex]
    });
  }

  render() {
   return (
    <div  id="quote-box" >
        <p id="text" className="box1">{this.state.quote}</p>
        <span id="author" className="box2" >{this.state.author}</span>
        <div class="container">
            <a  
                className="box3"
                href="twitter.com/intent/tweet" 
                id="tweet-quote" 
                target="_blank">
                    <img 
                        src={logo}
                        height="40" 
                        alt="twitter logo"
                    />
            </a>
            
            <input 
                type="button" 
                id="new-quote" 
                value="new quote"
                className="box4"
                onClick = {this.handleClick}
                />  
        </div>
    </div>
   );
  }
}

export default App;
