import React, { Component, } from 'react'
import About from './about';
import AboutDemo from './about2';
import '../sass/home.scss';
import '../sass/acceleration.scss';
import '../sass/about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Demo extends Component {
    constructor(){
        super();
        this.state={initialValue:<About/> }
    }
    changeNext=()=>{
        this.setState({initialValue:<AboutDemo/>})
    }
    changePre=()=>{
        this.setState({initialValue:<About/>})
    }


  render() {
    return (
      <div>
          <h1 className="acc_head h11 pad_top">what our customers have to say</h1>
          <div>{this.state.initialValue}</div>
          <div className='acc_head pad_bottom'>
          <button  className='btn_icon' type='button' onClick={this.changePre}><FontAwesomeIcon className='iconStyle' icon="arrow-left" /></button><button className='btn_icon borderRadius'  type='button' onClick={this.changeNext}><FontAwesomeIcon className='iconStyle' icon="arrow-right" /></button>
          </div>
      </div>
    )
  }
}