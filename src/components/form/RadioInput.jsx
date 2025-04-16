export default function RadioInput({
    defaultChecked = false,
    fieldId,
    fieldName,
    fieldLabel,
    onChange
}) {
    return (
        <div className="radio">
            <input
                defaultChecked={defaultChecked}
                id={fieldId}
                name={fieldName}
                type="radio"
                value={fieldId}
                onChange={onChange}
                className="radio-input"
            />
            <label htmlFor={fieldId} className="radio-label">
                {fieldLabel}
            </label>
        </div>
    )
}
