
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
// import Movie from "./Product";
import DataStock from "../pages/Products";

import { Component } from "react";

class ContentWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies:[]
        }
    }
    // componentDidMount() {
    //     fetch('http://localhost:3001/api/movies', {
    //         method: 'GET',
    //         headers: {
    //             'Content-type': 'application/json'
    //         }
    //     }).then(response => response.json())
    //         .then((movies => {
              
    //              this.setState({movies: movies.data})
    //         })).catch(e => console.log(e))
    // }
    render() {
        return (
            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <DataStock/>
                </div>
                <Footer />
            </div>
        );
    }

}
export default ContentWrapper;