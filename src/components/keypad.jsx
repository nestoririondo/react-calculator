import Button from './Button'

const Keypad = ({ onClick }) => {

    const buttons = [
        { id: 1, value: 7, className: "keypad__key number" },
        { id: 2, value: 8, className: "keypad__key number" },
        { id: 3, value: 9, className: "keypad__key number" },
        { id: 4, value: '+', className: "keypad__key operator" },
        { id: 5, value: 4, className: "keypad__key number" },
        { id: 6, value: 5, className: "keypad__key number" },
        { id: 7, value: 6, className: "keypad__key number" },
        { id: 8, value: '-', className: "keypad__key operator" },
        { id: 9, value: 1, className: "keypad__key number" },
        { id: 10, value: 2, className: "keypad__key number" },
        { id: 11, value: 3, className: "keypad__key number" },
        { id: 12, value: '*', className: "keypad__key operator" },
        { id: 13, value: ',', className: "keypad__key comma" },
        { id: 14, value: 0, className: "keypad__key number" },
        { id: 15, value: '=', className: "keypad__key equal" },
        { id: 16, value: '/', className: "keypad__key operator" },
        { id: 17, value: 'C', className: "keypad__key clear" },
    ]

    return (
        <div class="keypad">
            {buttons.map((button) => {
                return <Button onClick={onClick} className={button.className} key={button.id} value={button.value}/>
            })}
        </div>
    )
    }

export default Keypad