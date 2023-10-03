import { Link } from "react-router-dom";

const Tweet = ({ tweet }) => {
  console.log(tweet);
  return (
    <>
      <div className="p-3">
        <div className="avatar flex justify-start w-1/2 m-2">
        <span className="w-10 h-10">
            <img
              className="rounded"
              src={tweet.user.image || "/images/default.jpg"}
              alt="userimg"
            />
        </span>
        <Link
            to={`/users/${tweet.user.id}`}
            className="leading-10 pl-3 w-1/2 hover:underline"
        >
            <p>{tweet.user.nickname}</p>
        </Link>
        </div>
        {(tweet.content || tweet.image1 || tweet.image2) && (
        <div className="pt-4 pb-4">
          {tweet.content}
          <div className="flex flex-wrap">
            {tweet.image1 &&
              <a href={tweet.image1} target="_blank">
                <img
                  src={tweet.image1}
                  alt="tweet.image1"
                  className="max-w-xs"
                />
              </a>
            }
            {tweet.image2 &&
              <a href={tweet.image2} target="_blank">
                <img
                  src={tweet.image2}
                  alt="tweet.image2"
                  className="max-w-xs"
                />
              </a>
            }
          </div>
        </div>
        )}
        <div className="flex justify-between">
          <p className="text-center leading-8">
            {tweet.posted_at}
          </p>
          <Link
            to={`/replies/${tweet.id}`}
            className="btn btn-ghost btn-sm"
          >
              コメントする
          </Link>
        </div>
      </div>
      <div className="divider my-0"></div>
    </>
  );
};

export default Tweet;