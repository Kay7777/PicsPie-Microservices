import React from "react";
import { Container } from "@material-ui/core";
import axios from "axios";
import Post from "../components/forms/post";
import PostCard from "../assets/postcard";

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }

  componentDidMount = async () => {
    const allPosts = await axios.get("/api/posts/all");
    await this.setState({ cards: allPosts.data });
  };

  renderCards = () => {
    const { cards } = this.state;
    return (
      <div className="row">
        {cards.map((card, index) => {
          return <PostCard key={index} card={card} />;
        })}
      </div>
    );
  };

  render() {
    const { cards } = this.state;
    return (
      <div>
        <div className="jumbotron">
          <Container>
            <h1 className="text-monospace display-5">Welcome to PicsPie</h1>
            <hr />
            <p className="lead text-monospace">
              PicsPie is a social media application for people to share their
              life!
            </p>
            <Post />
          </Container>
        </div>
        <Container>{cards.length !== 0 ? this.renderCards() : null}</Container>
      </div>
    );
  }
}

export default MainPage;
