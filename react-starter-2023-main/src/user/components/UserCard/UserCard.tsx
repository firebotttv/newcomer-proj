import React, {FunctionComponent} from "react";
import {User} from "../../models/User";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";


export interface UserCardProps {
  user: User;
  //onDetails(): () => void;
}

const UserCard: FunctionComponent<UserCardProps> = ({user/*, onDetails*/}) => (
  <Card>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {user.username}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {user.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        E-mail adress: {user.email}
      </Typography>
    </CardContent>
  </Card>
);

export default UserCard;
