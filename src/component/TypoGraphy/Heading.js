import React from "react"

export const TextMain = ({mode,text}) => (
    <span style={{fontSize:"1.2rem",padding:'2px',fontWeight:'bold'}}>
        {text}
    </span>
)

export const TextSecondary = ({mode,text}) => (
    <span style={{fontSize:"1rem",padding:'2px'}}>
        {text}
    </span>
)

export const InfoMain = ({mode,text,fw = 'noraml'}) => (
    <span style={{
        fontSize:"0.7rem",
        padding:'2px',
        fontWeight : fw
        }}>
        {text}
    </span>
)
export const InfoSecondary = ({mode,text,fw = 'noraml'}) => (
    <span style={{
        fontSize:"0.6rem",
        padding:'2px',
        fontWeight : fw
        }}>
        {text}
    </span>
)

