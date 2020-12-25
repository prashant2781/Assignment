import React, {Component} from 'react';

class Home extends Component {
     constructor()
     {
         super();
         this.state = {
             searchData: []
         }
     }
   
     search(key) {
         fetch("https://swapi.dev/api/planets/?search="+key)
         .then(results => results.json())
           .then(data => {
                 this.setState({searchData:data.results});
                 })
         }

    componentDidMount() {
        this.search("");
    }


 render () {
  
     return (
         <form>
               
             <h1>Search page</h1>
             <input type="text" placeholder="Search" onChange={(event) => this.search(event.target.value)} />
            <div className="container">
                <div className="row">
            {this.state.searchData.map(planet => (
          <div className="col-md-6 pt-5 mx-auto " key={planet.name}>
            <span className="col-md-6 name">{planet.name}:</span>
            <span className="col-md-6 population">{planet.population}</span>
          </div>
        ))}
         </div>
          </div>
      </form>
    );
  }
}
export default Home;