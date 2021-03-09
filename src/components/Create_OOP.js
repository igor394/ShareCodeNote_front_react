import React from 'react';
import { useState } from 'react';
import env from '../env.json';

class Create extends React.Component {
    render() {

        return (
            <div className="container content-pad">

            </div>
        )
    }
}

export default Create;

// function Create() {

//     const [url, setUrl] = useState('');
//     const [line, setLine] = useState('hide');
//     const [formClass, setFormClass] = useState('')

//     const sendData = note => {
//         setLine('');
//         setFormClass('hide');

//         fetch(env.urlBackend, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: JSON.stringify({ "note": note })
//         })
//             .then(response => response.json())
//             .then(response => {
//                 if (response.result) {
//                     setUrl(env.url + '/' + response.url);
//                 }
//             })
//     }

//     const loadDataFromForm = event => {
//         event.preventDefault();
//         let note = event.target.elements.note.value;
//         note = note.trim();
//         if (note === '') {
//             alert('Fill in the fields');
//             return false;
//         }
//         sendData(note);
//     }

                // <form onSubmit={loadDataFromForm} className={formClass}>
                //         <div className="mb-3">
                //             <label className="form-label">Enter you text</label>
                //         </div>
                //         <div className="mb-3">
                //             <textarea className="form-control" name="note" id="note" defaultValue="Test coded note"
                //                 maxLength="500"></textarea>
                //         </div>
                //         <div className="mb-3">
                //             <p><b>Attention!</b> Note length is limited to a maximum value - 1000 characters.</p>
                //             <button type="submit" className="btn btn-secondary ">Create</button>
                //         </div>
                //     </form>
                //     <div className={line}>
                //         <div className="mb-3">
                //             <div className="alert alert-secondary" role="alert">{url}</div>
                //             <p>Copy this URL and give it to your friend!</p>
                //         </div>
                //         <div className="mb-3">
                //             <button className="btn btn-secondary" onClick={() => {
                //                 window.location.reload()
                //             }}>Create new link
                //     </button>
                //         </div>
                //     </div>