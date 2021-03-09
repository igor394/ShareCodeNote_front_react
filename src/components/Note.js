import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import env from '../env.json';

function Note() {

    let { noteURL } = useParams();
    const [noteTxt, setNoteTxt] = useState('');
    const [line, setLine] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errClass, setErrClass] = useState('hide');

    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    'url': noteURL
                })
            })
                .then(response => response.json())
                .then(response => {
                    if (response.result) {
                        setNoteTxt(response.note);
                        setLine('');
                        setFormClass('hide');
                        setErrClass('hide');
                    } else if (!response.result) {
                        setLine('hide');
                        setFormClass('hide');
                        setErrClass('');
                    }
                })
        } else {
            setLine('hide');
            setFormClass('');
            setErrClass('hide');
        }
    }, [noteURL]);

    const getNote = event => {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert('Fill in the fields');
            return false;
        }
        noteURL = url;
        window.location.href = env.url + '/' + url;
    }

    return (
        <div className="container content-pad">
            <div className={formClass}>
                <form onSubmit={getNote}>
                    <div className="mb-3">
                        <label htmlFor="url">Enter you hash text</label>
                    </div>
                    <div className="mb-3">
                        <input type="text" name="url" id="url" className="form-control"
                            // checking for correct input in the form
                            // maxLength="24"
                            // pattern="[0-9a-z]{24}"
                            placeholder="Enter numbers and letters in the lower case "></input>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-secondary">Search you note</button>
                    </div>
                </form>
            </div>
            <div className={errClass}>
                <div className="mb-3">
                    <h3>Error: you note is not defined!</h3>
                </div>

                <div className="mb-3">
                    <button onClick={() => {
                        window.location.href = env.url
                    }} className="btn btn-secondary">Try again
                    </button>
                </div>
            </div>
            <div className={line}>
                <div className="mb-3">
                    <h3>You note: </h3>
                </div>
                <div className="mb-3">
                    <div className="alert alert-secondary" role="alert">
                        {noteTxt}
                    </div>
                </div>
                <div className="mb-3">
                    <button onClick={() => {
                        window.location.href = env.url
                    }} className="btn btn-secondary">Watch another note
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Note;