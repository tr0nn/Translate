import React from 'react';
import LibraryF from './library';


class AddWord extends React.Component{
    constructor(props){
        super(props);
        this.state = {addEngWord:'', addGeoWord:''}

        this.handlechangeEng = this.handlechangeEng.bind(this);
        this.handlechangeGeo = this.handlechangeGeo.bind(this);
        this.addWordButton = this.addWordButton.bind(this);
    }
    handlechangeEng(event){
        this.setState({addEngWord: event.target.value});
    }
    handlechangeGeo(event){
        this.setState({addGeoWord: event.target.value});
    }
    addWordButton(){
        const x = this.state.addEngWord;
        const y = this.state.addGeoWord;
        const obj = { [x] : y };
        Object.assign(LibraryF,obj);
        //alert(Object.keys(LibraryF));
        this.setState({addEngWord: ''});
        this.setState({addGeoWord: ''});
       
        if(this.state.addEngWord && this.state.addGeoWord){
            
        document.getElementById("outputH1").style.display = "block";
        document.getElementById("outputH1").innerHTML = 'Word added : ' +this.state.addEngWord 
        +' - '+ this.state.addGeoWord;
        }
        setTimeout(function(){ document.getElementById("outputH1").style.display = "none";; }, 3000);
    }

    render(){
        return(
            <div id="addwordform">
            <form onsubmit="return false">
            <h1 id="addwordh1">Add word</h1>
                <input className="addEngGeoWord" placeholder="English" type="text" value={this.state.addEngWord} onChange={this.handlechangeEng} />
                <br /> <br />
                <input className="addEngGeoWord" placeholder="Georgia" type="text" value={this.state.addGeoWord} onChange={this.handlechangeGeo} />
                <br /> <br />
                <input id="addSubButton" type="button" value="Add" onClick={this.addWordButton}/>
                <h1 id="outputH1" > </h1>
            </form>
            </div>
        )
    }
}

export default AddWord;