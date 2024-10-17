import React, { useState } from "react"
import styles from "./PlayerName.module.css"

const PlayerName = () => {
    const [isEdit, setIsEdit] = useState(true)
    const [playerName, setPlayerName] = useState("PlayerName")

    const handleEdit = () => {
        setIsEdit(!isEdit)
    }
    const handleSave = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsEdit(!isEdit)
    }

    return (
        <>
            {isEdit ? (
                <div onClick={handleEdit} className={styles.PlayerName}>
                    <h1>{playerName}</h1>
                </div>
            ) : (
                <form className={styles.PlayerInput} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={playerName}
                        onChange={handleSave}
                    />
                    <button type="submit">Save</button>
                </form>
            )}
        </>
    )
}

export default PlayerName
