'use client';
import ChapterEnd from "components/chapters/ChapterEnd";

export default function Finished() {
    return (
        <ChapterEnd 
            image="/assets/images/chapter-1-finish.jpg"
            checkpoint={{
                chapter: 1,
                lesson: 2,
                next: '/chapters/chapter-2'
            }}
            description='Amazing. You completed the first chapter and learned a lot about hashes and transactions. Are you ready for more?'
        />
    );
}
