import React, { Component } from 'react'
import Newsitem from './newsitem'
import Spinner from './loading'
import PropTypes from 'prop-types'


export default class Newscomponent extends Component {


  // articles= [
  //       {"source":{"id":"associated-press","name":"Associated Press"},"author":"JAMIE STENGLE","title":"Texas megachurch pastor resigns after woman says he sexually abused her in the 1980s - The Associated Press","description":"The pastor of a Texas megachurch has resigned after a woman said he had sexually abused her on multiple occasions in the 1980s, beginning when she was 12. Gateway Church’s board of elders said in a statement Tuesday that they’d accepted the resignation of Rob…","url":"https://apnews.com/article/texas-pastor-robert-morris-abuse-cb2c633de3a5d43538141c1736e33245","urlToImage":"https://dims.apnews.com/dims4/default/06a16f5/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc3%2F42%2F48cec2399a9b7bfacc4546d468f2%2F84cf85b01f0a47d399ef1c787c2cb104","publishedAt":"2024-06-19T01:58:00Z","content":"DALLAS (AP) The pastor of a Texas megachurch has resigned after a woman said he had sexually abused her on multiple occasions in the 1980s, beginning when she was 12. \r\nGateway Churchs board of elder… [+2418 chars]"},{"source":{"id":"associated-press","name":"Associated Press"},"author":"HILLEL ITALIE","title":"Willie Mays, baseball exuberant and electrifying ‘Say Hey Kid,’ dies at 93 - The Associated Press","description":"Willie Mays, baseball’s exuberant and electrifying ‘Say Hey Kid,’ has died at 93. The Giants and Mays' family jointly announced his death. The Giants center fielder, with his signature basket catch, was one of the game’s greatest and most beloved players. He …","url":"https://apnews.com/article/willie-mays-dies-at-93-baseball-33b31cc2d6382676ed54517d20ea36a3","urlToImage":"https://dims.apnews.com/dims4/default/745d767/2147483647/strip/true/crop/3000x1688+0+142/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ff6%2F8d%2Ff9b719f7516f0c42cdf860b7a1b6%2Fdd827c74947a47b3b1b5abaaaf9219fc","publishedAt":"2024-06-19T01:53:00Z","content":"Willie Mays, the electrifying Say Hey Kid whose singular combination of talent, drive and exuberance made him one of baseballs greatest and most beloved players, has died. He was 93.\r\nMays family and… [+14491 chars]"},{"source":{"id":"associated-press","name":"Associated Press"},"author":"RONALD BLUM","title":"Yankees star Aaron Judge leaves game after getting hit on hand by pitch vs Orioles - The Associated Press","description":"Yankees star Aaron Judge says X-rays and a CT scan were negative after he was hit on the left hand by a 94 mph fastball from Albert Suárez, forcing the slugger out of New York’s 4-2 win over the Baltimore Orioles. Judge says he's feeling better after getting …","url":"https://apnews.com/article/judge-yankees-hand-260e94570451499b8ef7e93bb0da32e2","urlToImage":"https://dims.apnews.com/dims4/default/d160886/2147483647/strip/true/crop/4655x2618+0+242/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd1%2Fed%2F38912099bfc6dc9bad2f4b372132%2F0f06fbcd0f3c47c3837a9c0e7fa9c11f","publishedAt":"2024-06-19T01:18:00Z","content":"NEW YORK (AP) Yankees star Aaron Judge said X-rays and a CT scan were negative after he was hit on the left hand by a 94.1 mph fastball from Albert Suárez on Tuesday night and forced from New Yorks 4… [+1598 chars]"},{"source":{"id":"associated-press","name":"Associated Press"},"author":"JON GAMBRELL","title":"Ship attacked by Yemen's Houthi rebels in fatal assault sinks in Red Sea in second-such sinking - The Associated Press","description":"A bulk carrier sank days after an attack by Yemen’s Houthi rebels believed to have killed one mariner on board. It's the second-such ship to be sunk in the rebel campaign. The Tutor sank in the Red Sea. That's according to the British military’s United Kingdo…","url":"https://apnews.com/article/houthi-rebels-ship-attack-red-sea-yemen-bfa7d321e55c5bb59b268b82ef3c56ba","urlToImage":"https://dims.apnews.com/dims4/default/00916ea/2147483647/strip/true/crop/4500x2531+0+234/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe5%2Fab%2Fed107cf5d6eb5d1ca745a103cfb3%2F3d0dc4f7eea44535a8617f9c882ea469","publishedAt":"2024-06-19T01:15:00Z","content":"DUBAI, United Arab Emirates (AP) A bulk carrier sank days after an attack by Yemens Houthi rebels believed to have killed one mariner on board, authorities said early Wednesday, the second-such ship … [+2986 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"GOTTA SEE IT: Connor Brown Dekes Around Sergei Bobrovsky For Short-Handed Goal - SPORTSNET","description":"Watch as Edmonton Oilers forward Connor Brown is sent on a breakaway and dekes around Florida Panthers goaltender Sergei Bobrovsky to score a short-handed go...","url":"https://www.youtube.com/watch?v=e72J3ZNpGuU","urlToImage":"https://i.ytimg.com/vi/e72J3ZNpGuU/maxresdefault.jpg","publishedAt":"2024-06-19T00:53:49Z","content":null},{"source":{"id":null,"name":"Florida Today"},"author":"Brooke Edwards","title":"SpaceX scrub recap: SES satellite launch from Cape Canaveral, Florida - Florida Today","description":"A recap of the FLORIDA TODAY Space Team live updates of the scrubbed SpaceX Falcon 9 mission from Cape Canaveral Launch Complex 40.","url":"https://www.floridatoday.com/story/tech/science/space/spacex/2024/06/18/spacex-falcon-9-ses-astra-deliver-satellite-cape-canaveral-florida-space-coast/74101182007/","urlToImage":"https://www.floridatoday.com/gcdn/authoring/authoring-images/2023/12/18/PBRE/71954722007-crb-031723-spacex-7.jpg?crop=3206,1804,x0,y1769&width=3200&height=1801&format=pjpg&auto=webp","publishedAt":"2024-06-19T00:50:08Z","content":"Scrub Recap: Read updates below from Tuesday's scrub of the SpaceX launch of the Astra 1P/SES-24 satellite from Cape Canaveral Space Launch Complex 40.SpaceX will try again Wednesday.\r\nWith weather f… [+6503 chars]"},{"source":{"id":null,"name":"BBC News"},"author":null,"title":"Boeing boss Dave Calhoun grilled by US lawmakers and victims - BBC.com","description":"Boeing's CEO defended the company and pledged that it has learned from past mistakes.","url":"https://www.bbc.com/news/articles/ce77l2xl2r5o","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/4642/live/42bd3720-2db2-11ef-bdc5-41d7421c2adf.jpg","publishedAt":"2024-06-19T00:37:09Z","content":"By Caitlin Wilson reporting from Capitol Hill and Max Matza in Seattle, BBC News\r\nBoeing's chief executive Dave Calhoun faced a grilling from US senators about the company's culture as he apologised … [+3473 chars]"},{"source":{"id":"cnn","name":"CNN"},"author":null,"title":"Justin Timberlake charged with DWI, released from police custody - CNN","description":"Justin Timberlake was arraigned on one count of driving while intoxicated and released from police custody in New York, according to his attorney.","url":"https://www.cnn.com/2024/06/18/entertainment/justin-timberlake-dwi/index.html","urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/thumbnail-timberlake-mugsho.JPG?c=16x9&q=w_800,c_fill","publishedAt":"2024-06-19T00:14:00Z","content":"Justin Timberlake was arraigned on one count of driving while intoxicated and released from police custody in New York, according to his attorney.\r\nAccording to police, the singer was observed around… [+2407 chars]"}
  // ]


