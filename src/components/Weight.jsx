import NumberInput from './form/NumberInput'

export default function Weight({ weight, weightSt, weightLbs, units }) {
    return (
        <fieldset className="fieldset">
            <legend className="legend">Weight</legend>

            {units === 'metric' ? (
                <NumberInput
                    fieldId="weight"
                    fieldLabel="Kilograms"
                    fieldPlaceholder="kg"
                    val={weight}
                />
            ) : (
                <div className="num-double">
                    <NumberInput
                        fieldId="weight-st"
                        fieldLabel="Stone"
                        fieldPlaceholder="st"
                        val={weightSt}
                    />

                    <NumberInput
                        fieldId="weight-lbs"
                        fieldLabel="Pounds"
                        fieldPlaceholder="lbs"
                        val={weightLbs}
                    />
                </div>
            )}
        </fieldset>
    )
}
