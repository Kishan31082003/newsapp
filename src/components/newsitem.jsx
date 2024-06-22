import React, { Component } from 'react'

export default class Newsitem extends Component {

    

  render() {
    let {title, description, imageurl, newsurl}= this.props
    return (
                  <div>
                          <div className="my-3">
                          <div className="card" >
                              <img src={!imageurl?"https://tse2.mm.bing.net/th?id=OIP.KrvDOsIg7-vr2ys0evvPRwHaGl&pid=Api&P=0&h=180":imageurl} class="card-img-top" alt="..."/>
                              <div className="card-body">
                                <h5 class="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                                <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                              </div>
                            </div>
                          </div>
                              
                  </div>
    )
  }
}
