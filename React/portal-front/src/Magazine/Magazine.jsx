export const Magazine = () => {
  return (
    <div>
      <div className="card max-w-xs bg-base-100 hover:opacity-80 ease-in duration-300">
        <figure>
          <img
            src="./images/default.jpg"
          />
        </figure>
        <div className="card-body p-2">
          <p className="card-title text-base border-bold">ガソリン減税の功罪とは</p>
          <p className="text-xs">ガソリン減税には、いくつかの功罪が存在します。以下に、ガソリン減税の主要な功罪について説明します。</p>
          <div className="card-actions mt-3">
            <a className="leading-10 pl-3 w-1/2 hover:underline"> {/* 修正 */}
                tweet.user.username
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