  static defaultProps={
        country: 'us',
        pageSize: 16,
        category: 'general'

  }
  static propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category : PropTypes.string
  }

  constructor(){
    super();
    console.log("i am a constructor of news component");
    this.state={
          //articles : this.articles,    this was used at manual entry 
          articles: [],
          loading: false,
          page: 1,
          //totalResults: 0
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7f543e66bb2840c6843082bc671a1270&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData= await data.json();
    this.setState({articles: parsedData.articles,
                    totalResults: parsedData.totalResults,
                    loading: false
                  })

  }


  handleprevclick= async ()=>{
    console.log("previous")

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7f543e66bb2840c6843082bc671a1270&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData= await data.json();
    //this.setState({articles: parsedData.articles})

    this.setState({
      page: this.state.page-1,
      articles: parsedData.articles  ,       //merged the above here .
      loading: false
    })
  }


  handlenextclick= async ()=>{
    console.log("next")

    if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7f543e66bb2840c6843082bc671a1270&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData= await data.json();
      //this.setState({articles: parsedData.articles})
  
      this.setState({
        page: this.state.page+1,
        articles: parsedData.articles,         //merged the above here .
        loading: false
        
      })
    }

    
  }


  render() {
    return (
      <div className= "container my-3">
       
              <h3 className= "text-center"> Top Headlines</h3>
              {/* {this.state.articles.map((element)=>{ console.log(element) })} */}
              {this.state.loading && <Spinner/>}
              

              <div className= "row">
              {!this.state.loading && this.state.articles.map((element)=>{    //here it is iterating

                    return <div className= "col-md-3" key= {element.url}>
                    <Newsitem  title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url}/>
                    </div>
                   })}
              </div>

              <div className="container d-flex justify-content-between">
              <button type="button" className="btn btn-dark mx-2 " disabled= {this.state.page<=1} onClick={this.handleprevclick} > &larr; Previous</button>
              <button type="button" className="btn btn-dark" disabled={(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))} onClick={this.handlenextclick} >Next &rarr; </button>
              </div>


            
      </div>
    )
  }
}
