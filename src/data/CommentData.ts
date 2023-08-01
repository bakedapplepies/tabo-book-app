import { CommentProps } from "../components/Comment"
import { User } from "../types/User";

type CommentDataType = {
  [key: string]: CommentProps[];
}

const defaultUser: User = {
  id: "u1",
  pfp: require("../../assets/Avatar.png"),
  name: "John Doe"
}

const CommentData: CommentDataType = {
  "b1": [
    {
      user: defaultUser,
      time_ago: 2,
      rating: 4.8,
      comment: "Lorem ipsum dolor sit amet consectetur. Nunc tincidunt nunc lorem molestie morbi"
    },
    {
      user: defaultUser,
      time_ago: 2,
      rating: 4.8,
      comment: "Lorem ipsum dolor sit amet consectetur."
    },
    {
      user: defaultUser,
      time_ago: 2,
      rating: 4.8,
      comment: "Lorem ipsum dolor sit amet consectetur. Nunc tincidunt nunc lorem molestie morbi. Lorem ipsum dolor sit amet consectetur."
    },
    {
      user: defaultUser,
      time_ago: 2,
      rating: 4.8,
      comment: "."
    },
    {
      user: defaultUser,
      time_ago: 2,
      rating: 4.8,
      comment: "Lorem ipsum dolor sit amet consectetur. Nunc tincidunt nunc lorem molestie morbi. Nunc tincidunt nunc lorem molestie morbi."
    },
  ]
}

export default CommentData;