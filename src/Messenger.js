import Message from "./Message"

let Messenger = () => {
    return (
        <div>
            <h1>Messages</h1>
            <Message msg="Message 1"/>
            <Message msg="How are you"/>
            <Message msg="ABCD"/>
        </div>
    )
}
export default Messenger;