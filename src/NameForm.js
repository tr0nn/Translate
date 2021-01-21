import React from 'react'
import LibraryF from './library'
import HistoryObjcet from './HistoryObject'

class NameForm extends React.Component{
    constructor(props){
      super(props);
      this.state ={value: '', word: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.removeValue = this.removeValue.bind(this);
    }
    removeValue(){
      this.setState({value: ""});
      this.setState({word: ""});
    }
    handleChange(event){
      this.setState({value: event.target.value});
    }
    handleSubmit(){
        const val = this.state.value;
        const w = this.state.word;
        const objc = {[val] : w};
        Object.assign(HistoryObjcet, objc)
        
        const x = Object.keys(LibraryF); 
            for (let i = 0; i < x.length; i++) {
                if(x[i] === this.state.value){
                   this.setState({word: LibraryF[x[i]]})
                    console.log(LibraryF[x[i]])
                }
            }
        }
    render(){
      return(
          <div id="formID">
          <hr id="hrID" />
          <h2 id="engtext">ENGLISH</h2>
          <h2 id="geotext">GEORGIA</h2>
          <div id="engGeoBorder" />
          <button className="close" id="closeButoon" onClick={this.removeValue}>X</button>
            <form onsubmit="return false" >
                <label>
                <input id="engInptTxt" type="text" value={this.state.value} onChange={this.handleChange}/>
            <div id="geoOutTxt"></div>
                </label>
                <input id="wordSubButton" type="button" value="Translate" onClick={this.handleSubmit}/>
                <h1 id="geoWord">{this.state.word}</h1>
            </form>
        <hr id="hrID2" />
        </div>
        
      );
    }
}
export default NameForm;