import NumberInput from './form/NumberInput'

export default function Height({ height, heightFt, heightIn, invalid, units }) {
    return (
        <fieldset className={`fieldset ${invalid ? 'field-error' : ''}`}>
            <legend className="legend">Height</legend>

            {units === 'metric' ? (
                <NumberInput
                    fieldId="height"
                    fieldLabel="Centimetres"
                    fieldPlaceholder="cm"
                    val={height}
                    invalid={invalid}
                />
            ) : (
                <div className="num-double">
                    <NumberInput
                        fieldId="height-ft"
                        fieldLabel="Feet"
                        fieldPlaceholder="ft"
                        val={heightFt}
                        invalid={invalid}
                    />
                    <NumberInput
                        fieldId="height-in"
                        fieldLabel="Inches"
                        fieldPlaceholder="in"
                        val={heightIn}
                        invalid={invalid}
                    />
                </div>
            )}
        </fieldset>
    )
}
