import React from 'react';
import env from '../env.json';


class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteURL: this.props.match.params.noteURL,
            noteTxt: '',
            lineClass: 'hide',
            formClass: '',
            errClass: 'hide'
        }
    }

    getNote = e => {
        e.preventDefault();
        let hash = e.target.elements.url.value;
        hash = hash.trim();
        if (hash === '') {
            alert('Fill in the fields');
            return false;
        } else {
            this.setState({
                noteURL: hash
            });
            window.location.href = env.url + '/' + hash;
        }
    }

    componentDidMount() {
        if (this.state.noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    'url': this.state.noteURL
                })
            })
                .then(response => response.json())
                .then(response => {
                    if (response.result) {
                        this.setState({
                            formClass: 'hide',
                            lineClass: '',
                            errClass: 'hide',
                            noteTxt: response.note
                        });

                    } else if (!response.result) {
                        this.setState({
                            formClass: 'hide',
                            lineClass: 'hide',
                            errClass: ''
                        });
                    }
                })
        } else {
            this.setState({
                formClass: '',
                lineClass: 'hide',
                errClass: 'hide'
            });
        }
    }

    render() {
        return (
            <div className="container content-pad">
                <div>
                    <form className={this.state.formClass} onSubmit={this.getNote}>
                        <div className="mb-3">
                            <label htmlFor="url">Enter you hash text</label>
                        </div>
                        <div className="mb-3">
                            {/* checking for correct input in the form*/}
                            <input type="text" name="url" id="url" className="form-control" maxLength="24"
                                   pattern="[0-9a-z]{24}"
                                   placeholder="Enter numbers and letters in the lower case "></input>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-secondary">Search you note</button>
                        </div>
                    </form>
                </div>

                <div className={this.state.errClass}>
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
                <div className={this.state.lineClass}>
                    <div className="mb-3">
                        <div className="alert alert-secondary" role="alert">
                            {this.state.noteTxt}
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

