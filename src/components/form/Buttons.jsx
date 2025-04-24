import CalculateButton from './buttons/calculate'
import ResetButton from './buttons/reset'

export default function Buttons({ canReset, reset, isActive }) {
    return (
        <div className="mt-6 flex items-center justify-between gap-x-6">
            <CalculateButton isActive={isActive} />
            <ResetButton reset={reset} canReset={canReset} />
        </div>
    )
}
