"use client";
import moment from "moment";
import axios from 'axios'
import Cookies from 'js-cookie'


// -------------------------------
export const _onClickOutElem = (elem, func) => {
    const clk = e => {
        if (!elem.contains(e.target)) {
            document.removeEventListener("mousedown", clk)
            func();
        }
    }
    document.addEventListener("mousedown", clk);
}


export function CorrectTime(timestamp) {
    const now = moment();
    const messageTime = moment(timestamp);
    if (now.diff(messageTime, "seconds") < 60) return "Just now";
    if (now.diff(messageTime, "minutes") < 60) return messageTime.fromNow();
    if (now.isSame(messageTime, "day")) return messageTime.format("h:mm A");
    if (now.diff(messageTime, "days") === 1) return "Yesterday";
    return messageTime.format("DD MMM YYYY");
}

export default function ChatMessage({ timestamp }) {
    return <p>Last message: {formatMessageTime(timestamp)}</p>;
}


