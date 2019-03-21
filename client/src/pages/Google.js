// 7. copying App.js from activity 8. User Interface for search page.
// make sure all the components match
// 8. go to App.js in the main folder and add the route for this Google page.

import React, { Component } from "react";
import Jumbotron2 from "../components/Jumbotron2";
import Nav from "../components/Nav";
import Input from "../components/Input";
import Button2 from "../components/Button2";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid2";

class App extends Component {
  state = {
    books: [],
    inputSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    // const { name, value } = event.target; 
    const name=event.target.name;
    const value=event.target.value;

    this.setState({
      //[name] = "inputSearch"
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getGoogleBooks(this.state.inputSearch)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron2 />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="inputSearch"
                        value={this.state.inputSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button2
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button2>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.books.length ? (
                <h1 className="text-center">No Books to Display</h1>
              ) : (
                <BookList>
                  {this.state.books.map(book => {
  
                    return (
                    
                      <BookListItem
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors?book.volumeInfo.authors.join(", "):""}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks ?book.volumeInfo.imageLinks.thumbnail:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"}
                      
                      />
                    );
                  })}
                </BookList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
