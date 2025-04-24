export default function CalculateButton({ isActive }) {
    return (
        <button
            type="submit"
            className="button button-submit"
            disabled={isActive}
        >
            Calculate
        </button>
    )
}
