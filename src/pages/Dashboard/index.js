import { useContext, useEffect, useRef, useState } from "react";
import { Button1 } from "../../components/Buttons";
import './index.css';
import addNote from "../../service/addNote";
import fetchNotes from "../../service/fetchNotes";
import useAuthentication from "../../hooks/useAuthentication";

export default function Dashboard() {
    const noteInputRef = useRef();
    const {AuthCtx} = useAuthentication();
    const {user} = useContext(AuthCtx);
    const [notes, setNotes] = useState([]);
    const [errorObj, setErrorObj] = useState({isError: false, errorMessage:''});
    const [isNewNoteAdded, setIsNewNoteAdded] = useState(true);
    const onSave = () => {
        const noteText = noteInputRef.current.value;
        if (noteText.length > 0) {
            addNote(user, noteText)
                .then(res => {
                    setErrorObj({isError: false, errorMessage:''});
                    setIsNewNoteAdded(true);
                    noteInputRef.current.value = '';
                })
                .catch(error => {
                    console.error(error);
                    setErrorObj({isError: true, errorMessage: error});
                })
            
        } else {
            setErrorObj({isError: true, errorMessage:'Note cannot be empty!'});
        }
    };
    useEffect(
        () => {
            if (isNewNoteAdded)
                fetchNotes(user)
                    .then(notes => {
                        setNotes(notes);
                        setIsNewNoteAdded(false);
                    })
                    .catch(error => {
                        console.error(error);
                    });
        },
        [isNewNoteAdded, user]
    );
    return (
        <div className="dashboard-section">
            <div className="add-note-section">
                <h1>Add My Note</h1>
                <textarea placeholder="Type message here..." className="note-input" required ref={noteInputRef}/>
                {errorObj.isError && <div className="error-message">{errorObj.errorMessage}</div>}
                <Button1 buttonText='Save' onClickFunction={onSave}/>
            </div>
            <div className="view-notes-section">
                <h1>All Notes</h1>
                {notes.map((e) => <DisplayIndividualNote note={e} key={e._id}/>)}
            </div>
        </div>
    );
}

function DisplayIndividualNote({note}) {
    const time = (Date.now() - new Date(note.time))/60000;
    return (
        <div className="note-card">
            <div className="note-display">{note.note}</div>
            <div className="time-display">{time.toFixed(0)} min</div>
        </div>
    );
}