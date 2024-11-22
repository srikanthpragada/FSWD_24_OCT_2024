
export default function Today() {
    let now = new Date()

    return (
        <h1>{now.toString()}</h1>
    )

}