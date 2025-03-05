import '../styles/styles.scss';

const Message = () => {
    return (
        <section className="message">
            <h1>Hello!</h1>
            <div className="message__body">
                <p>
                    {`Rhythm and Binary has been retired. All posts have been moved to `}
                    <a href="https://www.andrewevans.dev">AndrewEvans.dev</a>
                </p>
            </div>
        </section>
    );
};

export default Message;
