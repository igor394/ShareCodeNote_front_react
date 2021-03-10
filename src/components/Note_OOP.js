// import { useParams } from 'react-router-dom';
import React from 'react';
import env from '../env.json';


class Note extends React.Component {
    render() {
        return (
            <div className="container content-pad">
                <div >
                    <form >
                        <div className="mb-3">
                            <label htmlFor="url">Enter you hash text</label>
                        </div>
                        <div className="mb-3">
                            // checking for correct input in the form
                            <input type="text" name="url" id="url" className="form-control" maxLength="24" pattern="[0-9a-z]{24}" placeholder="Enter numbers and letters in the lower case "></input>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-secondary">Search you note</button>
                        </div>
                    </form>
                </div>
                <div >
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
                <div >
                    <div className="mb-3">
                        <h3>You note: </h3>
                    </div>
                    <div className="mb-3">
                        <div className="alert alert-secondary" role="alert">

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
        )
    }
}

export default Note;

