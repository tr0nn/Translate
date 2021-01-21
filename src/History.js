import React from 'react'
import HistoryObjcet from './HistoryObject'
class Icon extends React.Component{

    render(){
        return(
            <div id="boostrapHistory">
            <svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-arrow-clockwise" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
            </svg>
            </div>
        );
    }
}

class HistoryWord extends React.Component{
    constructor(props){
        super(props);
        this.historyShow = this.historyShow.bind(this);
    }
    historyShow(){
        alert(Object.keys(HistoryObjcet));
    }

    render(){
        return(
            <div>
            <div id="HistoryLocation"><Icon />
            <input  id="HistoryButoonId" type="button" value="History" onClick={this.historyShow} /></div>
            <div id="HistoryDivId">
                
                </div>
            </div>
        );
    }
}
export default HistoryWord;