import NumberInput from './form/NumberInput'

export default function Weight({ invalid, weight, weightSt, weightLbs, units }) {
    return (
        <fieldset className={`fieldset ${invalid ? 'field-error' : ''}`}>
            <legend className="legend">Weight</legend>

            {units === 'metric' ? (
                <NumberInput
                    fieldId="weight"
                    fieldLabel="Kilograms"
                    fieldPlaceholder="kg"
                    val={weight}
                    invalid={invalid}
                />
            ) : (
                <div className="num-double">
                    <NumberInput
                        fieldId="weight-st"
                        fieldLabel="Stone"
                        fieldPlaceholder="st"
                        val={weightSt}
                        invalid={invalid}
                    />

                    <NumberInput
                        fieldId="weight-lbs"
                        fieldLabel="Pounds"
                        fieldPlaceholder="lbs"
                        val={weightLbs}
                        invalid={invalid}
                    />
                </div>
            )}
        </fieldset>
    )
}
