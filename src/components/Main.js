function Main() {
    return (
            <div className="col-12">
                <div className="container">
                    <div className="row content-pad">
                        <div className="col-6 d-flex justify-content-center">
                            <a href="/create" type=" button" className="btn btn-secondary">Create note</a>
                        </div>
                        <div className="col-5 d-flex justify-content-center">
                            <a href="/note" type=" button" className="btn btn-secondary">Watch note</a>
                        </div>
                    </div>
                    <div className=" content-pad">
                        <p><b>ShareCodedNotes</b> – service for exchanging encoded notes.
                            Create a note, send a link to the note and your friend can view it on their computer.
                            The best way to keep prying eyes out of your correspondence.</p>
                        <p><b>How take a note? </b></p>
                        <ul>
                            <li>Follow the link</li>
                            <li>Paste the text and click 'Create'</li>
                            <li>Send the generated URL to you friend!</li>
                        </ul>
                        <p>How do you read a note? Go to the sent URL, or enter the address by hand in the site section 'Note'.</p>
                    </div>
                </div>
            </div>

    );
}

export default Main;