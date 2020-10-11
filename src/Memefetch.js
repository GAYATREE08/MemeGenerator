import React from "react"

class Memefetch extends React.Component{
    constructor(){
        super()
        this.state = {
            topText : "",
            bottomText : "",
            randomimg : "http://i.imgflip.com/1bij.jpg",
            memesimg : []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        fetch("http://i.imgflip.com/1bij.jpg")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({
                    memesimg: memes
                } 
                )}
            )
           
    }
    handleChange(event){
        const { name, value } = event.target
        this.setState({ [name] : value })
    }
    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.memesimg.length)
        const randMemeImg = this.state.memesimg[randNum].url
        this.setState({ randomimg: randMemeImg })
    }

    render(){
        return(
            <div>
            <form className="meme-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="topText"
                    value={this.state.topText}
                    placeholder="Place your top text here"
                    onChange={this.handleChange}
                    />
                    <br/>
                    <br/>
                <input
                    type="text"
                    name="bottomText"
                    value={this.state.bottomText}
                    placeholder="Place your bottom text here"
                    onChange={this.handleChange}
                    />
                    <br/>
                    <br/> 
                <button value="Generate">Generate</button>
            </form>
            <div>
                <img src={this.state.randomimg} alt="" />
                <h2 className="top" >{this.state.topText}</h2>
                <h2 className="bottom">{this.state.bottomText}</h2>
            </div>
            </div>
        
        )
    }
}

export default Memefetch 