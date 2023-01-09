'use client';
import { SignUpModal } from "components/chapters/SignUpModal";
import { BoxButton } from "components/ui/BoxButton";
import { useState } from "react";

export default function ChapterEnd({title, description, image, checkpoint}: {title?: string, description?: string, image: string, checkpoint: {chapter: any, lesson: any, next: string}}) {

    const [openModal, setOpenModal] = useState(false)

    function onSaveProgress(data) {
        window.localStorage.setItem('user', JSON.stringify({
          publicKey: data.keyPair.publicKey,
          privateKey: data.keyPair.privateKey,
          avatar: data.avatar,
          progress: {
            chapter: checkpoint.chapter,
            lesson: checkpoint.lesson,
          }
        }))
        setOpenModal(false)

        window.location.href = checkpoint.next
    }

    return (
        <div className="flex w-screen grow bg-fixed bg-cover bg-no-repeat bg-center justify-center" style={{backgroundImage: `url('${image}')`}}>
            {/* bottom left */}
            <div className="absolute bottom-10 sm:left-10 p-4 lg:w-1/3 sm:w-1/2 w-11/12 ml-auto left-unset bg-[var(--back)] sm:bg-transparent">
                <h1 className="text-4xl font-bold text-white">
                    {title || 'You did it!!!'}
                </h1>
                <p className="text-xl text-white font-nunito text-justify">
                    {description || ''}
                </p>

                <div className="flex flex-col gap-4 w-full xl:w-2/3 mt-4">
                    <BoxButton
                        size='small'
                        onClick={() => setOpenModal(true)}
                    >
                        Save my progress
                    </BoxButton>
                    {/* TODO */}
                    <BoxButton href={checkpoint.next} size='small'>Continue without saving</BoxButton>
                </div>
            </div>
            <SignUpModal onConfirm={onSaveProgress} onClose={() => setOpenModal(false)} open={openModal} />
        </div>
    );
}

