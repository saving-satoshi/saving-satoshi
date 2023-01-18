'use client';

import { useState } from "react";
import { BoxButton } from "./BoxButton";
import CopyIcon from "public/assets/icons/copy.svg";
import CopyActiveIcon from "public/assets/icons/copy_active.svg";

export const CopyButton = ({ content, children, compact, classes }: {content: string, children?: any, compact?: boolean, classes?: string }) => {
    const [copied, setCopied] = useState(false);

    function copy() {
        const el = document.createElement('textarea');
        el.value = content;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        setCopied(true);
        setTimeout(() => setCopied(false), compact ? 800 : 2000);
    }

    if (compact) {
        return (
            <div className={`${classes} cursor-pointer`} onClick={copy} title={copied ? 'Copied!' : 'Copy'}>
                {!copied && <CopyIcon />}
                {copied && <CopyActiveIcon />}
            </div>
        );
    }
    
    return (
        copied ?
            <BoxButton classes={classes} round style='green' size='small' onClick={copy}>
                Copied!
            </BoxButton>
        :
            <BoxButton classes={classes} round style='dark' size='small' onClick={copy}>
                {children}
            </BoxButton>
    );
}