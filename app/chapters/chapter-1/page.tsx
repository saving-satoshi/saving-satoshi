import ChapterIntro from "components/chapters/ChapterIntro";
import { ChaptersNavbar } from "components/chapters/ChaptersNavbar";
import chapters from '../chapters.json';

export default function Page({params}) {
    return (
        <ChapterIntro start={chapters[0].lessons[0].path} image="https://saving-satoshi.s3.amazonaws.com/ch2.png">
            <h1>Of blocks and miners</h1>
            <h2>"To understand the mystery and magic, you must start at the beginning…"</h2>
            <p>
                Satoshi, the pseudonymous inventor of bitcoin,also mined the first bitcoin block. He left you a hidden clue in the very first bitcoin transaction that was ever made.
            </p>
            <p>
                Each block in the bitcoin blockchain contains a set of transactions. A nice way to view these blocks and the things they contain is by using a block explorer.
            </p>
        </ChapterIntro>
    );
}