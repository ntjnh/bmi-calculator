export default function Buttons({ reset }) {
    return (
        <div className="mt-6 flex items-center justify-between gap-x-6">
            <button
                type="submit"
                className="button button-submit"
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
