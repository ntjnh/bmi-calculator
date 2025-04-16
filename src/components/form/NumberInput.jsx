export default function NumberInput(props) {
    return (
        <div>
            <label
                htmlFor={props.fieldId}
                className="num-label"
            >
                {props.fieldLabel}
            </label>
            <div className="mt-2">
                <input
                    id={props.fieldId}
                    name={props.fieldId}
                    type="number"
                    placeholder={`0 ${props.fieldPlaceholder}`}
                    className="num-input"
                    value={props.val}
                    onChange={props.onChange}
                />
            </div>
        </div>
    )
}
