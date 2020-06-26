import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, Avatar, CardContent } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 350,
    margin: 10,
  },
  pos: {
    fontSize: 25,
  },
  avatar: {
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#5c2a9d",
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      variant="outlined"
      style={{ width: "100%", marginRight: "30%" }}
    >
      <CardContent>
        <div className="row" style={{ marginBottom: 5 }}>
          {props.comment.photo ? (
            <Avatar className={classes.avatar} src={props.photo} />
          ) : (
            <Avatar aria-label="recipe" className={classes.avatar}>
              {props.comment.userName[0]}
            </Avatar>
          )}

          <Typography className={classes.pos} color="textSecondary">
            {props.comment.userName}
          </Typography>
        </div>

        <Typography variant="body2" component="p">
          {props.comment.content}
        </Typography>
      </CardContent>
    </Card>
  );
}
