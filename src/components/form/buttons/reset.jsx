export default function ResetButton({ reset, canReset }) {
    return (
        <button
            onClick={reset}
            type="button"
            className="button button-reset"
            disabled={!canReset}
        >
            Reset
        </button>
    )
}
