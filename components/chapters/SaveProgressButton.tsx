"use client";

import { useState } from "react";
import Modal from "react-modal";

export const SaveProgressButton = (props) => {
  const [modalIsOpen, setIsOpen] = useState(props.open);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function randomHex(length) {
    let result = "";
    let characters = "0123456789abcdef";
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#32455D",
      color: "#fff",
      width: 550,
    },
  };

  const [code, _] = useState(randomHex(64));

  let [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => {
        setCopied(false);
    }, 2000);
  }

  return (
    <>
      <button onClick={openModal}>Save Progress</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-end float-right">
          <button onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <h2 className="text-xl mb-4 font-bold">Want to save your progress?</h2>
        <p className="text-sm mb-5">
          Copy and store a simple code to save and load your progress on any
          device and browser. If you already have a code, load your progress
          here.
        </p>

        <h2 className="text-xl mb-4 font-bold">Choose an avatar</h2>

        <div className="flex cursor-pointer justify-between mb-5">
          <div className="flex flex-col items-center">
            <img
              src={"/assets/avatars/1.png"}
              alt="avatar"
              className="w-20 h-20 rounded-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src={"/assets/avatars/2.png"}
              alt="avatar"
              className="w-20 h-20 rounded-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src={"/assets/avatars/3.png"}
              alt="avatar"
              className="w-20 h-20 rounded-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src={"/assets/avatars/4.png"}
              alt="avatar"
              className="w-20 h-20 rounded-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src={"/assets/avatars/5.png"}
              alt="avatar"
              className="w-20 h-20 rounded-full"
            />
          </div>
        </div>

        <h2 className="text-xl mb-4 font-bold">Back up your personal code</h2>

        <pre className="border-dotted border-2 border-white/25 p-4 rounded-md flex flex-col mb-5">
          <code className="break-all whitespace-pre-wrap">{code}</code>
          {/* <button className="bg-[#233346] text-white rounded-md px-4 py-2 mt-4 w-full">
            Copy
          </button> */}
          {copied ? (
            <button
              className="bg-green-500 text-green-800 rounded-md px-4 py-2 mt-4 w-full"
              onClick={copy}
            >
                Copied!
            </button>
            ) : (
            <button
                className="bg-[#233346] text-white rounded-md px-4 py-2 mt-4 w-full"
                onClick={copy}
            >
                Copy
            </button>
            )}
        </pre>

        <p className="text-sm mt-5">
          All set? Code copied and backed-up? Make sure your do, as it can’t be
          recovered if you lose it.
        </p>
        <button onClick={copy} className="border border-white text-white rounded-md px-4 py-2 mt-4 w-full">
          I’ve copied and backed up my code
        </button>
      </Modal>
    </>
  );
};
