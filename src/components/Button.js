import React from 'react'

export default function Button(props) {
    const {
        width,
        height,
        fontSize,
        id,
        children,
        extraTextStyle,
        difLineHeight,
        onClick
    } = props

    const ctrStyles = {
        width: width,
        height: height,
        lineHeight: difLineHeight ? difLineHeight : height,
        fontSize: fontSize,
    }

    return (
        <button className="btn-ctr" id={id} style={ctrStyles} type="submit" onClick={onClick}>
        <div className="btn-inner">
            <span className="btn-bg"></span>
            <span className="btn-base"></span>
            <span className="btn-text" style={extraTextStyle}>{children}</span>
        </div>
    </button>
)
}
