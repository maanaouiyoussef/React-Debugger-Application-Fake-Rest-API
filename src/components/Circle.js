
const Circle = ({onChangeBgColor}) => {
    return (
        <div className="cirlces">
            <button onClick={() => onChangeBgColor(false)} className="light"></button>
            <button onClick={() => onChangeBgColor(true)} className="dark"></button>
        </div>
    )
}

export default Circle
