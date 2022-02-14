import React from "react";
import { ReactComponent as UsersIcon } from "../assets/usersIcon.svg";
import { ReactComponent as PostsIcon } from "../assets/postsIcon.svg";
import { ReactComponent as CommentsIcon } from "../assets/commentsIcon.svg";

export const SumCard = ({ title, total }: { title: string; total: number }) => {
  let Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  if (title.toLowerCase() === "users") {
    Icon = UsersIcon;
  } else if (title.toLowerCase() === "posts") {
    Icon = PostsIcon;
  } else {
    Icon = CommentsIcon;
  }

  return (
    <div className="p-6 w-1/3 max-w-sm bg-white rounded-sm shadow-md flex items-center space-x-4">
      <div className="shrink-0">
        <Icon />
      </div>
      <div>
        <p className="text-slate-500 text-lightGrey">{title}</p>
        <div className="text-2xl font-medium text-black">{total}</div>
      </div>
    </div>
  );
};
