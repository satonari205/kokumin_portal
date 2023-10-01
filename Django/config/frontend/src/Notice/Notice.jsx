const Notice = () => {
    return (
        <>
            {/* コメントされたツイートへのリンク */}
            <a className="p-4 bg-blue-200 hover:bg-blue-100 divider-y" href="#">
                <a className="link link-hover text-blue-800" href="#">玉木宏さん</a>からあなたの投稿にコメントがありました。
                <p className="pt-2">2023/09/03 21:42</p>
            </a>
            {/* 既読の通知にはハイライトがない。(bg-blue-200)*/}
            <a className="p-4 hover:bg-blue-100 divider-y" href="#">
                <a className="link link-hover text-blue-800" href="#">玉木宏さん</a>からあなたの投稿にコメントがありました。
                <p className="pt-2">2023/09/03 21:42</p>
            </a>
            <a className="p-4 hover:bg-blue-100 divider-y" href="#">
                <a className="link link-hover text-blue-800" href="#">玉木宏さん</a>からあなたの投稿にコメントがありました。
                <p className="pt-2">2023/09/03 21:42</p>
            </a>
            <a className="p-4 hover:bg-blue-100 divider-y" href="#">
                <a className="link link-hover text-blue-800" href="#">玉木宏さん</a>からあなたの投稿にコメントがありました。
                <p className="pt-2">2023/09/03 21:42</p>
            </a>
        </>
    );
}

export default Notice;