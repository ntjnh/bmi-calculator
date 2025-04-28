export default function Footer() {
    const dev = 'NATE.DEV'
    const today = new Date()
    const year = today.getFullYear()

    return (
        <footer className="pb-4 md:py-6 xl:pt-0 text-center">© {dev} {year}</footer>
    )
}
