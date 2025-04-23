export default function Buttons({ reset, isActive }) {
    return (
        <div className="mt-6 flex items-center justify-between gap-x-6">
            <button
                type="submit"
                className="button button-submit"
                disabled={isActive}
            >
                Calculate
            </button>
            <button
                onClick={reset}
                type="button"
                className="button button-reset"
            >
                Reset
            </button>
        </div>
    )
}
