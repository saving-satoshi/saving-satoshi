'use client';
import { SignUpModal } from "components/chapters/SignUpModal";
import { BoxButton } from "components/ui/BoxButton";
import { useState } from "react";

export default function Finished() {

    const [openModal, setOpenModal] = useState(false)

    function onSaveProgress(data) {
        window.localStorage.setItem('user', JSON.stringify({
          publicKey: data.keyPair.publicKey,
          privateKey: data.keyPair.privateKey,
          avatar: data.avatar,
          progress: {
            chapter: 'transacting',
            lesson: 'transacting-2',
          }
        }))
        setOpenModal(false)
    }

    return (
        <div className="flex w-screen grow bg-fixed bg-cover bg-no-repeat" style={{backgroundImage: "url('/assets/images/chapter-finish.jpg')"}}>
            {/* bottom left */}
            <div className="absolute bottom-10 left-10 p-4 w-96">
                <h1 className="text-4xl font-bold text-white">
                    You did it!!!
                </h1>
                <p className="text-xl text-white font-nunito">
                    Amazing. You completed the first chapter and learned a lot about hashes and transactions. Are you ready for more?
                </p>

                <div className="flex flex-col gap-4 mt-4">
                    <BoxButton
                        size='small'
                        onClick={() => setOpenModal(true)}
                    >
                        Save my progress
                    </BoxButton>
                    {/* TODO */}
                    <BoxButton size='small'>Continue without saving</BoxButton>
                </div>
            </div>
            <SignUpModal onConfirm={onSaveProgress} onClose={() => setOpenModal(false)} open={openModal} />
        </div>
    );
}
