import NumberInput from './form/NumberInput'

export default function Height({ height, heightFt, heightIn, units }) {
    return (
        <fieldset className="fieldset">
            <legend className="legend">Height</legend>

            {units === 'metric' ? (
                <NumberInput
                    fieldId="height"
                    fieldLabel="Centimetres"
                    fieldPlaceholder="cm"
                    val={height}
                />
            ) : (
                <div className="num-double">
                    <NumberInput
                        fieldId="height-ft"
                        fieldLabel="Feet"
                        fieldPlaceholder="ft"
                        val={heightFt}
                    />
                    <NumberInput
                        fieldId="height-in"
                        fieldLabel="Inches"
                        fieldPlaceholder="in"
                        val={heightIn}
                    />
                </div>
            )}
        </fieldset>
    )
}
