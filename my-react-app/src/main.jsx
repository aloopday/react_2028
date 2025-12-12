import {createRoot } from 'react-dom/client'

function Car(){
    return(
        <>
        <h2>My Car</h2>
        <p>It is a Tesla.</p>
        <blockquote class="twitter-tweet" data-media-max-width="560"><p lang="zh" dir="ltr">范曾得子-_新成语创作者-港村大叔 <a href="https://t.co/Qmy50r7xWr">https://t.co/Qmy50r7xWr</a> via <a href="https://twitter.com/YouTube?ref_src=twsrc%5Etfw">@YouTube</a> <a href="https://t.co/10sqRhxNH0">pic.twitter.com/10sqRhxNH0</a></p>&mdash; 港村大叔爱吹水 Charles (@love98982016) <a href="https://twitter.com/love98982016/status/1999308484643594313?ref_src=twsrc%5Etfw">December 12, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </>
    )
};

createRoot(document.getElementById('root')).render(
    <Car />
)

