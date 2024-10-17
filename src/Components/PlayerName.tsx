type PlayerNameProps = {
    name: string
}
const PlayerName: React.FC<PlayerNameProps> = ({ name }) => {
    return (
        <div className="PlayerName">
            <h1>{name}</h1>
            <br />
        </div>
    )
}

export default PlayerName
