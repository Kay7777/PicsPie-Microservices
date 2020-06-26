import { TextField, Button, Container, Paper } from "@material-ui/core";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      images: [],
      videos: [],
      postShow: false,
      posting: false,
    };
  }

  handlePost = async () => {
    const { images, title, content } = this.state;
    const file = images[0];
    this.setState({ posting: true });
    const uploadConfig = await axios.get("/api/posts/image");
    await axios
      .put(uploadConfig.data.url, file, {
        headers: {
          "Content-type": file.type,
        },
      })
      .catch((err) => console.log(err));
    console.log("image is", JSON.stringify(images), "in client");
    await axios.post("/api/posts", {
      title,
      content,
      images: [uploadConfig.data.key],
      videos: [],
    });
    window.location = "/user";
  };

  showPostForm = () => {
    const { title, content } = this.state;
    return (
      <Paper>
        <Container style={{ paddingTop: 10, width: "90%" }}>
          <TextField
            id="standard-basic"
            label="Title"
            value={title}
            style={{ width: "90%", marginBottom: 10 }}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <br />
          <TextField
            id="standard-multiline-static"
            label="Content"
            multiline
            value={content}
            rows={10}
            style={{ width: "90%", marginBottom: 10 }}
            onChange={(e) => this.setState({ content: e.target.value })}
          />
          <br />
          <div>
            Add Images:{" "}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => this.setState({ images: e.target.files })}
            />
          </div>

          <br />

          <Button
            variant="contained"
            color="primary"
            style={{
              marginTop: 10,
              width: "90%",
              marginBottom: 20,
              backgroundColor: "#4285F4",
            }}
            onClick={this.handlePost}
          >
            Confirm
          </Button>
        </Container>
      </Paper>
    );
  };

  render() {
    const { postShow, posting } = this.state;
    const { currentUser } = this.props;
    return (
      <div style={{ marginBottom: 10 }}>
        {postShow ? (
          posting ? (
            <div>
              Posting now, please wait ... <process />
            </div>
          ) : (
            <div>
              <Button
                variant="contained"
                color="secondary"
                style={{
                  width: "20%",
                  marginTop: 10,
                }}
                onClick={() => this.setState({ postShow: !postShow })}
              >
                Close
              </Button>
              {this.showPostForm()}
            </div>
          )
        ) : currentUser ? (
          <Button
            variant="contained"
            color="primary"
            style={{
              width: "20%",
              marginTop: 10,
              backgroundColor: "#4285F4",
            }}
            onClick={() => this.setState({ postShow: !postShow })}
          >
            Post
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            style={{
              width: "20%",
              marginTop: 10,
              backgroundColor: "#4285F4",
            }}
          >
            Need login to post
          </Button>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Post);
