import React from "react";
import faker from "faker";

import ReactDOM from "react-dom";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Miky"
          time="Today at 04:05 PM"
          text="Sa7 aweeeee"
          imageSrc={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Mego"
          time="Today at 04:10 PM"
          text="hahhahaaha aywa bgd ya ziko lazem ne8iar el community"
          imageSrc={faker.image.image()}
        />
      </ApprovalCard>{" "}
      <ApprovalCard>
        <CommentDetail
          author="Marina"
          time="Today at 04:15 PM"
          text="hahahha la ana HR we momken arfedak"
          imageSrc={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Miky"
          time="Today at 04:05 PM"
          text="Sa7 aweeeee"
          imageSrc={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Koky"
          time="Today at 04:20 PM"
          text="hhhahaha aywa ya sedkyyyyyyy"
          imageSrc={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Martina"
          time="Today at 04:22 PM"
          text="hahahhahha wa7ashtonyyyy ya 3eyaaal"
          imageSrc={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Ziko"
          time="Today at 04:00 PM"
          text="ظظ"
          imageSrc={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
//src="https://source.unsplash.com/random"
