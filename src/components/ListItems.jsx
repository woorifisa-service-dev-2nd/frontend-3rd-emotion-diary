import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ListItems = ({ item }) => {
  return (
    <div className="flex">
      <Card>
        <CardContent>
          <Typography sx={{ position: "relative", left: "30px" }} variant="h4">
            {item.icon.value}
          </Typography>
          <Typography variant="h2">{item.date.slice(-2)}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h4">{item.title}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListItems;
