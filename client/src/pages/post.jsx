import React from "react";
import axios from "axios";
import { Container, Button } from "@material-ui/core";
import CommentForm from "../components/forms/comment";
import CommentCard from "../assets/commentcard";
import { connect } from "react-redux";
import keys from "../assets/keys";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: this.props.match.params.id,
      postInfo: null,
      comments: [],
      userInfo: null,
    };
  }

  componentDidMount = async () => {
    const { postId } = this.state;
    const postInfo = await axios.get("/api/posts/" + postId);
    const doc = await axios.get("/api/comments/" + postId);
    const promises = await doc.data.map(async (comment) => {
      const userInfo = await axios.get("/api/auth/" + comment.userId);
      const userName = userInfo.data.userName;
      return { userName, ...comment };
    });
    const comments = await Promise.all(promises);
    const userInfo = await axios.get("/api/auth/" + postInfo.data.userId);
    await this.setState({
      postInfo: postInfo.data,
      comments: comments,
      userInfo: userInfo.data,
    });
  };

  handleDelete = async () => {
    const { postId } = this.state;
    await axios.delete("/api/posts/" + postId);
    window.location = "/user";
  };

  render() {
    const { postInfo, postId, comments, userInfo } = this.state;
    const { currentUser } = this.props;
    return (
      <div style={{ marginBottom: 50 }}>
        {postInfo ? (
          <div>
            <div className="jumbotron">
              <h3 className="text-monospace">{postInfo.title}</h3>
              <hr />
              <h5 className="text-monospace">
                ---- post by {userInfo.userName}
              </h5>
              {currentUser && postInfo.userId === currentUser.id ? (
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={this.handleDelete}
                >
                  Delete
                </Button>
              ) : null}
            </div>
            <Container>
              <div className="row">
                <div className="col-md-8">
                  <img
                    src={keys.AWS_S3 + postInfo.images[0]}
                    className="img-fluid"
                    alt="Responsive image"
                  />
                </div>
                <div className="col-md-4" style={{ marginTop: 20 }}>
                  <p className="text-monospace">{postInfo.content}</p>
                </div>
              </div>
            </Container>
            <Container>
              <CommentForm postId={postId} />
              {comments.length !== 0
                ? comments.map((comment, index) => (
                    <CommentCard key={index} comment={comment} />
                  ))
                : null}
            </Container>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(PostPage);
